import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { openCalendly } from '@/lib/calendly';

const PRICING_TIERS = [
  {
    name: 'Landing Page',
    price: 'From $800',
    timeline: '~2 weeks',
    included: [
      'Single-page, conversion-focused design',
      'Mobile-responsive build',
      'Basic on-page SEO setup',
      'Contact form integration',
    ],
  },
  {
    name: 'Business Website',
    price: 'From $2,000',
    timeline: '2–6 weeks',
    included: [
      'Multi-page custom website',
      'Built with React / Next.js',
      'SEO-friendly structure',
      '24/7 support & maintenance available',
    ],
    highlighted: true,
  },
  {
    name: 'Custom Web App',
    price: 'From $5,000',
    timeline: '4–8 weeks',
    included: [
      'Custom business logic & integrations',
      'Scalable architecture (React, Node.js)',
      'Cloud hosting (AWS / Vercel / Firebase)',
      '24/7 support & maintenance available',
    ],
  },
  {
    name: 'E-commerce',
    price: 'Custom quote',
    timeline: '4–8 weeks',
    included: [
      'Shopify or custom storefront',
      'Payment gateway integration',
      'Inventory & order management',
      '24/7 support & maintenance available',
    ],
  },
];

const faqData = [
  {
    q: 'How much does a website cost at Semantix Labs?',
    a: 'Website pricing at Semantix Labs varies based on scope and complexity. Landing pages start from $800, business websites from $2,000, and custom web applications from $5,000. Book a free consultation to get a tailored quote for your project.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Most website projects take between 2 to 6 weeks depending on complexity. Simple landing pages can be delivered in 2 weeks, while custom web applications and e-commerce platforms typically take 4 to 8 weeks.',
  },
  {
    q: 'Does the price include ongoing support?',
    a: 'Semantix Labs offers 24/7 support and maintenance packages for all digital products we build, available as an add-on to any project.',
  },
  {
    q: 'Do you offer a fixed price or is it always custom?',
    a: 'Landing pages, business websites, and custom web apps have a published starting price. Mobile apps, e-commerce builds, AI automation, branding, and marketing engagements are quoted individually based on scope — book a free consultation for an exact number.',
  },
];

const Pricing = () => {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Pricing | Semantix Labs',
      url: 'https://semantixlabs.com/pricing',
      description:
        'Semantix Labs pricing: landing pages from $800, business websites from $2,000, custom web applications from $5,000. Transparent packages and timelines.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://semantixlabs.com/' },
          { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://semantixlabs.com/pricing' },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqData.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name: 'Semantix Labs Pricing',
      itemListElement: PRICING_TIERS.map((tier) => ({
        '@type': 'Offer',
        name: tier.name,
        price: tier.price,
        priceCurrency: 'USD',
        itemOffered: { '@type': 'Service', name: tier.name },
      })),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-purple-500/30 font-sans">
      <SEO
        title="Pricing — Website & Web App Packages"
        description="Semantix Labs pricing: landing pages from $800, business websites from $2,000, custom web applications from $5,000. Transparent packages, timelines, and what's included."
        keywords="Semantix Labs pricing, website cost, web development pricing, custom web app cost"
        canonicalUrl="https://semantixlabs.com/pricing"
      />
      {structuredData.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}

      <SiteHeader activePath="/pricing" />

      <section className="relative pt-40 pb-20 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="max-w-3xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transparent pricing. No surprises.
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Landing pages from $800, business websites from $2,000, and custom web applications from
            $5,000. Book a free consultation for an exact quote on your project.
          </p>
        </div>
      </section>

      <section className="section relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`glass-card p-8 rounded-3xl flex flex-col gap-6 border-white/5 ${
                tier.highlighted ? 'border-purple-500/40 bg-white/[0.06]' : ''
              }`}
            >
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">{tier.name}</h2>
                <div className="text-3xl font-bold text-white mb-1">{tier.price}</div>
                <div className="text-sm text-purple-400 uppercase tracking-wider">{tier.timeline}</div>
              </div>
              <ul className="space-y-3 flex-1">
                {tier.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full rounded-full bg-white text-black hover:bg-gray-200 font-medium"
                onClick={openCalendly}
              >
                Get a Quote
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-black relative">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Pricing FAQs
          </h2>
          <div className="space-y-4">
            {faqData.map(({ q, a }) => (
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

      <Footer />
    </div>
  );
};

export default Pricing;
