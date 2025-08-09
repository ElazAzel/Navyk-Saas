"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  CalendarIcon, 
  BriefcaseIcon, 
  AcademicCapIcon, 
  PencilIcon, 
  UserIcon,
  ChartBarIcon, 
  BookOpenIcon,
  FireIcon,
  BellIcon,
  LightBulbIcon,
  ClipboardDocumentListIcon,
  ArrowRightIcon,
  PlusIcon,
  TrophyIcon,
  StarIcon
} from "@heroicons/react/24/outline";
import { FireIcon as FireIconSolid, StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export default function StudentProfile() {
  const [showFullSkills, setShowFullSkills] = useState(false);
  const [activeTab, setActiveTab] = useState("career");

  // Данные студента
  const student = {
    id: "1",
    name: "Алмас Сериков",
    avatarUrl: "/avatars/student1.jpg",
    universityName: "Казахский национальный университет им. аль-Фараби",
    faculty: "Факультет информационных технологий",
    specialization: "Информационные системы",
    course: 3,
    email: "almas.serikov@example.com",
    phone: "+7 (777) 123-45-67",
    skills: [
      { name: "JavaScript", level: 75 },
      { name: "React", level: 65 },
      { name: "Node.js", level: 45 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 60 },
      { name: "Git", level: 72 },
      { name: "Docker", level: 35 },
      { name: "Machine Learning", level: 30 },
    ],
    education: [
      {
        degree: "Бакалавр",
        field: "Информационные системы",
        institution: "КазНУ им. аль-Фараби",
        startYear: 2021,
        endYear: 2025,
        current: true,
      }
    ],
    experience: [
      {
        position: "Стажер-разработчик",
        company: "TechKZ",
        startDate: "Июнь 2022",
        endDate: "Август 2022",
        description: "Разработка и тестирование веб-приложений на React"
      },
      {
        position: "Младший разработчик",
        company: "DataVision",
        startDate: "Январь 2023",
        endDate: "Настоящее время",
        description: "Создание и поддержка приложений обработки данных с использованием Python и SQL"
      }
    ],
    certifications: [
      {
        name: "Web Development Fundamentals",
        issuer: "Coursera",
        date: "Март 2022",
        url: "#"
      },
      {
        name: "Python для Data Science",
        issuer: "Stepik",
        date: "Сентябрь 2022",
        url: "#"
      }
    ],
    languages: [
      { name: "Казахский", level: "Родной" },
      { name: "Русский", level: "Свободно" },
      { name: "Английский", level: "B2" }
    ],
    stats: {
      completedCourses: 7,
      inProgressCourses: 2,
      participatedEvents: 12,
      appliedJobs: 5,
      totalPoints: 3750,
      level: 14,
      streak: 8, // Дней подряд активности
      ranking: 23, // Место в рейтинге среди студентов
      badgesCount: 12
    },
    recentActivity: [
      { type: "course", action: "Завершен курс", target: "JavaScript Продвинутый", date: "12 мая 2023", points: 150 },
      { type: "event", action: "Посещение мероприятия", target: "Хакатон AI Solutions", date: "5 мая 2023", points: 200 },
      { type: "job", action: "Отклик на вакансию", target: "Junior Python Developer", date: "2 мая 2023", points: 30 },
    ],
    recommendations: [
      { type: "course", title: "React для продвинутых", provider: "Udemy", relevance: 97, rewardPoints: 250 },
      { type: "event", title: "Воркшоп по DevOps практикам", date: "22 мая 2023", relevance: 85, rewardPoints: 150 },
      { type: "job", title: "Middle JavaScript Developer", company: "ITSolutions", relevance: 82, rewardPoints: 500 },
    ],
    achievements: [
      { title: "Первые шаги", description: "Завершите первый курс", date: "10 марта", completed: true },
      { title: "Стабильность", description: "7 дней активности подряд", date: "15 апреля", completed: true },
      { title: "Нетворкер", description: "Посетите 5 мероприятий", date: "2 мая", completed: true },
      { title: "Исследователь", description: "Пройдите курсы из 3 разных категорий", progress: 67, completed: false },
      { title: "Быстрый старт", description: "Заполните профиль за первый день", date: "1 марта", completed: true },
    ]
  };

  return (
    <PageLayout>
      {/* Верхняя панель с профилем и эелементами геймификации */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        {/* Профиль и геймификация */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-2">
                  <AvatarImage src={student.avatarUrl} alt={student.name} />
                  <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{student.name}</CardTitle>
                <CardDescription className="text-center mt-1">{student.specialization}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {/* Игровые элементы и статистика */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FireIconSolid className="h-5 w-5 text-amber-500" />
                  <span className="font-semibold text-lg">Уровень {student.stats.level}</span>
                  <StarIconSolid className="h-5 w-5 text-amber-500 ml-1" />
                </div>
                
                <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden mb-1">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "65%" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
                  />
                </div>
                <div className="text-center text-sm text-muted-foreground mb-3">2450 / 3800 XP</div>
                
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">{student.stats.streak}</span>
                    <span className="text-xs text-muted-foreground">Дней подряд</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">#{student.stats.ranking}</span>
                    <span className="text-xs text-muted-foreground">Рейтинг</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">{student.stats.badgesCount}</span>
                    <span className="text-xs text-muted-foreground">Бейджей</span>
                  </div>
                </div>
              </div>
              
              {/* Быстрый доступ к основным разделам */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <Link 
                  href="/students/courses" 
                  className="flex flex-col items-center justify-center bg-muted/40 rounded-lg p-3 hover:bg-muted transition-colors"
                >
                  <BookOpenIcon className="h-6 w-6 text-blue-500 mb-1" />
                  <span className="text-xs text-center">Курсы</span>
                  <span className="text-xs font-semibold">{student.stats.completedCourses + student.stats.inProgressCourses}</span>
                </Link>
                <Link 
                  href="/students/events" 
                  className="flex flex-col items-center justify-center bg-muted/40 rounded-lg p-3 hover:bg-muted transition-colors"
                >
                  <CalendarIcon className="h-6 w-6 text-green-500 mb-1" />
                  <span className="text-xs text-center">Мероприятия</span>
                  <span className="text-xs font-semibold">{student.stats.participatedEvents}</span>
                </Link>
                <Link 
                  href="/students/jobs" 
                  className="flex flex-col items-center justify-center bg-muted/40 rounded-lg p-3 hover:bg-muted transition-colors"
                >
                  <BriefcaseIcon className="h-6 w-6 text-purple-500 mb-1" />
                  <span className="text-xs text-center">Вакансии</span>
                  <span className="text-xs font-semibold">{student.stats.appliedJobs}</span>
                </Link>
                <Link 
                  href="/students/achievements" 
                  className="flex flex-col items-center justify-center bg-muted/40 rounded-lg p-3 hover:bg-muted transition-colors"
                >
                  <TrophyIcon className="h-6 w-6 text-amber-500 mb-1" />
                  <span className="text-xs text-center">Достижения</span>
                  <span className="text-xs font-semibold">{student.achievements.filter(a => a.completed).length}</span>
                </Link>
              </div>
              
              <Button variant="outline" size="sm" className="w-full mt-2 flex items-center justify-center gap-1">
                <PencilIcon className="h-4 w-4" /> Редактировать профиль
              </Button>
            </CardContent>
          </Card>
          
          {/* Последние достижения */}
          <Card className="mt-6">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Достижения</CardTitle>
              <CardDescription>Ваши последние награды</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {student.achievements.slice(0, 3).map((achievement, idx) => (
                <div key={idx} className="flex items-center gap-3 rounded-lg p-2 hover:bg-muted/50 transition-colors">
                  <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-xl">
                    {achievement.completed ? "🏆" : "🔄"}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{achievement.title}</p>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    {achievement.completed && (
                      <p className="text-xs text-amber-600 dark:text-amber-400">{achievement.date}</p>
                    )}
                    {!achievement.completed && (
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden mt-1">
                        <div 
                          className="h-full bg-amber-500" 
                          style={{ width: `${achievement.progress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <Link href="/students/achievements">
                <Button variant="ghost" size="sm" className="w-full text-xs">
                  Все достижения
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Основной контент с вкладками - ИСПРАВЛЕННАЯ СТРУКТУРА */}
        <div className="lg:col-span-9">
          <Card className="h-full">
            <CardHeader>
              <div className="flex justify-between items-center mb-3">
                <div>
                  <CardTitle className="text-xl mb-1">
                    {activeTab === "career" && "Карьерный план"}
                    {activeTab === "skills" && "Навыки и образование"}
                    {activeTab === "details" && "Личная информация"}
                  </CardTitle>
                  <CardDescription>
                    {activeTab === "career" && "Ваш персонализированный путь развития"}
                    {activeTab === "skills" && "Технические навыки и образование"}
                    {activeTab === "details" && "Дополнительная информация о вас"}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <CardContent className="pb-0">
                <TabsList className="w-full grid grid-cols-3 mb-4">
                  <TabsTrigger value="career">Карьерный план</TabsTrigger>
                  <TabsTrigger value="skills">Навыки</TabsTrigger>
                  <TabsTrigger value="details">Детали</TabsTrigger>
                </TabsList>
              </CardContent>
              <CardContent className="pt-0">
                <TabsContent value="career" className="mt-0 space-y-6">
                  {/* Карьерный план и прогресс */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Карьерный прогресс</h3>
                      
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="bg-blue-100/50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 hover:bg-blue-100/80">
                          {student.specialization}
                        </Badge>
                        <ArrowRightIcon className="h-4 w-4 text-muted-foreground" />
                        <Badge variant="secondary" className="bg-purple-100/50 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 hover:bg-purple-100/80">
                          Middle Developer
                        </Badge>
                      </div>
                      
                      <div className="h-3 w-full bg-muted rounded-full overflow-hidden mb-1 mt-3">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "42%" }}
                          transition={{ duration: 1.5, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        />
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Текущий прогресс</span>
                        <span className="font-medium">42%</span>
                      </div>
                      
                      <h3 className="text-base font-medium mt-6 mb-3">Соответствие требованиям</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Технические навыки</span>
                            <span className="font-medium">65%</span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "65%" }}
                              transition={{ duration: 1, delay: 0.3 }}
                              className="h-full bg-blue-500 rounded-full"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Опыт работы</span>
                            <span className="font-medium">45%</span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "45%" }}
                              transition={{ duration: 1, delay: 0.4 }}
                              className="h-full bg-green-500 rounded-full"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Сертификаты</span>
                            <span className="font-medium">30%</span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "30%" }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className="h-full bg-amber-500 rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Button className="w-full">Перейти к полной карьерной карте</Button>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-medium">Рекомендации</h3>
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                          Персонализировано
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        {student.recommendations.map((rec, idx) => (
                          <Link 
                            key={idx}
                            href="#" 
                            className="flex items-start p-3 border rounded-lg hover:bg-muted/40 transition-colors"
                          >
                            <div className="mt-0.5 mr-3">
                              {rec.type === "course" ? (
                                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                  <BookOpenIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                </div>
                              ) : rec.type === "event" ? (
                                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                  <CalendarIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
                                </div>
                              ) : (
                                <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                  <BriefcaseIcon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                </div>
                              )}
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="font-medium">{rec.title}</p>
                                  <p className="text-sm text-muted-foreground">
                                    {rec.provider || rec.company || rec.date}
                                  </p>
                                </div>
                                <Badge variant="outline" className="ml-2 whitespace-nowrap">
                                  {rec.relevance}% совпадение
                                </Badge>
                              </div>
                              
                              <div className="flex items-center gap-2 mt-2">
                                <Badge variant="secondary" className="flex items-center gap-1">
                                  <StarIcon className="h-3 w-3" />
                                  <span>+{rec.rewardPoints} XP</span>
                                </Badge>
                                <p className="text-xs text-muted-foreground">Ускорит ваш прогресс на 8%</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      <div className="mt-4">
                        <Link href="/students/recommendations">
                          <Button variant="outline" className="w-full">Все рекомендации</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Последние активности */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-medium">Недавняя активность</h3>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <FireIconSolid className="h-3 w-3 text-amber-500" />
                        <span>{student.stats.streak} дней подряд</span>
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {student.recentActivity.map((activity, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-muted/40 transition-colors">
                          <div className="mt-0.5">
                            {activity.type === "course" ? (
                              <div className="h-9 w-9 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                <BookOpenIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                              </div>
                            ) : activity.type === "event" ? (
                              <div className="h-9 w-9 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                <CalendarIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
                              </div>
                            ) : (
                              <div className="h-9 w-9 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                <BriefcaseIcon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                              </div>
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm line-clamp-1">{activity.target}</p>
                            <p className="text-xs text-muted-foreground">{activity.action}</p>
                            <div className="flex justify-between items-center mt-1">
                              <p className="text-xs text-muted-foreground">{activity.date}</p>
                              <Badge variant="secondary" className="text-xs">+{activity.points} XP</Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-3 flex justify-end">
                      <Link href="/students/activity">
                        <Button variant="link" size="sm" className="flex items-center gap-1">
                          <span>Вся активность</span>
                          <ArrowRightIcon className="h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="skills" className="mt-0 space-y-6">
                  {/* Навыки и образование */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Навыки */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-medium">Технические навыки</h3>
                        <Button 
                          onClick={() => setShowFullSkills(!showFullSkills)} 
                          variant="ghost" 
                          size="sm" 
                          className="text-xs"
                        >
                          {showFullSkills ? "Свернуть" : "Показать все"}
                        </Button>
                      </div>
                      
                      <div className="space-y-3">
                        {(showFullSkills ? student.skills : student.skills.slice(0, 5)).map((skill) => (
                          <div key={skill.name} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>{skill.name}</span>
                              <span className="font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 flex justify-end">
                        <Button size="sm" variant="outline" className="flex items-center gap-1">
                          <PlusIcon className="h-4 w-4" />
                          <span>Добавить навык</span>
                        </Button>
                      </div>
                    </div>
                    
                    {/* Образование */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-medium">Образование</h3>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <PlusIcon className="h-4 w-4" />
                          <span>Добавить</span>
                        </Button>
                      </div>
                      
                      <div className="space-y-4">
                        {student.education.map((edu, index) => (
                          <div key={index} className="flex gap-4 p-3 border rounded-lg">
                            <div className="mt-1">
                              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <AcademicCapIcon className="h-5 w-5 text-primary" />
                              </div>
                            </div>
                            <div>
                              <h3 className="font-medium">{edu.degree} в {edu.field}</h3>
                              <p className="text-sm text-muted-foreground">{edu.institution}</p>
                              <p className="text-xs text-muted-foreground">
                                {edu.startYear} - {edu.current ? "настоящее время" : edu.endYear}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <h3 className="text-lg font-medium mt-6 mb-3">Опыт работы</h3>
                      <div className="space-y-4">
                        {student.experience.map((exp, index) => (
                          <div key={index} className="flex gap-4 p-3 border rounded-lg">
                            <div className="mt-1">
                              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <BriefcaseIcon className="h-5 w-5 text-primary" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium">{exp.position}</h3>
                              <p className="text-sm text-muted-foreground">{exp.company}</p>
                              <p className="text-xs text-muted-foreground">
                                {exp.startDate} - {exp.endDate}
                              </p>
                              <p className="text-sm mt-1">{exp.description}</p>
                            </div>
                          </div>
                        ))}
                        
                        <Button variant="outline" size="sm" className="w-full mt-2 flex items-center justify-center gap-1">
                          <PlusIcon className="h-4 w-4" />
                          <span>Добавить опыт работы</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="details" className="mt-0 space-y-6">
                  {/* Личная информация */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Основная информация */}
                    <div>
                      <h3 className="text-lg font-medium mb-3">Контактная информация</h3>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="space-y-2">
                            <div className="flex justify-between pb-2 border-b">
                              <span className="text-muted-foreground">Имя</span>
                              <span className="font-medium">{student.name}</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b">
                              <span className="text-muted-foreground">Email</span>
                              <span className="font-medium">{student.email}</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b">
                              <span className="text-muted-foreground">Телефон</span>
                              <span className="font-medium">{student.phone}</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b">
                              <span className="text-muted-foreground">Университет</span>
                              <span className="font-medium">{student.universityName}</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b">
                              <span className="text-muted-foreground">Факультет</span>
                              <span className="font-medium">{student.faculty}</span>
                            </div>
                            <div className="flex justify-between pb-2">
                              <span className="text-muted-foreground">Курс</span>
                              <span className="font-medium">{student.course}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <h3 className="text-lg font-medium mt-6 mb-3">Языки</h3>
                      <div className="flex flex-wrap gap-3">
                        {student.languages.map((language, index) => (
                          <div key={index} className="flex items-center gap-2 bg-muted/40 rounded-lg px-4 py-2">
                            <span className="text-sm font-medium">{language.name}</span>
                            <Badge variant="outline">{language.level}</Badge>
                          </div>
                        ))}
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <PlusIcon className="h-4 w-4" />
                          <span>Добавить</span>
                        </Button>
                      </div>
                    </div>
                    
                    {/* Сертификаты */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-medium">Сертификаты</h3>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <PlusIcon className="h-4 w-4" />
                          <span>Добавить</span>
                        </Button>
                      </div>
                      
                      <div className="space-y-4">
                        {student.certifications.map((cert, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-muted/40 transition-colors">
                            <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                              <AcademicCapIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium">{cert.name}</h3>
                              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                              <p className="text-xs text-muted-foreground">Выдан: {cert.date}</p>
                            </div>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={cert.url}>Просмотр</Link>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
