package com.example.agrohub.service;

import com.example.agrohub.crops.Product;
import com.example.agrohub.repositories.ProductRepository;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    @Transactional(readOnly = true)
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> new RuntimeException("Продукт с id: " + id + " не найден."));
    }
    @Transactional
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }
    @Transactional
    public void deleteProductByID(Long id) {
        if (!productRepository.existsById(id)) {
            throw new RuntimeException("Продукт не был удален, неверный ID");
        }
        productRepository.deleteById(id);
    }
    @Transactional(readOnly = true)
    public List<Product> getProductsByFarmerId(Long farmerId) {
        if (!productRepository.existsByFarmerId(farmerId)) {
            throw new RuntimeException("Фермер не был найден, неверный ID");
        }
        return productRepository.findAllByFarmerId(farmerId);
    }

    @Transactional(readOnly = true)
    public List<Product> getProductsByCategoryId(Long categoryId) {
        if (!productRepository.existsByCategoryId(categoryId)) {
            throw new RuntimeException("Продукты не было найдены, неверный ID категории.");
        }
        return productRepository.findProductsByCategoryId(categoryId);
    }

    @Transactional(readOnly = true)
    public Product getProductByName(String productName) {
        if (!productRepository.existsByName(productName)) {
            throw new RuntimeException("Продукт не найден.");
        }
        return productRepository.findByName(productName);
    }

    @Transactional(readOnly = true)
    public List<Product> getProductsByCategoryTitle(String categoryTitle) {
        if (!productRepository.existsByCategoryTitle(categoryTitle)) {
            throw new RuntimeException("Категория не найдена.");
        }
        return productRepository.findProductsByCategoryTitle(categoryTitle);
    }
}
