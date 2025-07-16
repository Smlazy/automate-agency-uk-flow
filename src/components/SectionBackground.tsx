
import NetworkBackground from '@/components/NetworkBackground';

interface SectionBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const SectionBackground = ({ children, className = "" }: SectionBackgroundProps) => {
  return (
    <section className={`relative bg-gradient-to-br from-background to-muted/20 overflow-hidden ${className}`}>
      <NetworkBackground />
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionBackground;
