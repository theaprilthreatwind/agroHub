package com.example.agrohub.repositories;

import com.example.agrohub.crops.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    boolean existsByFarmerId(Long farmerId);
    boolean existsByCategoryId(Long categoryId);
    boolean existsByName(String productName);
    boolean existsByCategoryTitle(String categoryTitle);
    List<Product> findAllByFarmerId(Long farmerId);
    Product findByName(String productName);
    List<Product> findProductsByCategoryId(Long categoryId);
    List<Product> findProductsByCategoryTitle(String title);
}
