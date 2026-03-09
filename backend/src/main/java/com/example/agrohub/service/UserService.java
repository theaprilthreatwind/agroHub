package com.example.agrohub.service;

import com.example.agrohub.entities.User;
import com.example.agrohub.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;
@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;

    public void register(User user) {
        if (userRepository.existsByUsername(user.getUsername())) {
            throw new RuntimeException("Логин уже занят.");
        }
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Почта уже зарегистрирована.");
        }
        userRepository.save(user);
    }
    public String authenticate(String username, String password) {
        User user = userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("Пользователь не найден."));

        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Неверный пароль.");
        }
        String newToken =  UUID.randomUUID().toString();
        user.setToken(newToken);
        userRepository.save(user);

        return newToken;
    }
}
