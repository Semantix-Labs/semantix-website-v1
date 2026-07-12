import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SemanixLogo from '@/components/SemanixLogo';
import { openCalendly } from '@/lib/calendly';

interface SiteHeaderProps {
  activePath?: string;
}

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/our-work', label: 'Our Work' },
  { href: '/careers', label: 'Careers' },
  { href: '/#contact', label: 'Contact' },
];

const SiteHeader: React.FC<SiteHeaderProps> = ({ activePath }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 md:top-6 left-4 right-4 md:left-0 md:right-0 z-50 flex justify-center transition-all duration-300">
      <div className="w-full max-w-[1200px] bg-black/70 backdrop-blur-xl border border-white/10 rounded-full px-6 md:px-8 py-3 shadow-2xl shadow-purple-500/5 flex items-center justify-between">
        <a href="/" className="z-50 shrink-0">
          <SemanixLogo className="h-12 md:h-14 w-auto transition-transform hover:scale-105" theme="light" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                activePath === link.href ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button size="sm" className="bg-white text-black hover:bg-gray-200 rounded-full px-6 font-medium" onClick={openCalendly}>
              Start Project
            </Button>
          </div>

          <button
            className="md:hidden z-50 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in-95 p-6 duration-300">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-3xl font-medium text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 rounded-full px-12 py-6 text-lg"
            onClick={() => { openCalendly(); setIsMobileMenuOpen(false); }}
          >
            Start Project
          </Button>
        </div>
      )}
    </nav>
  );
};

export default SiteHeader;
