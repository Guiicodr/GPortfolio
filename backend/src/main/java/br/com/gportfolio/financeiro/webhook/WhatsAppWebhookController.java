package br.com.gportfolio.financeiro.webhook;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/webhooks/whatsapp")
public class WhatsAppWebhookController {
    private final String verifyToken;
    private final String webhookSecret;

    public WhatsAppWebhookController(@Value("${whatsapp.verify-token}") String verifyToken,
                                     @Value("${whatsapp.webhook-secret}") String webhookSecret) {
        this.verifyToken = verifyToken;
        this.webhookSecret = webhookSecret;
    }

    @GetMapping
    public String verify(@RequestParam(name = "hub.mode") String mode,
                         @RequestParam(name = "hub.verify_token") String token,
                         @RequestParam(name = "hub.challenge") String challenge) {
        if ("subscribe".equals(mode) && verifyToken.equals(token)) return challenge;
        throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Token de verificação inválido");
    }

    @PostMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void receive(@RequestHeader(name = "X-Webhook-Secret", required = false) String secret,
                        @RequestBody JsonNode payload) {
        if (!webhookSecret.equals(secret)) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Webhook não autorizado");
        }
        if (!payload.has("object")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Payload do WhatsApp inválido");
        }
    }
}