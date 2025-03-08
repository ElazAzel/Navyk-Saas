"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import {
  UserIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  BriefcaseIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import AnalyticsDashboard from "@/app/components/AnalyticsDashboard";
import DemographicsChart from "@/app/components/university/DemographicsChart";
import EventParticipationChart from "@/app/components/university/EventParticipationChart";
import EmploymentAnalytics from "@/app/components/university/EmploymentAnalytics";
import CoursesAnalytics from "@/app/components/university/CoursesAnalytics";
import StudentSatisfaction from "@/app/components/university/StudentSatisfaction";
import UniversityComparison from "@/app/components/university/UniversityComparison";

// Данные университета
const university = {
  id: "univ-01",
  name: "Almaty Management University",
  shortName: "AlmaU",
  totalStudents: 6800,
  yearFounded: 1988,
  lastUpdated: new Date(),
};

// Факультеты
const faculties = [
  {
    id: "fac-1",
    name: "Школа менеджмента",
    studentsCount: 1850,
    departmentsCount: 6,
    employmentRate: 92,
  },
  {
    id: "fac-2",
    name: "Школа экономики и финансов",
    studentsCount: 1580,
    departmentsCount: 5,
    employmentRate: 94,
  },
  {
    id: "fac-3",
    name: "Школа предпринимательства и инноваций",
    studentsCount: 1230,
    departmentsCount: 4,
    employmentRate: 88,
  },
  {
    id: "fac-4",
    name: "Школа инженерного менеджмента",
    studentsCount: 960,
    departmentsCount: 3,
    employmentRate: 90,
  },
  {
    id: "fac-5",
    name: "Школа государственной политики",
    studentsCount: 1180,
    departmentsCount: 4,
    employmentRate: 85,
  },
];

// Популярные курсы
const popularCourses = [
  {
    id: "course-1",
    title: "Управление бизнес-процессами",
    faculty: "Школа менеджмента",
    enrolledStudents: 745,
    completionRate: 88,
  },
  {
    id: "course-2",
    title: "Финансовый анализ",
    faculty: "Школа экономики и финансов",
    enrolledStudents: 680,
    completionRate: 82,
  },
  {
    id: "course-3",
    title: "Стартап-менеджмент",
    faculty: "Школа предпринимательства и инноваций",
    enrolledStudents: 620,
    completionRate: 91,
  },
  {
    id: "course-4",
    title: "Цифровой маркетинг",
    faculty: "Школа предпринимательства и инноваций",
    enrolledStudents: 580,
    completionRate: 84,
  },
];

// Данные для демографического компонента
const demographicsData = {
  genderData: {
    male: 2860,
    female: 3810,
    other: 130
  },
  ageData: {
    '17-20': 3200,
    '21-25': 2740,
    '26-30': 580,
    '31+': 280
  }
};

// Данные для компонента участия в мероприятиях
const eventParticipationData = {
  eventTypeData: [
    { name: "Карьерные мероприятия", count: 38, percentage: 31, color: "#3b82f6" },
    { name: "Бизнес-форумы", count: 32, percentage: 26, color: "#22c55e" },
    { name: "Научные конференции", count: 26, percentage: 21, color: "#f59e0b" },
    { name: "Социальные события", count: 18, percentage: 15, color: "#8b5cf6" },
    { name: "Культурные мероприятия", count: 9, percentage: 7, color: "#ec4899" }
  ],
  participationTrend: [
    { month: "Июль", count: 950 },
    { month: "Август", count: 680 },
    { month: "Сентябрь", count: 2400 },
    { month: "Октябрь", count: 1850 },
    { month: "Ноябрь", count: 1700 },
    { month: "Декабрь", count: 1200 }
  ],
  facultyParticipation: [
    { name: "Менеджмента", attendanceRate: 86 },
    { name: "Экономики", attendanceRate: 78 },
    { name: "Предпринимательства", attendanceRate: 92 },
    { name: "Инженерного менеджмента", attendanceRate: 74 },
    { name: "Гос. политики", attendanceRate: 68 }
  ]
};

// Данные для аналитики трудоустройства
const employmentData = {
  companyTypes: [
    { type: "Финансовые организации", count: 980, percentage: 32 },
    { type: "Технологические компании", count: 850, percentage: 28 },
    { type: "Консалтинговые фирмы", count: 520, percentage: 17 },
    { type: "Государственные учреждения", count: 380, percentage: 12 },
    { type: "Стартапы", count: 240, percentage: 8 },
    { type: "Другое", count: 90, percentage: 3 }
  ],
  topCompanies: [
    { name: "Kaspi.kz", count: 145, logo: "/icons/kaspi.svg" },
    { name: "Halyk Bank", count: 120, logo: "/icons/halyk.svg" },
    { name: "Beeline Казахстан", count: 95, logo: "/icons/beeline.svg" },
    { name: "Kolesa Group", count: 85, logo: "/icons/kolesa.svg" },
    { name: "BI Group", count: 78, logo: "/icons/bi.svg" }
  ],
  employmentStages: [
    { stage: "Поиск работы", count: 840, percentage: 18 },
    { stage: "Прохождение собеседований", count: 680, percentage: 15 },
    { stage: "Получение офферов", count: 590, percentage: 13 },
    { stage: "Трудоустроены", count: 2550, percentage: 54 }
  ],
  fieldsOfEmployment: [
    { field: "Финансы и банкинг", count: 920, percentage: 28 },
    { field: "Маркетинг и PR", count: 750, percentage: 23 },
    { field: "Бизнес-аналитика", count: 580, percentage: 18 },
    { field: "IT и цифровизация", count: 510, percentage: 16 },
    { field: "Государственная служба", count: 320, percentage: 10 },
    { field: "Другие направления", count: 170, percentage: 5 }
  ],
  employmentRate: 89,
  averageSalary: 345000,
  averageTimeToEmployment: 2.8 // в месяцах
};

// Данные для аналитики курсов
const coursesData = {
  courseCategories: [
    { name: "Бизнес и менеджмент", count: 38, percentage: 28, completionRate: 85 },
    { name: "Финансы и инвестиции", count: 32, percentage: 24, completionRate: 82 },
    { name: "Предпринимательство", count: 24, percentage: 18, completionRate: 90 },
    { name: "Маркетинг и коммуникации", count: 18, percentage: 13, completionRate: 78 },
    { name: "IT и цифровые технологии", count: 14, percentage: 10, completionRate: 76 },
    { name: "Другие", count: 9, percentage: 7, completionRate: 72 }
  ],
  popularCourses: [
    { id: "pc-1", title: "Стратегический менеджмент", category: "Менеджмент", enrollments: 245, completionRate: 86, satisfaction: 4.7, isPaid: true, provider: "Coursera" },
    { id: "pc-2", title: "Финансовый анализ", category: "Финансы", enrollments: 212, completionRate: 82, satisfaction: 4.5, isPaid: true, provider: "EdX" },
    { id: "pc-3", title: "Развитие предпринимательских навыков", category: "Предпринимательство", enrollments: 198, completionRate: 94, satisfaction: 4.8, isPaid: false, provider: "EduSkills" },
    { id: "pc-4", title: "Digital-маркетинг", category: "Маркетинг", enrollments: 175, completionRate: 80, satisfaction: 4.6, isPaid: true, provider: "SkillShare" },
    { id: "pc-5", title: "Введение в Data Science", category: "IT", enrollments: 142, completionRate: 76, satisfaction: 4.5, isPaid: false, provider: "Skyeng" }
  ],
  courseDistribution: {
    paid: 82,
    free: 53
  },
  skillDevelopment: [
    { skill: "Управленческие навыки", initialLevel: 42, currentLevel: 78, improvement: 36 },
    { skill: "Финансовая грамотность", initialLevel: 38, currentLevel: 82, improvement: 44 },
    { skill: "Предпринимательское мышление", initialLevel: 35, currentLevel: 84, improvement: 49 },
    { skill: "Цифровые навыки", initialLevel: 48, currentLevel: 79, improvement: 31 },
    { skill: "Коммуникативные навыки", initialLevel: 52, currentLevel: 87, improvement: 35 }
  ],
  totalStudents: 5400,
  totalCourses: 135,
  averageCompletionRate: 83,
  averageSatisfaction: 4.6,
  partnerProviders: [
    { name: "Coursera", courses: 42, students: 1250 },
    { name: "EdX", courses: 33, students: 980 },
    { name: "EduSkills", courses: 28, students: 860 },
    { name: "SkillShare", courses: 18, students: 740 },
    { name: "Skyeng", courses: 14, students: 650 }
  ]
};

// Данные для удовлетворенности студентов
const satisfactionData = {
  academicSatisfaction: [
    { category: "Качество преподавания", score: 4.5, previousScore: 4.3, change: 0.2 },
    { category: "Актуальность учебных материалов", score: 4.2, previousScore: 4.0, change: 0.2 },
    { category: "Практическая направленность", score: 4.7, previousScore: 4.4, change: 0.3 },
    { category: "Возможности для исследований", score: 4.0, previousScore: 3.8, change: 0.2 },
    { category: "Разнообразие курсов", score: 4.3, previousScore: 4.1, change: 0.2 }
  ],
  campusSatisfaction: [
    { category: "Инфраструктура кампуса", score: 4.4, previousScore: 4.1, change: 0.3 },
    { category: "Питание и кафе", score: 3.8, previousScore: 3.6, change: 0.2 },
    { category: "Библиотека и ресурсы", score: 4.5, previousScore: 4.3, change: 0.2 },
    { category: "Технологическое оснащение", score: 4.6, previousScore: 4.2, change: 0.4 },
    { category: "Зоны для отдыха и коворкинга", score: 4.2, previousScore: 3.8, change: 0.4 }
  ],
  detailedSatisfaction: [
    {
      aspect: "Образовательная программа",
      score: 4.5,
      strengths: [
        "Актуальные программы обучения",
        "Опытные преподаватели-практики",
        "Проектно-ориентированное обучение"
      ],
      weaknesses: [
        "Недостаточно международных преподавателей",
        "Высокая нагрузка по некоторым предметам"
      ]
    },
    {
      aspect: "Инфраструктура кампуса",
      score: 4.4,
      strengths: [
        "Современное техническое оснащение",
        "Удобные коворкинг-пространства"
      ],
      weaknesses: [
        "Ограниченное количество розеток в аудиториях",
        "Недостаточно мест в столовой в пиковые часы"
      ]
    },
    {
      aspect: "Внеучебная деятельность",
      score: 4.6,
      strengths: [
        "Разнообразие бизнес-клубов",
        "Регулярные мероприятия с представителями индустрии",
        "Активная студенческая жизнь"
      ],
      weaknesses: [
        "Нехватка спортивных мероприятий"
      ]
    }
  ],
  overallScore: 4.4,
  averageScore: 4.1,
  universityRank: 2,
  totalUniversities: 128
};

// Данные для сравнения с другими университетами
const comparisonData = {
  metrics: [
    {
      name: "Процент трудоустройства",
      value: 89,
      average: 76,
      topUniversityValue: 92,
      unit: "%"
    },
    {
      name: "Средняя зарплата выпускников",
      value: 345000,
      average: 290000,
      topUniversityValue: 380000,
      unit: "тнг"
    },
    {
      name: "Международные партнерства",
      value: 45,
      average: 28,
      topUniversityValue: 58
    },
    {
      name: "Иностранные студенты",
      value: 12,
      average: 8,
      topUniversityValue: 16,
      unit: "%"
    }
  ],
  competingUniversities: [
    {
      id: "univ-02",
      name: "Казахстанско-Британский технический университет",
      overallScore: 4.5,
      strengths: ["Техническое образование", "Международная аккредитация", "Партнерства с бизнесом"],
      metrics: [
        { name: "Трудоустройство", value: 92, unit: "%" },
        { name: "Зарплата выпускников", value: 380000, unit: "тнг" },
        { name: "Международные партнеры", value: 38 }
      ]
    },
    {
      id: "univ-03",
      name: "КИМЭП Университет",
      overallScore: 4.7,
      strengths: ["Обучение на английском", "Международный преподавательский состав", "Признание за рубежом"],
      metrics: [
        { name: "Трудоустройство", value: 91, unit: "%" },
        { name: "Зарплата выпускников", value: 370000, unit: "тнг" },
        { name: "Международные партнеры", value: 58 }
      ]
    },
    {
      id: "univ-04",
      name: "Назарбаев Университет",
      overallScore: 4.8,
      strengths: ["Мировой уровень образования", "Инновационные исследования", "Высокая селективность"],
      metrics: [
        { name: "Трудоустройство", value: 94, unit: "%" },
        { name: "Зарплата выпускников", value: 410000, unit: "тнг" },
        { name: "Международные партнеры", value: 65 }
      ]
    }
  ],
  rankings: [
    {
      category: "Национальный рейтинг бизнес-вузов",
      position: 2,
      totalUniversities: 128,
      previousPosition: 3,
      change: 1
    },
    {
      category: "QS Emerging Europe & Central Asia",
      position: 104,
      totalUniversities: 450,
      previousPosition: 121,
      change: 17
    },
    {
      category: "Рейтинг бизнес-школ Центральной Азии",
      position: 5,
      totalUniversities: 75,
      previousPosition: 7,
      change: 2
    },
    {
      category: "Eduniversal Business Schools",
      position: 3,
      totalUniversities: 22,
      previousPosition: 4,
      change: 1
    }
  ],
  universityName: "Almaty Management University"
};

export default function UniversityDashboard() {
  const [period, setPeriod] = useState("month");
  
  const handlePeriodChange = (value: string) => {
    setPeriod(value);
  };

  return (
    <PageLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Панель университета: <span className="block md:inline mt-1 md:mt-0">{university.name} <span className="text-xl">({university.shortName})</span></span>
          </h2>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="text-xs md:text-sm whitespace-nowrap">
              Основан в {university.yearFounded}
            </Badge>
            <Badge variant="outline" className="text-xs md:text-sm whitespace-nowrap">
              {university.totalStudents.toLocaleString()} студентов
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <div className="overflow-x-auto pb-1">
            <TabsList className="min-w-max w-full grid-cols-7">
              <TabsTrigger value="overview" className="text-xs md:text-sm">Обзор</TabsTrigger>
              <TabsTrigger value="demographics" className="text-xs md:text-sm">Демография</TabsTrigger>
              <TabsTrigger value="events" className="text-xs md:text-sm">Мероприятия</TabsTrigger>
              <TabsTrigger value="employment" className="text-xs md:text-sm">Трудоустройство</TabsTrigger>
              <TabsTrigger value="courses" className="text-xs md:text-sm">Курсы</TabsTrigger>
              <TabsTrigger value="satisfaction" className="text-xs md:text-sm">Удовлетворенность</TabsTrigger>
              <TabsTrigger value="comparison" className="text-xs md:text-sm">Сравнение</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="overview" className="space-y-4 mt-4">
            <AnalyticsDashboard 
              userType="university" 
              period={period} 
              onPeriodChange={handlePeriodChange}
            />
            
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Всего студентов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl md:text-2xl font-bold">{university.totalStudents.toLocaleString()}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Процент трудоустройства
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl md:text-2xl font-bold">{employmentData.employmentRate}%</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Средняя зарплата выпускников
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl md:text-2xl font-bold">{employmentData.averageSalary.toLocaleString()} тнг</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Уровень удовлетворенности
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xl md:text-2xl font-bold">{satisfactionData.overallScore}/5</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-7">
              <Card className="col-span-7 md:col-span-4">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">Школы по количеству студентов</CardTitle>
                </CardHeader>
                <CardContent className="pl-2 overflow-x-auto">
                  <div className="space-y-4 min-w-[500px]">
                    {faculties.map((faculty) => (
                      <div key={faculty.id} className="flex items-center">
                        <div className="w-[250px] flex-shrink-0">
                          <div className="text-xs md:text-sm font-medium">{faculty.name}</div>
                          <div className="text-xs text-muted-foreground">
                            Трудоустройство: {faculty.employmentRate}%
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="h-3 md:h-4 w-full overflow-hidden rounded-full bg-secondary">
                            <div
                              className="h-full bg-primary"
                              style={{
                                width: `${(faculty.studentsCount / university.totalStudents) * 100}%`,
                              }}
                            />
                          </div>
                        </div>
                        <div className="w-[50px] flex-shrink-0 text-right">
                          <div className="text-xs md:text-sm font-medium">
                            {faculty.studentsCount.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-7 md:col-span-3">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">Популярные курсы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {popularCourses.map((course) => (
                      <div key={course.id} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="text-xs md:text-sm font-medium">{course.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {course.enrolledStudents} студентов
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-1 sm:gap-0 sm:items-center text-xs">
                          <div className="sm:w-1/2 flex-shrink-0">
                            Завершаемость: {course.completionRate}%
                          </div>
                          <div className="sm:w-1/2 flex-shrink-0">
                            Школа: {course.faculty.replace('Школа ', '')}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="demographics" className="space-y-4 mt-4">
            <DemographicsChart 
              genderData={demographicsData.genderData}
              ageData={demographicsData.ageData}
            />
          </TabsContent>
          
          <TabsContent value="events" className="space-y-4 mt-4">
            <EventParticipationChart 
              eventTypeData={eventParticipationData.eventTypeData}
              participationTrend={eventParticipationData.participationTrend}
              facultyParticipation={eventParticipationData.facultyParticipation}
            />
          </TabsContent>
          
          <TabsContent value="employment" className="space-y-4 mt-4">
            <EmploymentAnalytics 
              companyTypes={employmentData.companyTypes}
              topCompanies={employmentData.topCompanies}
              employmentStages={employmentData.employmentStages}
              fieldsOfEmployment={employmentData.fieldsOfEmployment}
              employmentRate={employmentData.employmentRate}
              averageSalary={employmentData.averageSalary}
              averageTimeToEmployment={employmentData.averageTimeToEmployment}
            />
          </TabsContent>
          
          <TabsContent value="courses" className="space-y-4 mt-4">
            <CoursesAnalytics 
              courseCategories={coursesData.courseCategories}
              popularCourses={coursesData.popularCourses}
              courseDistribution={coursesData.courseDistribution}
              skillDevelopment={coursesData.skillDevelopment}
              totalStudents={coursesData.totalStudents}
              totalCourses={coursesData.totalCourses}
              averageCompletionRate={coursesData.averageCompletionRate}
              averageSatisfaction={coursesData.averageSatisfaction}
              partnerProviders={coursesData.partnerProviders}
            />
          </TabsContent>
          
          <TabsContent value="satisfaction" className="space-y-4 mt-4">
            <StudentSatisfaction 
              academicSatisfaction={satisfactionData.academicSatisfaction}
              campusSatisfaction={satisfactionData.campusSatisfaction}
              detailedSatisfaction={satisfactionData.detailedSatisfaction}
              overallScore={satisfactionData.overallScore}
              averageScore={satisfactionData.averageScore}
              universityRank={satisfactionData.universityRank}
              totalUniversities={satisfactionData.totalUniversities}
            />
          </TabsContent>
          
          <TabsContent value="comparison" className="space-y-4 mt-4">
            <UniversityComparison 
              metrics={comparisonData.metrics}
              competingUniversities={comparisonData.competingUniversities}
              rankings={comparisonData.rankings}
              universityName={comparisonData.universityName}
            />
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
} 