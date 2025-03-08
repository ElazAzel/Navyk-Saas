"use client";

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

interface ToggleButtonProps {
  className?: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ className = '' }) => {
  const [theme, setTheme] = React.useState<string>('light');

  // Использование useEffect для проверки предпочтений пользователя и текущей темы системы
  useEffect(() => {
    // Проверяем, есть ли сохраненная тема в localStorage
    const savedTheme = localStorage.getItem('theme');
    // Проверяем, предпочитает ли пользователь темную тему на уровне ОС
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Устанавливаем тему на основе сохраненных настроек или системных предпочтений
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    
    // Применяем тему к документу
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Сохраняем выбор пользователя
    localStorage.setItem('theme', newTheme);
    
    // Применяем или удаляем класс dark для переключения темы
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={className}
      aria-label="Переключить тему"
    >
      {theme === 'light' ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </Button>
  );
};

export default ToggleButton; 