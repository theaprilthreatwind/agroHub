import React from "react";

const Landing = () => {

    return (
        <main>
            
            <body class="text-gray-800 antialiased">
                
                <nav
                class="fixed top-0 left-0 right-0 z-50 glass-card border-b border-gray-200/50"
                >
                <div class="max-w-7xl mx-auto px-6 py-4">
                    <div class="flex items-center justify-between">
                    <a href="index.html" class="flex items-center gap-2">
                        <div
                        class="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center"
                        >
                        <i data-lucide="leaf" class="w-5 h-5 text-white"></i>
                        </div>
                        <span class="text-xl font-semibold tracking-tight text-gray-900"
                        >AgroHub</span
                        >
                    </a>

                    <div class="hidden md:flex items-center gap-8">
                        <a
                        href="index.html"
                        class="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
                        >Каталог</a
                        >
                        <a href="about.html" class="text-sm font-medium text-emerald-600"
                        >О нас</a
                        >
                        <a
                        href="presentation.html"
                        class="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
                        >Для инвесторов</a
                        >
                    </div>

                    <div class="flex items-center gap-4">
                        <a
                        href="index.html"
                        class="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-full hover:bg-emerald-700 transition-colors"
                        >
                        Перейти в магазин
                        </a>
                    </div>
                    </div>
                </div>
                </nav>

                
                <section class="pt-32 pb-20 px-6 relative overflow-hidden">
                
                <div
                    class="absolute top-40 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 float-animation"
                ></div>
                <div
                    class="absolute bottom-20 right-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 float-animation"
                    style="animation-delay: 2s"
                ></div>

                <div class="max-w-5xl mx-auto text-center relative z-10">
                    <div
                    class="fade-in-up inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full mb-6"
                    >
                    <span
                        class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"
                    ></span>
                    <span class="text-sm font-medium text-emerald-700"
                        >Свежие продукты от проверенных фермеров</span
                    >
                    </div>

                    <h1
                    class="fade-in-up delay-100 text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
                    >
                    От поля <br /><span class="gradient-text">к вашему столу</span>
                    </h1>

                    <p
                    class="fade-in-up delay-200 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10"
                    >
                    AgroHub — это digital-мост между деревенскими фермерами и городскими
                    семьями. Мы доставляем молоко, мёд, овощи и ягоды напрямую от
                    производителя за 6–7 часов.
                    </p>

                    <div class="fade-in-up delay-300 flex flex-wrap justify-center gap-4">
                    <a
                        href="index.html"
                        class="px-8 py-4 bg-emerald-600 text-white font-medium rounded-2xl hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-200 flex items-center gap-2"
                    >
                        <span>Начать покупать</span>
                        <i data-lucide="arrow-right" class="w-5 h-5"></i>
                    </a>
                    <button
                        onclick="
                        document
                            .getElementById('how-it-works')
                            .scrollIntoView({ behavior: 'smooth' })
                        "
                        class="px-8 py-4 bg-white text-gray-700 font-medium rounded-2xl border border-gray-200 hover:border-emerald-300 hover:text-emerald-600 transition-all"
                    >
                        Как это работает
                    </button>
                    </div>
                </div>
                </section>

        
                <section class="py-20 px-6 bg-white border-y border-gray-100">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-16">
                    <span
                        class="text-emerald-600 font-semibold text-sm uppercase tracking-wider"
                        >Что мы делаем</span
                    >
                    <h2 class="mt-4 text-4xl font-bold text-gray-900">
                        Решаем проблему двух миров
                    </h2>
                    <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Фермеры теряют деньги на посредниках. Горожане не могут купить
                        натуральное. Мы соединяем их напрямую.
                    </p>
                    </div>

                    <div class="grid md:grid-cols-3 gap-8">
                    <div
                        class="group p-8 rounded-3xl bg-gray-50 hover:bg-emerald-50 transition-all duration-300 border border-transparent hover:border-emerald-100"
                    >
                        <div
                        class="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors"
                        >
                        <i
                            data-lucide="truck"
                            class="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors"
                        ></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">
                        Доставляем свежее
                        </h3>
                        <p class="text-gray-600 leading-relaxed">
                        Молоко с утренней дойки, овощи с грядки, мёд с пасеки — всё
                        приезжает в день сбора или на следующий.
                        </p>
                    </div>

                    <div
                        class="group p-8 rounded-3xl bg-gray-50 hover:bg-emerald-50 transition-all duration-300 border border-transparent hover:border-emerald-100"
                    >
                        <div
                        class="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors"
                        >
                        <i
                            data-lucide="shield-check"
                            class="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors"
                        ></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">
                        Проверяем качество
                        </h3>
                        <p class="text-gray-600 leading-relaxed">
                        Каждый фермер проходит верификацию. Мы лично проверяем условия
                        содержания и качество продукции.
                        </p>
                    </div>

                    <div
                        class="group p-8 rounded-3xl bg-gray-50 hover:bg-emerald-50 transition-all duration-300 border border-transparent hover:border-emerald-100"
                    >
                        <div
                        class="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors"
                        >
                        <i
                            data-lucide="heart-handshake"
                            class="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors"
                        ></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">
                        Поддерживаем сёла
                        </h3>
                        <p class="text-gray-600 leading-relaxed">
                        100% оплаты идут фермеру. Никаких перекупщиков и рыночных сборов.
                        Прямая поддержка местных.
                        </p>
                    </div>
                    </div>

                    
                    <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div class="text-center">
                        <p class="text-4xl font-black text-emerald-600">2,450+</p>
                        <p class="text-gray-600 mt-2">Фермеров на платформе</p>
                    </div>
                    <div class="text-center">
                        <p class="text-4xl font-black text-emerald-600">6-7</p>
                        <p class="text-gray-600 mt-2">Часов от поля до двери</p>
                    </div>
                    <div class="text-center">
                        <p class="text-4xl font-black text-emerald-600">50 км</p>
                        <p class="text-gray-600 mt-2">Радиус доставки</p>
                    </div>
                    <div class="text-center">
                        <p class="text-4xl font-black text-emerald-600">12%</p>
                        <p class="text-gray-600 mt-2">Комиссия vs 40% у посредников</p>
                    </div>
                    </div>
                </div>
                </section>

               
                <section id="how-it-works" class="py-24 px-6 relative">
                <div class="max-w-5xl mx-auto">
                    <div class="text-center mb-16">
                    <span
                        class="text-emerald-600 font-semibold text-sm uppercase tracking-wider"
                        >Как работает</span
                    >
                    <h2 class="mt-4 text-4xl font-bold text-gray-900">
                        Просто, как заказать пиццу
                    </h2>
                    </div>

                    <div class="relative">
                
                    <div
                        class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 step-line transform -translate-x-1/2"
                    ></div>

                    
                    <div class="flex flex-col md:flex-row items-center gap-8 mb-16">
                        <div class="flex-1 md:text-right">
                        <div
                            class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <h3 class="text-xl font-bold text-gray-900 mb-2">
                            1. Выбираете в каталоге
                            </h3>
                            <p class="text-gray-600">
                            Молоко, мёд, овощи, ягоды — всё свежее и с фото реальных ферм.
                            Фильтруйте по категориям и расстоянию.
                            </p>
                        </div>
                        </div>
                        <div
                        class="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center z-10 shadow-lg shadow-emerald-200 flex-shrink-0"
                        >
                        <i data-lucide="smartphone" class="w-8 h-8 text-white"></i>
                        </div>
                        <div class="flex-1 hidden md:block"></div>
                    </div>

                
                    <div class="flex flex-col md:flex-row items-center gap-8 mb-16">
                        <div class="flex-1 hidden md:block"></div>
                        <div
                        class="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-emerald-200 flex-shrink-0"
                        >
                        <i data-lucide="credit-card" class="w-8 h-8 text-white"></i>
                        </div>
                        <div class="flex-1">
                        <div
                            class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <h3 class="text-xl font-bold text-gray-900 mb-2">
                            2. Оплачиваете онлайн
                            </h3>
                            <p class="text-gray-600">
                            Картой или наличными при получении. Цена фиксирована — никаких
                            торгов и "договоримся на месте".
                            </p>
                        </div>
                        </div>
                    </div>

                    
                    <div class="flex flex-col md:flex-row items-center gap-8 mb-16">
                        <div class="flex-1 md:text-right">
                        <div
                            class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <h3 class="text-xl font-bold text-gray-900 mb-2">
                            3. Мы забираем у фермера
                            </h3>
                            <p class="text-gray-600">
                            Наша машина объезжает 5-7 сёл за рейс. GPS-маршрутизация
                            позволяет собрать все заказы за 4 часа.
                            </p>
                        </div>
                        </div>
                        <div
                        class="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center z-10 shadow-lg shadow-emerald-200 flex-shrink-0"
                        >
                        <i data-lucide="map-pin" class="w-8 h-8 text-white"></i>
                        </div>
                        <div class="flex-1 hidden md:block"></div>
                    </div>

                    
                    <div class="flex flex-col md:flex-row items-center gap-8">
                        <div class="flex-1 hidden md:block"></div>
                        <div
                        class="w-16 h-16 bg-emerald-300 rounded-full flex items-center justify-center z-10 shadow-lg shadow-emerald-200 flex-shrink-0"
                        >
                        <i data-lucide="home" class="w-8 h-8 text-white"></i>
                        </div>
                        <div class="flex-1">
                        <div
                            class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <h3 class="text-xl font-bold text-gray-900 mb-2">
                            4. Привозим домой
                            </h3>
                            <p class="text-gray-600">
                            Курьер доставляет до двери в тот же день. Вы получаете свежее
                            молоко, которое было в доильном аппарате утром.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

                <section
                class="py-20 px-6 bg-emerald-900 text-white relative overflow-hidden"
                >
                <div class="absolute inset-0 opacity-10">
                    <div
                    class="absolute inset-0"
                    style="
                        background-image: radial-gradient(#10b981 1px, transparent 1px);
                        background-size: 30px 30px;
                    "
                    ></div>
                </div>

                <div class="max-w-5xl mx-auto relative z-10">
                    <div class="text-center mb-12">
                    <span
                        class="text-emerald-300 font-semibold text-sm uppercase tracking-wider"
                        >Кто мы</span
                    >
                    <h2 class="mt-4 text-4xl font-bold">Команда YouCanCode</h2>
                    <p class="mt-4 text-emerald-100 max-w-2xl mx-auto">
                        Мы — разработчики, которые верят в силу технологий для развития
                        регионов.
                    </p>
                    </div>

                    <div class="grid md:grid-cols-3 gap-8 mb-12">
                    <div
                        class="text-center p-6 rounded-2xl bg-emerald-800/50 border border-emerald-700"
                    >
                        <div
                        class="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                        >
                        МН
                        </div>
                        <h4 class="text-lg font-semibold">Найданов Мирон</h4>
                        <p class="text-emerald-300 text-sm">Backend Architect</p>
                    </div>

                    <div
                        class="text-center p-6 rounded-2xl bg-emerald-800/50 border border-emerald-700"
                    >
                        <div
                        class="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                        >
                        ДС
                        </div>
                        <h4 class="text-lg font-semibold">Сагындыков Даниар</h4>
                        <p class="text-emerald-300 text-sm">Frontend Architect</p>
                    </div>

                    <div
                        class="text-center p-6 rounded-2xl bg-emerald-800/50 border border-emerald-700"
                    >
                        <div
                        class="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                        >
                        БШ
                        </div>
                        <h4 class="text-lg font-semibold">Шалдыкенов Бейбарыс</h4>
                        <p class="text-emerald-300 text-sm">Product Manager</p>
                    </div>
                    </div>

                    <div
                    class="glass-card bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-emerald-700"
                    >
                    <h3 class="text-2xl font-bold mb-4 text-center">Наша миссия</h3>
                    <p class="text-lg text-emerald-100 text-center leading-relaxed">
                        Создать экосистему, где
                        <span class="text-white font-semibold"
                        >253 785 фермерских хозяйств</span
                        >
                        Казахстана получают прямой доступ к покупателям, а горожане едят
                        натуральные продукты по справедливым ценам. Без посредников. Без
                        потери качества. С любовью к земле.
                    </p>
                    </div>
                </div>
                </section>

                <section class="py-20 px-6">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">
                    Готовы попробовать настоящее?
                    </h2>
                    <p class="text-xl text-gray-600 mb-8">
                    Присоединяйтесь к 2,450 фермерам и тысячам довольных покупателей
                    </p>
                    <div class="flex flex-wrap justify-center gap-4">
                    <a
                        href="index.html"
                        class="px-8 py-4 bg-emerald-600 text-white font-medium rounded-2xl hover:bg-emerald-700 transition-colors flex items-center gap-2"
                    >
                        <span>Перейти в магазин</span>
                        <i data-lucide="shopping-bag" class="w-5 h-5"></i>
                    </a>
                    <a
                        href="presentation.html"
                        class="px-8 py-4 bg-gray-100 text-gray-700 font-medium rounded-2xl hover:bg-gray-200 transition-colors"
                    >
                        Презентация для инвесторов
                    </a>
                    </div>
                </div>
                </section>

                <footer class="bg-gray-50 border-t border-gray-200 px-6 py-12">
                <div class="max-w-7xl mx-auto">
                    <div
                    class="flex flex-col md:flex-row justify-between items-center gap-4"
                    >
                    <div class="flex items-center gap-2">
                        <div
                        class="w-6 h-6 bg-emerald-600 rounded-md flex items-center justify-center"
                        >
                        <i data-lucide="leaf" class="w-4 h-4 text-white"></i>
                        </div>
                        <span class="font-semibold text-gray-900">AgroHub</span>
                    </div>
                    <div class="flex gap-6 text-sm text-gray-500">
                        <a href="index.html" class="hover:text-gray-900 transition-colors"
                        >Каталог</a
                        >
                        <a href="about.html" class="hover:text-gray-900 transition-colors"
                        >О нас</a
                        >
                        <a
                        href="presentation.html"
                        class="hover:text-gray-900 transition-colors"
                        >Для инвесторов</a
                        >
                    </div>
                    <div class="text-sm text-gray-400">
                        © 2024 AgroHub. YouCanCode Team.
                    </div>
                    </div>
                </div>
                </footer>

                <script>
                lucide.createIcons();
                </script>
            </body>
            
        </main>
    );

};  

export default Landing;