package com.example.agrohub.controllers;

import com.example.agrohub.crops.Category;
import com.example.agrohub.entities.Role;
import com.example.agrohub.entities.User;
import com.example.agrohub.repositories.UserRepository;
import com.example.agrohub.service.CategoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/category")
@RequiredArgsConstructor
@Tag(name = "Категории, их добавление, удаление и получение")
public class CategoryController {
    private final CategoryService categoryService;
    private final UserRepository userRepository;

    @PostMapping
    @Operation(summary = "Создание категории")
    public ResponseEntity<?> createCategory(
            @Parameter(description = "Требуется токен авторизации фермера", required = true)
            @RequestHeader("token") String token,
            @Valid @RequestBody Category category) {
        validateFarmer(token);
        return new ResponseEntity<>(categoryService.createCategory(category), HttpStatus.CREATED);
    }
    @DeleteMapping
    @Operation(summary = "Удаление категории")
    public ResponseEntity<?> deleteCategory(
            @Parameter(description = "Требуется токен авторизации фермера", required = true)
            @RequestHeader("token") String token,
            @RequestParam Long id) {
        validateFarmer(token);
        categoryService.deleteCategoryById(id);
        return ResponseEntity.noContent().build();
    }
    @GetMapping
    @Operation(summary = "Получение всех категорий")
    public ResponseEntity<?> getAllCategories() {
        return ResponseEntity.ok(categoryService.getAllCategories());
    }

    @GetMapping("/{id}")
    @Operation(summary = "Получение категории по ее ID")
    public ResponseEntity<?> getCategoryById(@RequestParam Long id) {
        return ResponseEntity.ok(categoryService.getCategoryById(id));
    }

    @GetMapping("/{farmerId}")
    @Operation(summary = "Получение категорий по ID фермера")
    public ResponseEntity<?> getCategoriesByFarmerId(@RequestParam Long farmerId) {
        return ResponseEntity.ok(categoryService.getCategoriesByFarmerId(farmerId));
    }

    private void validateFarmer(String token) {
        User user = userRepository.findByToken(token).orElseThrow(() ->
                new RuntimeException("Пользователь не найден."));
        if (user.getRole() != Role.FARMER) {
            throw new RuntimeException("Доступ запрещен: вы не фермер.");
        }
    }
}
