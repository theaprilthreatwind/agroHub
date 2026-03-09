package com.example.agrohub.entities;
import jakarta.persistence.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Логин не может быть пустым")
    @Size(min = 3, max = 30, message = "Длина логина от 3 до 30 символов!")
    @Column(unique = true, nullable = false)
    private String username;

    @NotBlank(message = "Почта обязательна!")
    @Email(message = "Неверный формат почты")
    @Column(unique = true, nullable = false)
    private String email;

    @NotBlank(message = "Пароль не может быть пустым")
    @Size(min = 8, message = "Длина пароля от 8 символов!")
    @Column(nullable = false)
    private String password;

    @NotNull(message = "Вы обязаны выбрать роль")
    @Enumerated(EnumType.STRING)
    private Role role;

    @Size(min = 36, message = "Недостаточное количество символов в токене.")
    @Column(nullable = false)
    private String token;
}