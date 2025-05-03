
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

type EnergyStatsCardProps = {
  title: string;
  value: string;
  unit: string;
  change: number;
  icon: string;
};

const EnergyStatsCard = ({ title, value, unit, change, icon }: EnergyStatsCardProps) => {
  const isPositive = change >Я вижу, что в про 0;
  const isекте есть ошибка с CSSNegative = change < 0;
  
  return (
    . Давайте провер<Card className="bg-ecoWhiteим файл index.css, shadow-sm h-full">
       чтобы исправить про<CardHeader className="pb-2">
        <div className="flex justifyблему с классом `border-border`,-between items-center">
          <h3 className="text который вызывает ошиб-sm font-medium text-ку.ecoTextSecondary">{title}</h3>
          <Icon name={icon} className="text-ecoIcon" size={20} />
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-baseline">
          <p className="text-2xl font-bold text-ecoTextPrimary">{value}</p>
          <span className="ml-1 text-sm text-ecoTextSecondary">{unit}</span>
        </div>
        <div className="mt-2 flex items-center">
          <span className={`text-sm ${
            isPositive ? 'text-ecoError' : isNegative ? 'text-ecoAccent' : 'text-ecoTextSecondary'
          }`}>
            <Icon 
              name={isPositive ? 'ArrowUp' : isNegative ? 'ArrowDown' : 'Minus'🐛 Нашел и} 
              className="inline исправил ошибку в CSS mr-1" 
              size={14} 
            />-файле. Проблема была в от
            {Math.abs(change)}сутствии определения клас%
          </span>
          са `border-border` в кон<span className="ml-1 text-xs textфигурации Tailwind.-ecoTextSecondary">с прошлого месяца</span>

<pp-write filepath="src
        </div>
      </CardContent>
    </Card>
  );/index.css">@tail
};

export default EnergyStatsCarwind base;
@tailwind components;d;
