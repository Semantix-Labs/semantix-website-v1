import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  Menu,
  X,
  ArrowUpRight,
  CheckCircle2,
  Monitor,
  Megaphone,
  Smartphone,
  Globe2,
  Cpu,
  Palette,
  Fingerprint,
  LayoutGrid
} from 'lucide-react';
import SemanixLogo from '@/components/SemanixLogo';
import { ContactForm } from '@/components/ContactForm';
import Footer from '@/components/Footer';
import SolutionBlock from '@/components/SolutionBlock';
import FeatureCard from '@/components/FeatureCard';
import TechSphere from '@/components/TechSphere';
import ClientsCarousel from '@/components/ClientsCarousel';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/semantixlabs/30min' });
    } else {
      window.open('https://calendly.com/semantixlabs/30min', '_blank');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-purple-500/30">

      {/* Floating Header */}
      <nav className={cn(
        "fixed top-4 md:top-6 left-4 right-4 md:left-0 md:right-0 z-50 flex justify-center transition-all duration-300",
        scrolled ? "top-4" : "top-4 md:top-8"
      )}>
        <div className="w-full max-w-[1200px] bg-black/70 backdrop-blur-xl border border-white/10 rounded-full px-6 md:px-8 py-3 shadow-2xl shadow-purple-500/5 flex items-center justify-between transition-all duration-300">
          <a href="/" className="z-50 shrink-0">
            <SemanixLogo className="h-12 md:h-14 w-auto transition-transform hover:scale-105" theme="light" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#solutions" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Solutions</a>
            <a href="#how-we-work" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Process</a>
            <a href="/our-work" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Featured Work</a>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Button */}
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
            <a href="#solutions" className="text-3xl font-medium text-white" onClick={() => setIsMobileMenuOpen(false)}>Solutions</a>
            <a href="#how-we-work" className="text-3xl font-medium text-white" onClick={() => setIsMobileMenuOpen(false)}>Process</a>
            <a href="/our-work" className="text-3xl font-medium text-white" onClick={() => setIsMobileMenuOpen(false)}>Our Work</a>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-12 py-6 text-lg" onClick={() => { openCalendly(); setIsMobileMenuOpen(false); }}>
              Start Project
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Animation */}
        <div className="absolute inset-0 w-full h-full bg-black">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <div className="inline-block mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-purple-300">
              Redefining Digital Experiences
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-tight animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
            Turn Ideas into Impact. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Built fast. Built right.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
            We design and engineer scalable digital products with a focus on performance, reliability, and long term growth.
            </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-slide-up opacity-0" style={{ animationDelay: '0.8s' }}>
            <Button size="lg" className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 text-lg font-medium transition-transform hover:scale-105" onClick={openCalendly}>
              Start a Project
            </Button>
            <a href="/our-work">
              <Button variant="outline" size="lg" className="h-14 px-8 rounded-full border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm text-lg font-medium group">
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Clients Carousel */}
      <ClientsCarousel />

      {/* Scroll Hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ArrowRight className="rotate-90 w-6 h-6 text-white" />
      </div>

      {/* 2. What We Do - Solution Blocks */}
      <section id="solutions" className="section relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-[100px] animate-float" />

        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Crafted for impact.</h2>
          <p className="text-xl text-gray-400">
            We don't just build websites. We build comprehensive digital ecosystems that drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          <SolutionBlock
            icon={Monitor}
            title="Web & Software"
            description="High-performance websites and custom software tailored to your business logic."
          />
          <SolutionBlock
            icon={Palette}
            title="Brand Identity"
            description="Memorable logos and brand guidelines that set you apart from the competition."
          />
          <SolutionBlock
            icon={Megaphone}
            title="Digital Growth"
            description="SEO, social media, and performance marketing to skyrocket your reach."
          />
          <SolutionBlock
            icon={Fingerprint}
            title="UI/UX Design"
            description="User-centric interfaces that convert visitors into loyal customers."
          />
          <SolutionBlock
            icon={Cpu}
            title="AI Automations"
            description="Smart workflows and chatbots to streamline your operations."
          />
          <SolutionBlock
            icon={Smartphone}
            title="Mobile Apps"
            description="Native and cross-platform mobile applications for iOS and Android."
          />
        </div>
      </section>

      {/* Tech Sphere Section */}
      <TechSphere />

      {/* Featured Capabilities */}
      <section className="py-24 md:py-32 bg-black relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Everything you need.</h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              From strategy to execution, we provide end-to-end solutions for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              title="AI & Automation"
              description="Leverage the power of Artificial Intelligence to automate repetitive tasks and gain insights."
              category="Efficiency"

            />
            <FeatureCard
              title="Modern E-commerce"
              description="Scalable online stores with seamless payment integration and inventory management."
              category="Growth"

            />
            <FeatureCard
              title="Content Creation"
              description="Engaging copy, visuals, and video content that tells your brand's story."
              category="Brand"

            />
            <FeatureCard
              title="Cloud Infrastructure"
              description="Secure and scalable hosting solutions ensuring 99.9% uptime."
              category="Foundation"

            />
          </div>
        </div>
      </section>

      {/* 3. How We Work - Process */}
      <section id="process" className="section bg-white/[0.02] border-y border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Simple process. <br /> Powerful results.</h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {[
              { step: '01', title: 'Discovery', desc: 'We dive deep into your business goals and audience.' },
              { step: '02', title: 'Strategy', desc: 'We craft a roadmap for design and technology.' },
              { step: '03', title: 'Build', desc: 'Agile development with regular updates and feedback.' },
              { step: '04', title: 'Launch', desc: 'Rigorous testing and a smooth go-live experience.' }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="w-24 h-24 bg-black border border-white/10 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto group-hover:border-purple-500/50 group-hover:scale-110 transition-all duration-300 shadow-xl shadow-black">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{item.title}</h3>
                <p className="text-gray-400 text-center text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Impact / Results */}
      <section className="py-24 md:py-32 section bg-black">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: '5+', label: 'Years Experience' },
            { value: '24/7', label: 'Support & Maintenance' }
          ].map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-4xl md:text-6xl font-bold text-white/90">{stat.value}</div>
              <div className="text-sm font-medium text-purple-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Brand Philosophy */}
      <section className="py-32 md:py-48 bg-black flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="max-w-4xl px-6 text-center relative z-10">
          <blockquote className="text-3xl md:text-5xl font-medium text-white leading-tight mb-8">
            "People do not buy goods and services. They buy relations, stories, and magic."
          </blockquote>
          <cite className="text-xl text-gray-400 not-italic block">- Seth Godin</cite>
        </div>
      </section>

      {/* 7. Call To Action & Contact */}
      <section id="contact" className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Ready to build <br />
              something <span className="text-purple-400">extraordinary?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-lg">
              Whether you need a new website, a custom web app, or a complete brand overhaul, we are here to help you succeed.
            </p>

            <div className="flex flex-col gap-6 pt-8">
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="font-bold text-white">Free Consultation</div>
                  <div className="text-sm text-gray-500">No obligation. Just solutions.</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Globe2 className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="font-bold text-white">Global Standards</div>
                  <div className="text-sm text-gray-500">World-class design & engineering.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-30" />
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;