import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, UserIcon, ClockIcon, AcademicCapIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function MentorDashboard() {
  // Данные ментора
  const mentor = {
    id: "1",
    name: "Арман Сагынбаев",
    position: "Senior Software Engineer",
    company: "Kolesa Group",
    expertise: ["Frontend Development", "React", "TypeScript", "Web Architecture"],
    experience: "10 лет",
    bio: "Ведущий разработчик в Kolesa Group. Специализация на frontend разработке и архитектуре современных веб-приложений. Выпускник КазНУ.",
    studentsCount: 12,
    activeSessionsCount: 5,
    completedSessionsCount: 78,
    rating: 4.9,
    reviews: 45,
  };

  // Данные студентов-подопечных
  const mentees = [
    {
      id: "1",
      name: "Алмас Сериков",
      university: "КазНУ им. аль-Фараби",
      specialization: "Информационные системы",
      progress: 65,
      nextSession: "20 мая 2023, 14:00",
      goals: ["Изучение React", "Подготовка к собеседованиям"],
      status: "active",
    },
    {
      id: "2",
      name: "Дана Казиева",
      university: "Nazarbayev University",
      specialization: "Программная инженерия",
      progress: 80,
      nextSession: "22 мая 2023, 16:30",
      goals: ["Изучение алгоритмов", "Стажировка в IT-компании"],
      status: "active",
    },
    {
      id: "3",
      name: "Айдар Нурланов",
      university: "КБТУ",
      specialization: "Компьютерные науки",
      progress: 50,
      nextSession: "18 мая 2023, 11:00",
      goals: ["Выбор специализации", "Поиск первой работы"],
      status: "active",
    },
    {
      id: "4",
      name: "Жаннур Сатыбалдиев",
      university: "МУИТ",
      specialization: "Информационные технологии",
      progress: 100,
      nextSession: null,
      goals: ["React", "TypeScript", "Собеседования"],
      status: "completed",
    },
  ];

  // Данные предстоящих сессий
  const upcomingSessions = [
    {
      id: "1",
      student: "Алмас Сериков",
      date: "20 мая 2023",
      time: "14:00 - 15:00",
      topic: "Разбор практического задания по React",
      type: "Видеозвонок",
    },
    {
      id: "2",
      student: "Дана Казиева",
      date: "22 мая 2023",
      time: "16:30 - 17:30",
      topic: "Подготовка к техническому собеседованию",
      type: "Личная встреча",
    },
    {
      id: "3",
      student: "Айдар Нурланов",
      date: "18 мая 2023",
      time: "11:00 - 12:00",
      topic: "Обсуждение карьерного плана",
      type: "Видеозвонок",
    },
  ];

  // Отзывы студентов
  const reviews = [
    {
      id: "1",
      student: "Жаннур Сатыбалдиев",
      rating: 5,
      date: "10 мая 2023",
      text: "Арман - отличный ментор! Помог мне с подготовкой к собеседованиям и дал ценные советы по разработке на React. Благодаря его помощи я получил офер от Chocofamily!",
    },
    {
      id: "2",
      student: "Айжан Калиева",
      rating: 5,
      date: "5 мая 2023",
      text: "Очень помог разобраться с frontend архитектурой и лучшими практиками в React. Всегда отвечает на вопросы и дает полезные материалы для изучения.",
    },
    {
      id: "3",
      student: "Бакыт Нурмагамбетов",
      rating: 4,
      date: "28 апреля 2023",
      text: "Хорошие сессии, много практических советов по работе с TypeScript. Рекомендую всем, кто хочет развиваться в frontend разработке.",
    },
  ];

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Дашборд ментора</h1>
          <p className="text-muted-foreground">
            Управляйте сессиями и отслеживайте прогресс ваших студентов
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <UserIcon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle>{mentor.name}</CardTitle>
                <CardDescription>{mentor.position} в {mentor.company}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">О себе</h3>
              <p className="text-sm">{mentor.bio}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Экспертиза</h3>
              <div className="flex flex-wrap gap-1">
                {mentor.expertise.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold">{mentor.studentsCount}</div>
                <div className="text-xs text-muted-foreground">Студентов</div>
              </div>
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold">{mentor.rating}</div>
                <div className="text-xs text-muted-foreground">Рейтинг</div>
              </div>
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold">{mentor.activeSessionsCount}</div>
                <div className="text-xs text-muted-foreground">Активных сессий</div>
              </div>
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold">{mentor.completedSessionsCount}</div>
                <div className="text-xs text-muted-foreground">Проведено сессий</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Редактировать профиль
            </Button>
          </CardFooter>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Ближайшие сессии</CardTitle>
            <CardDescription>
              Запланированные встречи со студентами
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <Card key={session.id} className="overflow-hidden">
                  <div className="flex border-l-4 border-primary p-4">
                    <div className="flex-shrink-0 mr-4 flex flex-col items-center justify-center">
                      <div className="text-xl font-bold">
                        {session.date.split(" ")[0]}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {session.date.split(" ")[1]}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className="font-semibold">{session.topic}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground mt-1 gap-y-1 gap-x-4">
                        <div className="flex items-center">
                          <UserIcon className="h-4 w-4 mr-1" />
                          <span>{session.student}</span>
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          <span>{session.time}</span>
                        </div>
                        <div className="flex items-center">
                          <ChatBubbleLeftRightIcon className="h-4 w-4 mr-1" />
                          <span>{session.type}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0 self-center">
                      <Button size="sm">Начать</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Button variant="outline">
                Все сессии
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="students" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="students">Мои студенты</TabsTrigger>
          <TabsTrigger value="reviews">Отзывы</TabsTrigger>
        </TabsList>
        
        <TabsContent value="students" className="space-y-4">
          {mentees.filter(mentee => mentee.status === "active").map((mentee) => (
            <Card key={mentee.id}>
              <div className="flex flex-col md:flex-row md:items-center justify-between p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <UserIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-lg">{mentee.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {mentee.university}, {mentee.specialization}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {mentee.goals.map((goal) => (
                        <Badge key={goal} variant="outline" className="text-xs">
                          {goal}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 flex flex-col items-end gap-2">
                  <div className="text-sm text-muted-foreground">
                    Прогресс: {mentee.progress}%
                  </div>
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${mentee.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Следующая сессия: {mentee.nextSession}
                  </div>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="outline">Профиль</Button>
                    <Button size="sm">Запланировать</Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
          
          <div className="text-center mt-6">
            <Button variant="outline">Все студенты</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="reviews" className="space-y-4">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-base">{review.student}</CardTitle>
                    <CardDescription>{review.date}</CardDescription>
                  </div>
                  <div className="flex items-center">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{review.text}</p>
              </CardContent>
            </Card>
          ))}
          
          <div className="text-center mt-6">
            <Button variant="outline">Все отзывы ({mentor.reviews})</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 