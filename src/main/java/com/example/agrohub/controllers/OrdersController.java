package com.example.agrohub.controllers;

import com.example.agrohub.crops.Order;
import com.example.agrohub.entities.Role;
import com.example.agrohub.entities.User;
import com.example.agrohub.repositories.UserRepository;
import com.example.agrohub.service.OrderService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
@Tag(name = "Заказы еды")
public class OrdersController {
    private final OrderService orderService;
    private final UserRepository userRepository;

    @PostMapping
    @Operation(summary = "Создать заказ")
    public ResponseEntity<?> createOrder(
            @Parameter(description = "Требуется токен авторизации клиента", required = true)
            @RequestHeader("token") String token,
            @Valid @RequestBody Order order) {
        validateClient(token);
        Order created = orderService.createOrder(order);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @DeleteMapping
    @Operation(summary = "Отменить заказ")
    public ResponseEntity<?> cancelOrder(
            @Parameter(description = "Требуется токен авторизации клиента", required = true)
            @RequestHeader("token") String token,
            @RequestParam Long id) {
        validateClient(token);
        orderService.cancelOrder(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    @Operation(summary = "Получить заказ по ID клиента")
    public ResponseEntity<?> getOrderByClientId(
            @Parameter(description = "Требуется токен авторизации фермера", required = true)
            @RequestHeader("token") String token,
            @PathVariable Long id) {
        validateFarmer(token);
        return ResponseEntity.ok(orderService.getOrderByClientId(id));
    }

    @GetMapping("/client/{clientId}")
    @Operation(summary = "Получить заказы по ID клиента")
    public ResponseEntity<?> getOrdersByClientId(
            @Parameter(description = "Требуется токен авторизации фермера", required = true)
            @RequestHeader("token") String token,
            @PathVariable Long clientId) {
        validateFarmer(token);
        return ResponseEntity.ok(orderService.getOrdersByClientId(clientId));
    }

    @GetMapping
    @Operation(summary = "Получить все заказы ресторана")
    public ResponseEntity<?> getOrders(
            @Parameter(description = "Требуется токен авторизации фермера", required = true)
            @RequestHeader("token") String token) {
        validateFarmer(token);
        return ResponseEntity.ok(orderService.getOrders());
    }

    private void validateClient(String token) {
        User user = userRepository.findByToken(token).orElseThrow(() ->
                new RuntimeException("Пользователь не был найден, неверный токен"));
        if (user.getRole() != Role.CLIENT) {
            throw new RuntimeException("Доступ запрещен: вы не покупатель.");
        }
    }

    private void validateFarmer(String token) {
        User user = userRepository.findByToken(token).orElseThrow(() ->
                new RuntimeException("Пользователь не найден."));
        if (user.getRole() != Role.FARMER) {
            throw new RuntimeException("Доступ запрещен: вы не фермер.");
        }
    }
}
