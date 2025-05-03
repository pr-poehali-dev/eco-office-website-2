
import { useState<div className="flex items-center gap-2"> } from 'react';
import
            <Button variant="outline" className="flex items Sidebar from '@/components/Sidebar';-center gap-2">
              <User
import UserInfoCard from '@/ className="h-4 w-4"components/UserInfoCard';
import Ener />
              <span className="hidden md:inlinegyStatsCard from '@/components/EnergyStatsCard';
import EventLogCard from '@/components/EventLogCard';">Омар Гереев</span>
import QuickActionsCard from '@/components/QuickActionsCard';
import
            </Button>
          </div>
        </div>
      </header>

       { useMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useM{/* Мобильная навигация */}
      <div className="md:hidden bg-white border-tobile();
  const [currentUser] = useState({
    name: ' border-gray-200 fixed bottom-0 left-0 right-0 z-10Омар Гереев',
    email">
        <div className="grid grid-cols-4 gap-1: 'gerevo@bk.ru',
    phone: '">
          <Button variant="ghost" className="flex flex79999999999',
    role: '-col items-center py-2 textАдминистратор',
    officeCount:-xs">
            <Building 3
  });

  const energ2 className="h-5 w-5" />
            <span>ОфyStats = [
    { title: 'ис</span>
          </Button>
          <Button variant="ghost" className="flexЭлектроэнергия', value: '2 flex-col items-center py-2 ,453', unit: 'кВт/text-xs">
            <Activity className="h-5 w-5" />ч', change: -8.2, icon:
            <span>Мониторинг 'Zap' },
    </span>
          </Button>
          { title: 'Вода', value<Button variant="ghost" className="flex flex: '12,873', unit: '-col items-center py-2 textл', change: 1.9-xs">
            <BarChart3 className="h-5 w-5, icon: 'Drop" />
            <span>Отчlets' },
    {еты</span>
          </Button> title: 'Угле
          <Button variant="ghost" className="родный след', value: 'flex flex-col items-center py-2 text-xs">
            <User854', unit: 'к className="h-5 w-5"г CO₂', change: - />
            <span>Профиль</span>
          </Button>12.3, icon: 'Leaf'
        </div>
      </div> },
    { title: '

      <main className="container pyЭкономия', value: '4,532', unit: '-6 mb-16 md:mb₽', change: 15.4, icon: 'T-0">
        <h1 className="textrendingUp' },
  ];

  -2xl font-bold text-eco-textconst recentEvents = [
    {
      id: '1',
      type:-primary mb-6">Об 'warning',
      message: 'зор состояния офисов</h1>
        
        Превышение потребления электроэ<div className="grid grid-cols-1 нергии в конференц-залеmd:grid-cols-3 gap-6 ',
      timestamp: '10 мин назад',
      officemb-6">
          <Card>
            <CardHeader className="pb-2">
              <Car: 'Офис #1'
    },dTitle className="text-lg">
    {
      id: '2',Общее энергопотребление
      type: 'info',
      </CardTitle>
              <CardDescription>message: 'Техническое обслуЗа текущий месяц</Carживание системы учета запланировано на dDescription>
            </CardHeader>
            10:00',
      timestamp:<CardContent>
              <div className '1 час назад',
      office: 'Все="text-3xl font-bold text офисы'
    },
    {-eco-accent">2,456 кВт⋅ч
      id: '3',
      type</div>
              <p: 'success',
      message:  className="text-eco-text-'Достигнута экономия электроэнергии secondary text-sm mt-1">На 7% меньше пр15% в этом месяце',ошлого месяца</p>
      timestamp: '2 часа наз
            </CardContent>
          </Card>ад',
      office: 'Оф
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lgис #2'
    },
    {
      id: '4',
      type: 'error',
      message: ">Экономия CO₂</CardTitle>
              <CardDescription>'Потеряно соединение с датчиком температуМеньше выбросовры в офисе #3',
      </CardDescription>
            </CardHeader>timestamp: '3 часа назад',
            <CardContent>
              <div className
      office: 'Офис #="text-3xl font-bold text-3'
    }
  ];

  eco-accent">342 кг</divconst quickActions = [
    { icon:>
              <p className="text-eco 'FileText', label: -text-secondary text-sm mt-1'Создать отчет',">На 12% лучше, path: '/reports' },
    { icon чем в прошлом месяце: 'Settings', label: '</p>
            </CardContent>Настройки', path: '/settings' },
          </Card>
          
          <Car
    { icon: 'Slidersd>
            <CardHeader className="pb-', label: 'Управление',2">
              <CardTitle className="text path: '/devices' },
    { icon: 'BarChart2', label-lg">Активные устройства</CardTitle: 'Мониторинг',>
              <CardDescription>Под path: '/monitoring' }
  ];

  return (
    <div className="flexключено сейчас</CardDescription h-screen bg-ec>
            </CardHeader>
            oBg">
      <Sidebar />
      <CardContent>
              <div className="text-3xl font-bold text-eco-
      <div className={`flexaccent">24</div>
              <p className="text-eco-text--1 overflow-y-auto pxsecondary text-sm mt-1">из-4 md:px-6 ${isMobile ? 'ml 32 зарегистрирован-0' : 'ml-20'}`}>
        <div className="max-w-7xl mx-auto pyных</p>
            </CardContent>-6">
          <div className
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">="flex flex-col md:flex
          <div className="m-row justify-between items-startd:col-span-2">
             md:items-center mb-6">
            <h1 className="text<Tabs defaultValue="events">
              <Tab-2xl md:text-3xl font-bold text-ecoTextsList className="mb-4">
                <TabsTPrimary mb-2 md:mbrigger value="events">События-0">
              Пан</TabsTrigger>
                <Tabель управления
            </h1>sTrigger value="usage">Использование
            <div className="text-sm</TabsTrigger>
              </TabsList>
              
              <Tab text-ecoTextSecondary">
              sContent value="events">
                <Car<span className="font-medium text-ed>
                  <CardHeader>coTextPrimary">С
                    <CardTitle>Последниеегодня: </span>
               события</CardTitle>
                    <CardDescription{new Date().toLocaleDateString('ru->Список активностей системы</CardDescription>RU', { weekday: '
                  </CardHeader>
                  long', year: 'numeric',<CardContent>
                    <div className month: 'long', day: '="space-y-4">numeric' })}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg
                      {[
                        {:grid-cols-3 gap-6 time: "12:45", message mb-6">
            <div className="lg:col-span-: "Кондиционер в1">
              <UserInfoCard
                name={currentUser.name}
                email={ переговорной №2 автcurrentUser.email}
                phone={currentоматически выключен", iconUser.phone}
                role={currentUser: <Lightbulb className.role}
                officeCount={currentUser.officeCount}
              ="text-green-500" /> },/>
            </div>
            
                        { time: "10:30
            <div className="lg:col-span", message: "Превышение-2">
              <div className="grid grid- потребления электроэнергии вcols-1 sm:grid-cols- секторе B", icon: <AlertTriangle className="text2 md:grid-cols-4-amber-500" /> }, gap-4">
                {energ
                        { time: "09:15yStats.map((stat, index) =>", message: "Система освещения пере (
                  <EnergyStatsCarведена в эко-режим",d
                    key={index}
                     icon: <Lightbulb classNametitle={stat.title}
                    value="text-green-500" /> },={stat.value}
                    unit={stat.unit}
                    change={stat
                        { time: "Вчера", message.change}
                    icon={stat.: "Сформирован отчет заicon}
                  />
                ))} предыдущую неделю", icon
              </div>
            </div>: <FileText className="text-blue-
          </div>
          
          500" /> },
                      <div className="grid grid-cols-1 ].map((event, i) => (
                        <div key={lg:grid-cols-3 gap-6 i} className="flex items-startmb-6">
            <div className=" gap-3 pb-3 border-lg:col-span-2">
              <Eventb last:border-0">
                          LogCard events={recentEvents} />
            </div>
            <div className="lg:col-span-1<div className="h-8 w-8 flex items-center justify-center">
              <QuickActionsCard actions={quickActions} />
            </div>">
                            {event.icon}
                
          </div>
        </div>          </div>
                          <div>
      </div>
    </div>
                            <div className="font-medium
  );
};

export default Index; text-eco-text-primary">{event
