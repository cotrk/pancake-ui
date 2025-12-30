import { ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  span?: 'small' | 'medium' | 'large' | 'wide' | 'tall';
}

const spanStyles = {
  small: 'col-span-12 md:col-span-4 row-span-1',
  medium: 'col-span-12 md:col-span-6 row-span-1',
  large: 'col-span-12 md:col-span-8 row-span-1',
  wide: 'col-span-12 row-span-1',
  tall: 'col-span-12 md:col-span-4 row-span-2',
};

const BentoCard = ({ children, className = '', span = 'medium' }: BentoCardProps) => {
  return (
    <div 
      className={`glass-card p-card ${spanStyles[span]} ${className}`}
      style={{ animationDelay: `${Math.random() * 0.3}s` }}
    >
      {children}
    </div>
  );
};

export default BentoCard;
