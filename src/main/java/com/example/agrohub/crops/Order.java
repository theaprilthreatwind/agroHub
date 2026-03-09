package com.example.agrohub.crops;

import com.example.agrohub.entities.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User client;

    @NotNull(message = "Цена заказа обязательно д   олжна быть указана!")
    @Positive(message = "Конечная цена заказа должна быть положительной!")
    private BigDecimal totalPrice;

    @NotNull(message = "Статус заказа должен быть указан!")
    private Status status;

    @NotBlank(message = "Адрес должен быть указан")
    private String address;

    @NotBlank(message = "Номер телефона клиента должен быть указан.")
    @Pattern(regexp = "^\\+7\\d{10}$", message = "Сначала должен быть префикс +7, далее - 10 цифр.")
    private String phoneNumber;

    @ManyToMany
    @JoinTable(
            name = "order_products",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private List<Product> products;
}
