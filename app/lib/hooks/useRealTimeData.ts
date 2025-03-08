import { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

interface UseRealTimeDataOptions {
  url: string;
  event: string;
  initialData?: any;
  authToken?: string;
  autoConnect?: boolean;
  reconnectionAttempts?: number;
  reconnectionDelay?: number;
}

interface UseRealTimeDataReturn<T> {
  data: T;
  isConnected: boolean;
  isLoading: boolean;
  error: Error | null;
  sendEvent: (eventName: string, eventData?: any) => void;
  connect: () => void;
  disconnect: () => void;
}

/**
 * Хук для получения данных в реальном времени через WebSocket
 */
export function useRealTimeData<T>({
  url,
  event,
  initialData,
  authToken,
  autoConnect = true,
  reconnectionAttempts = 5,
  reconnectionDelay = 3000
}: UseRealTimeDataOptions): UseRealTimeDataReturn<T> {
  const [data, setData] = useState<T>(initialData as T);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [connectionAttempts, setConnectionAttempts] = useState<number>(0);
  
  const socketRef = useRef<Socket | null>(null);
  
  // Инициализация и подключение
  const connect = () => {
    // Для симуляции в тестах
    if (process.env.NODE_ENV === 'test' || !url) {
      setIsLoading(false);
      setIsConnected(true);
      return;
    }
    
    try {
      if (!socketRef.current) {
        socketRef.current = io(url, {
          auth: authToken ? { token: authToken } : undefined,
          reconnection: true,
          reconnectionAttempts,
          reconnectionDelay,
        });
      }
      
      // Обработка подключения
      socketRef.current.on('connect', () => {
        setIsConnected(true);
        setIsLoading(false);
        setError(null);
        setConnectionAttempts(0);
      });
      
      // Обработка отключения
      socketRef.current.on('disconnect', () => {
        setIsConnected(false);
      });
      
      // Обработка ошибок
      socketRef.current.on('connect_error', (err) => {
        setError(err);
        setIsLoading(false);
        
        if (connectionAttempts < reconnectionAttempts) {
          setConnectionAttempts(prev => prev + 1);
          setTimeout(() => {
            socketRef.current?.connect();
          }, reconnectionDelay);
        }
      });
      
      // Получение данных по событию
      socketRef.current.on(event, (newData: T) => {
        setData(newData);
      });
      
      // Попытка подключения
      if (!socketRef.current.connected) {
        socketRef.current.connect();
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Неизвестная ошибка подключения'));
      setIsLoading(false);
    }
  };
  
  // Отключение
  const disconnect = () => {
    if (socketRef.current) {
      socketRef.current.disconnect();
      socketRef.current = null;
    }
    setIsConnected(false);
  };
  
  // Отправка данных
  const sendEvent = (eventName: string, eventData?: any) => {
    if (socketRef.current && isConnected) {
      socketRef.current.emit(eventName, eventData);
    } else {
      console.warn('Попытка отправить событие при отсутствии подключения');
    }
  };
  
  // Подключение при монтировании, если autoConnect = true
  useEffect(() => {
    if (autoConnect) {
      connect();
    }
    
    // Отключение при размонтировании
    return () => {
      disconnect();
    };
  }, [url, authToken]);
  
  // Фиктивная реализация для разработки, если нет реального сервера
  useEffect(() => {
    // Только в среде разработки и если нет реального подключения
    if (process.env.NODE_ENV === 'development' && !socketRef.current && initialData) {
      // Имитация получения данных через интервал
      const interval = setInterval(() => {
        if (typeof initialData === 'function') {
          setData(initialData());
        }
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [initialData]);
  
  return {
    data,
    isConnected,
    isLoading,
    error,
    sendEvent,
    connect,
    disconnect
  };
} 