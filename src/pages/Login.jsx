import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState("user");

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

        setError("");
    }; 

    const handleLogin = () => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem('user'));

        if (!user) {
            setError("Пользователь не найден");
            return;
        }

        if (user.email === form.email && user.password === form.password) {
            setSuccess("Вы успешно за логировались")
            navigate('/');
        } else {
            setError("Неправильный email или пароль");
        };

        setLoading(true);

        setTimeout(() => {
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

                    <h2>Registration</h2>

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

                    <form onSubmit={handleLogin}>

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

export default Login;