package com.example.agrohub.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FarmerProfile {

    @Id
    private Long id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;

    @NotBlank(message = "Название фермы не может быть пустым.")
    @Size(min = 3, message = "Длина названия фермы от 3 символов.")
    private String farmName;

    @NotBlank(message = "Ссылка на локацию не может быть пустой")
    @URL(message = "Геолокация указана неверно!")
    private String location;
}
