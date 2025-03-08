"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/app/components/PageLayout";
import AchievementCard, { Achievement } from "@/app/components/AchievementCard";
import UserLevel from "@/app/components/UserLevel";
import {
  TrophyIcon,
  FireIcon,
  AcademicCapIcon,
  ChartBarIcon,
  CalendarIcon,
  ArrowPathIcon,
  UsersIcon,
  CheckCircleIcon,
  GiftIcon
} from "@heroicons/react/24/outline";
import {
  FireIcon as FireIconSolid,
  AcademicCapIcon as AcademicCapIconSolid,
  CheckCircleIcon as CheckCircleIconSolid
} from "@heroicons/react/24/solid";

export default function StudentAchievements() {
  const [userPoints, setUserPoints] = useState(2350);
  const [userLevel, setUserLevel] = useState(5);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: "a1",
      title: "Первые шаги",
      description: "Завершите свой первый курс на платформе",
      icon: "🎓",
      progress: 1,
      maxProgress: 1,
      category: "учёба",
      completed: true,
      dateCompleted: "15 мая 2023",
      reward: {
        type: "баллы",
        value: 100
      }
    },
    {
      id: "a2",
      title: "Неделя огня",
      description: "Заходите в приложение 7 дней подряд",
      icon: "🔥",
      progress: 5,
      maxProgress: 7,
      category: "активность",
      completed: false,
      reward: {
        type: "баллы",
        value: 150
      }
    },
    {
      id: "a3",
      title: "Сетевик",
      description: "Добавьте 5 контактов в свою сеть",
      icon: "👥",
      progress: 3,
      maxProgress: 5,
      category: "активность",
      completed: false,
      reward: {
        type: "баллы",
        value: 100
      }
    },
    {
      id: "a4",
      title: "Исследователь технологий",
      description: "Пройдите курсы в 3 разных технологических областях",
      icon: "🚀",
      progress: 2,
      maxProgress: 3,
      category: "учёба",
      completed: false,
      reward: {
        type: "баллы",
        value: 200
      }
    },
    {
      id: "a5",
      title: "Мастер собеседований",
      description: "Пройдите 3 тренировочных собеседования",
      icon: "💼",
      progress: 3,
      maxProgress: 3,
      category: "карьера",
      completed: true,
      dateCompleted: "3 июня 2023",
      reward: {
        type: "баллы",
        value: 200
      }
    },
    {
      id: "a6",
      title: "Эксперт по Python",
      description: "Достигните продвинутого уровня навыка Python",
      icon: "🐍",
      progress: 80,
      maxProgress: 100,
      category: "навыки",
      completed: false,
      reward: {
        type: "бейдж",
        value: "Python Expert"
      }
    },
    {
      id: "a7",
      title: "Карьерный старт",
      description: "Получите свое первое предложение о стажировке",
      icon: "🚀",
      progress: 1,
      maxProgress: 1,
      category: "карьера",
      completed: true,
      dateCompleted: "10 июня 2023",
      reward: {
        type: "статус",
        value: "Начинающий профессионал"
      }
    },
    {
      id: "a8",
      title: "Мастер презентаций",
      description: "Проведите 3 публичных выступления",
      icon: "🎤",
      progress: 1,
      maxProgress: 3,
      category: "навыки",
      completed: false,
      reward: {
        type: "баллы",
        value: 150
      }
    }
  ]);
  
  const [streak, setStreak] = useState({
    current: 5,
    longest: 14,
    lastActive: new Date().toISOString().split('T')[0]
  });
  
  const [recentRewards, setRecentRewards] = useState([
    { date: "23 июня 2023", points: 50, reason: "Ежедневное посещение" },
    { date: "22 июня 2023", points: 100, reason: "Завершение модуля Python для анализа данных" },
    { date: "20 июня 2023", points: 75, reason: "Участие в вебинаре" },
    { date: "19 июня 2023", points: 50, reason: "Ежедневное посещение" },
    { date: "18 июня 2023", points: 50, reason: "Ежедневное посещение" }
  ]);
  
  // Категории для фильтрации
  const categories = ["все", "учёба", "активность", "карьера", "навыки"];
  const [selectedCategory, setSelectedCategory] = useState("все");
  
  // Фильтрация достижений по категории
  const filteredAchievements = selectedCategory === "все" 
    ? achievements 
    : achievements.filter(a => a.category === selectedCategory);
  
  // Прогресс по категориям
  const categoryProgress = {
    "учёба": Math.round(achievements
      .filter(a => a.category === "учёба")
      .reduce((acc, a) => acc + (a.completed ? 1 : 0), 0) / 
      achievements.filter(a => a.category === "учёба").length * 100),
    
    "активность": Math.round(achievements
      .filter(a => a.category === "активность")
      .reduce((acc, a) => acc + (a.completed ? 1 : 0), 0) / 
      achievements.filter(a => a.category === "активность").length * 100),
    
    "карьера": Math.round(achievements
      .filter(a => a.category === "карьера")
      .reduce((acc, a) => acc + (a.completed ? 1 : 0), 0) / 
      achievements.filter(a => a.category === "карьера").length * 100),
    
    "навыки": Math.round(achievements
      .filter(a => a.category === "навыки")
      .reduce((acc, a) => acc + (a.completed ? 1 : 0), 0) / 
      achievements.filter(a => a.category === "навыки").length * 100)
  };
  
  const handleClaimReward = (achievementId: string) => {
    const achievement = achievements.find(a => a.id === achievementId);
    if (!achievement || !achievement.completed) return;
    
    if (achievement.reward.type === "баллы") {
      // Анимация перехода на новый уровень
      const currentPoints = userPoints;
      const newPoints = userPoints + (achievement.reward.value as number);
      setUserPoints(newPoints);
      
      // Проверка на повышение уровня (простая логика: 1 уровень = 500 очков)
      const currentLevel = Math.floor(currentPoints / 500);
      const newLevel = Math.floor(newPoints / 500);
      
      if (newLevel > currentLevel) {
        setUserLevel(newLevel);
        setShowLevelUp(true);
      }
      
      // Добавляем в недавние награды
      setRecentRewards(prev => [{
        date: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }),
        points: achievement.reward.value as number,
        reason: `Достижение: ${achievement.title}`
      }, ...prev.slice(0, 4)]);
    }
    
    // Убираем достижение из списка
    setAchievements(prev => prev.filter(a => a.id !== achievementId));
  };
  
  return (
    <PageLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Достижения и бонусы</h1>
        <p className="text-muted-foreground">
          Получайте награды за активность, обучение и развитие навыков
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Левая колонка - Статистика и награды */}
        <div className="space-y-6">
          {/* Уровень и общая статистика */}
          <UserLevel 
            level={userLevel}
            points={userPoints}
            pointsToNextLevel={500}
            rankTitle="Активный исследователь"
            showAnimation={showLevelUp}
          />
          
          {/* Статистика по достижениям */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrophyIcon className="h-5 w-5 text-amber-500" />
                Прогресс достижений
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center p-3">
                  <div className="text-3xl font-bold">
                    {achievements.filter(a => a.completed).length}
                  </div>
                  <div className="text-xs text-muted-foreground text-center">
                    Выполненных<br />достижений
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-center p-3">
                  <div className="text-3xl font-bold">
                    {achievements.length - achievements.filter(a => a.completed).length}
                  </div>
                  <div className="text-xs text-muted-foreground text-center">
                    Доступных<br />достижений
                  </div>
                </div>
                
                <div className="col-span-2 space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="flex items-center gap-1">
                        <AcademicCapIcon className="h-3.5 w-3.5 text-blue-500" />
                        Учёба
                      </span>
                      <span>{categoryProgress["учёба"]}%</span>
                    </div>
                    <Progress value={categoryProgress["учёба"]} className="h-1.5" />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="flex items-center gap-1">
                        <FireIcon className="h-3.5 w-3.5 text-green-500" />
                        Активность
                      </span>
                      <span>{categoryProgress["активность"]}%</span>
                    </div>
                    <Progress value={categoryProgress["активность"]} className="h-1.5" />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="flex items-center gap-1">
                        <ChartBarIcon className="h-3.5 w-3.5 text-purple-500" />
                        Карьера
                      </span>
                      <span>{categoryProgress["карьера"]}%</span>
                    </div>
                    <Progress value={categoryProgress["карьера"]} className="h-1.5" />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="flex items-center gap-1">
                        <CheckCircleIcon className="h-3.5 w-3.5 text-amber-500" />
                        Навыки
                      </span>
                      <span>{categoryProgress["навыки"]}%</span>
                    </div>
                    <Progress value={categoryProgress["навыки"]} className="h-1.5" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Текущая серия */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <FireIconSolid className="h-5 w-5 text-orange-500" />
                Серия активности
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="flex flex-col items-center">
                <motion.div 
                  className="flex items-center justify-center h-24 w-24 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white mb-3"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: [0.9, 1.1, 0.9] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                >
                  <span className="text-4xl font-bold">{streak.current}</span>
                </motion.div>
                <p className="text-sm text-center mb-4">
                  дней подряд<br/>
                  <span className="text-xs text-muted-foreground">Лучшая серия: {streak.longest} дней</span>
                </p>
                
                <div className="grid grid-cols-7 gap-1 w-full mb-2">
                  {[...Array(7)].map((_, i) => {
                    const active = i < streak.current;
                    return (
                      <div key={i} className="flex flex-col items-center">
                        <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium ${active ? 'bg-orange-100 text-orange-700' : 'bg-muted text-muted-foreground'}`}>
                          {i + 1}
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <p className="text-xs text-muted-foreground text-center mt-1">
                  Заходите в приложение каждый день, чтобы поддерживать серию активности и получать дополнительные бонусы
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Недавние награды */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <GiftIcon className="h-5 w-5 text-pink-500" />
                Недавние награды
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="space-y-3">
                {recentRewards.map((reward, index) => (
                  <div key={index} className="flex justify-between items-center py-1 border-b last:border-b-0">
                    <div>
                      <p className="text-sm font-medium">{reward.reason}</p>
                      <p className="text-xs text-muted-foreground">{reward.date}</p>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700">
                      +{reward.points}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Правая колонка - достижения */}
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">Ваши достижения</CardTitle>
                
                <div className="flex space-x-1">
                  {categories.map(category => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="text-xs py-1 h-7"
                    >
                      {category === "все" ? "Все" : category}
                    </Button>
                  ))}
                </div>
              </div>
              <CardDescription>
                Выполняйте достижения, чтобы получать бонусы и открывать новые возможности
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredAchievements.map(achievement => (
                  <AchievementCard
                    key={achievement.id}
                    achievement={achievement}
                    onClaimReward={handleClaimReward}
                    isNew={false}
                  />
                ))}
                
                {filteredAchievements.length === 0 && (
                  <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                    <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                      <TrophyIcon className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium mb-1">Нет доступных достижений</h3>
                    <p className="text-sm text-muted-foreground">
                      В этой категории пока нет доступных достижений. Попробуйте выбрать другую категорию или проверьте позже.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Другие способы получения баллов */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Как еще получить баллы?</CardTitle>
              <CardDescription>
                Получайте баллы за разные активности на платформе
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <AcademicCapIconSolid className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-medium mb-1">Завершайте курсы</h3>
                  <p className="text-sm text-muted-foreground">
                    До 500 баллов за каждый пройденный курс в зависимости от сложности
                  </p>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mb-3">
                    <CalendarIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-medium mb-1">Участвуйте в мероприятиях</h3>
                  <p className="text-sm text-muted-foreground">
                    От 50 до 200 баллов за участие в вебинарах, мастер-классах и конференциях
                  </p>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                    <CheckCircleIconSolid className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="font-medium mb-1">Проходите тесты</h3>
                  <p className="text-sm text-muted-foreground">
                    До 100 баллов за каждый успешно пройденный тест навыков
                  </p>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                    <UsersIcon className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="font-medium mb-1">Расширяйте сеть</h3>
                  <p className="text-sm text-muted-foreground">
                    25 баллов за каждое новое подтвержденное подключение к вашей сети
                  </p>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center mb-3">
                    <FireIconSolid className="h-5 w-5 text-pink-600" />
                  </div>
                  <h3 className="font-medium mb-1">Поддерживайте серию</h3>
                  <p className="text-sm text-muted-foreground">
                    50 баллов каждый день за вход в приложение, с бонусами за серию
                  </p>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
                    <ArrowPathIcon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="font-medium mb-1">Обновляйте профиль</h3>
                  <p className="text-sm text-muted-foreground">
                    До 200 баллов за полностью заполненный и актуальный профиль
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
} 