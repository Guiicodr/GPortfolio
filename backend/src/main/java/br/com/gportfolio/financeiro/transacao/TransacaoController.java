package br.com.gportfolio.financeiro.transacao;

import br.com.gportfolio.financeiro.user.Usuario;
import br.com.gportfolio.financeiro.user.UsuarioRepository;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/transacoes")
public class TransacaoController {
    private final TransacaoRepository transacaoRepository;
    private final UsuarioRepository usuarioRepository;

    public TransacaoController(TransacaoRepository transacaoRepository, UsuarioRepository usuarioRepository) {
        this.transacaoRepository = transacaoRepository;
        this.usuarioRepository = usuarioRepository;
    }

    @GetMapping
    public List<TransacaoResponse> listar(Authentication authentication,
                                          @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate inicio,
                                          @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fim) {
        LocalDate hoje = LocalDate.now();
        List<Transacao> transacoes = transacaoRepository.findByUsuarioIdAndDataBetweenOrderByDataDesc(
                usuario(authentication).getId(), inicio == null ? hoje.withDayOfMonth(1) : inicio, fim == null ? hoje : fim);
        return transacoes.stream().map(TransacaoResponse::from).toList();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TransacaoResponse criar(Authentication authentication, @Valid @RequestBody TransacaoRequest request) {
        Transacao transacao = transacaoRepository.save(new Transacao(usuario(authentication), request.tipo(), request.valor(), request.descricao().trim(), request.data()));
        return TransacaoResponse.from(transacao);
    }

    @PutMapping("/{id}")
    public TransacaoResponse atualizar(Authentication authentication, @PathVariable UUID id, @Valid @RequestBody TransacaoRequest request) {
        Transacao transacao = buscarDoUsuario(authentication, id);
        transacao.atualizar(request.tipo(), request.valor(), request.descricao().trim(), request.data());
        return TransacaoResponse.from(transacaoRepository.save(transacao));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void remover(Authentication authentication, @PathVariable UUID id) {
        transacaoRepository.delete(buscarDoUsuario(authentication, id));
    }

    @GetMapping("/resumo")
    public ResumoResponse resumo(Authentication authentication,
                                 @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate inicio,
                                 @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fim) {
        LocalDate hoje = LocalDate.now();
        List<Transacao> transacoes = transacaoRepository.findByUsuarioIdAndDataBetweenOrderByDataDesc(
                usuario(authentication).getId(), inicio == null ? hoje.withDayOfMonth(1) : inicio, fim == null ? hoje : fim);
        BigDecimal receitas = total(transacoes, TipoTransacao.RECEITA);
        BigDecimal despesas = total(transacoes, TipoTransacao.DESPESA);
        return new ResumoResponse(receitas, despesas, receitas.subtract(despesas), transacoes.size());
    }

    private BigDecimal total(List<Transacao> transacoes, TipoTransacao tipo) {
        return transacoes.stream().filter(item -> item.getTipo() == tipo).map(Transacao::getValor).reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    private Usuario usuario(Authentication authentication) {
        return usuarioRepository.findByEmailIgnoreCase(authentication.getName())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Usuário não encontrado"));
    }

    private Transacao buscarDoUsuario(Authentication authentication, UUID id) {
        return transacaoRepository.findById(id)
                .filter(item -> item.getUsuario().getId().equals(usuario(authentication).getId()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Transação não encontrada"));
    }

    public record TransacaoRequest(@NotNull TipoTransacao tipo, @NotNull @Positive BigDecimal valor,
                                   @NotBlank String descricao, @NotNull LocalDate data) { }
    public record TransacaoResponse(UUID id, TipoTransacao tipo, BigDecimal valor, String descricao, LocalDate data) {
        static TransacaoResponse from(Transacao item) { return new TransacaoResponse(item.getId(), item.getTipo(), item.getValor(), item.getDescricao(), item.getData()); }
    }
    public record ResumoResponse(BigDecimal receitas, BigDecimal despesas, BigDecimal saldo, int quantidade) { }
}