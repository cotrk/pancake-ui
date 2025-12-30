const GradientBackground = () => {
  return (
    <>
      {/* Top-left lavender glow */}
      <div 
        className="gradient-glow glow-lavender animate-pulse-soft"
        style={{
          width: '60vw',
          height: '60vw',
          top: '-20vw',
          left: '-20vw',
        }}
      />
      
      {/* Bottom-right peach glow */}
      <div 
        className="gradient-glow glow-peach animate-pulse-soft"
        style={{
          width: '50vw',
          height: '50vw',
          bottom: '-15vw',
          right: '-15vw',
          animationDelay: '2s',
        }}
      />
    </>
  );
};

export default GradientBackground;
