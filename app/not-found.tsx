"use client";

import Link from "next/link";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";
import { BadgeAlert, Home, ArrowLeft, BarChart3, PieChart, LineChart } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [errorStats, setErrorStats] = useState({
    pageNotFound: 0,
    loadFailures: 0,
    apiErrors: 0,
    connectionLost: 0,
    browserIssues: 0,
  });
  
  // Добавляем состояние для времени обновления
  const [currentTime, setCurrentTime] = useState<string>("");

  // Симуляция увеличения счетчиков ошибок и обновление времени
  useEffect(() => {
    // Устанавливаем начальное время при монтировании компонента
    setCurrentTime(new Date().toLocaleTimeString());
    
    const interval = setInterval(() => {
      setErrorStats(prev => ({
        pageNotFound: prev.pageNotFound + Math.floor(Math.random() * 3),
        loadFailures: prev.loadFailures + Math.floor(Math.random() * 2),
        apiErrors: prev.apiErrors + Math.floor(Math.random() * 2),
        connectionLost: prev.connectionLost + Math.floor(Math.random() * 1),
        browserIssues: prev.browserIssues + Math.floor(Math.random() * 1),
      }));
      
      // Обновляем время при каждом обновлении статистики
      setCurrentTime(new Date().toLocaleTimeString());
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 10, 0] }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            >
              <BadgeAlert size={56} className="text-red-500" />
            </motion.div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500 dark:from-red-400 dark:to-orange-300">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Страница не найдена
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Возможно, страница была перемещена, удалена или временно недоступна.
            Наши аналитические системы зафиксировали ошибку.
          </p>
        </motion.div>

        {/* Анимированные графики ошибок */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-3xl mb-12"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-indigo-500" />
                Статистика ошибок за сегодня
              </h3>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {/* Используем состояние для отображения времени */}
                Обновлено: {currentTime}
              </div>
            </div>
            
            {/* Гистограмма ошибок */}
            <div className="h-64 relative">
              <div className="absolute inset-0 flex items-end justify-around">
                {Object.values(errorStats).map((value, i) => (
                  <motion.div
                    key={i}
                    className="w-12 bg-gradient-to-t from-indigo-600 to-blue-400 rounded-t-lg"
                    initial={{ height: 0 }}
                    animate={{ height: `${Math.min(value, 100)}%` }}
                    transition={{ duration: 1, type: "spring" }}
                  />
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-around">
                <div className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">404</div>
                <div className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">Загрузка</div>
                <div className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">API</div>
                <div className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">Соединение</div>
                <div className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">Браузер</div>
              </div>
            </div>
          </div>
          
          {/* Круговая диаграмма распределения ошибок */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <PieChart className="w-5 h-5 mr-2 text-purple-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Распределение ошибок
                </h3>
              </div>
              
              <div className="relative h-48 flex items-center justify-center">
                <ErrorPieChart />
                <div className="absolute text-2xl font-bold text-gray-800 dark:text-gray-200">
                  404
                </div>
              </div>
            </div>
            
            {/* График тенденций ошибок */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <LineChart className="w-5 h-5 mr-2 text-green-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Динамика по времени
                </h3>
              </div>
              
              <div className="h-48 flex items-end">
                <motion.svg 
                  className="w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  <defs>
                    <linearGradient id="errorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M0,100 Q50,90 100,80 T200,95 T300,40 T400,60 T500,30"
                    fill="none"
                    stroke="url(#errorGradient)"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </motion.svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Кнопки навигации */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button asChild size="lg" className="rounded-full">
            <Link href="/" className="flex items-center">
              <Home className="mr-2 h-5 w-5" />
              На главную
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="javascript:history.back()" className="flex items-center">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Вернуться назад
            </Link>
          </Button>
        </motion.div>
      </div>
      
      <div className="text-center p-4 text-gray-600 dark:text-gray-400 text-sm">
        NAVYK &copy; {new Date().getFullYear()} — Даже наши ошибки помогают учиться
      </div>
    </div>
  );
}

// Компонент кругового графика ошибок
function ErrorPieChart() {
  const segments = [
    { percent: 40, color: "bg-red-500" },
    { percent: 25, color: "bg-yellow-500" },
    { percent: 15, color: "bg-blue-500" },
    { percent: 12, color: "bg-green-500" },
    { percent: 8, color: "bg-purple-500" },
  ];
  
  const calculateRotation = (index: number) => {
    const prevSegmentsSum = segments
      .slice(0, index)
      .reduce((sum, segment) => sum + segment.percent, 0);
    return (prevSegmentsSum / 100) * 360;
  };
  
  return (
    <div className="relative w-32 h-32">
      {segments.map((segment, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
        >
          <div
            className={`absolute inset-0 ${segment.color} rounded-full`}
            style={{
              clipPath: `polygon(50% 50%, 50% 0%, ${
                segment.percent >= 50 ? '100% 0%, 100% 100%, 0% 100%, 0% 0%,' : ''
              } ${segment.percent !== 100 ? '50% 0%' : ''})`,
              transform: `rotate(${calculateRotation(i)}deg)`,
            }}
          />
        </motion.div>
      ))}
      <div className="absolute inset-0 rounded-full border-4 border-transparent" />
      <div className="absolute inset-[15%] bg-white dark:bg-gray-800 rounded-full" />
    </div>
  );
} 