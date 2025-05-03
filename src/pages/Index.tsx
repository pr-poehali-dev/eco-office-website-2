import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  AlertTriangle, 
  BarChart3, 
  Clock, 
  FileText, 
  Lightbulb, 
  Settings, 
  User 
} from "lucide-react";

// Импортируем созданные компоненты
import Header from '@/components/Header';
import MobileNavigation from '@/components/MobileNavigation';
import StatisticsCards from '@/components/StatisticsCards';

const Dashboard: React.FC = () => {
  // Данные для статистики
  const statsData = [
    {
      title: "Общее энергопотребление",
      value: "2,456 кВт⋅ч",
      description: "За текущий месяц",
      change: "На 7% меньше прошлого месяца"
    },
    {
      title: "Экономия CO₂",
      value: "342 кг",
      description: "Меньше выбросов",
      change: "На 12% лучше, чем в прошлом месяце"
    },
    {
      title: "Активные устройства",
      value: "24",
      description: "Подключено сейчас",
      change: "из 32 зарегистрированных"
    }
  ];

  // Данные для событий
  const events = [
    { time: "12:45", message: "Кондиционер в переговорной №2 автоматически выключен", icon: <Lightbulb className="text-green-500" /> },
    { time: "10:30", message: "Превышение потребления электроэнергии в секторе B", icon: <AlertTriangle className="text-amber-500" /> },
    { time: "09:15", message: "Система освещения переведена в эко-режим", icon: <Lightbulb className="text-green-500" /> },
    { time: "Вчера", message: "Сформирован отчет за предыдущую неделю", icon: <FileText className="text-blue-500" /> },
  ];

  // Форматирование даты
  const formattedDate = new Date().toLocaleDateString('ru-RU', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-eco-background">
      {/* Шапка сайта */}
      <Header userName="Омар Гереев" />
      
      {/* Мобильная навигация */}
      <MobileNavigation />

      <main className="container py-6 mb-16 md:mb-0">
        <h1 className="text-2xl font-bold text-eco-text-primary mb-6">Обзор состояния офисов</h1>
        
        {/* Карточки статистики */}
        <StatisticsCards stats={statsData} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Tabs defaultValue="events">
              <TabsList className="mb-4">
                <TabsTrigger value="events">События</TabsTrigger>
                <TabsTrigger value="usage">Использование</TabsTrigger>
              </TabsList>
              
              <TabsContent value="events">
                <Card>
                  <CardHeader>
                    <CardTitle>Последние события</CardTitle>
                    <CardDescription>Список активностей системы</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {events.map((event, i) => (
                        <div key={i} className="flex items-start gap-3 pb-3 border-b last:border-0">
                          <div className="h-8 w-8 flex items-center justify-center">
                            {event.icon}
                          </div>
                          <div>
                            <div className="font-medium text-eco-text-primary">{event.message}</div>
                            <div className="text-sm text-eco-text-secondary flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {event.time}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="usage">
                <Card>
                  <CardHeader>
                    <CardTitle>Использование ресурсов</CardTitle>
                    <CardDescription>Распределение потребления</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-eco-text-secondary mb-2">График использования ресурсов</div>
                      <Button variant="outline">Показать подробнее</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Быстрые действия</CardTitle>
                <CardDescription>Управление системой</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  Создать новый отчет
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  Управление устройствами
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Settings className="mr-2 h-4 w-4" />
                  Настройки офиса
                </Button>
                <Button className="w-full justify-start bg-eco-accent hover:bg-eco-icon">
                  <Activity className="mr-2 h-4 w-4" />
                  Мониторинг сейчас
                </Button>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Информация</CardTitle>
                <CardDescription>Ваши данные</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-eco-text-secondary">Имя:</span>
                    <span className="font-medium">Омар Гереев</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-eco-text-secondary">Email:</span>
                    <span className="font-medium">gerevo@bk.ru</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-eco-text-secondary">Телефон:</span>
                    <span className="font-medium">+7 (999) 999-99-99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-eco-text-secondary">Роль:</span>
                    <span className="font-medium">Администратор</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;