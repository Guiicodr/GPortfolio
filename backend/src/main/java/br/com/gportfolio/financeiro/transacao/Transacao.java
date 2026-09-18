package br.com.gportfolio.financeiro.transacao;

import br.com.gportfolio.financeiro.user.Usuario;
import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "transacoes")
public class Transacao {
    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 10)
    private TipoTransacao tipo;

    @Column(nullable = false, precision = 15, scale = 2)
    private BigDecimal valor;

    @Column(nullable = false, length = 180)
    private String descricao;

    @Column(nullable = false)
    private LocalDate data;

    protected Transacao() { }

    public Transacao(Usuario usuario, TipoTransacao tipo, BigDecimal valor, String descricao, LocalDate data) {
        this.usuario = usuario;
        this.tipo = tipo;
        this.valor = valor;
        this.descricao = descricao;
        this.data = data;
    }

    public UUID getId() { return id; }
    public Usuario getUsuario() { return usuario; }
    public TipoTransacao getTipo() { return tipo; }
    public BigDecimal getValor() { return valor; }
    public String getDescricao() { return descricao; }
    public LocalDate getData() { return data; }
    public void atualizar(TipoTransacao tipo, BigDecimal valor, String descricao, LocalDate data) {
        this.tipo = tipo;
        this.valor = valor;
        this.descricao = descricao;
        this.data = data;
    }
}