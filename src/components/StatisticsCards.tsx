import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  change: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, description, change }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-eco-accent">{value}</div>
        <p className="text-eco-text-secondary text-sm mt-1">{change}</p>
      </CardContent>
    </Card>
  );
};

interface StatisticsCardsProps {
  stats: Array<{
    title: string;
    value: string;
    description: string;
    change: string;
  }>;
}

const StatisticsCards: React.FC<StatisticsCardsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          description={stat.description}
          change={stat.change}
        />
      ))}
    </div>
  );
};

export default StatisticsCards;