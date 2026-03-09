package com.example.agrohub.controllers;

import com.example.agrohub.entities.Role;
import com.example.agrohub.entities.User;
import com.example.agrohub.repositories.UserRepository;
import com.example.agrohub.service.ShopStatsService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/stats")
@RequiredArgsConstructor
@Tag(name = "Статистика магазина фермера")
public class ShopStatsController {
    private final ShopStatsService shopStatsService;
    private final UserRepository userRepository;

    @GetMapping("/my-shop")
    @Operation(summary = "Получить статистику магазина фермера")
    public ResponseEntity<?> getMyShopStats(
            @Parameter(description = "Требуется токен авторизации фермера", required = true)
            @RequestHeader("token") String token) {
        User user = userRepository.findByToken(token)
                .orElseThrow(() -> new RuntimeException("Неверный токен"));

        if (user.getRole() != Role.FARMER) {
            throw new RuntimeException("Доступ запрещен: вы не фермер");
        }

        return ResponseEntity.ok(shopStatsService.getStatsByFarmerId(user.getId()));
    }
}
