import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Функция для анимации чисел (например, для счетчика очков)
export function animateValue(
  start: number,
  end: number, 
  duration: number = 800,
  callback: (value: number) => void
) {
  let startTimestamp: number | null = null;
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const currentValue = Math.floor(progress * (end - start) + start);
    callback(currentValue);
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      callback(end); // Убедимся, что в конце отображается точное значение
    }
  };
  
  window.requestAnimationFrame(step);
}

// Функция для получения случайного элемента из массива
export function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

// Функция для форматирования даты
export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("ru-RU", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Функция для форматирования даты и времени
export function formatDateTime(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleString("ru-RU", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// Функция для усечения строки
export function truncate(str: string, length: number): string {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}

// Функция для получения инициалов
export function getInitials(name: string): string {
  const [firstName, lastName] = name.split(" ");
  if (!lastName) return firstName.charAt(0).toUpperCase();
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}

// Функция для получения случайного элемента из массива
export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для форматирования числа с разделителями тысяч
export function formatNumber(num: number): string {
  return new Intl.NumberFormat("ru-RU").format(num);
}

// Функция для склонения русских слов
export function pluralize(count: number, one: string, few: string, many: string): string {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return one;
  } else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
    return few;
  } else {
    return many;
  }
}

export function shimmer(w: number, h: number): string {
  return `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#f6f7f8" offset="0%" />
          <stop stop-color="#edeef1" offset="20%" />
          <stop stop-color="#f6f7f8" offset="40%" />
          <stop stop-color="#f6f7f8" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#f6f7f8" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>
  `;
}

export function toBase64(str: string): string {
  return typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
} 