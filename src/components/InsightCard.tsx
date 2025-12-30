import { Lightbulb } from 'lucide-react';

const InsightCard = () => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex items-center gap-3">
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: 'hsl(45 100% 60% / 0.15)' }}
        >
          <Lightbulb className="w-5 h-5" style={{ color: 'hsl(45 100% 50%)' }} />
        </div>
        <span className="text-label">Daily Insight</span>
      </div>
      
      <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-relaxed flex-1">
        "The present moment is filled with joy and happiness. If you are attentive, you will see it."
      </blockquote>
      
      <p className="text-sm text-muted-foreground">— Thich Nhat Hanh</p>
    </div>
  );
};

export default InsightCard;
