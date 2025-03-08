'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SiteMapManager from '../components/admin/SiteMapManager';
import SecurityMonitor from '../components/admin/SecurityMonitor';
import Image from 'next/image';
import { ArrowLeft, Shield, Globe, Map, Cpu, Lock, FileText, PanelLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ImprovementsPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Вернуться на главную</span>
          </Link>
          <h1 className="text-xl font-bold text-center">Платформа NAVYK - Улучшения</h1>
          <div className="w-[120px]"></div> {/* для баланса */}
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">Улучшения платформы NAVYK</CardTitle>
            <CardDescription>
              В этом разделе демонстрируются новые функции и улучшения, разработанные для платформы NAVYK.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Мы постоянно работаем над улучшением нашей платформы для обеспечения лучшего опыта пользователей и 
              расширения функциональных возможностей. Здесь вы можете увидеть и протестировать новейшие улучшения,
              которые мы разработали.
            </p>
          </CardContent>
        </Card>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <PanelLeft className="h-4 w-4" />
              <span>Обзор</span>
            </TabsTrigger>
            <TabsTrigger value="sitemap" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>Карта сайта</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Безопасность</span>
            </TabsTrigger>
            <TabsTrigger value="roadmap" className="flex items-center gap-2">
              <Map className="h-4 w-4" />
              <span>Roadmap</span>
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center gap-2">
              <Cpu className="h-4 w-4" />
              <span>AI Рекомендации</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Обзор улучшений</CardTitle>
                <CardDescription>
                  Ознакомьтесь с новыми функциями и улучшениями платформы NAVYK
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900">
                        <Globe className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                      </div>
                      <h3 className="text-lg font-medium">Автоматическая генерация карты сайта</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Система автоматической генерации и управления картой сайта для улучшения SEO и навигации,
                      с удобным интерфейсом управления и категоризации страниц.
                    </p>
                    <Button variant="outline" onClick={() => setActiveTab('sitemap')} className="mt-2">
                      Посмотреть демо
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-red-100 dark:bg-red-900">
                        <Shield className="h-5 w-5 text-red-600 dark:text-red-300" />
                      </div>
                      <h3 className="text-lg font-medium">Расширенная система безопасности</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Усиленная защита платформы с мониторингом инцидентов, регулярным сканированием уязвимостей,
                      и инструментами для обнаружения и предотвращения атак.
                    </p>
                    <Button variant="outline" onClick={() => setActiveTab('security')} className="mt-2">
                      Посмотреть демо
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900">
                        <Map className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                      </div>
                      <h3 className="text-lg font-medium">Интерактивная Roadmap карьерного роста</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Интерактивная карта карьерного развития с возможностью перетаскивания элементов,
                      настройки этапов и визуализации прогресса обучения.
                    </p>
                    <Button variant="outline" onClick={() => setActiveTab('roadmap')} className="mt-2">
                      Посмотреть демо
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-green-100 dark:bg-green-900">
                        <Cpu className="h-5 w-5 text-green-600 dark:text-green-300" />
                      </div>
                      <h3 className="text-lg font-medium">AI-рекомендации и аналитика</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Интеллектуальная система рекомендаций курсов, вакансий и мероприятий на основе
                      интересов и навыков пользователя с аналитикой прогресса.
                    </p>
                    <Button variant="outline" onClick={() => setActiveTab('ai')} className="mt-2">
                      Посмотреть демо
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                  <h3 className="text-lg font-medium mb-4">Также доступные улучшения</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Lock className="h-5 w-5 text-indigo-500 mt-0.5" />
                      <div>
                        <span className="font-medium">Расширенная система ролей и разрешений</span>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Гибкая система управления доступом с детальными разрешениями для разных типов пользователей.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-indigo-500 mt-0.5" />
                      <div>
                        <span className="font-medium">Экспорт отчетов и аналитики</span>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Возможность экспорта данных в различные форматы (PDF, Excel, CSV) для анализа и отчетности.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sitemap">
            <SiteMapManager />
          </TabsContent>
          
          <TabsContent value="security">
            <SecurityMonitor />
          </TabsContent>
          
          <TabsContent value="roadmap">
            <Card>
              <CardHeader>
                <CardTitle>Интерактивная Roadmap карьерного роста</CardTitle>
                <CardDescription>
                  Демонстрация интерактивной карты карьерного развития
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <div className="relative aspect-video w-full max-w-4xl border rounded-lg overflow-hidden">
                  <Image 
                    src="/assets/images/roadmap-demo.jpg" 
                    alt="Интерактивная Roadmap карьерного роста" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <p className="text-white text-center p-4">
                      Интерактивный интерфейс построения карьерного пути доступен после подключения компонента.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ai">
            <Card>
              <CardHeader>
                <CardTitle>AI-рекомендации и аналитика</CardTitle>
                <CardDescription>
                  Демонстрация интеллектуальной системы рекомендаций
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <div className="relative aspect-video w-full max-w-4xl border rounded-lg overflow-hidden">
                  <Image 
                    src="/assets/images/ai-recommendations-demo.jpg" 
                    alt="AI-рекомендации и аналитика" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <p className="text-white text-center p-4">
                      Интерфейс AI-рекомендаций доступен после подключения компонента.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="bg-white dark:bg-gray-800 border-t py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} NAVYK - Платформа для профессионального развития студентов
          </p>
        </div>
      </footer>
    </div>
  );
} 