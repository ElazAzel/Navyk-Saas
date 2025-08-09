"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import PageLayout from "@/app/components/PageLayout";
import CourseCard, { Course } from "@/app/components/CourseCard";
import { 
  AcademicCapIcon, 
  MagnifyingGlassIcon, 
  FunnelIcon, 
  FireIcon,
  BookOpenIcon,
  ArrowLeftIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

export default function StudentCourses() {
  // Состояния для фильтрации и поиска
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  
  // Состояние для уведомления
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  
  // Данные о курсах
  const [courses, setCourses] = useState<Course[]>([
    {
      id: "c1",
      title: "Основы Python для анализа данных",
      description: "Освойте основы языка Python и его применение для анализа данных. Курс охватывает основные библиотеки (NumPy, Pandas) и методы обработки данных.",
      provider: "DataLearn",
      providerType: "платформа",
      duration: "6 недель",
      hoursPerWeek: 5,
      difficulty: "начинающий",
      rating: 4.7,
      reviewCount: 328,
      students: 12540,
      skills: ["Python", "NumPy", "Pandas", "Анализ данных"],
      modules: [
        { title: "Введение в Python", lessons: 8 },
        { title: "Работа с NumPy", lessons: 6 },
        { title: "Pandas для анализа данных", lessons: 10 },
        { title: "Визуализация с Matplotlib", lessons: 7 },
        { title: "Финальный проект", lessons: 3 }
      ],
      isEnrolled: true,
      progress: 45,
      certificateOnCompletion: true,
      points: 200
    },
    {
      id: "c2",
      title: "Web-разработка с React",
      description: "Изучите создание современных веб-приложений с использованием библиотеки React. От основ до продвинутых концепций и приемов.",
      provider: "WebMasters",
      providerType: "компания",
      duration: "8 недель",
      hoursPerWeek: 6,
      difficulty: "средний",
      rating: 4.8,
      reviewCount: 215,
      students: 8750,
      skills: ["JavaScript", "React", "HTML", "CSS", "Redux"],
      modules: [
        { title: "Основы JavaScript и React", lessons: 12 },
        { title: "Компоненты и их жизненный цикл", lessons: 8 },
        { title: "Работа с состоянием и props", lessons: 6 },
        { title: "Роутинг в React", lessons: 4 },
        { title: "Работа с API и Redux", lessons: 10 },
        { title: "Развертывание приложений", lessons: 5 }
      ],
      isEnrolled: false,
      certificateOnCompletion: true,
      points: 250
    },
    {
      id: "c3",
      title: "Машинное обучение для начинающих",
      description: "Введение в основные концепции и алгоритмы машинного обучения. Вы научитесь применять ML для решения практических задач.",
      provider: "КазНУ им. аль-Фараби",
      providerType: "университет",
      duration: "10 недель",
      hoursPerWeek: 8,
      difficulty: "средний",
      rating: 4.5,
      reviewCount: 195,
      students: 5430,
      skills: ["Machine Learning", "Python", "Scikit-learn", "Математика"],
      modules: [
        { title: "Введение в ML", lessons: 6 },
        { title: "Линейные модели", lessons: 8 },
        { title: "Деревья решений", lessons: 5 },
        { title: "Кластеризация", lessons: 7 },
        { title: "Нейронные сети", lessons: 10 },
        { title: "Проект по ML", lessons: 4 }
      ],
      isEnrolled: false,
      certificateOnCompletion: true,
      points: 300
    },
    {
      id: "c4",
      title: "Разработка мобильных приложений для Android",
      description: "Практический курс по созданию мобильных приложений для платформы Android. От проектирования UI до публикации в Google Play.",
      provider: "Mobile Academy",
      providerType: "компания",
      duration: "12 недель",
      hoursPerWeek: 10,
      difficulty: "продвинутый",
      rating: 4.9,
      reviewCount: 120,
      students: 3200,
      skills: ["Java", "Android SDK", "Kotlin", "UI/UX для мобильных"],
      modules: [
        { title: "Основы Android", lessons: 10 },
        { title: "UI компоненты", lessons: 8 },
        { title: "Жизненный цикл приложения", lessons: 6 },
        { title: "Работа с данными", lessons: 12 },
        { title: "Сетевые запросы", lessons: 7 },
        { title: "Публикация приложения", lessons: 5 }
      ],
      isEnrolled: false,
      certificateOnCompletion: true,
      points: 350
    },
    {
      id: "c5",
      title: "SQL и базы данных",
      description: "Всё, что нужно знать о SQL и реляционных базах данных. Курс охватывает проектирование, запросы, оптимизацию и администрирование БД.",
      provider: "DataLearn",
      providerType: "платформа",
      duration: "6 недель",
      hoursPerWeek: 5,
      difficulty: "начинающий",
      rating: 4.6,
      reviewCount: 280,
      students: 9800,
      skills: ["SQL", "Базы данных", "PostgreSQL", "Моделирование данных"],
      modules: [
        { title: "Введение в базы данных", lessons: 5 },
        { title: "Базовые запросы SQL", lessons: 8 },
        { title: "Сложные запросы и JOIN", lessons: 10 },
        { title: "Индексы и оптимизация", lessons: 7 },
        { title: "Проектирование БД", lessons: 6 }
      ],
      isEnrolled: true,
      progress: 75,
      certificateOnCompletion: true,
      points: 200
    },
    {
      id: "c6",
      title: "Глубокое обучение и нейронные сети",
      description: "Погрузитесь в мир глубокого обучения. Изучите архитектуры нейронных сетей, методы обучения и применение для решения сложных задач.",
      provider: "AI Institute",
      providerType: "компания",
      duration: "14 недель",
      hoursPerWeek: 12,
      difficulty: "продвинутый",
      rating: 4.8,
      reviewCount: 150,
      students: 2800,
      skills: ["Deep Learning", "TensorFlow", "PyTorch", "Computer Vision", "NLP"],
      modules: [
        { title: "Основы нейронных сетей", lessons: 8 },
        { title: "Сверточные сети (CNN)", lessons: 10 },
        { title: "Рекуррентные сети (RNN)", lessons: 9 },
        { title: "Генеративные модели", lessons: 7 },
        { title: "Обработка естественного языка", lessons: 10 },
        { title: "Проект по глубокому обучению", lessons: 6 }
      ],
      price: 50000,
      isEnrolled: false,
      certificateOnCompletion: true,
      points: 400
    }
  ]);
  
  // Текущая страница для пагинации
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;
  
  // Рекомендуемые курсы на основе интересов пользователя
  const recommendedCourses = courses.filter(course => 
    course.skills.some(skill => ["Python", "Data Science", "JavaScript"].includes(skill))
  );
  
  // Текущие курсы, на которые пользователь записан
  const enrolledCourses = courses.filter(course => course.isEnrolled);
  
  // Все курсы, отфильтрованные и отсортированные
  const filteredCourses = courses
    .filter(course => {
      // Фильтрация по поиску
      if (searchQuery && !course.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !course.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !course.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))) {
        return false;
      }
      
      // Фильтрация по сложности
      if (filterDifficulty && course.difficulty !== filterDifficulty) {
        return false;
      }
      
      return true;
    })
    .sort((a, b) => b.rating - a.rating);
  
  // Получаем курсы для текущей страницы
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  
  // Обработчик записи на курс
  const handleEnroll = (courseId: string) => {
    setCourses(prevCourses => 
      prevCourses.map(course => 
        course.id === courseId 
          ? { ...course, isEnrolled: true, progress: 0 } 
          : course
      )
    );
    
    // Показываем уведомление
    setNotification({
      message: "Вы успешно записаны на курс!",
      type: "success"
    });
    
    // Скрываем уведомление через 3 секунды
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };
  
  // Обработчик продолжения курса
  const handleContinue = (courseId: string) => {
    // В реальном приложении здесь был бы редирект на страницу курса
    console.log(`Продолжение курса с ID: ${courseId}`);
  };
  
  // Категории сложности для фильтрации
  const difficulties = [
    { id: "начинающий", label: "Начинающий" },
    { id: "средний", label: "Средний" },
    { id: "продвинутый", label: "Продвинутый" }
  ];
  
  return (
    <PageLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Курсы</h1>
        <p className="text-muted-foreground">
          Изучайте новые навыки, расширяйте свои знания и повышайте квалификацию
        </p>
      </div>
      
      {/* Уведомление */}
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`p-4 mb-6 rounded-lg ${
            notification.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {notification.message}
        </motion.div>
      )}
      
      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="all">Все курсы</TabsTrigger>
          <TabsTrigger value="recommended">Рекомендуемые</TabsTrigger>
          <TabsTrigger value="enrolled">Мои курсы</TabsTrigger>
        </TabsList>
        
        <div className="mb-6">
          <div className="flex gap-2 mb-4">
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск курсов по названию или навыкам..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowFilters(!showFilters)}
              className={showFilters ? "bg-primary text-primary-foreground" : ""}
            >
              <FunnelIcon className="h-4 w-4" />
            </Button>
          </div>
          
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4 p-4 border rounded-lg space-y-4"
            >
              <div>
                <h3 className="text-sm font-medium mb-2">Уровень сложности</h3>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={filterDifficulty === null ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterDifficulty(null)}
                  >
                    Все
                  </Button>
                  
                  {difficulties.map((difficulty) => (
                    <Button
                      key={difficulty.id}
                      variant={filterDifficulty === difficulty.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilterDifficulty(difficulty.id)}
                    >
                      {difficulty.label}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setFilterDifficulty(null);
                    setSearchQuery("");
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            </motion.div>
          )}
        </div>
        
        <TabsContent value="all">
          {currentCourses.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {currentCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onEnroll={handleEnroll}
                    onContinue={handleContinue}
                  />
                ))}
              </div>
              
              {/* Пагинация */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    <ArrowLeftIcon className="h-4 w-4" />
                  </Button>
                  
                  <div className="text-sm">
                    Страница {currentPage} из {totalPages}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    <ArrowRightIcon className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 border rounded-lg bg-muted/20">
              <div className="h-16 w-16 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
                <BookOpenIcon className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-1">Курсы не найдены</h3>
              <p className="text-sm text-muted-foreground">
                Попробуйте изменить параметры поиска или фильтры
              </p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="recommended">
          {recommendedCourses.length > 0 ? (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium mb-2 flex items-center">
                  <FireIcon className="h-5 w-5 mr-1 text-orange-500" />
                  Рекомендуемые курсы
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Эти курсы соответствуют вашим навыкам и интересам
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recommendedCourses.map((course) => (
                    <CourseCard
                      key={course.id}
                      course={course}
                      onEnroll={handleEnroll}
                      onContinue={handleContinue}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg bg-muted/20">
              <div className="h-16 w-16 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
                <FireIcon className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-1">Нет рекомендаций</h3>
              <p className="text-sm text-muted-foreground">
                Мы подготовим для вас персональные рекомендации на основе ваших интересов
              </p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="enrolled">
          {enrolledCourses.length > 0 ? (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium mb-2 flex items-center">
                  <AcademicCapIcon className="h-5 w-5 mr-1 text-blue-500" />
                  Мои курсы
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Курсы, на которые вы записаны
                </p>
                
                <div className="grid grid-cols-1 gap-4">
                  {enrolledCourses.map((course) => (
                    <Card key={course.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                          <div className="flex-1">
                            <Badge variant="outline" className={
                              course.difficulty === "начинающий" ? "bg-green-100 text-green-700" :
                              course.difficulty === "средний" ? "bg-amber-100 text-amber-700" :
                              "bg-purple-100 text-purple-700"
                            }>
                              {course.difficulty === "начинающий" ? "Начинающий" :
                              course.difficulty === "средний" ? "Средний" : "Продвинутый"}
                            </Badge>
                            <h3 className="text-xl font-medium mt-2">{course.title}</h3>
                            <p className="text-sm text-muted-foreground mt-1 mb-4">{course.provider}</p>
                            
                            <div className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span>Прогресс</span>
                                <span>{course.progress}%</span>
                              </div>
                              <Progress value={course.progress} className="h-2" />
                            </div>
                          </div>
                          
                          <div className="flex flex-col justify-end">
                            <Button
                              onClick={() => handleContinue(course.id)}
                              className="flex items-center gap-1"
                            >
                              <span>Продолжить обучение</span>
                              <ArrowRightIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg bg-muted/20">
              <div className="h-16 w-16 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
                <AcademicCapIcon className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-1">Нет активных курсов</h3>
              <p className="text-sm text-muted-foreground">
                Вы еще не записаны ни на один курс
              </p>
              <Button variant="outline" className="mt-4" onClick={() => {
                const tab = document.querySelector(`[data-state="inactive"][value="all"]`) as HTMLElement;
                if (tab) tab.click();
              }}>
                Найти курсы
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
} 