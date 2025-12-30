import { BookOpen, Heart, Music, Moon } from 'lucide-react';

const actions = [
  { icon: BookOpen, label: 'Journal', color: 'hsl(var(--primary))' },
  { icon: Heart, label: 'Gratitude', color: 'hsl(350 80% 65%)' },
  { icon: Music, label: 'Meditate', color: 'hsl(180 60% 50%)' },
  { icon: Moon, label: 'Sleep', color: 'hsl(260 50% 60%)' },
];

const QuickActions = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="font-serif text-2xl text-foreground mb-2">Quick Actions</h3>
        <p className="text-sm text-muted-foreground">Start your practice</p>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action.label}
            className="flex items-center gap-3 p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-[1.02] group"
          >
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: `${action.color}15` }}
            >
              <action.icon 
                className="w-5 h-5 transition-colors duration-300"
                style={{ color: action.color }}
              />
            </div>
            <span className="text-sm font-medium text-foreground">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
