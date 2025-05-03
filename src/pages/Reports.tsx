import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Eye, MoreVertical, Zap, BarChart, DollarSign, Factory2, Filter } from "lucide-react";
import MainLayout from '@/components/MainLayout';

// Типы отчетов
interface Report {
  id: string;
  title: string;
  date: string;
  type: 'PDF' | 'EXCEL';
  size: string;
  icon: React.ReactNode;
}

const Reports: React.FC = () => {
  // Состояния для фильтров
  const [period, setPeriod] = useState<string>("Май 2025");
  const [office, setOffice] = useState<string>("Все офисы");
  const [dataType, setDataType] = useState<string>("Энергопотребление");
  const [format, setFormat] = useState<string>("PDF");
  const [sortBy, setSortBy] = useState<string>("date");

  // Данные отчетов
  const reports: Report[] = [
    {
      id: "1",
      title: "Отчет по энергопотреблению за Апрель 2025",
      date: "03.05.2025",
      type: "PDF",
      size: "2.4 МБ",
      icon: <Zap className="text-yellow-500" />
    },
    {
      id: "2",
      title: "Сводка по выбросам CO₂ за 1 квартал 2025",
      date: "15.04.2025",
      type: "EXCEL",
      size: "1.8 МБ",
      icon: <Factory2 className="text-green-500" />
    },
    {
      id: "3",
      title: "Анализ эффективности систем отопления",
      date: "07.04.2025",
      type: "PDF",
      size: "3.2 МБ",
      icon: <BarChart className="text-blue-500" />
    },
    {
      id: "4",
      title: "Потребление электроэнергии по отделам",
      date: "31.03.2025",
      type: "EXCEL",
      size: "1.5 МБ",
      icon: <Zap className="text-yellow-500" />
    },
    {
      id: "5",
      title: "Финансовый отчет по затратам на электроэнергию",
      date: "15.03.2025",
      type: "PDF", 
      size: "4.1 МБ",
      icon: <DollarSign className="text-green-500" />
    }
  ];

  // Функция для применения фильтров
  const applyFilters = () => {
    console.log("Применяем фильтры:", { period, office, dataType, format });
    // Здесь был бы код для фильтрации отчетов
  };

  // Функция для создания нового отчета
  const createReport = () => {
    console.log("Создание нового отчета");
    // Здесь был бы код для создания нового отчета
  };

  return (
    <MainLayout>
      <div className="container py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-eco-text-primary">Отчеты</h1>
          <Button 
            className="bg-green-500 hover:bg-green-600 text-white" 
            onClick={createReport}
          >
            <FileText className="mr-2 h-4 w-4" />
            Создать отчет
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Фильтры */}
          <div className="lg:col-span-1">
            <Card className="p-5">
              <h2 className="text-lg font-medium mb-4">Фильтры</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Период</label>
                  <Select value={period} onValueChange={setPeriod}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выберите период" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Май 2025">Май 2025</SelectItem>
                      <SelectItem value="Апрель 2025">Апрель 2025</SelectItem>
                      <SelectItem value="Март 2025">Март 2025</SelectItem>
                      <SelectItem value="1 квартал 2025">1 квартал 2025</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Офис</label>
                  <Select value={office} onValueChange={setOffice}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выберите офис" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Все офисы">Все офисы</SelectItem>
                      <SelectItem value="Офис Москва">Офис Москва</SelectItem>
                      <SelectItem value="Офис Санкт-Петербург">Офис Санкт-Петербург</SelectItem>
                      <SelectItem value="Офис Казань">Офис Казань</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Тип данных</label>
                  <Select value={dataType} onValueChange={setDataType}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выберите тип данных" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Энергопотребление">Энергопотребление</SelectItem>
                      <SelectItem value="Выбросы CO₂">Выбросы CO₂</SelectItem>
                      <SelectItem value="Финансы">Финансы</SelectItem>
                      <SelectItem value="Эффективность">Эффективность</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Формат</label>
                  <Select value={format} onValueChange={setFormat}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выберите формат" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PDF">PDF</SelectItem>
                      <SelectItem value="EXCEL">EXCEL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white" 
                  onClick={applyFilters}
                >
                  Применить фильтры
                </Button>
              </div>
            </Card>
          </div>

          {/* Список отчетов */}
          <div className="lg:col-span-3">
            <Card className="p-5">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium">Сформированные отчеты</h2>
                <div className="flex items-center">
                  <Button variant="ghost" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Сортировка
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {reports.map((report) => (
                  <div key={report.id} className="border rounded-lg p-4 bg-white">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-gray-50 rounded-md">
                          {report.icon}
                        </div>
                        <div>
                          <h3 className="font-medium">{report.title}</h3>
                          <p className="text-sm text-gray-500">Создан: {report.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`text-xs px-2 py-1 rounded ${report.type === 'PDF' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-500'}`}>
                          {report.type} {report.size}
                        </div>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Reports;