import GradientBackground from '@/components/GradientBackground';
import Header from '@/components/Header';
import BentoCard from '@/components/BentoCard';
import OrbPlaceholder from '@/components/OrbPlaceholder';
import StatsCard from '@/components/StatsCard';
import MoodTracker from '@/components/MoodTracker';
import ActivityChart from '@/components/ActivityChart';
import QuickActions from '@/components/QuickActions';
import InsightCard from '@/components/InsightCard';
import ProgressRing from '@/components/ProgressRing';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <GradientBackground />
      
      <div className="relative z-10 px-6 md:px-16 lg:px-[120px] max-w-[1600px] mx-auto">
        <Header />
        
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-4 animate-fade-in">
              Welcome back, <span className="text-gradient">Sarah</span>
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Your mindfulness streak continues. Let's nurture your inner peace today.
            </p>
          </div>
        </section>
        
        {/* Bento Grid */}
        <section className="pb-16">
          <div className="grid grid-cols-12 gap-grid auto-rows-auto">
            {/* Stats Row */}
            <BentoCard span="small" className="animate-fade-in" >
              <StatsCard 
                label="Mindful Minutes"
                value="847"
                change={12}
                period="This month"
              />
            </BentoCard>
            
            <BentoCard span="small" className="animate-fade-in">
              <StatsCard 
                label="Current Streak"
                value="14"
                change={0}
                period="Days in a row"
              />
            </BentoCard>
            
            <BentoCard span="small" className="animate-fade-in">
              <StatsCard 
                label="Sessions"
                value="23"
                change={8}
                period="This week"
              />
            </BentoCard>
            
            {/* Main Content Row */}
            <BentoCard span="large" className="animate-fade-in">
              <MoodTracker />
            </BentoCard>
            
            <BentoCard span="small" className="animate-fade-in">
              <div className="flex flex-col items-center justify-center h-full">
                <ProgressRing 
                  progress={72}
                  label="Daily Goal"
                  sublabel="18 min remaining"
                />
              </div>
            </BentoCard>
            
            {/* Secondary Row */}
            <BentoCard span="medium" className="animate-fade-in">
              <ActivityChart />
            </BentoCard>
            
            <BentoCard span="medium" className="animate-fade-in">
              <QuickActions />
            </BentoCard>
            
            {/* Feature Row */}
            <BentoCard span="large" className="animate-fade-in">
              <InsightCard />
            </BentoCard>
            
            <BentoCard span="small" className="animate-fade-in">
              <OrbPlaceholder />
            </BentoCard>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
