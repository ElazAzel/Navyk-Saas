"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/app/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  UserIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  BriefcaseIcon,
  CalendarIcon,
  TrophyIcon,
  ChartBarIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowTrendingUpIcon,
  RocketLaunchIcon,
  PresentationChartLineIcon,
  BookOpenIcon,
  StarIcon,
  FireIcon,
  CheckBadgeIcon,
  LockClosedIcon,
  ArrowsRightLeftIcon,
  ListBulletIcon,
  Squares2X2Icon,
  ArrowLongRightIcon
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid, FireIcon as FireIconSolid } from "@heroicons/react/24/solid";
import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@/app/components/PageLayout";
import AnalyticsDashboard from "@/app/components/AnalyticsDashboard";
import DemographicsChart from "@/app/components/university/DemographicsChart";
import EventParticipationChart from "@/app/components/university/EventParticipationChart";
import EmploymentAnalytics from "@/app/components/university/EmploymentAnalytics";
import CoursesAnalytics from "@/app/components/university/CoursesAnalytics";
import StudentSatisfaction from "@/app/components/university/StudentSatisfaction";
import UniversityComparison from "@/app/components/university/UniversityComparison";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Данные университета
const university = {
  id: "univ-1",
  name: "Almaty Management University",
  shortName: "AlmaU",
  totalStudents: 10200,
  yearFounded: 1988,
  lastUpdated: new Date(),
  logo: "/university-logo.png",
  rank: 2,
  stats: {
    totalStudents: 10200,
    facultiesCount: 6,
    coursesCount: 120,
    graduates: 28000,
    employmentRate: 92,
    rating: 4.7,
    completionPercentage: 83,
    enrollmentGrowth: 14,
    reputation: 90,
    innovationIndex: 85,
    researchScore: 76,
    quality: 87,
    achievements: [
      { name: "Лидер по инновациям", year: 2023, issuer: "EdTech Kazakhstan" },
      { name: "Топ-3 бизнес-вуз", year: 2023, issuer: "Национальный рейтинг РК" },
      { name: "Лучшие карьерные перспективы", year: 2022, issuer: "HRCentral Asia" }
    ],
    rankings: {
      national: 2,
      regional: 4,
      global: 365
    },
    milestones: [
      { title: "Открытие инновационного кампуса", date: "2019-08-15", description: "Открытие нового технологичного кампуса в Алматы" },
      { title: "Международная аккредитация", date: "2021-05-20", description: "Получение престижной международной аккредитации AMBA и EQUIS" }
    ]
  },
  kpis: [
    { name: "Трудоустройство выпускников", current: 92, target: 95, change: 3 },
    { name: "Удовлетворенность студентов", current: 87, target: 92, change: 4 },
    { name: "Международное сотрудничество", current: 75, target: 85, change: 8 },
    { name: "Научная активность", current: 68, target: 78, change: 9 }
  ],
  activities: [
    { type: "event", title: "Карьерный форум с Kaspi.kz и Halyk Bank", date: "15 мая 2023" },
    { type: "course", title: "Запуск нового курса по FinTech", date: "10 мая 2023" },
    { type: "achievement", title: "Топ-2 в рейтинге НААР", date: "5 мая 2023" },
    { type: "event", title: "Мастер-класс от CEO Kaspi.kz", date: "28 апреля 2023" }
  ],
  goals: [
    { title: "Увеличение процента трудоустройства", description: "Достичь 95% трудоустройства выпускников в течение 6 месяцев после выпуска", status: "В процессе", progress: 85 },
    { title: "Запуск международной программы", description: "Открыть программу двойных дипломов с вузами Кореи и ОАЭ", status: "Запланировано", progress: 40 },
    { title: "Обновление образовательной платформы", description: "Внедрение новой LMS для улучшения дистанционного обучения", status: "Выполнено", progress: 100 }
  ],
  allAchievements: [
    { name: "Лидер образования", description: "Признание вуза лидером в сфере бизнес-образования в Казахстане", unlocked: true, progress: 100 },
    { name: "Цифровая трансформация", description: "Полная цифровизация образовательного процесса", unlocked: true, progress: 100 },
    { name: "Инновационный центр", description: "Создание центра инноваций и предпринимательства", unlocked: true, progress: 100 },
    { name: "Международное признание", description: "Вхождение в международные рейтинги топ-300 вузов", unlocked: false, progress: 75 },
    { name: "Исследовательский прорыв", description: "Увеличение исследовательской активности на 50%", unlocked: false, progress: 60 },
    { name: "Идеальное трудоустройство", description: "Достижение 95% трудоустройства выпускников", unlocked: false, progress: 50 }
  ],
  statsHighlights: [
    { value: "10,200+", label: "Студентов", change: 14 },
    { value: "92%", label: "Трудоустройство", change: 3 },
    { value: "4.7/5", label: "Удовлетворенность", change: 0.3 }
  ],
  nationalRankings: [
    { name: "Общий рейтинг вузов РК", position: 4, previousPosition: 6 },
    { name: "Бизнес-образование", position: 2, previousPosition: 3 },
    { name: "Качество обучения", position: 3, previousPosition: 5 },
    { name: "Связь с индустрией", position: 1, previousPosition: 2 }
  ],
  internationalRankings: [
    { name: "QS World University", position: 365, previousPosition: 392 },
    { name: "Times Higher Education", position: 425, previousPosition: 458 },
    { name: "Financial Times Business", position: 70, previousPosition: 82 }
  ]
};

// Данные факультетов
const facultiesData = [
  {
    name: "Факультет менеджмента и предпринимательства",
    head: "Ахметов А.К.",
    students: 2850,
    employmentRate: 94,
    satisfaction: 4.7,
    growth: 9,
    topCourses: [
      { title: "Стратегический менеджмент", students: 235, rating: 4.8 },
      { title: "Управление проектами", students: 190, rating: 4.6 },
      { title: "Лидерство и командообразование", students: 175, rating: 4.7 }
    ]
  },
  {
    name: "Школа экономики и финансов",
    head: "Нурланова Б.М.",
    students: 2300,
    employmentRate: 93,
    satisfaction: 4.5,
    growth: 7,
    topCourses: [
      { title: "Банковское дело и исламские финансы", students: 215, rating: 4.5 },
      { title: "Финансовые рынки Казахстана", students: 185, rating: 4.6 },
      { title: "Международная экономика", students: 170, rating: 4.4 }
    ]
  },
  {
    name: "Школа маркетинга и коммуникаций",
    head: "Касымов Е.Н.",
    students: 1950,
    employmentRate: 90,
    satisfaction: 4.6,
    growth: 12,
    topCourses: [
      { title: "Цифровой маркетинг", students: 210, rating: 4.8 },
      { title: "Бренд-менеджмент", students: 175, rating: 4.6 },
      { title: "Маркетинг в социальных сетях", students: 160, rating: 4.7 }
    ]
  },
  {
    name: "Школа IT и цифровой трансформации",
    head: "Сериков М.Д.",
    students: 1800,
    employmentRate: 96,
    satisfaction: 4.8,
    growth: 18,
    topCourses: [
      { title: "Программирование и разработка", students: 195, rating: 4.9 },
      { title: "Data Science", students: 180, rating: 4.8 },
      { title: "Финтех и блокчейн", students: 145, rating: 4.7 }
    ]
  }
];

// Популярные курсы
const popularCourses = [
  {
    id: "course-1",
    title: "Управление бизнес-процессами",
    faculty: "Школа менеджмента",
    enrolledStudents: 685,
    completionRate: 86,
    satisfaction: 4.7,
    growth: 16,
    employmentImpact: "Высокий"
  },
  {
    id: "course-2",
    title: "Финансы и банковское дело",
    faculty: "Школа экономики и финансов",
    enrolledStudents: 620,
    completionRate: 83,
    satisfaction: 4.6,
    growth: 14,
    employmentImpact: "Высокий"
  },
  {
    id: "course-3",
    title: "Предпринимательство в Казахстане",
    faculty: "Школа предпринимательства и инноваций",
    enrolledStudents: 580,
    completionRate: 90,
    satisfaction: 4.8,
    growth: 22,
    employmentImpact: "Средний"
  },
  {
    id: "course-4",
    title: "Цифровой маркетинг и SMM",
    faculty: "Школа маркетинга и коммуникаций",
    enrolledStudents: 540,
    completionRate: 85,
    satisfaction: 4.7,
    growth: 18,
    employmentImpact: "Высокий"
  },
];

// Данные для демографического анализа
const demographicsData = {
  totalStudents: 10200,
  studentGrowth: 8.2,
  genderData: { 
    male: 45, 
    female: 55, 
    other: 0 
  },
  ageData: { 
    '17-20': 32, 
    '21-25': 50, 
    '26-30': 13, 
    '31+': 5 
  },
  gender: {
    male: 45,
    female: 55
  },
  age: [
    { range: "17-20", percentage: 32 },
    { range: "21-25", percentage: 50 },
    { range: "26-30", percentage: 13 },
    { range: "31+", percentage: 5 }
  ],
  trendsData: {
    genderBalance: {
      previous: { male: 48, female: 52, other: 0 },
      current: { male: 45, female: 55, other: 0 }
    },
    ageDistribution: {
      previous: { '17-20': 35, '21-25': 48, '26-30': 12, '31+': 5 },
      current: { '17-20': 32, '21-25': 50, '26-30': 13, '31+': 5 }
    },
    internationalStudents: {
      previous: 6,
      current: 10
    }
  },
  performanceByGroup: [
    { group: "Женщины", avgGrade: 8.3, completionRate: 91, participationRate: 76 },
    { group: "Мужчины", avgGrade: 7.9, completionRate: 87, participationRate: 73 },
    { group: "17-20 лет", avgGrade: 7.8, completionRate: 84, participationRate: 82 },
    { group: "21-25 лет", avgGrade: 8.5, completionRate: 93, participationRate: 74 }
  ]
};

// Данные для участия в мероприятиях
const eventParticipationData = {
  totalParticipationRate: 74,
  growthRate: 9,
  eventTypeData: [
    { name: "Карьерные форумы", count: 26, percentage: 33, color: "#6366F1", growth: 14 },
    { name: "Мастер-классы", count: 24, percentage: 30, color: "#8B5CF6", growth: 16 },
    { name: "Хакатоны", count: 17, percentage: 22, color: "#EC4899", growth: 23 },
    { name: "Конференции", count: 12, percentage: 15, color: "#F59E0B", growth: 6 }
  ],
  participationTrend: [
    { month: "Январь", count: 760, previousYear: 640 },
    { month: "Февраль", count: 880, previousYear: 690 },
    { month: "Март", count: 1050, previousYear: 820 },
    { month: "Апрель", count: 920, previousYear: 750 },
    { month: "Май", count: 1180, previousYear: 890 },
    { month: "Июнь", count: 840, previousYear: 720 }
  ],
  facultyParticipation: [
    { faculty: "Менеджмент и предпринимательство", rate: 76, growth: 9 },
    { faculty: "Экономика и финансы", rate: 73, growth: 6 },
    { faculty: "Маркетинг и коммуникации", rate: 82, growth: 13 },
    { faculty: "IT и цифровые технологии", rate: 79, growth: 17 }
  ],
  eventTypes: [
    { name: "Карьерные мероприятия", count: 26, growth: 14 },
    { name: "Нетворкинг", count: 21, growth: 16 },
    { name: "Мастер-классы", count: 19, growth: 24 },
    { name: "Хакатоны", count: 14, growth: 28 }
  ],
  highImpactEvents: [
    { name: "Карьерный форум с Kaspi.kz и Halyk Bank", date: "15 мая 2023", participants: 780, rating: 4.8, impact: "Высокий" },
    { name: "Astana Hub Startup Day", date: "28 апреля 2023", participants: 580, rating: 4.7, impact: "Высокий" },
    { name: "Мастер-класс от CEO Chocofamily", date: "14 апреля 2023", participants: 420, rating: 4.9, impact: "Средний" },
    { name: "Хакатон Digital Kazakhstan", date: "2 апреля 2023", participants: 290, rating: 4.8, impact: "Высокий" }
  ]
};

// Данные для трудоустройства
const employmentData = {
  employmentRate: 92,
  rateGrowth: 4,
  averageSalary: 450000,
  industryAverageSalary: 380000,
  averageTimeToEmployment: 2.8,
  fieldMatchRate: 76,
  companyTypes: [
    { name: "Корпорации", percentage: 38, count: 310, growthRate: 5 },
    { name: "Средний бизнес", percentage: 32, count: 262, growthRate: 8 },
    { name: "Стартапы", percentage: 16, count: 132, growthRate: 18 },
    { name: "Госсектор", percentage: 14, count: 116, growthRate: 3 }
  ],
  topCompanies: [
    { name: "Kaspi.kz", hires: 42, logo: "/logos/kaspi.png", growthRate: 12, avgSalary: 580000 },
    { name: "Halyk Bank", hires: 36, logo: "/logos/halyk.png", growthRate: 8, avgSalary: 520000 },
    { name: "BTS Digital", hires: 28, logo: "/logos/bts.png", growthRate: 15, avgSalary: 620000 },
    { name: "КазМунайГаз", hires: 25, logo: "/logos/kmg.png", growthRate: 4, avgSalary: 490000 },
    { name: "Chocofamily", hires: 22, logo: "/logos/choco.png", growthRate: 18, avgSalary: 540000 },
    { name: "Beeline Казахстан", hires: 20, logo: "/logos/beeline.png", growthRate: 6, avgSalary: 470000 }
  ],
  employmentStages: [
    { stage: "Первичное собеседование", percentage: 90 },
    { stage: "Техническое интервью", percentage: 82 },
    { stage: "Финальное предложение", percentage: 92 }
  ],
  fieldsOfEmployment: [
    { field: "Финансы", percentage: 26 },
    { field: "IT и телеком", percentage: 22 },
    { field: "Маркетинг", percentage: 18 },
    { field: "Консалтинг", percentage: 16 },
    { field: "Другое", percentage: 18 }
  ],
  impactFactors: [
    { factor: "Практический опыт", impact: 9.0 },
    { factor: "Технические навыки", impact: 8.7 },
    { factor: "Английский язык", impact: 8.2 },
    { factor: "Академические достижения", impact: 6.8 }
  ]
};

// Данные для аналитики курсов
const coursesData = {
  courseCategories: [
    { name: "Бизнес и менеджмент", count: 35, percentage: 29, completionRate: 84, growth: 13, impact: "Высокий" },
    { name: "Финансы и банкинг", count: 28, percentage: 23, completionRate: 82, growth: 10, impact: "Высокий" },
    { name: "Предпринимательство", count: 22, percentage: 18, completionRate: 88, growth: 16, impact: "Средний" },
    { name: "Маркетинг и коммуникации", count: 16, percentage: 13, completionRate: 79, growth: 14, impact: "Высокий" },
    { name: "IT и цифровые технологии", count: 12, percentage: 10, completionRate: 78, growth: 22, impact: "Высокий" },
    { name: "Другие", count: 7, percentage: 7, completionRate: 74, growth: 6, impact: "Низкий" }
  ],
  popularCourses: [
    { id: "pc-1", title: "Стратегический менеджмент", category: "Менеджмент", enrollments: 235, completionRate: 85, satisfaction: 4.7, isPaid: true, provider: "Coursera", trendChange: "+16%" },
    { id: "pc-2", title: "Исламские финансы", category: "Финансы", enrollments: 190, completionRate: 82, satisfaction: 4.6, isPaid: true, provider: "EdX", trendChange: "+14%" },
    { id: "pc-3", title: "Предпринимательство в Центральной Азии", category: "Предпринимательство", enrollments: 180, completionRate: 92, satisfaction: 4.8, isPaid: false, provider: "AlmaU LMS", trendChange: "+22%" },
    { id: "pc-4", title: "Digital-маркетинг в Казахстане", category: "Маркетинг", enrollments: 165, completionRate: 80, satisfaction: 4.6, isPaid: true, provider: "Skillbox", trendChange: "+16%" },
    { id: "pc-5", title: "Основы Data Science", category: "IT", enrollments: 130, completionRate: 78, satisfaction: 4.5, isPaid: false, provider: "Alem School", trendChange: "+28%" }
  ],
  courseDistribution: {
    paid: 72,
    free: 48,
    growthPaid: 13,
    growthFree: 22
  },
  skillDevelopment: [
    { skill: "Управленческие навыки", initialLevel: 40, currentLevel: 75, improvement: 35, impactOnEmployment: "Высокий" },
    { skill: "Финансовая грамотность", initialLevel: 35, currentLevel: 78, improvement: 43, impactOnEmployment: "Высокий" },
    { skill: "Предпринимательское мышление", initialLevel: 32, currentLevel: 80, improvement: 48, impactOnEmployment: "Средний" },
    { skill: "Цифровые навыки", initialLevel: 45, currentLevel: 77, improvement: 32, impactOnEmployment: "Высокий" },
    { skill: "Коммуникативные навыки", initialLevel: 50, currentLevel: 85, improvement: 35, impactOnEmployment: "Высокий" }
  ],
  totalStudents: 4800,
  totalCourses: 120,
  coursesGrowth: 16,
  averageCompletionRate: 82,
  completionImprovement: 4,
  averageSatisfaction: 4.5,
  satisfactionImprovement: 0.3,
  partnerProviders: [
    { name: "Coursera", courses: 34, students: 1050, satisfaction: 4.6, growth: 16 },
    { name: "EdX", courses: 27, students: 850, satisfaction: 4.4, growth: 14 },
    { name: "Astana Hub Academy", courses: 22, students: 780, satisfaction: 4.7, growth: 20 },
    { name: "Skillbox", courses: 16, students: 680, satisfaction: 4.5, growth: 15 },
    { name: "Alem School", courses: 12, students: 590, satisfaction: 4.6, growth: 18 }
  ],
  innovations: [
    { name: "AI-интеграция в обучение", impact: 82, adoptionRate: 60 },
    { name: "Виртуальные симуляции бизнес-кейсов", impact: 76, adoptionRate: 55 },
    { name: "Микрокурсы для специалистов", impact: 80, adoptionRate: 68 }
  ]
};

// Данные для удовлетворенности студентов
const satisfactionData = {
  academicSatisfaction: [
    { category: "Качество преподавания", score: 4.4, previousScore: 4.2, change: 0.2, impact: "Высокий" },
    { category: "Актуальность учебных материалов", score: 4.3, previousScore: 4.0, change: 0.3, impact: "Высокий" },
    { category: "Практическая направленность", score: 4.6, previousScore: 4.3, change: 0.3, impact: "Критический" },
    { category: "Возможности для исследований", score: 3.8, previousScore: 3.6, change: 0.2, impact: "Средний" },
    { category: "Разнообразие курсов", score: 4.2, previousScore: 4.0, change: 0.2, impact: "Средний" }
  ],
  campusSatisfaction: [
    { category: "Инфраструктура кампуса", score: 4.3, previousScore: 4.0, change: 0.3, impact: "Средний" },
    { category: "Питание и кафе", score: 3.7, previousScore: 3.5, change: 0.2, impact: "Низкий" },
    { category: "Библиотека и ресурсы", score: 4.4, previousScore: 4.2, change: 0.2, impact: "Средний" },
    { category: "Технологическое оснащение", score: 4.5, previousScore: 4.1, change: 0.4, impact: "Высокий" },
    { category: "Зоны для отдыха и коворкинга", score: 4.1, previousScore: 3.7, change: 0.4, impact: "Средний" }
  ],
  detailedSatisfaction: [
    {
      aspect: "Образовательная программа",
      score: 4.4,
      growthRate: 5,
      strengths: [
        "Практико-ориентированные программы",
        "Преподаватели-практики из бизнеса",
        "Проектное обучение"
      ],
      weaknesses: [
        "Недостаточно международных преподавателей",
        "Высокая учебная нагрузка"
      ],
      improvement: [
        { initiative: "Привлечение зарубежных экспертов", status: "В процессе", completion: 60 },
        { initiative: "Оптимизация учебной нагрузки", status: "Запланировано", completion: 35 }
      ]
    },
    {
      aspect: "Инфраструктура кампуса",
      score: 4.3,
      growthRate: 8,
      strengths: [
        "Современное техническое оснащение",
        "Комфортные зоны для коворкинга"
      ],
      weaknesses: [
        "Нехватка аудиторий в пиковые часы",
        "Ограниченная вместимость столовой"
      ],
      improvement: [
        { initiative: "Модернизация учебных пространств", status: "Завершено", completion: 100 },
        { initiative: "Расширение зоны питания", status: "В процессе", completion: 75 }
      ]
    },
    {
      aspect: "Внеучебная деятельность",
      score: 4.5,
      growthRate: 7,
      strengths: [
        "Разнообразие бизнес-клубов",
        "Регулярные встречи с лидерами индустрии",
        "Насыщенная студенческая жизнь"
      ],
      weaknesses: [
        "Недостаточно спортивных мероприятий"
      ],
      improvement: [
        { initiative: "Развитие спортивной программы", status: "Запланировано", completion: 40 },
        { initiative: "Расширение деятельности студенческих клубов", status: "В процессе", completion: 65 }
      ]
    }
  ],
  overallScore: 4.3,
  previousOverallScore: 4.0,
  averageScore: 4.0,
  universityRank: 2,
  previousRank: 3,
  totalUniversities: 108,
  benchmarkingData: [
    { metric: "Удовлетворенность студентов", value: 4.3, benchmark: 3.9, percentile: 82 },
    { metric: "Инфраструктура кампуса", value: 4.2, benchmark: 3.7, percentile: 80 },
    { metric: "Карьерные возможности", value: 4.4, benchmark: 3.8, percentile: 85 },
    { metric: "Инновационный подход", value: 4.1, benchmark: 3.6, percentile: 78 }
  ]
};

// Данные для сравнения университетов
const universityComparisonData = {
  topUniversities: [
    { name: "Назарбаев Университет", rank: 1, score: 4.8, strengths: ["Исследования", "Международные связи"], improvement: "+0.1" },
    { name: "AlmaU", rank: 2, score: 4.3, strengths: ["Предпринимательство", "Практическое применение"], improvement: "+0.3" },
    { name: "КИМЭП", rank: 3, score: 4.2, strengths: ["Международные программы", "Английский язык"], improvement: "+0.2" },
    { name: "SDU", rank: 4, score: 4.1, strengths: ["IT-образование", "Инновации"], improvement: "+0.2" },
    { name: "КБТУ", rank: 5, score: 4.0, strengths: ["Технологическое развитие", "Техническое образование"], improvement: "+0.1" }
  ],
  performanceMetrics: [
    { metric: "Трудоустройство выпускников", score: 86, averageScore: 72, percentile: 90, trend: "+6%" },
    { metric: "Удовлетворенность студентов", score: 4.3, averageScore: 3.8, percentile: 82, trend: "+8%" },
    { metric: "Научная деятельность", score: 70, averageScore: 65, percentile: 76, trend: "+4%" },
    { metric: "Связи с бизнесом", score: 90, averageScore: 73, percentile: 92, trend: "+9%" },
    { metric: "Инновационность образования", score: 82, averageScore: 68, percentile: 88, trend: "+11%" }
  ],
  benchmarkingByFaculty: [
    { 
      faculty: "Менеджмент и предпринимательство", 
      metrics: [
        { name: "Качество образования", value: 4.4, avgValue: 4.0, percentile: 86 },
        { name: "Трудоустройство", value: 90, avgValue: 76, percentile: 92 },
        { name: "Зарплата выпускников", value: 420000, avgValue: 360000, percentile: 88 }
      ]
    },
    { 
      faculty: "Экономика и финансы", 
      metrics: [
        { name: "Качество образования", value: 4.5, avgValue: 3.9, percentile: 90 },
        { name: "Трудоустройство", value: 92, avgValue: 74, percentile: 94 },
        { name: "Зарплата выпускников", value: 450000, avgValue: 370000, percentile: 92 }
      ]
    },
    { 
      faculty: "Маркетинг и коммуникации", 
      metrics: [
        { name: "Качество образования", value: 4.2, avgValue: 3.8, percentile: 82 },
        { name: "Трудоустройство", value: 86, avgValue: 70, percentile: 88 },
        { name: "Зарплата выпускников", value: 380000, avgValue: 330000, percentile: 85 }
      ]
    }
  ],
  globalRanking: {
    currentRank: 365,
    previousRank: 392,
    improvement: 27,
    metrics: [
      { category: "Академическая репутация", score: 70, previousScore: 65, percentile: 82 },
      { category: "Репутация у работодателей", score: 83, previousScore: 76, percentile: 90 },
      { category: "Цитируемость научных работ", score: 60, previousScore: 56, percentile: 75 },
      { category: "Международное разнообразие", score: 62, previousScore: 56, percentile: 78 }
    ]
  },
  competitiveEdge: [
    { factor: "Практическая ориентированность", strength: 9.0, avgStrength: 7.4, gap: "+1.6" },
    { factor: "Связи с работодателями", strength: 9.2, avgStrength: 7.6, gap: "+1.6" },
    { factor: "Инновационные методы обучения", strength: 8.6, avgStrength: 7.0, gap: "+1.6" },
    { factor: "Международное партнерство", strength: 8.3, avgStrength: 7.5, gap: "+0.8" },
    { factor: "Научные исследования", strength: 7.6, avgStrength: 7.3, gap: "+0.3" }
  ]
};

export default function UniversityDashboard() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-primary">Панель управления AlmaU</h1>
      
      {/* Карточка университета с основной информацией */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        <div className="lg:col-span-4">
          <Card className="h-full">
            <div className="flex flex-col items-center p-4">
              <div className="relative">
                <img 
                  src="/university-logo.png" 
                  alt="Логотип AlmaU"
                  className="w-32 h-32 rounded-full border-4 border-primary mb-4"
                />
                <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-2">
                  <TrophyIcon className="h-5 w-5" />
                </div>
              </div>
              <h2 className="text-2xl font-bold">{university.name}</h2>
              <div className="text-gray-500 dark:text-gray-400 mb-4 text-center">Ведущий бизнес-университет Казахстана</div>
              
              <div className="flex justify-around w-full mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{university.stats.totalStudents}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Студентов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{university.stats.facultiesCount}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Факультетов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{university.stats.coursesCount}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Курсов</div>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: `${Math.min(100, (employmentData.averageSalary / 150000) * 100)}%` }}
                ></div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 w-full mb-4">
                <div className="flex items-center">
                  <CheckBadgeIcon className="h-5 w-5 mr-2 text-primary" />
                  <span>Рейтинг: {university.rank}/108</span>
                </div>
                <div className="flex items-center">
                  <AcademicCapIcon className="h-5 w-5 mr-2 text-primary" />
                  <span>Выпускников: {university.stats.graduates}</span>
                </div>
                <div className="flex items-center">
                  <BriefcaseIcon className="h-5 w-5 mr-2 text-primary" />
                  <span>Трудоустройство: {university.stats.employmentRate}%</span>
                </div>
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 mr-2 text-primary" />
                  <span>Рейтинг: {university.stats.rating}/5</span>
                </div>
              </div>
              
              <div className="w-full">
                <h3 className="font-bold mb-2">Достижения</h3>
                <div className="flex flex-wrap gap-2">
                  {university.stats.achievements.map((achievement, index) => (
                    <Badge key={index} className="bg-primary/20 text-primary hover:bg-primary/30">
                      {achievement.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="lg:col-span-8">
          <Card className="h-full">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Обзор</TabsTrigger>
                <TabsTrigger value="achievements">Достижения</TabsTrigger>
                <TabsTrigger value="stats">Статистика</TabsTrigger>
                <TabsTrigger value="rankings">Рейтинги</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Показатели эффективности</h3>
                    <div className="space-y-3">
                      {university.kpis.map((kpi, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <div>
                            <div className="font-medium">{kpi.name}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Цель: {kpi.target}%</div>
                          </div>
                          <div className="flex items-center">
                            <span className="mr-2 font-bold">{kpi.current}%</span>
                            <span className={`text-sm ${kpi.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                              {kpi.change > 0 ? '+' : ''}{kpi.change}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">Активность за последние 30 дней</h3>
                    <div className="space-y-3">
                      {university.activities.map((activity, index) => (
                        <div key={index} className="flex items-start">
                          <div className="mr-3 mt-1">
                            {activity.type === 'event' && <CalendarIcon className="h-5 w-5 text-primary" />}
                            {activity.type === 'course' && <BookOpenIcon className="h-5 w-5 text-primary" />}
                            {activity.type === 'achievement' && <AcademicCapIcon className="h-5 w-5 text-primary" />}
                          </div>
                          <div>
                            <div className="font-medium">{activity.title}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{activity.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Задачи и цели</h3>
                  <div className="space-y-3">
                    {university.goals.map((goal, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex justify-between">
                          <div className="font-medium">{goal.title}</div>
                          <Badge className={
                            goal.status === 'Выполнено' ? 'bg-green-500' : 
                            goal.status === 'В процессе' ? 'bg-blue-500' : 'bg-yellow-500'
                          }>
                            {goal.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{goal.description}</div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${goal.progress}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-end mt-1">
                          <span className="text-xs text-gray-500 dark:text-gray-400">{goal.progress}% завершено</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="achievements" className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {university.allAchievements.map((achievement, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className={`p-2 text-white ${achievement.unlocked ? 'bg-primary' : 'bg-gray-400'}`}>
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">{achievement.name}</h4>
                          {achievement.unlocked ? (
                            <CheckBadgeIcon className="h-5 w-5" />
                          ) : (
                            <LockClosedIcon className="h-5 w-5" />
                          )}
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{achievement.description}</p>
                        {!achievement.unlocked && (
                          <div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-1">
                              <div 
                                className="bg-primary h-2 rounded-full" 
                                style={{ width: `${achievement.progress}%` }}
                              ></div>
                            </div>
                            <div className="text-xs text-right text-gray-500 dark:text-gray-400">
                              {achievement.progress}% прогресса
                            </div>
                          </div>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="stats" className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {university.statsHighlights.map((stat, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex flex-col items-center">
                        <div className="text-3xl font-bold mb-2">{stat.value}</div>
                        <div className="text-sm text-center">{stat.label}</div>
                        <div className={`text-sm mt-2 ${stat.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {stat.change > 0 ? '+' : ''}{stat.change}% за год
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4">
                    <h3 className="text-lg font-bold mb-4">Распределение по специальностям</h3>
                    <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded p-2 flex items-center justify-center">
                      [График распределения студентов по специальностям]
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <h3 className="text-lg font-bold mb-4">Динамика трудоустройства</h3>
                    <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded p-2 flex items-center justify-center">
                      [График динамики трудоустройства выпускников]
                    </div>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="rankings" className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4">
                    <h3 className="text-lg font-bold mb-4">Позиции в национальных рейтингах</h3>
                    <div className="space-y-4">
                      {university.nationalRankings.map((ranking, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{ranking.name}</span>
                            <span className="font-bold">#{ranking.position}</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div 
                              className="bg-primary h-2.5 rounded-full" 
                              style={{ width: `${Math.min(100, 100 - (ranking.position / 10) * 100)}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                            <span>Прошлый год: #{ranking.previousPosition}</span>
                            <span className={ranking.previousPosition > ranking.position ? 'text-green-500' : 'text-red-500'}>
                              {ranking.previousPosition > ranking.position ? '▲' : '▼'} 
                              {Math.abs(ranking.previousPosition - ranking.position)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <h3 className="text-lg font-bold mb-4">Позиции в международных рейтингах</h3>
                    <div className="space-y-4">
                      {university.internationalRankings.map((ranking, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{ranking.name}</span>
                            <span className="font-bold">#{ranking.position}</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div 
                              className="bg-primary h-2.5 rounded-full" 
                              style={{ width: `${Math.min(100, 100 - (ranking.position / 500) * 100)}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                            <span>Прошлый год: #{ranking.previousPosition}</span>
                            <span className={ranking.previousPosition > ranking.position ? 'text-green-500' : 'text-red-500'}>
                              {ranking.previousPosition > ranking.position ? '▲' : '▼'} 
                              {Math.abs(ranking.previousPosition - ranking.position)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
      
      {/* Статистика и аналитика */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="p-4 col-span-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Ключевые показатели</h2>
            <button className="text-primary hover:text-primary/80">
              <ArrowsRightLeftIcon className="h-5 w-5" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Общее число студентов</div>
                <div className="text-2xl font-bold">{demographicsData.totalStudents}</div>
              </div>
              <div className="text-green-500 flex items-center">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                {demographicsData.studentGrowth}%
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Трудоустройство выпускников</div>
                <div className="text-2xl font-bold">{employmentData.employmentRate}%</div>
              </div>
              <div className="text-green-500 flex items-center">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                {employmentData.rateGrowth}%
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Средний рейтинг курсов</div>
                <div className="text-2xl font-bold">{coursesData.averageSatisfaction}</div>
              </div>
              <div className="text-green-500 flex items-center">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                {coursesData.satisfactionImprovement}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Процент завершения курсов</div>
                <div className="text-2xl font-bold">{coursesData.averageCompletionRate}%</div>
              </div>
              <div className="text-green-500 flex items-center">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                {coursesData.completionImprovement}%
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Участие в мероприятиях</div>
                <div className="text-2xl font-bold">{eventParticipationData.totalParticipationRate}%</div>
              </div>
              <div className="text-green-500 flex items-center">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                {eventParticipationData.growthRate}%
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Демографический анализ</h2>
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Все студенты" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все студенты</SelectItem>
                <SelectItem value="undergraduate">Бакалавриат</SelectItem>
                <SelectItem value="masters">Магистратура</SelectItem>
                <SelectItem value="postgraduate">Аспирантура</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Распределение по полу</h3>
              <div className="h-56 bg-gray-100 dark:bg-gray-800 rounded p-2 flex items-center justify-center">
                [Круговая диаграмма распределения по полу]
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                    <span>Мужчины: {demographicsData.gender.male}%</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-pink-500 mr-2"></div>
                    <span>Женщины: {demographicsData.gender.female}%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Возрастные группы</h3>
              <div className="h-56 bg-gray-100 dark:bg-gray-800 rounded p-2 flex items-center justify-center">
                [Столбчатая диаграмма возрастных групп]
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                {demographicsData.age.map((group, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`h-3 w-3 rounded-full bg-primary-${100 + index * 100} mr-2`}></div>
                    <span>{group.range}: {group.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Факультеты и популярные курсы */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Факультеты и образовательные программы</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {facultiesData.slice(0, 3).map((faculty, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="bg-primary p-4 text-white">
                <h3 className="text-xl font-bold">{faculty.name}</h3>
                <div className="text-sm opacity-80">Зав. кафедрой: {faculty.head}</div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-y-2 mb-4">
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Студентов</div>
                    <div className="font-bold">{faculty.students}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Трудоустройство</div>
                    <div className="font-bold">{faculty.employmentRate}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Удовлетворенность</div>
                    <div className="font-bold">{faculty.satisfaction}/5</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Рост</div>
                    <div className="font-bold text-green-500">+{faculty.growth}%</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-medium mb-2">Топ курсы</div>
                  <div className="space-y-2">
                    {faculty.topCourses.slice(0, 2).map((course, idx) => (
                      <div key={idx} className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <div>
                          <div className="font-medium">{course.title}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{course.students} студентов</div>
                        </div>
                        <div className="flex items-center">
                          <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
                          <span>{course.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full mt-4 text-primary font-medium text-center hover:underline">
                  Подробная статистика факультета
                </button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mb-8">
          <button className="flex items-center text-primary hover:text-primary/80">
            <span className="mr-2">Показать все факультеты</span>
            <ArrowLongRightIcon className="h-5 w-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Популярные курсы</h3>
                <div className="flex">
                  <button className="p-1 rounded-l border border-r-0 bg-gray-50 dark:bg-gray-800">
                    <ListBulletIcon className="h-5 w-5 text-gray-500" />
                  </button>
                  <button className="p-1 rounded-r border bg-white dark:bg-gray-900">
                    <Squares2X2Icon className="h-5 w-5 text-primary" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-3">
                {coursesData.popularCourses.map((course, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="mr-4 font-bold text-gray-400">{index + 1}</div>
                    <div className="flex-grow">
                      <div className="font-medium">{course.title}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{course.category} • {course.enrollments} студентов</div>
                    </div>
                    <div className="text-right min-w-[100px]">
                      <div className="flex items-center justify-end">
                        <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
                        <span>{course.satisfaction}</span>
                      </div>
                      <div className="text-xs text-green-500">{course.trendChange}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 text-primary font-medium text-center hover:underline">
                Посмотреть все курсы
              </button>
            </Card>
          </div>
          
          <div>
            <Card className="p-4">
              <h3 className="text-xl font-bold mb-4">Развитие навыков</h3>
              <div className="space-y-4">
                {coursesData.skillDevelopment.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.skill}</span>
                      <span className="text-sm text-green-500">+{skill.improvement}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                      <div 
                        className="bg-primary h-2.5 rounded-full" 
                        style={{ width: `${skill.currentLevel}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Начальный: {skill.initialLevel}%</span>
                      <span>Текущий: {skill.currentLevel}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Мероприятия и вовлеченность */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Мероприятия и вовлеченность студентов</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Участие в мероприятиях</h3>
                <Select defaultValue="6months">
                  <SelectTrigger className="w-36">
                    <SelectValue placeholder="За 6 месяцев" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3months">За 3 месяца</SelectItem>
                    <SelectItem value="6months">За 6 месяцев</SelectItem>
                    <SelectItem value="year">За год</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded p-2 flex items-center justify-center">
                [График участия в мероприятиях по месяцам]
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                {eventParticipationData.eventTypes.map((type, index) => (
                  <Card key={index} className="p-3">
                    <div className="text-xl font-bold">{type.count}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{type.name}</div>
                    <div className={`text-xs ${type.growth > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {type.growth > 0 ? '+' : ''}{type.growth}%
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>
          
          <div>
            <Card className="p-4 h-full">
              <h3 className="text-xl font-bold mb-4">Топ мероприятия</h3>
              <div className="space-y-3">
                {eventParticipationData.highImpactEvents.map((event, index) => (
                  <div key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                    <div className="font-medium">{event.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{event.date}</div>
                    <div className="flex justify-between text-sm">
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Участников:</span> {event.participants}
                      </div>
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">Рейтинг:</span> {event.rating}/5
                      </div>
                    </div>
                    <div className="mt-2 text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Влияние:</span> 
                      <span className="ml-1 font-medium">{event.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Трудоустройство и карьера */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Трудоустройство и карьера выпускников</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <Card className="p-4">
              <h3 className="text-xl font-bold mb-4">Трудоустройство по отраслям</h3>
              <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded p-2 flex items-center justify-center">
                [Диаграмма трудоустройства по отраслям]
              </div>
              <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                {employmentData.companyTypes.map((type, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`h-3 w-3 rounded-full bg-primary mr-2 opacity-${60 + index * 10}`}></div>
                    <span>{type.name}: {type.percentage}%</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          <div>
            <Card className="p-4">
              <h3 className="text-xl font-bold mb-4">Топ работодатели</h3>
              <div className="space-y-3">
                {employmentData.topCompanies.slice(0, 5).map((company, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <div className="flex items-center">
                      <div className="font-bold text-gray-400 mr-3">{index + 1}</div>
                      <div className="font-medium">{company.name}</div>
                    </div>
                    <div className="text-sm">{company.hires} выпускников</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          <div>
            <Card className="p-4">
              <h3 className="text-xl font-bold mb-4">Ключевые показатели</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Трудоустройство в течение 6 месяцев</span>
                    <span className="font-bold">{employmentData.employmentRate}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: `${employmentData.employmentRate}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Средняя зарплата выпускников</span>
                    <span className="font-bold">{employmentData.averageSalary.toLocaleString()} ₽</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: `${Math.min(100, (employmentData.averageSalary / 150000) * 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-xs text-gray-500 dark:text-gray-400 mt-1">
                    На {((employmentData.averageSalary / employmentData.industryAverageSalary) * 100 - 100).toFixed(1)}% выше среднего по отрасли
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Время до первого трудоустройства</span>
                    <span className="font-bold">{employmentData.averageTimeToEmployment} мес</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: `${Math.max(0, Math.min(100, (1 - employmentData.averageTimeToEmployment / 12) * 100))}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Соответствие специальности</span>
                    <span className="font-bold">{employmentData.fieldMatchRate}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: `${employmentData.fieldMatchRate}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Сравнение с другими университетами */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Сравнение с другими университетами</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="p-4">
              <h3 className="text-xl font-bold mb-4">Ключевые показатели эффективности</h3>
              <div className="space-y-4">
                {universityComparisonData.performanceMetrics.map((metric, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{metric.metric}</span>
                      <div className="text-sm">
                        <span className="font-bold">{metric.score}</span>
                        <span className="text-gray-500 dark:text-gray-400 mx-1">|</span>
                        <span className="text-gray-500 dark:text-gray-400">Средний: {metric.averageScore}</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                      <div 
                        className="bg-primary h-2.5 rounded-full" 
                        style={{ width: `${(metric.score / 100) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400">
                        Выше, чем у {metric.percentile}% университетов
                      </span>
                      <span className="text-green-500">{metric.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          
          <div>
            <Card className="p-4">
              <h3 className="text-xl font-bold mb-4">Топ университеты</h3>
              <div className="space-y-4">
                {universityComparisonData.topUniversities.map((uni, index) => (
                  <div key={index} className={`p-3 rounded ${index === 1 ? 'bg-primary/10 border border-primary' : 'bg-gray-50 dark:bg-gray-800'}`}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                          index === 0 ? 'bg-yellow-500' : 
                          index === 1 ? 'bg-primary' : 
                          index === 2 ? 'bg-orange-500' : 'bg-gray-400'
                        } text-white font-bold text-sm`}>
                          {index + 1}
                        </div>
                        <div className="font-medium">{uni.name}</div>
                      </div>
                      <div className="font-bold">{uni.score}</div>
                    </div>
                    <div className="mt-2 text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Сильные стороны:</span> 
                      <span className="ml-1">{uni.strengths.join(', ')}</span>
                    </div>
                    <div className="text-sm text-green-500 mt-1">
                      Улучшение: {uni.improvement}
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-primary font-medium text-center hover:underline">
                Полное сравнение
              </button>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Удовлетворенность и обратная связь */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Удовлетворенность студентов</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Академическая удовлетворенность</h3>
              <div className="flex items-center">
                <div className="text-3xl font-bold text-primary mr-2">{satisfactionData.overallScore}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">/ 5</div>
              </div>
            </div>
            
            <div className="space-y-4">
              {satisfactionData.academicSatisfaction.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{item.category}</span>
                    <div className="flex items-center">
                      <span className="font-bold mr-2">{item.score}</span>
                      <span className={`text-xs ${item.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {item.change > 0 ? '+' : ''}{item.change}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: `${(item.score / 5) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-xs text-gray-500 dark:text-gray-400">
                    Влияние: {item.impact}
                  </div>
                </div>
              ))}
            </div>
          </Card>
          
          <Card className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Кампус и инфраструктура</h3>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Общий рейтинг: <span className="font-bold text-black dark:text-white">{
                  (satisfactionData.campusSatisfaction.reduce((sum, item) => sum + item.score, 0) / 
                  satisfactionData.campusSatisfaction.length).toFixed(1)
                }</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {satisfactionData.campusSatisfaction.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{item.category}</span>
                    <div className="flex items-center">
                      <span className="font-bold mr-2">{item.score}</span>
                      <span className={`text-xs ${item.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {item.change > 0 ? '+' : ''}{item.change}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: `${(item.score / 5) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-xs text-gray-500 dark:text-gray-400">
                    Влияние: {item.impact}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-sm text-center">
              <div className="font-medium mb-2">Рейтинг среди университетов</div>
              <div className="flex items-center justify-center">
                <div className="text-4xl font-bold text-primary">{satisfactionData.universityRank}</div>
                <div className="ml-2 text-gray-500 dark:text-gray-400">
                  из {satisfactionData.totalUniversities}
                  <div className="text-green-500">
                    ▲{satisfactionData.previousRank - satisfactionData.universityRank} позиций за год
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 