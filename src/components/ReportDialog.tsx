import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText } from "lucide-react";

interface ReportDialogProps {
  trigger?: React.ReactNode;
  onCreateReport?: (data: any) => void;
}

const ReportDialog: React.FC<ReportDialogProps> = ({ 
  trigger, 
  onCreateReport = () => console.log("Report created") 
}) => {
  const [reportName, setReportName] = useState("");
  const [reportType, setReportType] = useState("");
  const [reportPeriod, setReportPeriod] = useState("");
  const [reportFormat, setReportFormat] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const reportData = {
      name: reportName,
      type: reportType,
      period: reportPeriod,
      format: reportFormat,
      date: new Date().toLocaleDateString("ru-RU")
    };
    
    onCreateReport(reportData);
    setOpen(false);
    
    // Сброс формы
    setReportName("");
    setReportType("");
    setReportPeriod("");
    setReportFormat("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            <FileText className="mr-2 h-4 w-4" />
            Создать отчет
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Создание нового отчета</DialogTitle>
            <DialogDescription>
              Заполните форму для создания нового отчета. Все поля обязательны для заполнения.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Название отчета</Label>
              <Input 
                id="name" 
                value={reportName} 
                onChange={(e) => setReportName(e.target.value)} 
                placeholder="Введите название отчета"
                required
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="type">Тип отчета</Label>
              <Select value={reportType} onValueChange={setReportType} required>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Выберите тип" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="energy">Энергопотребление</SelectItem>
                  <SelectItem value="co2">Выбросы CO₂</SelectItem>
                  <SelectItem value="financial">Финансовый</SelectItem>
                  <SelectItem value="efficiency">Эффективность</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="period">Период</Label>
              <Select value={reportPeriod} onValueChange={setReportPeriod} required>
                <SelectTrigger id="period">
                  <SelectValue placeholder="Выберите период" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current_month">Текущий месяц</SelectItem>
                  <SelectItem value="previous_month">Предыдущий месяц</SelectItem>
                  <SelectItem value="quarter">Квартал</SelectItem>
                  <SelectItem value="year">Год</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="format">Формат</Label>
              <Select value={reportFormat} onValueChange={setReportFormat} required>
                <SelectTrigger id="format">
                  <SelectValue placeholder="Выберите формат" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PDF">PDF</SelectItem>
                  <SelectItem value="EXCEL">Excel</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpen(false)}
            >
              Отмена
            </Button>
            <Button 
              type="submit" 
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              Создать
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReportDialog;