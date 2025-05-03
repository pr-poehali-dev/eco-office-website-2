import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  User, 
  BarChart3, 
  Settings, 
  FileText, 
  Leaf, 
  LogOut 
} from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-green-500' : 'text-gray-500 hover:text-green-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Шапка */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Логотип */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2 text-green-500 font-medium">
                <Leaf className="h-5 w-5" />
                <span>Эко Офис</span>
              </Link>
            </div>
            
            {/* Навигация */}
            <nav className="hidden md:flex space-x-4">
              <Link to="/" className={`flex items-center gap-1 px-3 py-2 text-sm font-medium ${isActive('/')}`}>
                <Home className="h-4 w-4" />
                <span>Главная</span>
              </Link>
              <Link to="/profile" className={`flex items-center gap-1 px-3 py-2 text-sm font-medium ${isActive('/profile')}`}>
                <User className="h-4 w-4" />
                <span>Мой профиль</span>
              </Link>
              <Link to="/monitoring" className={`flex items-center gap-1 px-3 py-2 text-sm font-medium ${isActive('/monitoring')}`}>
                <BarChart3 className="h-4 w-4" />
                <span>Мониторинг</span>
              </Link>
              <Link to="/management" className={`flex items-center gap-1 px-3 py-2 text-sm font-medium ${isActive('/management')}`}>
                <Settings className="h-4 w-4" />
                <span>Управление</span>
              </Link>
              <Link to="/reports" className={`flex items-center gap-1 px-3 py-2 text-sm font-medium ${isActive('/reports')}`}>
                <FileText className="h-4 w-4" />
                <span>Отчеты</span>
              </Link>
            </nav>
            
            {/* Правая часть шапки */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5 text-gray-500" />
              </Button>
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5 text-gray-500" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Основное содержимое */}
      <main className="bg-gray-50">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;