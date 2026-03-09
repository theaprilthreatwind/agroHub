package com.example.agrohub.service;

import com.example.agrohub.crops.Order;
import com.example.agrohub.crops.Product;
import com.example.agrohub.crops.Status;
import com.example.agrohub.entities.ShopStats;
import com.example.agrohub.repositories.OrdersRepository;
import com.example.agrohub.repositories.ShopStatsRepository;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrdersRepository ordersRepository;
    private final ShopStatsRepository shopStatsRepository;

    @Transactional
    public Order createOrder(Order order) {
        BigDecimal actualPrice = getTotalPrice(order);
        order.setTotalPrice(actualPrice);
        order.setStatus(Status.CREATED);

        Order savedOrder = ordersRepository.save(order);

        if (!order.getProducts().isEmpty()) {
            Long farmerId = order.getProducts().getFirst().getCategory().getFarmer().getId();
            updateShopStats(farmerId, actualPrice);
        }
        return savedOrder;
    }

    @Transactional
    public void cancelOrder(Long id) {
        Order order = ordersRepository.findById(id).orElseThrow(() ->
                new RuntimeException("Заказ не был найден, неверный ID"));
        order.setStatus(Status.CANCELLED);
    }

    @Transactional(readOnly = true)
    public Order getOrderByClientId(Long id) {
        return ordersRepository.findOrderByClientId(id)
                .orElseThrow(() -> new RuntimeException("Покупатель не найден."));
    }

    @Transactional(readOnly = true)
    public List<Order> getOrdersByClientId(Long clientId) {
        List<Order> orders = ordersRepository.findOrdersByClientId(clientId);
        if (orders.isEmpty()) {
            throw new RuntimeException("У покупателя с ID " + clientId + " заказов не найдено   ");
        }
        return orders;
    }

    @Transactional(readOnly = true)
    public List<Order> getOrders() {
        return ordersRepository.findAll();
    }

    @Transactional(readOnly = true)
    public BigDecimal getTotalPrice(Order order) {
        return order.getProducts().stream()
                .map(Product::getPrice)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }

    private void updateShopStats(Long farmerId, BigDecimal orderAmount) {
        ShopStats stats = shopStatsRepository.findById(farmerId)
                .orElseGet(() -> {
                    ShopStats newStats = new ShopStats();
                    newStats.setFarmerId(farmerId);
                    return newStats;
                });

        stats.setTotalIncome(stats.getTotalIncome().add(orderAmount));
        stats.setTotalOrders(stats.getTotalOrders() + 1);
        shopStatsRepository.save(stats);
    }
}
