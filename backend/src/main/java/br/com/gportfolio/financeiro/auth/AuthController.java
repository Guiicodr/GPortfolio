package br.com.gportfolio.financeiro.auth;

import br.com.gportfolio.financeiro.security.JwtService;
import br.com.gportfolio.financeiro.user.Usuario;
import br.com.gportfolio.financeiro.user.UsuarioRepository;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthController(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public AuthResponse register(@Valid @RequestBody AuthRequest request) {
        String email = request.email().trim().toLowerCase();
        if (usuarioRepository.existsByEmailIgnoreCase(email)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "E-mail já cadastrado");
        }
        Usuario usuario = usuarioRepository.save(new Usuario(request.nome().trim(), email, passwordEncoder.encode(request.senha())));
        return new AuthResponse(jwtService.generate(usuario.getEmail()), usuario.getNome(), usuario.getEmail());
    }

    @PostMapping("/login")
    public AuthResponse login(@Valid @RequestBody LoginRequest request) {
        Usuario usuario = usuarioRepository.findByEmailIgnoreCase(request.email().trim())
                .filter(found -> passwordEncoder.matches(request.senha(), found.getSenhaHash()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Credenciais inválidas"));
        return new AuthResponse(jwtService.generate(usuario.getEmail()), usuario.getNome(), usuario.getEmail());
    }

    public record AuthRequest(@NotBlank String nome, @NotBlank @Email String email,
                              @NotBlank @Size(min = 8) String senha) { }
    public record LoginRequest(@NotBlank @Email String email, @NotBlank String senha) { }
    public record AuthResponse(String token, String nome, String email) { }
}