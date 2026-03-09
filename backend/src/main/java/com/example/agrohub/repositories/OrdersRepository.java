package com.example.agrohub.repositories;

import com.example.agrohub.crops.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrdersRepository extends JpaRepository<Order, Long> {
    Optional<Order> findOrderByClientId(Long id);
    List<Order> findOrdersByClientId(Long id);
}
