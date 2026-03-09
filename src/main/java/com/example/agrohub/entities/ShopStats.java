package com.example.agrohub.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "shops_stats")
public class ShopStats {
    @Id
    private Long farmerId;

    @NotNull(message = "Доход не может отсутствовать у магазина")
    @PositiveOrZero(message = "Доход не может быть отрицательным")
    private BigDecimal totalIncome = BigDecimal.ZERO;

    @NotNull(message = "Ежедневный доход не может отсутствовать у магазина")
    @PositiveOrZero(message = "Ежедневный доход не может быть отрицательным")
    private BigDecimal dailyIncome = BigDecimal.ZERO;

    @NotNull(message = "Количество клиентов не может отсутствовать у магазина")
    @PositiveOrZero(message = "Количество клиентов не может быть отрицательным")
    private Long totalCustomers = 0L;

    @NotNull(message = "Количество заказов не может отсутствовать у магазина")
    @PositiveOrZero(message = "Количество заказов не может быть отрицательным")
    private Long totalOrders = 0L;

    @NotNull(message = "Количество продуктов не может отсутствовать у магазина")
    @PositiveOrZero(message = "Количество продуктов не может быть отрицательным")
    private Long totalProducts = 0L;

}
