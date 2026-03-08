import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const [role, setRole] = useState("user");

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        farmName: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

        setError("");
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.password) {
            setError("Пожалуйста, заполните все поля");
            return;
        }

        if (role === "seller" && !form.farmName) {
            setError("Enter farm name");
            return;
        }

        if (form.password.length < 8) {
            setError("Пароль должен содержать не менее 8 символов");
            return;
        }

        setLoading(true);

        setTimeout(() => {

            const userData = {
                ...form,
                role: role
            };

            localStorage.setItem("user", JSON.stringify(userData));

            setSuccess(`Добро пожаловать, ${form.name}!`);

            setForm({
                name: "",
                email: "",
                password: "",
                farmName: ""
            });

            setLoading(false);

        }, 1000);
    };

    return (
        <main>

            <div className="register-page">

                <div className="register-box">

                    <h2>Регистрация</h2>

                    <div className="role-switch">
                        <button
                            type="button"
                            className={role === "user" ? "role-btn active" : "role-btn"}
                            onClick={() => setRole("user")}
                        >
                            Покупатель
                        </button>

                        <button
                            type="button"
                            className={role === "seller" ? "role-btn active" : "role-btn"}
                            onClick={() => setRole("seller")}
                        >
                            Продавец
                        </button>
                    </div>

                    <form onSubmit={handleRegister}>

                        <label>Имя</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Введите свое имя..."
                            value={form.name}
                            onChange={handleChange}
                        />

                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Введите свой email..."
                            value={form.email}
                            onChange={handleChange}
                        />

                        {role === "seller" && (
                            <>
                                <label>Farm name</label>
                                <input
                                    type="text"
                                    name="farmName"
                                    placeholder="Farm name"
                                    value={form.farmName}
                                    onChange={handleChange}
                                />
                            </>
                        )}

                        <label>Пароль</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Введите свой пароль"
                            value={form.password}
                            onChange={handleChange}
                        />

                        {error && <p className="error">{error}</p>}
                        {success && <p className="success">{success}</p>}

                        <button type="submit" disabled={loading}>
                            {loading ? "Регистрация..." : "Зарегистрироваться"}
                        </button>

                    </form>

                </div>

            </div>

        </main>
    );
};

export default Register;