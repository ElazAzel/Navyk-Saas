"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { AdjustmentsHorizontalIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import RecommendationCard from "@/components/RecommendationCard";
import PageLayout from "@/app/components/PageLayout";

export default function StudentRecommendations() {
  // Данные рекомендаций
  const recommendations = {
    courses: [
      {
        id: "course1",
        title: "Node.js и Express: бэкенд-разработка",
        description: "Научитесь создавать серверную часть приложений с помощью Node.js и Express — самых востребованных технологий в Казахстане.",
        type: "course",
        imageUrl: "/images/courses/nodejs.jpg",
        relevanceScore: 95,
        reasonMatched: [
          "Подходит для вашей цели стать Full-Stack разработчиком",
          "Дополняет ваши навыки JavaScript",
          "Высокий спрос на рынке труда Казахстана"
        ],
        requiredSkills: ["JavaScript", "Git", "Основы HTTP"],
        deadline: "Набор открыт",
        url: "/courses/nodejs-express",
        isLocked: false
      },
      {
        id: "course2",
        title: "TypeScript для React-разработчиков",
        description: "Освойте TypeScript и создавайте надежные React-приложения. Навык, который ищут все IT-компании Казахстана.",
        type: "course",
        imageUrl: "/images/courses/typescript.jpg",
        relevanceScore: 90,
        reasonMatched: [
          "Усилит ваши навыки React",
          "Востребован в 8 из 10 вакансий",
          "Увеличит ваш доход на 15-20%"
        ],
        requiredSkills: ["JavaScript", "React", "ES6+"],
        deadline: "Старт 1 июня 2023",
        url: "/courses/typescript-react",
        isLocked: false
      },
      {
        id: "course3",
        title: "Алгоритмы и структуры данных",
        description: "Изучите алгоритмы и структуры данных, необходимые для прохождения технических интервью в ведущих IT-компаниях Казахстана.",
        type: "course",
        imageUrl: "/images/courses/algorithms.jpg",
        relevanceScore: 75,
        reasonMatched: [
          "Обязательное требование в Kolesa Group, Chocofamily и BTS Digital",
          "Поможет писать эффективный код"
        ],
        requiredSkills: ["Базовые алгоритмы", "Python или JavaScript"],
        deadline: "Старт 15 июня 2023",
        url: "/courses/advanced-algorithms",
        isLocked: false
      },
      {
        id: "course4",
        title: "AWS для разработчиков",
        description: "Научитесь работать с облачными технологиями AWS — навык, который высоко ценится в международных компаниях с офисами в Казахстане.",
        type: "course",
        imageUrl: "/images/courses/aws.jpg",
        relevanceScore: 65,
        reasonMatched: [
          "DevOps-навыки увеличивают зарплату на 25-30%",
          "Необходим для работы в международных компаниях"
        ],
        requiredSkills: ["JavaScript", "Основы бэкенда"],
        deadline: "Старт 10 июля 2023",
        url: "/courses/aws-developers",
        isLocked: true,
        unlockRequirement: "Сначала пройдите курс 'Node.js и Express'"
      }
    ],
    events: [
      {
        id: "event1",
        title: "Мастер-класс: React + TypeScript на практике",
        description: "Практический воркшоп по разработке современных React-приложений с TypeScript от ведущих разработчиков Казахстана.",
        type: "event",
        imageUrl: "/images/events/react-typescript.jpg",
        relevanceScore: 95,
        reasonMatched: [
          "Соответствует вашему уровню React",
          "Поможет освоить TypeScript за один день",
          "Нетворкинг с опытными разработчиками"
        ],
        requiredSkills: ["React", "JavaScript"],
        deadline: "15 мая 2023, 14:00",
        url: "/events/react-typescript-workshop",
        isLocked: false
      },
      {
        id: "event2",
        title: "IT-Recruitment Day Алматы",
        description: "Встреча с HR-специалистами и техническими рекрутерами ведущих IT-компаний Казахстана. Возможность пройти экспресс-собеседование.",
        type: "event",
        imageUrl: "/images/events/career-day.jpg",
        relevanceScore: 90,
        reasonMatched: [
          "Прямой контакт с работодателями",
          "Шанс получить оффер на месте",
          "Отзывы о вашем резюме от HR-специалистов"
        ],
        deadline: "20 мая 2023, 10:00 - 18:00",
        url: "/events/it-career-day",
        isLocked: false
      },
      {
        id: "event3",
        title: "Хакатон Digital Almaty 2023",
        description: "Крупнейший технологический хакатон Казахстана с призовым фондом 5 000 000 тенге и возможностью трудоустройства.",
        type: "event",
        imageUrl: "/images/events/hackathon.jpg",
        relevanceScore: 85,
        reasonMatched: [
          "Возможность применить навыки на практике",
          "Призовой фонд и ценные призы",
          "Контакты с лучшими IT-компаниями страны"
        ],
        requiredSkills: ["JavaScript", "React", "Git"],
        deadline: "5-7 июня 2023",
        url: "/events/digital-almaty-hackathon",
        isLocked: false
      }
    ],
    jobs: [
      {
        id: "job1",
        title: "Стажер-разработчик (Frontend)",
        description: "Стажировка в Chocofamily — одной из крупнейших IT-компаний Казахстана. Работа над реальными проектами с наставником.",
        type: "job",
        imageUrl: "/images/jobs/frontend-intern.jpg",
        relevanceScore: 90,
        reasonMatched: [
          "Полностью соответствует вашим навыкам React и JavaScript",
          "Подходит для студентов КазНУ",
          "Возможна удаленная работа (20ч/неделю)"
        ],
        requiredSkills: ["JavaScript", "React", "HTML/CSS"],
        missingSkills: ["TypeScript"],
        deadline: "Заявки до 30 мая 2023",
        url: "/jobs/frontend-intern-123",
        isLocked: false
      },
      {
        id: "job2",
        title: "Junior Full-Stack Developer",
        description: "Разработка веб-приложений на React + Node.js в перспективном казахстанском стартапе с инвестициями от Astana Hub.",
        type: "job",
        imageUrl: "/images/jobs/fullstack-junior.jpg",
        relevanceScore: 75,
        reasonMatched: [
          "Соответствует вашей цели стать Full-Stack разработчиком",
          "Зарплата на 20% выше среднерыночной"
        ],
        requiredSkills: ["JavaScript", "React", "Node.js", "Git"],
        missingSkills: ["Node.js на продвинутом уровне"],
        deadline: "Заявки до 15 июня 2023",
        url: "/jobs/fullstack-junior-456",
        isLocked: false
      },
      {
        id: "job3",
        title: "Web-разработчик (Стажер/Junior)",
        description: "Разработка и поддержка корпоративных веб-приложений в Казахтелеком. Официальное трудоустройство, социальный пакет.",
        type: "job",
        imageUrl: "/images/jobs/web-developer.jpg",
        relevanceScore: 70,
        reasonMatched: [
          "Стабильная компания с высокими социальными гарантиями",
          "Возможность работать над проектами национального масштаба",
          "Перспективы карьерного роста"
        ],
        requiredSkills: ["JavaScript", "HTML/CSS", "Git"],
        missingSkills: ["SQL", "REST API"],
        deadline: "Заявки до 25 мая 2023",
        url: "/jobs/web-developer-789",
        isLocked: false
      }
    ],
    skills: [
      {
        id: "skill1",
        title: "TypeScript",
        description: "Статически типизированный JavaScript, который делает код надежнее и проще в поддержке. Самый востребованный навык на рынке Казахстана в 2023 году.",
        type: "skill",
        relevanceScore: 95,
        reasonMatched: [
          "Требуется в 70% вакансий для React-разработчиков в Казахстане",
          "Повышает зарплату на 15-20%",
          "Необходим для работы в Kolesa Group и Chocofamily"
        ],
        url: "/skills/typescript",
        isLocked: false
      },
      {
        id: "skill2",
        title: "Node.js и Express",
        description: "Ключевые технологии для серверной разработки. Спрос на Full-Stack разработчиков в Казахстане вырос на 40% за последний год.",
        type: "skill",
        relevanceScore: 90,
        reasonMatched: [
          "Обязателен для карьеры Full-Stack разработчика",
          "Высокий спрос на рынке труда Казахстана",
          "Зарплата Full-Stack разработчика на 30% выше, чем у Frontend"
        ],
        url: "/skills/nodejs-express",
        isLocked: false
      },
      {
        id: "skill3",
        title: "SQL и базы данных",
        description: "Навыки работы с базами данных и SQL. Фундаментальный навык для любого разработчика, работающего с бэкендом.",
        type: "skill",
        relevanceScore: 85,
        reasonMatched: [
          "Необходим для полноценной разработки бэкенда",
          "Требуется в 90% вакансий на позиции Middle и выше",
          "Открывает доступ к высокооплачиваемым вакансиям в финтех-секторе Казахстана"
        ],
        url: "/skills/sql-databases",
        isLocked: false
      }
    ]
  };

  return (
    <PageLayout>
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Ваши рекомендации</h1>
          <p className="text-muted-foreground">
            Курсы, события и вакансии, подобранные специально для вас на основе вашего профиля
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Сайдбар с фильтрами */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
                  Фильтры
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="relative">
                    <MagnifyingGlassIcon className="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Поиск..."
                      className="pl-8"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Релевантность</Label>
                  <Slider defaultValue={[50]} max={100} step={1} />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Тип рекомендаций</Label>
                  <div className="space-y-2">
                    {["courses", "events", "jobs", "skills"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox id={`filter-${type}`} defaultChecked />
                        <label
                          htmlFor={`filter-${type}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {type === "courses" ? "Курсы" :
                           type === "events" ? "Мероприятия" :
                           type === "jobs" ? "Вакансии" :
                           "Навыки"}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Навыки</Label>
                  <div className="space-y-2">
                    {["JavaScript", "React", "TypeScript", "Node.js", "Python", "SQL"].map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox id={`skill-${skill}`} />
                        <label
                          htmlFor={`skill-${skill}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {skill}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button variant="outline" className="w-full">
                    Сбросить фильтры
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ваша карьерная цель</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge className="w-full justify-center py-2">Full-Stack Developer</Badge>
                  <p className="text-sm text-muted-foreground">
                    Прогресс: 65%
                  </p>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    На основе вашего профиля и требований IT-рынка Казахстана мы подобрали оптимальные шаги для достижения вашей цели.
                  </p>
                  <Button variant="outline" className="w-full mt-4" size="sm">
                    Изменить цель
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Основной контент с рекомендациями */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger value="all">Все</TabsTrigger>
                  <TabsTrigger value="courses">Курсы</TabsTrigger>
                  <TabsTrigger value="events">Мероприятия</TabsTrigger>
                  <TabsTrigger value="jobs">Вакансии</TabsTrigger>
                  <TabsTrigger value="skills">Навыки</TabsTrigger>
                </TabsList>
                
                <div className="text-sm text-muted-foreground">
                  Найдено: {
                    recommendations.courses.length +
                    recommendations.events.length +
                    recommendations.jobs.length +
                    recommendations.skills.length
                  } рекомендаций
                </div>
              </div>

              <TabsContent value="all" className="mt-0">
                <h2 className="text-xl font-bold mb-4">Лучшие рекомендации</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <RecommendationCard 
                    title={recommendations.courses[0].title}
                    type="course"
                    description={recommendations.courses[0].description}
                    skills={recommendations.courses[0].requiredSkills || []}
                    matchPercentage={recommendations.courses[0].relevanceScore}
                    actionLabel="Подробнее"
                    onAction={() => {}}
                  />
                  <RecommendationCard 
                    title={recommendations.events[0].title}
                    type="event"
                    description={recommendations.events[0].description}
                    skills={recommendations.events[0].requiredSkills || []}
                    matchPercentage={recommendations.events[0].relevanceScore}
                    actionLabel="Подробнее"
                    onAction={() => {}}
                  />
                </div>

                <h2 className="text-xl font-bold mb-4">Курсы</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {recommendations.courses.slice(0, 3).map((course) => (
                    <RecommendationCard
                      key={course.id}
                      title={course.title}
                      type="course"
                      description={course.description}
                      skills={course.requiredSkills || []}
                      matchPercentage={course.relevanceScore}
                      actionLabel="Подробнее"
                      onAction={() => {}}
                    />
                  ))}
                </div>
                <div className="text-center mb-8">
                  <Button variant="outline">Все курсы</Button>
                </div>

                <h2 className="text-xl font-bold mb-4">Мероприятия</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {recommendations.events.slice(0, 3).map((event) => (
                    <RecommendationCard
                      key={event.id}
                      title={event.title}
                      type="event"
                      description={event.description}
                      skills={event.requiredSkills || []}
                      matchPercentage={event.relevanceScore}
                      actionLabel="Подробнее"
                      onAction={() => {}}
                    />
                  ))}
                </div>
                <div className="text-center mb-8">
                  <Button variant="outline">Все мероприятия</Button>
                </div>

                <h2 className="text-xl font-bold mb-4">Вакансии</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {recommendations.jobs.slice(0, 3).map((job) => (
                    <RecommendationCard
                      key={job.id}
                      title={job.title}
                      type="job"
                      description={job.description}
                      skills={job.requiredSkills || []}
                      matchPercentage={job.relevanceScore}
                      actionLabel="Подробнее"
                      onAction={() => {}}
                    />
                  ))}
                </div>
                <div className="text-center">
                  <Button variant="outline">Все вакансии</Button>
                </div>
              </TabsContent>

              <TabsContent value="courses" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recommendations.courses.map((course) => (
                    <RecommendationCard
                      key={course.id}
                      title={course.title}
                      type="course"
                      description={course.description}
                      skills={course.requiredSkills || []}
                      matchPercentage={course.relevanceScore}
                      actionLabel="Подробнее"
                      onAction={() => {}}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="events" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recommendations.events.map((event) => (
                    <RecommendationCard
                      key={event.id}
                      title={event.title}
                      type="event"
                      description={event.description}
                      skills={event.requiredSkills || []}
                      matchPercentage={event.relevanceScore}
                      actionLabel="Подробнее"
                      onAction={() => {}}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="jobs" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recommendations.jobs.map((job) => (
                    <RecommendationCard
                      key={job.id}
                      title={job.title}
                      type="job"
                      description={job.description}
                      skills={job.requiredSkills || []}
                      matchPercentage={job.relevanceScore}
                      actionLabel="Подробнее"
                      onAction={() => {}}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="skills" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recommendations.skills.map((skill) => (
                    <RecommendationCard
                      key={skill.id}
                      title={skill.title}
                      type="course"
                      description={skill.description}
                      skills={skill.reasonMatched || []}
                      matchPercentage={skill.relevanceScore}
                      actionLabel="Подробнее"
                      onAction={() => {}}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 