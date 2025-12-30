const OrbPlaceholder = () => {
  return (
    <div className="relative w-full h-48 md:h-64 flex items-center justify-center">
      {/* Outer glow ring */}
      <div 
        className="absolute w-40 h-40 md:w-56 md:h-56 rounded-full animate-pulse-soft"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)',
        }}
      />
      
      {/* Main orb */}
      <div 
        className="relative w-24 h-24 md:w-32 md:h-32 rounded-full animate-float"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(252 85% 85%) 50%, hsl(var(--glow-peach)) 100%)',
          boxShadow: '0 20px 60px hsl(var(--primary) / 0.3), inset 0 -10px 30px rgba(255,255,255,0.3)',
        }}
      >
        {/* Inner highlight */}
        <div 
          className="absolute top-3 left-3 md:top-4 md:left-4 w-8 h-8 md:w-12 md:h-12 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
          }}
        />
      </div>
      
      {/* Spline-ready placeholder text */}
      <div className="absolute bottom-0 left-0 right-0 text-center">
        <span className="text-label text-xs opacity-50">3D Element Placeholder</span>
      </div>
    </div>
  );
};

export default OrbPlaceholder;
