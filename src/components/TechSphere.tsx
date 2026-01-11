import React, { useEffect, useRef } from 'react';

// Import all logos
const techLogos = import.meta.glob(
    '/src/assets/Tech Stack Logos/*.{png,jpg,jpeg,svg}',
    { eager: true, as: 'url' }
);

// Normalize filenames into usable keys
const logoMap: Record<string, string> = {};

Object.entries(techLogos).forEach(([path, url]) => {
    const filename = path
        .split('/')
        .pop()!
        .replace(/\.(png|jpg|jpeg|svg)/, '')
        .replace('Semantix labs Tech product - ', '')
        .toLowerCase()
        .replace(/[_\s]+/g, ''); // remove spaces & underscores

    logoMap[filename] = url as string;
});

// Safe getter
const getLogo = (key: string) =>
    logoMap[key.toLowerCase().replace(/[_\s]+/g, '')] ?? null;

// Define the content list: mixtures of { type: 'image', src: ... } and { type: 'text', label: ... }
const techItems = [
    // Logos available
    { type: 'image', src: getLogo('nextjs'), alt: 'Next.js' },
    { type: 'image', src: getLogo('reactjs'), alt: 'React' },
    { type: 'image', src: getLogo('googlecloud'), alt: 'Google Cloud' },
    { type: 'image', src: getLogo('wordpress'), alt: 'WordPress' },
    { type: 'image', src: getLogo('googleads'), alt: 'Google Ads' },
    { type: 'image', src: getLogo('metaplatforms'), alt: 'Meta Ads' },
    { type: 'image', src: getLogo('figma'), alt: 'Figma' },
    { type: 'image', src: getLogo('mongodb'), alt: 'MongoDB' },
    { type: 'image', src: getLogo('expressjs'), alt: 'Express.js' },
    { type: 'image', src: getLogo('aws'), alt: 'AWS' },
    { type: 'image', src: getLogo('python'), alt: 'Python' },
    { type: 'image', src: getLogo('shopify'), alt: 'Shopify' },
    { type: 'image', src: getLogo('tiktoklogo'), alt: 'TikTok' },



].filter(item => item.src || item.type === 'text'); // Filter out undefined images if any

const TechSphere = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Simple 3D Sphere Layout Calculation
        const RADIUS = 250;
        const items = techItems;
        const tagElements: HTMLDivElement[] = [];

        // Clear previous content
        container.innerHTML = '';

        // Create elements
        items.forEach((item, i) => {
            const el = document.createElement('div');
            el.className =
                'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ' +
                'transition-transform duration-100 ease-linear will-change-transform ' +
                'flex items-center justify-center';

            if (item.type === 'image' && item.src) {
                // WHITE CIRCLE WRAPPER
                const wrapper = document.createElement('div');
                wrapper.className =
                    'w-20 h-20 rounded-full bg-white ' +
                    'flex items-center justify-center ' +
                    'shadow-[0_0_25px_rgba(168,85,247,0.35)]';

                // LOGO IMAGE
                const img = document.createElement('img');
                img.src = item.src;
                img.alt = item.alt || '';
                img.className = 'w-12 h-12 object-contain';

                wrapper.appendChild(img);
                el.appendChild(wrapper);

            } else if (item.type === 'text' && item.label) {
                el.textContent = item.label;
                el.className +=
                    ' text-white font-bold text-xl md:text-2xl px-4 py-2 ' +
                    'rounded-full bg-black/40 backdrop-blur-md border border-white/10 ' +
                    'shadow-[0_0_10px_rgba(255,255,255,0.1)] ' +
                    'hover:bg-white/10 hover:scale-110 transition-all ' +
                    'cursor-default whitespace-nowrap';
            }

            container.appendChild(el);
            tagElements.push(el);
        });

        // Animation Loop
        let angleX = 0;
        let angleY = 0;
        let animationFrameId: number;

        const animate = () => {
            angleX += 0.001;
            angleY += 0.002;

            const cx = Math.sin(angleX);
            const sx = Math.cos(angleX);
            const cy = Math.sin(angleY);
            const sy = Math.cos(angleY);

            tagElements.forEach((el, i) => {
                // Fibonacci Sphere Distribution
                const phi = Math.acos(-1 + (2 * i) / items.length);
                const theta = Math.sqrt(items.length * Math.PI) * phi;

                let x = RADIUS * Math.cos(theta) * Math.sin(phi);
                let y = RADIUS * Math.sin(theta) * Math.sin(phi);
                let z = RADIUS * Math.cos(phi);

                // Rotation
                // Rotate around X
                let y1 = y * sx - z * cx;
                let z1 = y * cx + z * sx;
                // Rotate around Y
                let x2 = x * sy + z1 * cy;
                let z2 = -x * cy + z1 * sy;

                // Apply
                const scale = (z2 + RADIUS * 2) / (RADIUS * 3);
                const opacity = (z2 + RADIUS) / (RADIUS * 2);
                const zIndex = Math.floor(z2 + RADIUS);

                // Only show items in "front" more clearly
                const alpha = Math.max(0.2, (z2 + RADIUS) / (2 * RADIUS)); // 0.2 to 1.0

                el.style.transform = `translate3d(${x2}px, ${y1}px, ${z2}px) scale(${scale})`;
                el.style.opacity = alpha.toString();
                el.style.zIndex = zIndex.toString();

                // Hide if too far back to prevent "text behind" readability issues if needed, 
                // but sphere usually looks cool. Let's keep it visible but simpler z-index.
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div className="py-24 md:py-32 bg-black relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Side */}
                <div className="space-y-8 z-20 order-2 lg:order-1">
                    <div className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md">
                        <span className="text-sm font-medium text-purple-400">Technology Experts</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Future-proof solutions with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">updated technologies.</span>
                    </h2>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                        Our team is committed to delivering solutions with future-proof, updated technologies. We stay ahead of the curve so your business never falls behind.
                    </p>
                </div>

                {/* Sphere Side */}
                <div className="relative h-[500px] md:h-[600px] flex items-center justify-center order-1 lg:order-2">
                    <div ref={containerRef} className="relative w-full h-full preserve-3d flex items-center justify-center" />
                </div>
            </div>
        </div>
    );
};

export default TechSphere;
