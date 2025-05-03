
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, User, BarChart2, Settings, Sliders, FileText, LogOut,
  Menu, X
} from 'lucide-react';
import Icon from '@/components/ui/icon';
import { useMobile } from '@/hooks/use-mobile';

const Sidebar = () => {
  const location = useLocation();
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = useState(!isMobile);

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { path: '/', icon: 'Home', title: 'Главная' },
    { path: '/profile', icon: 'User', title: 'Мой профиль' },
    { path: '/monitoring', icon: 'BarChart2', title: 'Мониторинг' },
    { path: '/devices', icon: 'Sliders', title: 'Управление устройствами' },
    { path: '/reports', icon: 'FileText', title: 'Отчеты' },
    { path: '/settings', icon: 'Settings', title: 'Настройки' },
    { path: '/logout', icon: 'LogOut', title: 'Выход', className: 'mt-auto' },
  ];

  return (
    <>
      {isMobile && (
        <button 
          onClick={toggleSidebar} 
          className="fixed top-4 left-4 z-50 bg-ecoAccent text-white p-2 rounded-full shadow-lg"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      )}
      
      <div 
        className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                  fixed top-0 left-0 h-full bg-ecoWhite shadow-lg transition-transform duration-300 ease-in-out z-40
                  ${isMobile ? 'w-64' : 'w-20 hover:w-64'}`}
      >
        <div className="flex flex-col h-full overflow-y-auto pb-5">
          <div className="p-4 border-b border-gray-200">
            <h2 className={`font-bold text-ecoAccent ${isMobile || !isOpen ? 'text-xl text-center' : 'text-2xl'}`}>
              {isMobile || !isOpen ? 'ЭО' : 'Эко Офис'}
            </h2>
          </div>
          
          <div className="flex-1 py-4">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.path} className={item.className}>
                  <Link
                    to={item.path}
                    className={`flex items-center py-3 px-4 ${
                      location.pathname === item.path
                        ? 'bg-ecoBg text-ecoAccent font-medium'
                        : 'text-ecoTextSecondary hover:bg-ecoBg'
                    } transition-colors`}
                  >
                    <Icon name={item.icon} className="text-ecoIcon" size={20} />
                    <span className={`ml-4 transition-opacity duration-200 ${
                      isMobile || !isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
