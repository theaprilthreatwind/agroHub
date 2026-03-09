package com.example.agrohub.repositories;

import com.example.agrohub.crops.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoriesRepository extends JpaRepository<Category, Long> {
    @Override
    boolean existsById(Long id);
    boolean existsByTitle(String title);
    boolean existsByFarmerId(Long farmerId);
    boolean existsCategoriesByTitle(String title);
    boolean existsCategoriesByFarmerId(Long farmerId);
    Category findByFarmerId(Long farmerId);
    Category findCategoryByTitle(String title);
    List<Category> findCategoriesByFarmerId(Long farmerId);
    List<Category> findCategoriesByTitle(String title);
    @Override
    void deleteById(Long id);
}
