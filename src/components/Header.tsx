import React from 'react';
import { Button } from "@/components/ui/button";
import { Building2, Activity, BarChart3, Settings, User, Lightbulb } from "lucide-react";

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-6 w-6 text-eco-accent" />
          <span className="text-xl font-semibold text-eco-text-primary">ЭкоОфис</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Button variant="ghost" className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            <span>Мой офис</span>
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            <span>Мониторинг</span>
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            <span>Отчеты</span>
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span>Настройки</span>
          </Button>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden md:inline">{userName}</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;