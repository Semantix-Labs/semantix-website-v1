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

import { SEO } from '@/components/SEO';

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

  const faqData = [
    {
      q: "What is Semantix Labs?",
      a: "Semantix Labs is a premium digital agency that designs and engineers high-performance websites, mobile apps, brand identities, AI automations, and digital marketing strategies for businesses in the USA, Europe, and globally. Founded in 2019, we have delivered 50+ projects with 100% client satisfaction."
    },
    {
      q: "What services does Semantix Labs offer?",
      a: "Semantix Labs offers: Web Development (custom websites and web apps), Mobile App Development (iOS & Android), UI/UX Design, Brand Identity & Logo Design, AI Automation & Chatbots, Digital Marketing & SEO, E-commerce Development, Video Production, and Photography."
    },
    {
      q: "Where is Semantix Labs based and do you work with international clients?",
      a: "Semantix Labs is headquartered in Sri Lanka and works with clients across the USA, United Kingdom, Europe, Australia, and the Middle East. We are a fully remote-capable agency built for global collaboration."
    },
    {
      q: "How long does a typical web development project take?",
      a: "Most website projects at Semantix Labs take between 2 to 6 weeks depending on complexity. Simple landing pages can be delivered in 2 weeks, while custom web applications and e-commerce platforms typically take 4 to 8 weeks. We follow an agile process with regular client updates."
    },
    {
      q: "How do I start a project with Semantix Labs?",
      a: "You can start by booking a free 30-minute consultation call via our website or reaching out on WhatsApp at +94 77 688 2493. We'll discuss your goals, timeline, and budget, then provide a tailored proposal with no obligation."
    },
    {
      q: "What technologies does Semantix Labs use?",
      a: "We build with modern, scalable technologies including React, Next.js, Node.js, TypeScript, Python, Flutter, React Native, Webflow, Shopify, and more. Our cloud infrastructure leverages AWS, Vercel, and Firebase to ensure 99.9% uptime."
    },
    {
      q: "Does Semantix Labs offer ongoing support after launch?",
      a: "Yes. Semantix Labs offers 24/7 support and maintenance packages for all digital products we build. This includes bug fixes, performance monitoring, content updates, and platform upgrades to ensure your product stays competitive."
    },
    {
      q: "How much does a website cost at Semantix Labs?",
      a: "Website pricing at Semantix Labs varies based on scope and complexity. Landing pages start from $800, business websites from $2,000, and custom web applications from $5,000. Book a free consultation to get a tailored quote for your project."
    }
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Semantix Labs | Digital Agency for Web Development & Growth",
      "url": "https://semantixlabs.com/",
      "description": "Semantix Labs is a premium digital agency delivering high-performance websites, mobile apps, AI automations, and digital growth strategies for businesses worldwide.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Semantix Labs",
        "url": "https://semantixlabs.com"
      },
      "about": {
        "@type": "Organization",
        "name": "Semantix Labs"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://semantixlabs.com/"
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(({ q, a }) => ({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": a
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Semantix Labs Services",
      "description": "Full list of digital agency services offered by Semantix Labs",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Web Development", "url": "https://semantixlabs.com/#solutions" },
        { "@type": "ListItem", "position": 2, "name": "Mobile App Development", "url": "https://semantixlabs.com/#solutions" },
        { "@type": "ListItem", "position": 3, "name": "UI/UX Design", "url": "https://semantixlabs.com/#solutions" },
        { "@type": "ListItem", "position": 4, "name": "Brand Identity", "url": "https://semantixlabs.com/#solutions" },
        { "@type": "ListItem", "position": 5, "name": "AI Automation", "url": "https://semantixlabs.com/#solutions" },
        { "@type": "ListItem", "position": 6, "name": "Digital Marketing & SEO", "url": "https://semantixlabs.com/#solutions" },
        { "@type": "ListItem", "position": 7, "name": "E-commerce Development", "url": "https://semantixlabs.com/#solutions" },
        { "@type": "ListItem", "position": 8, "name": "Video Production & Photography", "url": "https://semantixlabs.com/our-work" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-purple-500/30">
      <SEO
        title="Digital Agency for Web Development, Mobile Apps & AI Automation"
        description="Semantix Labs is a premium digital agency delivering high-performance websites, mobile apps, AI automations, and digital growth strategies for businesses in the USA, Europe, and globally. 50+ projects. 100% client satisfaction."
        keywords="web development agency, mobile app development, UI UX design, brand identity, AI automation, digital marketing, SEO agency, e-commerce development, Semantix Labs, digital agency USA, digital agency Europe"
        canonicalUrl="https://semantixlabs.com/"
      />
      {structuredData.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}

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
            <a href="#contact" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Contact</a>
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
            <a href="#contact" className="text-3xl font-medium text-white" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
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
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Mobile Connecting Line */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {[
              { step: '01', title: 'Discovery', desc: 'We dive deep into your business goals and audience.' },
              { step: '02', title: 'Strategy', desc: 'We craft a roadmap for design and technology.' },
              { step: '03', title: 'Build', desc: 'Agile development with regular updates and feedback.' },
              { step: '04', title: 'Launch', desc: 'Rigorous testing and a smooth go-live experience.' }
            ].map((item, idx) => (
              <div key={idx} className="group relative flex md:flex-col items-center md:items-stretch gap-6 md:gap-0">
                <div className="shrink-0 w-16 h-16 md:w-24 md:h-24 bg-black border border-white/10 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold text-white md:mb-6 md:mx-auto group-hover:border-purple-500/50 group-hover:scale-110 transition-all duration-300 shadow-xl shadow-black z-10 relative">
                  {item.step}
                </div>

                <div className="text-left md:text-center">
                  <h3 className="text-xl font-bold text-white mb-1 md:mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
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
      <section className="py-24 md:py-32 bg-black flex items-center justify-center relative overflow-hidden group">
        {/* Background Grids & Glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] animate-pulse-slow" />

        {/* Large Decorative Quote */}
        <div className="absolute top-12 left-4 md:left-1/4 text-[12rem] md:text-[16rem] leading-none font-serif text-white/5 select-none pointer-events-none -translate-y-1/2 translate-x-1/2 font-bold">
          &rdquo;
        </div>

        <div className="max-w-5xl px-6 text-center relative z-10">
          <blockquote className="text-3xl md:text-5xl md:leading-tight font-medium text-white mb-8">
            "People do not buy goods and services. They buy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-gradient-x bg-[length:200%_auto]">relations, stories, and magic</span>."
          </blockquote>
          <cite className="text-lg md:text-xl text-gray-500 not-italic font-medium tracking-wide uppercase">- Seth Godin</cite>
        </div>
      </section>

      {/* FAQ Section — GEO optimised */}
      <section id="faq" className="py-24 md:py-32 bg-black relative">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-400">Everything you need to know about working with Semantix Labs.</p>
          </div>
          <div className="space-y-4">
            {faqData.map(({ q, a }, idx) => (
              <details key={idx} className="group border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-white font-semibold text-base md:text-lg list-none select-none hover:bg-white/[0.04] transition-colors">
                  {q}
                  <span className="ml-4 shrink-0 text-purple-400 text-xl font-light group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5">
                  {a}
                </div>
              </details>
            ))}
          </div>
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