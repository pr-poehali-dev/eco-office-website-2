import React from 'react';
import { Button } from "@/components/ui/button";
import { Building2, Activity, BarChart3, User } from "lucide-react";

const MobileNavigation: React.FC = () => {
  return (
    <div className="md:hidden bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0 z-10">
      <div className="grid grid-cols-4 gap-1">
        <Button variant="ghost" className="flex flex-col items-center py-2 text-xs">
          <Building2 className="h-5 w-5" />
          <span>Офис</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center py-2 text-xs">
          <Activity className="h-5 w-5" />
          <span>Мониторинг</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center py-2 text-xs">
          <BarChart3 className="h-5 w-5" />
          <span>Отчеты</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center py-2 text-xs">
          <User className="h-5 w-5" />
          <span>Профиль</span>
        </Button>
      </div>
    </div>
  );
};

export default MobileNavigation;