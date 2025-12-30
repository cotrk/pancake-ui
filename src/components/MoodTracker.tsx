import { useState } from 'react';

const moods = [
  { emoji: '😊', label: 'Happy', color: 'hsl(45 100% 60%)' },
  { emoji: '😌', label: 'Calm', color: 'hsl(180 60% 55%)' },
  { emoji: '😔', label: 'Sad', color: 'hsl(220 50% 60%)' },
  { emoji: '😤', label: 'Frustrated', color: 'hsl(15 80% 55%)' },
  { emoji: '😴', label: 'Tired', color: 'hsl(260 40% 60%)' },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="font-serif text-2xl text-foreground mb-2">How are you feeling?</h3>
        <p className="text-sm text-muted-foreground">Track your emotional state</p>
      </div>
      
      <div className="flex items-center justify-between gap-3">
        {moods.map((mood, index) => (
          <button
            key={mood.label}
            onClick={() => setSelectedMood(index)}
            className={`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-300 ${
              selectedMood === index 
                ? 'bg-secondary scale-110' 
                : 'hover:bg-secondary/50 hover:scale-105'
            }`}
          >
            <span className="text-3xl">{mood.emoji}</span>
            <span className="text-xs text-muted-foreground">{mood.label}</span>
          </button>
        ))}
      </div>
      
      {selectedMood !== null && (
        <div 
          className="p-4 rounded-2xl animate-scale-in"
          style={{ backgroundColor: `${moods[selectedMood].color}15` }}
        >
          <p className="text-sm text-foreground">
            You're feeling <strong>{moods[selectedMood].label.toLowerCase()}</strong> today. 
            That's completely valid. 💜
          </p>
        </div>
      )}
    </div>
  );
};

export default MoodTracker;
