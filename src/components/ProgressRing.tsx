interface ProgressRingProps {
  progress: number;
  label: string;
  sublabel: string;
}

const ProgressRing = ({ progress, label, sublabel }: ProgressRingProps) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <svg width="140" height="140" className="-rotate-90">
          {/* Background circle */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            stroke="hsl(var(--secondary))"
            strokeWidth="12"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            stroke="url(#progressGradient)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset,
              transition: 'stroke-dashoffset 1s ease-out',
            }}
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(252 85% 85%)" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-serif text-3xl text-foreground">{progress}%</span>
        </div>
      </div>
      
      <div className="text-center">
        <p className="font-medium text-foreground">{label}</p>
        <p className="text-sm text-muted-foreground">{sublabel}</p>
      </div>
    </div>
  );
};

export default ProgressRing;
