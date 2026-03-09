package com.example.agrohub.controllers;

import com.example.agrohub.crops.Product;
import com.example.agrohub.entities.Role;
import com.example.agrohub.entities.User;
import com.example.agrohub.repositories.UserRepository;
import com.example.agrohub.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
@Tag(name = "Продукты, их добавление, удаление и получение")
public class ProductsController {
    private final ProductService productService;
    private final UserRepository userRepository;

    @PostMapping
    @Operation(summary = "Добавить продукт")
    public ResponseEntity<?> createProduct(
            @Parameter(description = "Токен авторизации фермера", required = true)
            @RequestHeader("token") String token,
            @Valid @RequestBody Product product) {
        validateFarmer(token);
        Product created = productService.createProduct(product);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }
    @DeleteMapping
    @Operation(summary = "Удалить продукт")
    public ResponseEntity<?> deleteProduct(
            @Parameter(description = "Токен авторизации фермера", required = true)
            @RequestHeader("token") String token,
            @RequestParam Long id) {
        validateFarmer(token);
        productService.deleteProductByID(id);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/{id}")
    @Operation(summary = "Получить продукт по ID")
    public ResponseEntity<?> getProductById(@PathVariable Long id) {
        return ResponseEntity.ok(productService.getProductById(id));
    }
    @GetMapping
    @Operation(summary = "Получить все продукты")
    public ResponseEntity<?> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }
    @GetMapping("/category/{categoryId}")
    @Operation(summary = "Получить продукты по ID категории")
    public ResponseEntity<?> getProductsByCategoryId(@PathVariable Long categoryId) {
        List<Product> products = productService.getProductsByCategoryId(categoryId);
        return ResponseEntity.ok(products);
    }
    @GetMapping("/farmer/{farmerId}")
    @Operation(summary = "Получить продукты по ID фермера")
    public ResponseEntity<?> getProductsByFarmerId(@PathVariable Long farmerId) {
        List<Product> products = productService.getProductsByFarmerId(farmerId);
        return ResponseEntity.ok(products);
    }
    @GetMapping("/search")
    @Operation(summary = "Получить продукт по его имени")
    public ResponseEntity<?> getProductByName(@RequestParam String productName) {
        return ResponseEntity.ok(productService.getProductByName(productName));
    }
    @GetMapping("/category/search")
    @Operation(summary = "Получить продукт по имени категории")
    public ResponseEntity<?> getProductsByCategoryTitle(@RequestParam String title) {
        return ResponseEntity.ok(productService.getProductsByCategoryTitle(title));
    }

    private void validateFarmer(String token) {
        User user = userRepository.findByToken(token).orElseThrow(() ->
                new RuntimeException("Пользователь не найден."));
        if (user.getRole() != Role.FARMER) {
            throw new RuntimeException("Доступ запрещен: вы не фермер.");
        }
    }
}
