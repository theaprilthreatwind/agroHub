package com.example.agrohub.service;

import com.example.agrohub.entities.ShopStats;
import com.example.agrohub.repositories.ShopStatsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ShopStatsService {
    private final ShopStatsRepository shopStatsRepository;

    @Transactional(readOnly = true)
    public ShopStats getStatsByFarmerId(Long farmerId) {
        return shopStatsRepository.findById(farmerId)
                .orElseThrow(() -> new RuntimeException("Статистика для данного фермера не найдена"));
    }
}
