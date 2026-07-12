import React from 'react';
import { ArrowRight } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { SERVICES } from '@/data/services';

const Services = () => {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Services | Semantix Labs',
      url: 'https://semantixlabs.com/services',
      description:
        "Explore Semantix Labs' full range of digital agency services: web development, mobile app development, UI/UX design, brand identity, AI automation, digital marketing, e-commerce, and video production.",
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://semantixlabs.com/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://semantixlabs.com/services' },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Semantix Labs Services',
      itemListElement: SERVICES.map((service, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: service.name,
        url: `https://semantixlabs.com/services/${service.slug}`,
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-purple-500/30 font-sans">
      <SEO
        title="Digital Agency Services — Web, Mobile, AI & More"
        description="Semantix Labs offers Web Development, Mobile App Development, UI/UX Design, Brand Identity, AI Automation, Digital Marketing & SEO, E-commerce Development, and Video Production for clients in the USA, UK, Europe, Australia, and the Middle East."
        keywords="digital agency services, web development agency, mobile app development, UI UX design, brand identity, AI automation, digital marketing, e-commerce development"
        canonicalUrl="https://semantixlabs.com/services"
      />
      {structuredData.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}

      <SiteHeader activePath="/services" />

      <section className="relative pt-40 pb-20 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="max-w-3xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Everything you need to grow, in one agency.
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Semantix Labs is a digital agency delivering web development, mobile apps, design,
            AI automation, and growth marketing for businesses in the USA, UK, Europe, Australia,
            and the Middle East.
          </p>
        </div>
      </section>

      <section className="section relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <a
              key={service.slug}
              href={`/services/${service.slug}`}
              className="glass-card p-8 rounded-3xl flex flex-col items-start gap-6 group hover:bg-white/[0.08] border-white/5 hover:border-white/20 hover-card-lift"
            >
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                <service.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-semibold tracking-tight text-white group-hover:translate-x-1 transition-transform duration-300">
                  {service.name}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.tagline}</p>
              </div>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-purple-400">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
