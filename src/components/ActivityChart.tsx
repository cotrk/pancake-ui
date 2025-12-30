const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const data = [65, 40, 85, 50, 90, 75, 60];

const ActivityChart = () => {
  const maxValue = Math.max(...data);

  return (
    <div className="flex flex-col gap-6 h-full">
      <div>
        <h3 className="font-serif text-2xl text-foreground mb-2">Weekly Activity</h3>
        <p className="text-sm text-muted-foreground">Your mindfulness journey</p>
      </div>
      
      <div className="flex items-end justify-between gap-2 flex-1 min-h-[120px]">
        {days.map((day, index) => {
          const height = (data[index] / maxValue) * 100;
          const isToday = index === new Date().getDay() - 1;
          
          return (
            <div key={day} className="flex flex-col items-center gap-2 flex-1">
              <div 
                className="w-full rounded-xl transition-all duration-500 hover:opacity-80"
                style={{
                  height: `${height}%`,
                  minHeight: '20px',
                  background: isToday 
                    ? 'linear-gradient(180deg, hsl(var(--primary)) 0%, hsl(252 85% 85%) 100%)'
                    : 'hsl(var(--secondary))',
                }}
              />
              <span className={`text-xs ${isToday ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                {day}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityChart;
