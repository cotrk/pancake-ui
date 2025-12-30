import { Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative z-10 flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(252 85% 85%) 100%)',
          }}
        >
          <Sparkles className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-serif text-2xl text-foreground">Mindly</span>
      </div>
      
      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300">
          Dashboard
        </a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300">
          Insights
        </a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300">
          Journal
        </a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300">
          Settings
        </a>
      </nav>
      
      {/* CTA */}
      <button className="btn-primary">
        Get Started
      </button>
    </header>
  );
};

export default Header;
