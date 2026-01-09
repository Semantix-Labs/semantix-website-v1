'use client';

import React from 'react';

// Import logos
const logos = import.meta.glob(
    '/src/assets/Semantix Client Logos/*.{png,jpg,jpeg,svg}',
    { eager: true }
);

const logoEntries = Object.entries(logos).map(([path, module]: any) => ({
    src: module.default,
    alt:
        path
            .split('/')
            .pop()
            ?.replace(/\.(png|jpg|jpeg|svg)/, '')
            .replace('Semantix labs Client - ', '') || 'Client Logo',
}));

export default function ClientsCarousel() {
    return (
        <section className="relative w-screen overflow-hidden py-16">
            {/* Heading */}
            <div className="mb-10 text-center">
                <p className="text-m font-medium text-purple-400 uppercase tracking-wider mb-3">
                    Our Trusted Clients
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto px-4">
                    Trusted by startups, scale-ups, and growing brands.
                </h2>
            </div>

            {/* Marquee */}
            <div className="relative w-screen overflow-hidden">
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                    <LogoRow logos={logoEntries} />
                    <LogoRow logos={logoEntries} />
                </div>
            </div>

            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
        </section>
    );
}

function LogoRow({ logos }: { logos: any[] }) {
    return (
        <div className="flex items-center gap-8 px-8">
            {logos.map((logo, idx) => (
                <div
                    key={idx}
                    className="
            w-32 h-20 md:w-40 md:h-24
            rounded-xl
            bg-white/80 backdrop-blur-md
            border border-white/30
            shadow-[0_8px_24px_rgba(0,0,0,0.12)]
            flex items-center justify-center p-4
            transition-transform duration-300 hover:scale-105
          "
                >
                    <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-h-full max-w-full object-contain"
                    />
                </div>
            ))}
        </div>
    );
}
