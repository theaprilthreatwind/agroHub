package com.example.agrohub.service;

import com.example.agrohub.crops.Category;
import com.example.agrohub.repositories.CategoriesRepository;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoriesRepository categoriesRepository;

    @Transactional
    public Category createCategory(Category category) {
        return categoriesRepository.save(category);
    }

    @Transactional
    public void deleteCategoryById(Long id) {
        categoriesRepository.deleteById(id);
    }

    @Transactional(readOnly = true)
    public List<Category> getAllCategories() {
        return categoriesRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Category getCategoryById(Long id) {
        return categoriesRepository.findById(id).orElseThrow(() ->
                new RuntimeException("Категория не найдена, указан неверный ID"));
    }

    @Transactional(readOnly = true)
    public Category getCategoryByFarmerId(Long farmerId) {
        if (!categoriesRepository.existsByFarmerId(farmerId)) {
            throw new RuntimeException("Категория не найдена, указан неверный ID фермера");
        }
        return categoriesRepository.findByFarmerId(farmerId);
    }

    @Transactional(readOnly = true)
    public Category getCategoryByTitle(String title) {
        if (!categoriesRepository.existsByTitle(title)) {
            throw new RuntimeException("Категория не найдена");
        }
        return categoriesRepository.findCategoryByTitle(title);
    }

    @Transactional(readOnly = true)
    public List<Category> getCategoriesByTitle(String title) {
        if (!categoriesRepository.existsCategoriesByTitle(title)) {
            throw new RuntimeException("Категории не найдены");
        }
        return categoriesRepository.findCategoriesByTitle(title);
    }

    @Transactional(readOnly = true)
    public List<Category> getCategoriesByFarmerId(Long farmerId) {
        if (!categoriesRepository.existsCategoriesByFarmerId(farmerId)) {
            throw new RuntimeException("Категории не найдены, указан неверный ID фермера.");
        }
        return categoriesRepository.findCategoriesByFarmerId(farmerId);
    }
}
