import React, { useState, useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {
  Leaf, User, Truck, HandCoins, Smartphone, Home, TrendingUp,
  Users, Building2, Lightbulb, ShoppingBag, Search, Sun, Tractor,
  Warehouse, Sunset, Bike, Calculator, CheckCircle, Briefcase,
  Shield, HeartHandshake
} from 'lucide-react';

// Регистрируем компоненты Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 9;
  
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Настройки графика
  const chartData = {
    labels: ['КФХ (13%)', 'Домашние хозяйства (85%)', 'Юрлица и ИП (2%)'],
    datasets: [
      {
        data: [253785, 1612399, 37853],
        backgroundColor: ['#059669', '#10b981', '#6b7280'],
        borderWidth: 2,
        borderColor: '#f0fdf4',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 15,
          font: { size: 11 },
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((context.raw / total) * 100).toFixed(1);
            return `${context.label.split(' ')[0]}: ${(context.raw / 1000).toFixed(0)}K (${percentage}%)`;
          },
        },
      },
    },
  };

  // Навигация
  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 1));
  const goToSlide = (n) => setCurrentSlide(n);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
      if (e.key === 'Home') goToSlide(1);
      if (e.key === 'End') goToSlide(totalSlides);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const threshold = 50;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > threshold) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  // Вспомогательная функция для классов слайдов
  const getSlideClass = (slideNum) => {
    let baseClass = "slide absolute inset-0 flex items-center justify-center p-8 transition-all duration-700 ease-in-out";
    if (currentSlide === slideNum) return `${baseClass} active opacity-100 visible translate-x-0`;
    if (currentSlide > slideNum) return `${baseClass} prev opacity-0 invisible -translate-x-[100px]`;
    return `${baseClass} opacity-0 invisible translate-x-[100px]`;
  };

  return (
    <div 
      className="gradient-bg h-screen w-screen relative overflow-hidden" 
      style={{ fontFamily: "'Inter', sans-serif" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Стили */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        .gradient-bg { background: linear-gradient(135deg, #fafaf9 0%, #f0fdf4 50%, #ecfdf5 100%); }
        .glass-card { background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.3); }
        .emerald-gradient-text { background: linear-gradient(135deg, #059669 0%, #10b981 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .floating { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        .fade-up { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
        .active .fade-up { opacity: 1; transform: translateY(0); }
        .delay-1 { transition-delay: 0.1s; } .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; } .delay-4 { transition-delay: 0.4s; }
        .delay-5 { transition-delay: 0.5s; }
        .slide-pattern { background-image: radial-gradient(#059669 1px, transparent 1px); background-size: 40px 40px; opacity: 0.05; }
        .path-card, .competitor-card, .metric-card, .team-avatar { transition: all 0.3s ease; }
        .path-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.15); }
        .stat-number { background: linear-gradient(135deg, #059669 0%, #10b981 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .timeline-line { background: linear-gradient(to bottom, #059669, #10b981); }
        .metric-card:hover { transform: translateY(-2px); }
        .ui-mockup { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15); }
        .team-avatar:hover { transform: scale(1.05); }
      `}} />

      {/* Паттерн и декорации */}
      <div className="absolute inset-0 slide-pattern pointer-events-none"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating" style={{ animationDelay: '2s' }}></div>

      {/* Прогресс бар */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-emerald-600 transition-all duration-300 ease-out" 
          style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
        ></div>
      </div>

      <div className="fixed bottom-6 right-6 z-50 text-sm text-gray-400 font-medium glass-card px-4 py-2 rounded-full shadow-sm">
        <span>{currentSlide} / {totalSlides}</span>
      </div>

      {/* --- SLIDE 1 --- */}
      <div className={getSlideClass(1)}>
        <div className="max-w-4xl w-full text-center">
          <div className="fade-up mb-8 flex justify-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-600 rounded-2xl mb-6 shadow-lg shadow-emerald-200">
              <Leaf className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="fade-up delay-1 text-7xl md:text-9xl font-extrabold tracking-tight mb-6">
            <span className="emerald-gradient-text">AgroHub</span>
          </h1>
          <p className="fade-up delay-2 text-2xl md:text-3xl text-gray-600 font-light mb-12">
            От села до стола в один клик
          </p>
          <div className="fade-up delay-3 mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm font-semibold text-emerald-600 uppercase tracking-widest mb-4">Команда</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">YouCanCode</h2>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600">
              <span className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">Найданов Мирон</span>
              <span className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">Сагындыков Даниар</span>
              <span className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">Шалдыкенов Бейбарыс</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- SLIDE 2 --- */}
      <div className={getSlideClass(2)}>
        <div className="max-w-6xl w-full">
          <div className="text-center mb-10">
            <span className="fade-up inline-block px-4 py-1 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">Проблема</span>
            <h2 className="fade-up delay-1 text-4xl md:text-5xl font-bold text-gray-900">Три пути фермера — все тупики</h2>
          </div>

          <div className="fade-up delay-2 glass-card p-6 rounded-2xl mb-8 border-l-4 border-amber-500">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0">
                <User className="w-7 h-7 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-amber-600 font-medium uppercase tracking-wide">Кейс: Фермер из села Красное</p>
                <p className="text-lg text-gray-800">Выдоил <span className="font-bold text-emerald-600">50 литров</span> козьего молока. Цель: продать по <span className="font-bold text-emerald-600">600 тг/литр</span>.</p>
              </div>
            </div>
          </div>

          <div className="fade-up delay-3 grid md:grid-cols-3 gap-6">
            <div className="path-card glass-card p-6 rounded-2xl border-t-4 border-red-400">
              <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Путь 1: На рынок</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>• 4 часа на дорогу</p>
                <p>• 2 500 ₸ на бензин</p>
                <p>• Потеря рабочего дня</p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-red-600 font-semibold">Итог: 25 000 ₸ — 2 500 ₸ — день потерян</p>
              </div>
            </div>

            <div className="path-card glass-card p-6 rounded-2xl border-t-4 border-orange-400">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                <HandCoins className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Путь 2: Перекупщик</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>• Приезжает к дому</p>
                <p>• Забирает всё сразу</p>
                <p>• Цена на 40% ниже</p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-orange-600 font-semibold">Итог: 12 500 ₸ — минимальная прибыль</p>
              </div>
            </div>

            <div className="path-card glass-card p-6 rounded-2xl border-t-4 border-yellow-400">
              <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Путь 3: Instagram/OLX</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>• Постит фото</p>
                <p>• Ждёт заказы</p>
                <p>• Доставка — головная боль</p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-yellow-600 font-semibold">Итог: 2-3 заказа/неделю, нет стабильности</p>
              </div>
            </div>
          </div>

          <div className="fade-up delay-4 mt-8 glass-card p-6 rounded-2xl border-l-4 border-blue-400">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">А покупатель в городе?</h3>
                <p className="text-gray-600">Готов платить за натуральное, но не хочет рисковать: ехать на сомнительный рынок или ждать курьера из Instagram.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SLIDE 3 --- */}
      <div className={getSlideClass(3)}>
        <div className="max-w-6xl w-full">
          <div className="text-center mb-8">
            <span className="fade-up inline-block px-4 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium mb-4">Рынок</span>
            <h2 className="fade-up delay-1 text-4xl md:text-5xl font-bold text-gray-900">Казахстан — страна фермеров</h2>
          </div>

          <div className="fade-up delay-2 glass-card p-8 rounded-2xl mb-8 text-center bg-emerald-50 border-emerald-200">
            <p className="text-sm text-emerald-600 font-medium uppercase tracking-wide mb-2">Объём рынка продуктов питания (11 мес. 2025)</p>
            <p className="text-6xl md:text-7xl font-black stat-number mb-2">3,5 трлн ₸</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full font-medium">
              <TrendingUp className="w-5 h-5" />
              <span>+8,7% роста</span>
            </div>
          </div>

          <div className="fade-up delay-3 grid md:grid-cols-3 gap-6 mb-8">
            <div className="metric-card glass-card p-6 rounded-2xl text-center border-t-4 border-emerald-500">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <p className="text-4xl font-black text-emerald-600 mb-2">253 785</p>
              <p className="text-gray-700 font-medium mb-2">Фермерских хозяйств</p>
            </div>
            <div className="metric-card glass-card p-6 rounded-2xl text-center border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-4xl font-black text-blue-600 mb-2">1,6 млн</p>
              <p className="text-gray-700 font-medium mb-2">Домашних хозяйств</p>
            </div>
            <div className="metric-card glass-card p-6 rounded-2xl text-center border-t-4 border-gray-400">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-gray-600" />
              </div>
              <p className="text-4xl font-black text-gray-600 mb-2">37 853</p>
              <p className="text-gray-700 font-medium mb-2">Юрлиц и ИП</p>
            </div>
          </div>

          <div className="fade-up delay-4 glass-card p-6 rounded-2xl">
            <h3 className="font-semibold text-lg mb-4 text-gray-900 text-center">Структура сельхозпроизводства</h3>
            <div className="relative h-48 max-w-md mx-auto">
              <Doughnut data={chartData} options={chartOptions} />
            </div>
            <div className="mt-4 p-4 bg-emerald-50 rounded-xl">
              <p className="text-emerald-800 text-center font-medium">
                <Lightbulb className="w-5 h-5 inline mr-2" />
                97,8% производителей — мелкие хозяйства без доступа к рынку.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- SLIDE 4 --- */}
      <div className={getSlideClass(4)}>
        <div className="max-w-6xl w-full">
          <div className="text-center mb-8">
            <span className="fade-up inline-block px-4 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium mb-4">Решение</span>
            <h2 className="fade-up delay-1 text-4xl md:text-5xl font-bold text-gray-900">AgroHub — единая платформа</h2>
            <p className="fade-up delay-2 text-gray-600 mt-3 text-lg">Малые сёла встречаются с большими городами</p>
          </div>

          <div className="fade-up delay-3 grid md:grid-cols-2 gap-8 items-center">
            {/* UI Mockup */}
            <div className="ui-mockup bg-white rounded-3xl overflow-hidden border border-gray-200">
              <div className="bg-emerald-600 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-semibold">AgroHub</span>
                </div>
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div className="p-4 bg-gray-50">
                <div className="bg-white rounded-xl p-3 flex items-center gap-2 shadow-sm">
                  <Search className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400 text-sm">Поиск молока, мёда...</span>
                </div>
              </div>
              <div className="px-4 py-3 flex gap-2 overflow-x-auto">
                <span className="px-3 py-1.5 bg-emerald-600 text-white text-xs rounded-full">Все</span>
                <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-full">Молочное</span>
                <span className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-full">Мёд</span>
              </div>
              <div className="p-4 grid grid-cols-2 gap-3">
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <div className="h-20 bg-gray-100"></div>
                  <div className="p-3">
                    <p className="text-sm font-medium text-gray-900">Козье молоко</p>
                    <p className="text-emerald-600 font-bold">600 тг</p>
                    <p className="text-xs text-gray-400">д. Красное, 12 км</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <div className="h-20 bg-gray-100"></div>
                  <div className="p-3">
                    <p className="text-sm font-medium text-gray-900">Лесной мёд</p>
                    <p className="text-emerald-600 font-bold">1 200 тг</p>
                    <p className="text-xs text-gray-400">д. Лесная, 25 км</p>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-gray-50 flex justify-around text-xs text-gray-500">
                <span className="text-emerald-600 font-medium">Каталог</span>
                <span>Заказы</span>
                <span>Профиль</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="glass-card p-5 rounded-2xl flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0"><span className="text-xl font-bold text-emerald-600">1</span></div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Заказ в один клик</h3>
                  <p className="text-gray-600 text-sm">Покупатель выбирает и оплачивает без звонков.</p>
                </div>
              </div>
              <div className="glass-card p-5 rounded-2xl flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0"><span className="text-xl font-bold text-blue-600">2</span></div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Прямой доступ</h3>
                  <p className="text-gray-600 text-sm">Фермер получает цену, покупатель — свежий продукт.</p>
                </div>
              </div>
              <div className="glass-card p-5 rounded-2xl flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0"><span className="text-xl font-bold text-purple-600">3</span></div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Верификация</h3>
                  <p className="text-gray-600 text-sm">Каждый фермер проверен. Рейтинги и отзывы.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SLIDE 5 --- */}
      <div className={getSlideClass(5)}>
        <div className="max-w-5xl w-full">
          <div className="text-center mb-10">
            <span className="fade-up inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">Логистика</span>
            <h2 className="fade-up delay-1 text-4xl md:text-5xl font-bold text-gray-900">От аула до стола — 6–7 часов</h2>
          </div>

          <div className="fade-up delay-3 relative mb-10">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 timeline-line transform -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-8">
              <div className="flex items-center gap-8">
                <div className="flex-1 text-right">
                  <div className="glass-card p-5 rounded-2xl inline-block text-right">
                    <p className="font-bold text-emerald-600 text-lg flex items-center justify-end gap-2"><Sun className="w-5 h-5" /> 08:00 — Аул</p>
                    <p className="text-gray-700">Машина забирает заказы</p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center z-10 shrink-0"><Tractor className="w-8 h-8 text-white" /></div>
                <div className="flex-1"></div>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex-1"></div>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center z-10 shrink-0"><Warehouse className="w-8 h-8 text-white" /></div>
                <div className="flex-1 text-left">
                  <div className="glass-card p-5 rounded-2xl inline-block">
                    <p className="font-bold text-blue-600 text-lg flex items-center gap-2"><Sun className="w-5 h-5" /> 12:00 — Городской хаб</p>
                    <p className="text-gray-700">Сортировка и проверка качества</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex-1 text-right">
                  <div className="glass-card p-5 rounded-2xl inline-block text-right">
                    <p className="font-bold text-purple-600 text-lg flex items-center justify-end gap-2"><Sunset className="w-5 h-5" /> 15:00 — Стол клиента</p>
                    <p className="text-gray-700">Курьер доставляет до двери</p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center z-10 shrink-0"><Bike className="w-8 h-8 text-white" /></div>
                <div className="flex-1"></div>
              </div>
            </div>
          </div>

          <div className="fade-up delay-4 grid md:grid-cols-4 gap-4">
            <div className="glass-card p-4 rounded-2xl text-center">
              <p className="text-3xl font-black text-emerald-600">3</p>
              <p className="text-sm text-gray-600">дня — частота рейсов</p>
            </div>
            <div className="glass-card p-4 rounded-2xl text-center">
              <p className="text-3xl font-black text-emerald-600">6-7</p>
              <p className="text-sm text-gray-600">часов — доставка</p>
            </div>
            <div className="glass-card p-4 rounded-2xl text-center">
              <p className="text-3xl font-black text-emerald-600">0</p>
              <p className="text-sm text-gray-600">дней — хранения</p>
            </div>
            <div className="glass-card p-4 rounded-2xl text-center">
              <p className="text-3xl font-black text-emerald-600">5-7</p>
              <p className="text-sm text-gray-600">сёл за рейс</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- SLIDE 6 --- */}
      <div className={getSlideClass(6)}>
        <div className="max-w-6xl w-full">
          <div className="text-center mb-8">
            <span className="fade-up inline-block px-4 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium mb-4">Бизнес-модель</span>
            <h2 className="fade-up delay-1 text-4xl md:text-5xl font-bold text-gray-900">Экономика MVP</h2>
          </div>

          <div className="fade-up delay-3 grid md:grid-cols-4 gap-4 mb-8">
            <div className="glass-card p-5 rounded-2xl text-center border-t-4 border-purple-500">
              <p className="text-3xl font-black text-purple-600 mb-2">12%</p>
              <p className="text-sm font-medium text-gray-700">Комиссия</p>
            </div>
            <div className="glass-card p-5 rounded-2xl text-center border-t-4 border-blue-500">
              <p className="text-3xl font-black text-blue-600 mb-2">700 ₸</p>
              <p className="text-sm font-medium text-gray-700">Логистика</p>
            </div>
            <div className="glass-card p-5 rounded-2xl text-center border-t-4 border-emerald-500">
              <p className="text-3xl font-black text-emerald-600 mb-2">500 ₸</p>
              <p className="text-sm font-medium text-gray-700">Доставка</p>
            </div>
            <div className="glass-card p-5 rounded-2xl text-center border-t-4 border-amber-500">
              <p className="text-3xl font-black text-amber-600 mb-2">0 ₸</p>
              <p className="text-sm font-medium text-gray-700">Аренда хаба</p>
            </div>
          </div>

          <div className="fade-up delay-4 glass-card p-6 rounded-2xl mb-8 bg-purple-50 border-purple-200">
            <h3 className="font-bold text-lg text-purple-900 mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5" /> Расчёт прибыли: 30 заказов
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-purple-200">
                  <span className="text-purple-800">Средний чек</span><span className="font-bold text-purple-900">5 000 ₸</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-purple-200">
                  <span className="text-purple-800">Выручка (30 × 5 000)</span><span className="font-bold text-purple-900">150 000 ₸</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-purple-200">
                  <span className="text-purple-800">Комиссия 12%</span><span className="font-bold text-emerald-600">+18 000 ₸</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Доход</span><span className="font-bold text-gray-900">39 000 ₸</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Расходы</span><span className="font-bold text-red-600">-12 000 ₸</span>
                </div>
                <div className="pt-3 border-t border-gray-200 flex justify-between items-center">
                  <span className="font-bold text-purple-900">Прибыль</span><span className="text-3xl font-black text-emerald-600">27 000 ₸</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SLIDE 7 --- */}
      <div className={getSlideClass(7)}>
        <div className="max-w-6xl w-full">
          <div className="text-center mb-8">
            <span className="fade-up inline-block px-4 py-1 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">Конкуренты</span>
            <h2 className="fade-up delay-1 text-4xl md:text-5xl font-bold text-gray-900">Почему мы выигрываем</h2>
          </div>

          <div className="fade-up delay-2 glass-card rounded-2xl overflow-hidden mb-8">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 font-semibold text-gray-700">Параметр</th>
                  <th className="p-4 text-center font-semibold text-gray-600">OLX / Inst</th>
                  <th className="p-4 text-center font-semibold text-gray-600">Супермаркеты</th>
                  <th className="p-4 text-center font-semibold text-emerald-600 bg-emerald-50">AgroHub</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-4 font-medium text-gray-900">Доставка</td>
                  <td className="p-4 text-center"><span className="text-red-500">✗ Нет</span></td>
                  <td className="p-4 text-center"><span className="text-amber-500">△ Долго</span></td>
                  <td className="p-4 text-center bg-emerald-50"><span className="text-emerald-600 font-bold">✓ 6 часов</span></td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-gray-900">Натуральность</td>
                  <td className="p-4 text-center"><span className="text-amber-500">? Неизвестно</span></td>
                  <td className="p-4 text-center"><span className="text-red-500">✗ Масс-маркет</span></td>
                  <td className="p-4 text-center bg-emerald-50"><span className="text-emerald-600 font-bold">✓ 100%</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="fade-up delay-3 grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl text-center border-2 border-emerald-200 bg-emerald-50">
              <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4"><Truck className="w-7 h-7 text-white" /></div>
              <h3 className="font-bold text-lg text-emerald-900">Системная доставка</h3>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center border-2 border-emerald-200 bg-emerald-50">
              <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4"><Leaf className="w-7 h-7 text-white" /></div>
              <h3 className="font-bold text-lg text-emerald-900">Гарантия качества</h3>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center border-2 border-emerald-200 bg-emerald-50">
              <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4"><Users className="w-7 h-7 text-white" /></div>
              <h3 className="font-bold text-lg text-emerald-900">Без посредников</h3>
            </div>
          </div>
        </div>
      </div>

      {/* --- SLIDE 8 --- */}
      <div className={getSlideClass(8)}>
        <div className="max-w-5xl w-full">
          <div className="text-center mb-12">
            <span className="fade-up inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">Команда</span>
            <h2 className="fade-up delay-1 text-4xl md:text-5xl font-bold text-gray-900">YouCanCode</h2>
            <p className="fade-up delay-2 text-gray-600 mt-3 text-lg">Архитектура создана и готова к масштабированию.</p>
          </div>

          <div className="fade-up delay-3 grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <img className="team-avatar w-32 h-32 bg-linear-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg object-cover" src="picture/Miron.jpg" alt="Найданов Мирон" />
              <h3 className="font-bold text-xl text-gray-900">Найданов Мирон</h3>
              <p className="text-emerald-600 font-medium mb-2">Backend architect</p>
            </div>
            <div className="text-center">
              <img className="team-avatar w-32 h-32 bg-linear-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg object-cover" src="picture/Danya.jpg" alt="Сагындыков Даниар" />
              <h3 className="font-bold text-xl text-gray-900">Сагындыков Даниар</h3>
              <p className="text-blue-600 font-medium mb-2">Frontend architect</p>
            </div>
            <div className="text-center">
              <img className="team-avatar w-32 h-32 bg-linear-to-br from-emerald-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg object-cover" src="picture/Beibarys.jpg" alt="Шалдыкенов Бейбарыс" />
              <h3 className="font-bold text-xl text-gray-900">Шалдыкенов Бейбарыс</h3>
              <p className="text-purple-600 font-medium mb-2">Product manager</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- SLIDE 9 --- */}
      <div className={getSlideClass(9)}>
        <div className="max-w-5xl w-full">
          <div className="text-center mb-10">
            <span className="fade-up inline-block px-4 py-1 bg-amber-50 text-amber-600 rounded-full text-sm font-medium mb-4">Социальное влияние</span>
            <h2 className="fade-up delay-1 text-4xl md:text-5xl font-bold text-gray-900">Больше, чем бизнес</h2>
          </div>

          <div className="fade-up delay-2 grid md:grid-cols-3 gap-6 mb-10">
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><Briefcase className="w-8 h-8 text-emerald-600" /></div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Рабочие места</h3>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><Shield className="w-8 h-8 text-blue-600" /></div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Безопасность еды</h3>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><HeartHandshake className="w-8 h-8 text-purple-600" /></div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Доверие город—аул</h3>
            </div>
          </div>

          <div className="fade-up delay-3 glass-card p-8 rounded-3xl bg-emerald-600 text-white text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">AgroHub</h3>
            <p className="text-xl mb-6 text-emerald-100">Строим будущее агрокультуры вместе</p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /><span>253 785 фермеров</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /><span>3,5 трлн ₸ рынок</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /><span>Команда готова</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}