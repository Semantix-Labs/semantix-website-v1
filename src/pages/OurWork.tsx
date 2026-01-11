import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Play, Camera, Monitor, X, Menu, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import SemanixLogo from '@/components/SemanixLogo';
import Footer from '@/components/Footer';

// Data Mock - Preserving existing paths where possible
const PORTFOLIO_ITEMS = [
  // 1. Videos
  {
    id: 2,
    title: 'Fashion Reel',
    category: 'Video Production',
    image: '/videos/reel1.mp4',
    isVideo: true,
    type: 'video',
    description: 'High-energy fashion campaign for summer collection.'
  },
  {
    id: 5,
    title: 'Cinematic Showreel',
    category: 'Video Production',
    image: '/videos/reel2.mp4',
    isVideo: true,
    type: 'video',
    description: 'Cinematic compilation of our best motion work.'
  },
  {
    id: 15,
    title: 'Urban Rhythm',
    category: 'Video Production',
    image: '/videos/reel4.mp4',
    isVideo: true,
    type: 'video',
    description: 'The beat of the city.'
  },
  {
    id: 11,
    title: 'River View Promo',
    category: 'Video Production',
    image: '/videos/RV1.mp4',
    isVideo: true,
    type: 'video',
    description: 'Promotional video for River View properties.'
  },
  {
    id: 12,
    title: 'Shanmugas Story',
    category: 'Video Production',
    image: '/videos/Shanmugas.mp4',
    isVideo: true,
    type: 'video',
    description: 'Brand storytelling for Shanmugas.'
  },
  {
    id: 13,
    title: 'La Beirut Teaser',
    category: 'Video Production',
    image: '/videos/la_beirut.mp4',
    isVideo: true,
    type: 'video',
    description: 'Teaser campaign for La Beirut.'
  },

  {
    id: 14,
    title: 'Lifestyle Montage',
    category: 'Video Production',
    image: '/videos/reel3.mp4',
    isVideo: true,
    type: 'video',
    description: 'Capturing life moments in motion.'
  },

  {
    id: 16,
    title: 'Motion Art',
    category: 'Video Production',
    image: '/videos/reel6.mp4',
    isVideo: true,
    type: 'video',
    description: 'Artistic expression through video.'
  },
  {
    id: 17,
    title: 'Travel Diaries',
    category: 'Video Production',
    image: '/videos/reel7.mp4',
    isVideo: true,
    type: 'video',
    description: 'Wanderlust captured on film.'
  },
  {
    id: 18,
    title: 'Event Highlights',
    category: 'Video Production',
    image: '/videos/reel8.mp4',
    isVideo: true,
    type: 'video',
    description: 'Highlight reel of major events.'
  },
  // 2. Websites
  {
    id: 20,
    title: 'River View Villas',
    category: 'Website',
    image: '/images/Riverview.png',
    type: 'website',
    description: 'Landing site for a an ayurveda villa with booking platform integrated'
  },
  {
    id: 21,
    title: 'PGTC',
    category: 'Website',
    image: '/images/PGTC.png',
    type: 'website',
    description: 'A landing website for a golf and tour company at srilanka'
  },
  {
    id: 22,
    title: 'Tabroscapes Tours',
    category: 'Website',
    image: '/images/tabro.png',
    type: 'website',
    description: 'A portfolio website for a tour company at sri lanka'
  },
  {
    id: 23,
    title: 'Mingle Box',
    category: 'Website',
    image: '/images/Mingle Box.png',
    type: 'website',
    description: 'An e-commerce platform for a gifting brand..'
  },
  {
    id: 24,
    title: 'Cuddles and Co',
    category: 'Website',
    image: '/images/Cuddles and co.png',
    type: 'website',
    description: 'An e-commerce platform for a baby products brand.'
  },
  {
    id: 25,
    title: 'Olinda Galle',
    category: 'Website',
    image: '/images/Olinda Galle.png',
    type: 'website',
    description: 'A portfolio website for a hotel at Galle.'
  },
  // 3. Photography
  {
    id: 3,
    title: 'Creative Capture 01',
    category: 'Photography',
    image: '/images/AV7A1924.jpg',
    type: 'photography',
    description: 'Editorial photoshoot for lifestyle brand.'
  },
  {
    id: 7,
    title: 'Urban Life',
    category: 'Photography',
    image: '/images/6W7A5765.jpg',
    type: 'photography',
    description: 'Urban landscape and architectural photography.'
  },
  {
    id: 9,
    title: 'Product Session',
    category: 'Photography',
    image: '/images/Bed-Setup-13.jpg',
    type: 'photography',
    description: 'Minimalist product photography for catalogue.'
  },
  {
    id: 30,
    title: 'Portrait Session',
    category: 'Photography',
    image: '/images/6W7A5474-2.jpg',
    type: 'photography',
    description: 'Professional portrait photography.'
  },
  {
    id: 31,
    title: 'Event Moments',
    category: 'Photography',
    image: '/images/6W7A5665.jpg',
    type: 'photography',
    description: 'Capturing key moments.'
  },
  {
    id: 32,
    title: 'Candid Shots',
    category: 'Photography',
    image: '/images/6W7A5976.jpg',
    type: 'photography',
    description: 'Natural and candid photography.'
  },
  {
    id: 33,
    title: 'Product Highlight',
    category: 'Photography',
    image: '/images/Blue-box.jpg',
    type: 'photography',
    description: 'Creative product focus.'
  },
  {
    id: 34,
    title: 'River View Exterior',
    category: 'Photography',
    image: '/images/RV1.jpg',
    type: 'photography',
    description: 'Architectural exterior photography.'
  },
  {
    id: 35,
    title: 'River View Interior',
    category: 'Photography',
    image: '/images/RV2.jpg',
    type: 'photography',
    description: 'Interior design photography.'
  },
  {
    id: 36,
    title: 'Lifestyle Session I',
    category: 'Photography',
    image: '/images/finall (14 of 21).jpg',
    type: 'photography',
    description: 'Modern lifestyle photography.'
  },
  {
    id: 37,
    title: 'Lifestyle Session II',
    category: 'Photography',
    image: '/images/finall (21 of 21).jpg',
    type: 'photography',
    description: 'Vibrant lifestyle captures.'
  },
  {
    id: 38,
    title: 'Lifestyle Session III',
    category: 'Photography',
    image: '/images/finall (4 of 21).jpg',
    type: 'photography',
    description: 'Urban lifestyle shots.'
  }
];

const FilterButton = ({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={cn(
      "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
      active
        ? "bg-white text-black"
        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
    )}
  >
    {label}
  </button>
);

const OurWork = () => {
  const [filter, setFilter] = useState('video'); // Default to Video as it's first in order
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = filter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.type === filter);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/semantixlabs/30min' });
    } else {
      window.open('https://calendly.com/semantixlabs/30min', '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-purple-500/30">
      <nav className="fixed top-4 md:top-6 left-4 right-4 md:left-0 md:right-0 z-50 flex justify-center transition-all duration-300">
        <div className="w-full max-w-[1200px] bg-black/70 backdrop-blur-xl border border-white/10 rounded-full px-6 md:px-8 py-3 shadow-2xl shadow-purple-500/5 flex items-center justify-between">
          <a href="/" className="z-50 shrink-0">
            <SemanixLogo className="h-10 md:h-12 w-auto transition-transform hover:scale-105" theme="light" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <a href="/" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Home</a>
            <a href="/our-work" className="text-sm font-medium text-white transition-colors">Our Work</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button size="sm" className="bg-white text-black hover:bg-gray-200 rounded-full px-6 font-medium" onClick={openCalendly}>
                Start Project
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden z-50 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in p-6">
            <a href="/" className="text-3xl font-medium text-white">Home</a>
            <a href="/our-work" className="text-3xl font-medium text-white">Our Work</a>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-12 py-6 text-lg" onClick={openCalendly}>
              Start Project
            </Button>
          </div>
        )}
      </nav>

      <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-16 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Selected Work
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            A showcase of our passion for design, development, and storytelling.
            We build brands that stand out in the digital age.
          </p>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-end pt-8">
            <div className="flex flex-wrap gap-4">
              <FilterButton active={filter === 'video'} label="Video" onClick={() => setFilter('video')} />
              <FilterButton active={filter === 'website'} label="Websites" onClick={() => setFilter('website')} />
              <FilterButton active={filter === 'photography'} label="Photography" onClick={() => setFilter('photography')} />
              <FilterButton active={filter === 'all'} label="All Work" onClick={() => setFilter('all')} />
            </div>

            <a
              href="/documents/Semantix_Credentials.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors font-medium text-sm"
            >
              <Download size={16} />
              Download Semantix Credentials
            </a>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={cn(
                "group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer",
                item.isVideo ? "aspect-[9/16]" : "aspect-[4/3]"
              )}
              onClick={() => item.type === 'photography' && setSelectedImage(item.image)}
            >
              {/* Media */}
              {item.isVideo ? (
                <video
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={item.image}
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              )}

              {/* Overlay - Only for non-video items AND not photography (clean look requested) */}
              {!item.isVideo && item.type !== 'photography' && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-medium text-purple-400 uppercase tracking-wider mb-2 block">
                        {item.category}
                      </span>
                      <ArrowUpRight className="text-white w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 line-clamp-2 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Icon Badge (Visible when not hovering/always) */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/10 group-hover:opacity-0 transition-opacity">
                {item.type === 'video' && <Play className="w-4 h-4 fill-white" />}
                {item.type === 'photography' && <Camera className="w-4 h-4" />}
                {item.type === 'website' && <Monitor className="w-4 h-4" />}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>

      <Footer />

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Full screen view"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default OurWork;
