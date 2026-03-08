import React from "react";
import { ArrowRight } from "../shared";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineTruck } from "react-icons/hi";

const Landing = () => {
  return (
    <main>
      <div className="text-gray-800 antialiased">
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute top-40 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 float-animation"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 float-animation"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="fade-in-up inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-emerald-700">
                Свежие продукты от проверенных фермеров
              </span>
            </div>
            <h1 className="fade-in-up delay-100 text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              От поля <br />
              <span className="linear-text span-h1">к вашему столу</span>
            </h1>
            <p className="fade-in-up delay-200 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
              AgroHub — это digital-мост между деревенскими фермерами и
              городскими семьями. Мы доставляем молоко, мёд, овощи и ягоды
              напрямую от производителя за 6–7 часов.
            </p>
            <div className="fade-in-up delay-300 flex flex-wrap justify-center gap-4">
              <NavLink
                to="/catalog"
                className="px-8 py-4 bg-emerald-600 text-white font-medium rounded-2xl hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-200 flex items-center gap-2"
              >
                <span>Начать покупать</span>
                <ArrowRight />
              </NavLink>
              <button
                onClick={() =>
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-white text-gray-700 font-medium rounded-2xl border border-gray-200 hover:border-emerald-300 hover:text-emerald-600 transition-all"
              >
                Как это работает
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Что мы делаем
              </span>
              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Решаем проблему двух миров
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Фермеры теряют деньги на посредниках. Горожане не могут купить
                натуральное. Мы соединяем их напрямую.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group p-8 rounded-3xl bg-gray-50 hover:bg-emerald-50 transition-all duration-300 border border-transparent hover:border-emerald-100">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="truck"
                    aria-hidden="true"
                    className="lucide lucide-truck w-7 h-7 text-emerald-600 group-hover:text-white transition-colors"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                    <path d="M15 18H9"></path>
                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                    <circle cx="17" cy="18" r="2"></circle>
                    <circle cx="7" cy="18" r="2"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Доставляем свежее
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Молоко с утренней дойки, овощи с грядки, мёд с пасеки — всё
                  приезжает в день сбора или на следующий.
                </p>
              </div>
              <div className="group p-8 rounded-3xl bg-gray-50 hover:bg-emerald-50 transition-all duration-300 border border-transparent hover:border-emerald-100">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="shield-check"
                    aria-hidden="true"
                    className="lucide lucide-shield-check w-7 h-7 text-emerald-600 group-hover:text-white transition-colors"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Проверяем качество
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Каждый фермер проходит верификацию. Мы лично проверяем условия
                  содержания и качество продукции.
                </p>
              </div>

              <div className="group p-8 rounded-3xl bg-gray-50 hover:bg-emerald-50 transition-all duration-300 border border-transparent hover:border-emerald-100">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="heart-handshake"
                    aria-hidden="true"
                    className="lucide lucide-heart-handshake w-7 h-7 text-emerald-600 group-hover:text-white transition-colors"
                  >
                    <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Поддерживаем сёла
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  100% оплаты идут фермеру. Никаких перекупщиков и рыночных
                  сборов. Прямая поддержка местных.
                </p>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl font-black text-emerald-600">2,450+</p>
                <p className="text-gray-600 mt-2">Фермеров на платформе</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black text-emerald-600">6-7</p>
                <p className="text-gray-600 mt-2">Часов от поля до двери</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black text-emerald-600">50 км</p>
                <p className="text-gray-600 mt-2">Радиус доставки</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black text-emerald-600">12%</p>
                <p className="text-gray-600 mt-2">Комиссия vs 40% у посредников</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-24 px-6 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Как работает
              </span>
              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Просто, как заказать пиццу
              </h2>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 step-line transform -translate-x-1/2"></div>

              <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                <div className="flex-1 md:text-right">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      1. Выбираете в каталоге
                    </h3>
                    <p className="text-gray-600">
                      Молоко, мёд, овощи, ягоды — всё свежее и с фото реальных
                      ферм. Фильтруйте по категориям и расстоянию.
                    </p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center z-10 shadow-lg shadow-emerald-200 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="smartphone"
                    aria-hidden="true"
                    className="lucide lucide-smartphone w-8 h-8 text-white"
                  >
                    <rect
                      width="14"
                      height="20"
                      x="5"
                      y="2"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M12 18h.01"></path>
                  </svg>
                </div>
                <div className="flex-1 hidden md:block"></div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                <div className="flex-1 hidden md:block"></div>
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-emerald-200 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="credit-card"
                    aria-hidden="true"
                    className="lucide lucide-credit-card w-8 h-8 text-white"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      2. Оплачиваете онлайн
                    </h3>
                    <p className="text-gray-600">
                      Картой или наличными при получении. Цена фиксирована —
                      никаких торгов и "договоримся на месте".
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                <div className="flex-1 md:text-right">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      3. Мы забираем у фермера
                    </h3>
                    <p className="text-gray-600">
                      Наша машина объезжает 5-7 сёл за рейс. GPS-маршрутизация
                      позволяет собрать все заказы за 4 часа.
                    </p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center z-10 shadow-lg shadow-emerald-200 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="map-pin"
                    aria-hidden="true"
                    className="lucide lucide-map-pin w-8 h-8 text-white"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="flex-1 hidden md:block"></div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 hidden md:block"></div>
                <div className="w-16 h-16 bg-emerald-300 rounded-full flex items-center justify-center z-10 shadow-lg shadow-emerald-200 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="home"
                    aria-hidden="true"
                    className="lucide lucide-home w-8 h-8 text-white"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      4. Привозим домой
                    </h3>
                    <p className="text-gray-600">
                      Курьер доставляет до двери в тот же день. Вы получаете
                      свежее молоко, которое было в доильном аппарате утром.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-emerald-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-linear(#10b981 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            ></div>
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <span className="text-emerald-300 font-semibold text-sm uppercase tracking-wider">
                Кто мы
              </span>
              <h2 className="mt-4 text-4xl font-bold">Команда YouCanCode</h2>
              <p className="mt-4 text-emerald-100 max-w-2xl mx-auto">
                Мы — разработчики, которые верят в силу технологий для развития
                регионов.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 rounded-2xl bg-emerald-800/50 border border-emerald-700">
                <img
                  src="/picture/Miron.jpg"
                  alt="Miron"
                  className="w-60 h-60 bg-linear-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                />
                <h4 className="text-lg font-semibold">Найданов Мирон</h4>
                <p className="text-emerald-300 text-sm">Backend Architect</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-emerald-800/50 border border-emerald-700">
                <img
                  src="/picture/Danya.jpg"
                  alt="Danya"
                  className="w-60 h-60 bg-linear-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                />
                <h4 className="text-lg font-semibold">Сагындыков Даниар</h4>
                <p className="text-emerald-300 text-sm">Frontend Architect</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-emerald-800/50 border border-emerald-700">
                <img
                  src="/picture/Beibarys.jpg"
                  alt="Beibarys"
                  className="w-60 h-60 bg-linear-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                />
                <h4 className="text-lg font-semibold">Шалдыкенов Бейбарыс</h4>
                <p className="text-emerald-300 text-sm">Product Manager</p>
              </div>
            </div>

            <div className="glass-card bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-emerald-700">
              <h3 className="text-2xl font-bold mb-4 text-center">Наша миссия</h3>
              <p className="text-lg text-emerald-100 text-center leading-relaxed">
                Создать экосистему, где
                <span className="text-white font-semibold">
                  {" "}253 785 фермерских хозяйств{" "}
                </span>
                Казахстана получают прямой доступ к покупателям, а горожане едят
                натуральные продукты по справедливым ценам. Без посредников. Без
                потери качества. С любовью к земле.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Готовы попробовать настоящее?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Присоединяйтесь к 2,450 фермерам и тысячам довольных покупателей
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="index.html"
                className="px-8 py-4 bg-emerald-600 text-white font-medium rounded-2xl hover:bg-emerald-700 transition-colors flex items-center gap-2"
              >
                <span>Перейти в магазин</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-lucide="shopping-bag"
                  aria-hidden="true"
                  className="lucide lucide-shopping-bag w-5 h-5"
                >
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                  <path d="M3.103 6.034h17.794"></path>
                  <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                </svg>
              </a>
              <a
                href="presentation.html"
                className="px-8 py-4 bg-gray-100 text-gray-700 font-medium rounded-2xl hover:bg-gray-200 transition-colors"
              >
                Презентация для инвесторов
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-gray-50 border-t border-gray-200 px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-emerald-600 rounded-md flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="leaf"
                    aria-hidden="true"
                    className="lucide lucide-leaf w-4 h-4 text-white"
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </svg>
                </div>
                <span className="font-semibold text-gray-900">AgroHub</span>
              </div>
              <div className="flex gap-6 text-sm text-gray-500">
                <a
                  href="index.html"
                  className="hover:text-gray-900 transition-colors"
                >
                  Каталог
                </a>
                <a
                  href="about.html"
                  className="hover:text-gray-900 transition-colors"
                >
                  О нас
                </a>
                <a
                  href="presentation.html"
                  className="hover:text-gray-900 transition-colors"
                >
                  Для инвесторов
                </a>
              </div>
              <div className="text-sm text-gray-400">
                © 2026 AgroHub. YouCanCode Team.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Landing;