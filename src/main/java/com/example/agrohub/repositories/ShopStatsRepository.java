package com.example.agrohub.repositories;

import com.example.agrohub.entities.ShopStats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShopStatsRepository extends JpaRepository<ShopStats, Long> {

}
