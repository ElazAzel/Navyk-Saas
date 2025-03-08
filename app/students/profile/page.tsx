"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, BriefcaseIcon, AcademicCapIcon, PencilIcon, UserIcon } from "@heroicons/react/24/outline";
import CareerRoadmap, { RoadmapStep } from "@/components/CareerRoadmap";
import PageLayout from "@/app/components/PageLayout";

export default function StudentProfile() {
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
    ]
  };

  // Карьерный путь студента
  const roadmapSteps: RoadmapStep[] = [
    {
      title: "Стажер-разработчик",
      description: "Получение базовых навыков разработки, работа над небольшими задачами под руководством опытных разработчиков",
      status: "completed",
      skills: ["JavaScript", "HTML", "CSS", "Git"]
    },
    {
      title: "Младший разработчик",
      description: "Работа над реальными проектами, освоение фреймворков, разработка и поддержка компонентов",
      status: "in-progress",
      skills: ["React", "Node.js", "API", "SQL"]
    },
    {
      title: "Разработчик",
      description: "Полная ответственность за компоненты, участие в архитектурных решениях, внедрение лучших практик",
      status: "upcoming",
      skills: ["Архитектура", "Тестирование", "CI/CD", "Оптимизация"]
    },
    {
      title: "Старший разработчик",
      description: "Проектирование систем, менторство, участие в принятии технических решений",
      status: "upcoming",
      skills: ["Системное проектирование", "Менторство", "Оценка рисков", "Масштабирование"]
    }
  ];

  return (
    <PageLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Левая колонка - информация о студенте */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-2">
                    <AvatarImage src={student.avatarUrl} alt={student.name} />
                    <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{student.name}</CardTitle>
                  <CardDescription className="text-center mt-1">{student.specialization}</CardDescription>
                </div>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <PencilIcon className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Университет</h3>
                  <p className="text-sm">{student.universityName}</p>
                  <p className="text-sm">{student.faculty}</p>
                  <p className="text-sm">{student.course} курс</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Контактная информация</h3>
                  <p className="text-sm">Email: {student.email}</p>
                  <p className="text-sm">Телефон: {student.phone}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Навыки</h3>
                  <div className="space-y-2">
                    {student.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Языки</h3>
                  <div className="flex flex-wrap gap-2">
                    {student.languages.map((language) => (
                      <Badge key={language.name} variant="outline">
                        {language.name} - {language.level}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Правая колонка - основное содержимое */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="roadmap">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="roadmap">Карьера</TabsTrigger>
              <TabsTrigger value="education">Образование</TabsTrigger>
              <TabsTrigger value="experience">Опыт</TabsTrigger>
              <TabsTrigger value="certificates">Сертификаты</TabsTrigger>
            </TabsList>

            <TabsContent value="roadmap" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Карьерный план</CardTitle>
                  <CardDescription>
                    Ваш персонализированный путь карьерного развития на основе ваших навыков и целей
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CareerRoadmap 
                    steps={roadmapSteps} 
                    targetRole="Full-stack разработчик"
                    progress={42}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Образование</CardTitle>
                  <CardDescription>
                    Ваш академический путь и образовательные достижения
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {student.education.map((edu, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="mt-1">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <AcademicCapIcon className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium">{edu.degree} в {edu.field}</h3>
                          <p className="text-sm text-muted-foreground">{edu.institution}</p>
                          <p className="text-sm">
                            {edu.startYear} - {edu.current ? "настоящее время" : edu.endYear}
                          </p>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full mt-4">Добавить образование</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Опыт работы</CardTitle>
                  <CardDescription>
                    Ваш профессиональный опыт и достижения
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {student.experience.map((exp, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="mt-1">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <BriefcaseIcon className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium">{exp.position}</h3>
                          <p className="text-sm text-muted-foreground">{exp.company}</p>
                          <p className="text-sm">
                            {exp.startDate} - {exp.endDate}
                          </p>
                          <p className="text-sm mt-1">{exp.description}</p>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full mt-4">Добавить опыт работы</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certificates" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Сертификаты</CardTitle>
                  <CardDescription>
                    Ваши профессиональные сертификаты и достижения
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {student.certifications.map((cert, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="mt-1">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <CalendarIcon className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-medium">{cert.name}</h3>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                          <p className="text-sm">{cert.date}</p>
                          <a 
                            href={cert.url} 
                            className="text-sm text-primary hover:underline inline-block mt-1"
                          >
                            Показать сертификат
                          </a>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full mt-4">Добавить сертификат</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageLayout>
  );
} 