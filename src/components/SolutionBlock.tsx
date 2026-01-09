import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SolutionBlockProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const SolutionBlock: React.FC<SolutionBlockProps> = ({ icon: Icon, title, description, className }) => {
  return (
    <div className={cn(
      "glass-card p-8 rounded-3xl flex flex-col items-start gap-6 group hover:bg-white/[0.08]",
      "border-white/5 hover:border-white/20",
      className
    )}>
      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
        <Icon className="w-6 h-6" strokeWidth={1.5} />
      </div>
      
      <div className="space-y-3">
        <h3 className="text-xl font-semibold tracking-tight text-white group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-[90%]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SolutionBlock;
