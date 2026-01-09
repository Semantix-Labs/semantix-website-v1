import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface FeatureCardProps {
    title: string;
    description: string;
    category?: string;
    image?: string;
    className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, category, image, className }) => {
    return (
        <div className={cn(
            "glass-card relative overflow-hidden rounded-3xl p-8 hover-card-lift group",
            className
        )}>
            {/* Background Gradient/Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="space-y-4">
                    {category && (
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10">
                            {category}
                        </span>
                    )}

                    <h3 className="text-2xl font-semibold text-white max-w-[80%]">
                        {title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-sm font-medium text-white">Learn more</span>
                    <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;
