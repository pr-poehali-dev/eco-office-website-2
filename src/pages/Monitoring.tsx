
import Sidebar from '@/components/Sidebar';
import { useMobile } from '@/hooks/use-mobile';

const Monitoring = () => {
  const isMobile = useMobile();
  
  return (
    <div className="flex h-screen bg-ecoBg">
      <Sidebar />
      
      <div className={`flex-1 overflow-y-auto px-4 md:px-6 ${isMobile ? 'ml-0' : 'ml-20'}`}>
        <div className="max-w-7xl mx-auto py-6">
          <h1 className="text-2xl md:text-3xl font-bold text-ecoTextPrimary mb-6">
            Мониторинг энергопотребления
          </h1>
          
          <div className="bg-ecoWhite p-6 rounded-lg shadow-sm">
            <p className="text-ecoTextSecondary">Эта страница находится в разработке и будет доступна в ближайшее время.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
