const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background Hexagon representing Materials/Chemistry structure */}
      <path 
        d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z" 
        stroke="currentColor" 
        strokeWidth="6" 
        strokeLinejoin="round" 
        className="text-bento-accent"
        fill="currentColor"
      />
      {/* Letter 'A' overlay */}
      <path 
        d="M50 25 L25 75 H40 L45 60 H55 L60 75 H75 L50 25 Z M47.5 50 L50 40 L52.5 50 H47.5 Z" 
        fill="currentColor"
        className="text-charcoal"
      />
    </svg>
  );
};

export default Logo;
