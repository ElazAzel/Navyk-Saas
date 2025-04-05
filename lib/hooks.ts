import { useState, useEffect, useRef, useCallback } from 'react';

// Хук для обнаружения видимости элемента в области видимости
export function useInView(options = {}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);
    
    observer.observe(ref.current);
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);
  
  return [ref, inView];
}

// Хук для анимации счетчика
export function useCounter(start: number, end: number, duration = 2000) {
  const [count, setCount] = useState(start);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    let current = start;
    
    intervalRef.current = setInterval(() => {
      current += 1;
      setCount(current);
      
      if (current >= end) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    }, stepTime);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [start, end, duration]);
  
  return count;
}

// Хук для плавного появления при скролле
export function useFadeIn(delay = 0, duration = 0.5) {
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    rootMargin: '-100px 0px'
  });
  
  const style = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
    transitionDelay: `${delay}s`
  };
  
  return [ref, style];
}

// Хук для обработки конфетти при достижении
export function useConfetti() {
  const [isActive, setIsActive] = useState(false);
  
  const triggerConfetti = useCallback(() => {
    setIsActive(true);
    
    setTimeout(() => {
      setIsActive(false);
    }, 3000);
  }, []);
  
  return [isActive, triggerConfetti];
}

// Хук для отслеживания размера экрана
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Вызываем сразу, чтобы установить начальное значение
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return windowSize;
}

// Хук для анимированного скролла к элементу
export function useSmoothScroll() {
  const scrollTo = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);
  
  return scrollTo;
}

// Хук для создания эффекта ввода текста
export function useTypewriter(text: string, speed = 50) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const startTyping = useCallback(() => {
    setIsTyping(true);
    setDisplayedText('');
  }, []);
  
  useEffect(() => {
    if (!isTyping) return;
    
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed, isTyping]);
  
  return [displayedText, startTyping, isTyping];
} 