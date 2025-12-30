import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  label: string;
  value: string;
  change: number;
  period: string;
}

const StatsCard = ({ label, value, change, period }: StatsCardProps) => {
  const isPositive = change >= 0;
  
  return (
    <div className="flex flex-col gap-4">
      <span className="text-label">{label}</span>
      <div className="flex items-end gap-3">
        <span className="font-serif text-4xl md:text-5xl text-foreground">{value}</span>
        <div className={`flex items-center gap-1 pb-2 ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
          {isPositive ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span className="text-sm font-medium">{isPositive ? '+' : ''}{change}%</span>
        </div>
      </div>
      <span className="text-sm text-muted-foreground">{period}</span>
    </div>
  );
};

export default StatsCard;
