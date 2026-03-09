package com.example.agrohub.crops;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;
import org.hibernate.validator.constraints.URL;

import java.math.BigDecimal;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Имя товара не может быть пустым!")
    @Size(min = 2, max = 40, message = "Имя товара должно иметь длину от 2 до 40 символов!")
    private String name;

    @NotBlank(message = "Описание товара не может быть пустым!")
    @Size(min = 2, message = "Описание товара должно иметь длину от 2 символов!")
    private String description;

    @NotBlank(message = "Вы обязаны ввести сумму товара!")
    @Positive(message = "Цена товара обязана быть положительной!")
    private BigDecimal price;

    @NotNull(message = "ID фермера должно быть указано.")
    private Long farmerId;

    @URL(message = "Неверно указан тип URL ссылки")
    private String photoURL;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    @NotNull(message = "Категория должна быть указана")
    private Category category;
}
