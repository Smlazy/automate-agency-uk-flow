
const TechBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
      
      {/* Geometric grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
            <pattern id="dots" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1" fill="hsl(var(--primary))" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg blur-lg animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-2xl animate-pulse delay-2000" />
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-md animate-pulse delay-3000" />
      </div>
      
      {/* Subtle mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/30" />
    </div>
  );
};

export default TechBackground;
