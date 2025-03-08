"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, UserIcon, BriefcaseIcon, PlusIcon } from "@heroicons/react/24/outline";
import AnalyticsDashboard from "@/app/components/AnalyticsDashboard";
import PageLayout from "@/app/components/PageLayout";

export default function EmployerDashboard() {
  // Данные активных вакансий
  const activeJobs = [
    {
      id: "1",
      title: "Frontend Developer",
      location: "Алматы",
      type: "Полная занятость",
      applicantsCount: 24,
      viewsCount: 178,
      postedDate: "10 мая 2023",
      status: "active",
    },
    {
      id: "2",
      title: "React Native Developer",
      location: "Удаленно",
      type: "Полная занятость",
      applicantsCount: 18,
      viewsCount: 145,
      postedDate: "5 мая 2023",
      status: "active",
    },
    {
      id: "3",
      title: "Junior DevOps Engineer",
      location: "Астана",
      type: "Стажировка",
      applicantsCount: 12,
      viewsCount: 98,
      postedDate: "15 апреля 2023",
      status: "active",
    },
  ];

  // Данные подходящих кандидатов
  const matchedCandidates = [
    {
      id: "1",
      name: "Алмас Сериков",
      university: "КазНУ им. аль-Фараби",
      specialization: "Информационные системы",
      skills: ["JavaScript", "React", "TypeScript"],
      matchScore: 95,
      applied: true,
      viewedProfile: true,
    },
    {
      id: "2",
      name: "Айдар Нурланов",
      university: "КБТУ",
      specialization: "Компьютерные науки",
      skills: ["JavaScript", "Node.js", "Python"],
      matchScore: 85,
      applied: false,
      viewedProfile: true,
    },
    {
      id: "3",
      name: "Дана Казиева",
      university: "Nazarbayev University",
      specialization: "Программная инженерия",
      skills: ["React", "Redux", "HTML/CSS"],
      matchScore: 80,
      applied: false,
      viewedProfile: false,
    },
    {
      id: "4",
      name: "Нурсултан Кенжебаев",
      university: "МУИТ",
      specialization: "Информационные технологии",
      skills: ["JavaScript", "React", "Git"],
      matchScore: 75,
      applied: true,
      viewedProfile: true,
    },
  ];

  // Данные последних активностей
  const recentActivities = [
    {
      id: "1",
      type: "application",
      studentName: "Алмас Сериков",
      jobTitle: "Frontend Developer",
      date: "15 мая 2023, 14:23",
    },
    {
      id: "2",
      type: "viewed",
      studentName: "Айдар Нурланов",
      jobTitle: "React Native Developer",
      date: "15 мая 2023, 11:45",
    },
    {
      id: "3",
      type: "saved",
      studentName: "Дана Казиева",
      jobTitle: "Junior DevOps Engineer",
      date: "14 мая 2023, 18:30",
    },
    {
      id: "4",
      type: "application",
      studentName: "Нурсултан Кенжебаев",
      jobTitle: "Frontend Developer",
      date: "13 мая 2023, 09:15",
    },
    {
      id: "5",
      type: "viewed",
      studentName: "Асель Бектурова",
      jobTitle: "Frontend Developer",
      date: "12 мая 2023, 16:50",
    },
  ];

  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Дашборд компании</h1>
              <p className="text-muted-foreground">
                Управляйте вакансиями и следите за откликами студентов
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button>
                <PlusIcon className="h-4 w-4 mr-2" />
                Создать вакансию
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Активных вакансий
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activeJobs.length}</div>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-green-500">+1 за месяц</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Всего откликов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">54</div>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-green-500">+12 за неделю</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Просмотров вакансий
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">421</div>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-green-500">+85 за неделю</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Приглашено студентов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <div className="flex items-center mt-1">
                  <span className="text-sm text-green-500">+5 за месяц</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Активные вакансии</CardTitle>
                  <CardDescription>
                    Управляйте вакансиями и отслеживайте статистику
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {activeJobs.map((job) => (
                      <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <div className="font-medium">{job.title}</div>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <svg
                                className="h-4 w-4 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center">
                              <BriefcaseIcon className="h-4 w-4 mr-1" />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center">
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              <span>Опубликовано: {job.postedDate}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              <div className="text-lg font-bold">{job.applicantsCount}</div>
                              <div className="text-xs text-muted-foreground">откликов</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold">{job.viewsCount}</div>
                              <div className="text-xs text-muted-foreground">просмотров</div>
                            </div>
                          </div>
                          <div>
                            <Button size="sm" variant="outline">
                              Управлять
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Button variant="outline">
                      Все вакансии
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Последние активности</CardTitle>
                  <CardDescription>
                    Отклики и просмотры ваших вакансий
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          activity.type === "application" ? "bg-green-100 text-green-700" :
                          activity.type === "viewed" ? "bg-blue-100 text-blue-700" :
                          "bg-amber-100 text-amber-700"
                        }`}>
                          {activity.type === "application" ? (
                            <BriefcaseIcon className="h-4 w-4" />
                          ) : activity.type === "viewed" ? (
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                              />
                            </svg>
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-sm">
                            {activity.studentName} {activity.type === "application" ? "откликнулся на" :
                              activity.type === "viewed" ? "просмотрел" : "сохранил"} вакансию <span className="font-semibold">{activity.jobTitle}</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">{activity.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Button variant="outline" size="sm">
                      Больше активностей
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Подходящие кандидаты</CardTitle>
                <CardDescription>
                  Студенты, чьи навыки соответствуют вашим вакансиям
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {matchedCandidates.map((candidate) => (
                    <div key={candidate.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <UserIcon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">
                            {candidate.name}
                            {candidate.applied && (
                              <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-200" variant="outline">
                                Откликнулся
                              </Badge>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {candidate.university}, {candidate.specialization}
                          </div>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {candidate.skills.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary">{candidate.matchScore}%</div>
                          <div className="text-xs text-muted-foreground">совпадение</div>
                        </div>
                        <div>
                          <Button size="sm">
                            {candidate.viewedProfile ? "Пригласить" : "Просмотреть профиль"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline">
                    Все кандидаты
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Аналитика вакансий</h2>
            <AnalyticsDashboard
              userType="employer"
              period="month"
              onPeriodChange={() => {}}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 