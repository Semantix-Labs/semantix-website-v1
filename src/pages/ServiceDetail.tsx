import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { SERVICES, getServiceBySlug } from '@/data/services';
import { openCalendly } from '@/lib/calendly';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const canonicalUrl = `https://semantixlabs.com/services/${service.slug}`;

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: service.name,
      name: service.name,
      description: service.description,
      provider: { '@type': 'Organization', name: 'Semantix Labs', url: 'https://semantixlabs.com' },
      areaServed: ['US', 'GB', 'EU', 'AU', 'AE'],
      url: canonicalUrl,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `${service.name} | Semantix Labs`,
      url: canonicalUrl,
      description: service.description,
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://semantixlabs.com/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://semantixlabs.com/services' },
          { '@type': 'ListItem', position: 3, name: service.name, item: canonicalUrl },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faq.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ];

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-purple-500/30 font-sans">
      <SEO
        title={service.name}
        description={service.description}
        keywords={`${service.name}, Semantix Labs, digital agency, ${service.techStack.join(', ')}`}
        canonicalUrl={canonicalUrl}
      />
      {structuredData.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}

      <SiteHeader activePath="/services" />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="max-w-3xl relative z-10">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white inline-flex mb-8">
            <service.icon className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">{service.name}</h1>
          <p className="text-xl text-gray-400 leading-relaxed">{service.description}</p>
          <div className="mt-10">
            <Button size="lg" className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 text-lg font-medium" onClick={openCalendly}>
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* What's included / facts */}
      <section className="section relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-8">What's included</h2>
            <ul className="space-y-4">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-4 text-gray-300">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {service.techStack.length > 0 && (
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-4">Technologies we use</h3>
                <div className="flex flex-wrap gap-3">
                  {service.techStack.map((tech) => (
                    <span key={tech} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="glass-card p-8 rounded-3xl h-fit space-y-6">
            <div>
              <div className="text-sm font-medium text-purple-400 uppercase tracking-wider mb-2">Timeline</div>
              <p className="text-gray-300 leading-relaxed">{service.timeline}</p>
            </div>
            <div className="pt-6 border-t border-white/10">
              <div className="text-sm font-medium text-purple-400 uppercase tracking-wider mb-2">Pricing</div>
              <p className="text-gray-300 leading-relaxed">{service.pricing}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-black relative">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {service.shortName} FAQs
          </h2>
          <div className="space-y-4">
            {service.faq.map(({ q, a }) => (
              <details key={q} className="group border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden">
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

      {/* Other services */}
      <section className="section relative z-10">
        <h2 className="text-2xl font-bold text-white mb-8">Explore other services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherServices.map((s) => (
            <a
              key={s.slug}
              href={`/services/${s.slug}`}
              className="glass-card p-6 rounded-2xl flex items-center justify-between group hover:bg-white/[0.08] border-white/5 hover:border-white/20"
            >
              <span className="text-white font-medium">{s.name}</span>
              <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
