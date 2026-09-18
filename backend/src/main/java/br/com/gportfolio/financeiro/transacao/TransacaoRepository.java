package br.com.gportfolio.financeiro.transacao;

import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

public interface TransacaoRepository extends JpaRepository<Transacao, UUID> {
    List<Transacao> findByUsuarioIdAndDataBetweenOrderByDataDesc(UUID usuarioId, LocalDate inicio, LocalDate fim);
}