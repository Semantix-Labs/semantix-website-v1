import {
  Monitor,
  Smartphone,
  Fingerprint,
  Palette,
  Cpu,
  Megaphone,
  ShoppingCart,
  Camera,
  LucideIcon,
} from 'lucide-react';

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  included: string[];
  techStack: string[];
  timeline: string;
  pricing: string;
  faq: ServiceFaq[];
}

// All facts below (pricing, timeline, tech stack, support terms) are the same
// figures already published in the site's Organization schema and homepage FAQ —
// nothing here introduces a new claim.
const SHARED_TECH_STACK = ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS', 'Vercel', 'Firebase'];

export const SERVICES: Service[] = [
  {
    slug: 'web-development',
    name: 'Web Development',
    shortName: 'Web Development',
    icon: Monitor,
    tagline: 'Custom websites and web applications built for performance.',
    description:
      'Semantix Labs builds high-performance, scalable websites and custom web applications tailored to your business logic and growth goals, for clients in the USA, UK, Europe, Australia, and the Middle East.',
    included: [
      'Custom-coded, responsive websites and web applications',
      'Built with React, Next.js, Node.js, and TypeScript',
      'SEO-friendly architecture and fast load times',
      '24/7 support and maintenance after launch',
    ],
    techStack: SHARED_TECH_STACK,
    timeline: 'Landing pages in ~2 weeks; business websites and custom web apps in 2 to 8 weeks depending on complexity.',
    pricing: 'Landing pages from $800 · Business websites from $2,000 · Custom web apps from $5,000',
    faq: [
      {
        q: 'How much does a website cost at Semantix Labs?',
        a: 'Website pricing varies based on scope and complexity. Landing pages start from $800, business websites from $2,000, and custom web applications from $5,000. Book a free consultation to get a tailored quote for your project.',
      },
      {
        q: 'How long does a website project take?',
        a: 'Simple landing pages can be delivered in around 2 weeks, while business websites and custom web applications typically take 2 to 8 weeks depending on complexity.',
      },
      {
        q: 'What technologies does Semantix Labs use for web development?',
        a: 'We build with React, Next.js, Node.js, and TypeScript on the frontend and backend, deployed on AWS, Vercel, or Firebase for reliable, scalable hosting.',
      },
    ],
  },
  {
    slug: 'mobile-app-development',
    name: 'Mobile App Development',
    shortName: 'Mobile Apps',
    icon: Smartphone,
    tagline: 'Native and cross-platform iOS and Android apps.',
    description:
      'Semantix Labs designs and builds native and cross-platform iOS and Android mobile applications built for performance and scale, from first release through ongoing maintenance.',
    included: [
      'iOS and Android apps from a single, cross-platform codebase',
      'Built with Flutter and React Native',
      'App Store and Google Play submission support',
      '24/7 support and maintenance after launch',
    ],
    techStack: ['Flutter', 'React Native', 'Node.js', 'Firebase', 'AWS'],
    timeline: 'Typically 4 to 8 weeks depending on feature scope and platform complexity.',
    pricing: 'Custom quote based on scope — book a free consultation for a tailored estimate.',
    faq: [
      {
        q: 'Does Semantix Labs build both iOS and Android apps?',
        a: 'Yes. We build native and cross-platform mobile apps for both iOS and Android using Flutter and React Native, so you can launch on both platforms from a single codebase.',
      },
      {
        q: 'How long does a mobile app project take?',
        a: 'Most mobile app projects take 4 to 8 weeks depending on feature complexity, design requirements, and platform-specific work.',
      },
    ],
  },
  {
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    shortName: 'UI/UX Design',
    icon: Fingerprint,
    tagline: 'Interfaces that convert visitors into loyal customers.',
    description:
      'Semantix Labs designs user-centric interfaces that convert visitors into loyal customers through intuitive, beautiful digital experiences, for web and mobile products.',
    included: [
      'User research and wireframing',
      'High-fidelity UI design',
      'Interactive prototypes',
      'Design systems for consistent, scalable products',
    ],
    techStack: ['Figma'],
    timeline: 'Typically runs alongside the build phase of a web or mobile project — 2 to 8 weeks depending on scope.',
    pricing: 'Included in web and mobile app engagements — book a free consultation for a standalone quote.',
    faq: [
      {
        q: 'Can Semantix Labs design my product without building it?',
        a: 'Yes, UI/UX design is available as a standalone service, delivered as high-fidelity designs and interactive prototypes, in addition to being included in our web and mobile app builds.',
      },
    ],
  },
  {
    slug: 'branding',
    name: 'Brand Identity & Logo Design',
    shortName: 'Brand Identity',
    icon: Palette,
    tagline: 'Logos and visual systems that build lasting recognition.',
    description:
      'Semantix Labs creates memorable logos, visual systems, and brand guidelines that differentiate your business and build lasting recognition across web, print, and social.',
    included: [
      'Logo design and visual identity',
      'Brand guideline documentation',
      'Color palette and typography systems',
      'Assets applied across web, print, and social',
    ],
    techStack: [],
    timeline: 'Typically 1 to 3 weeks depending on the number of concepts and revisions.',
    pricing: 'Custom quote based on scope — book a free consultation for a tailored estimate.',
    faq: [
      {
        q: 'Does Semantix Labs offer branding without a full website build?',
        a: 'Yes, brand identity and logo design is available as a standalone service, separate from web or app development engagements.',
      },
    ],
  },
  {
    slug: 'ai-automation',
    name: 'AI Automation & Chatbots',
    shortName: 'AI Automation',
    icon: Cpu,
    tagline: 'Smart workflows and chatbots that cut manual overhead.',
    description:
      'Semantix Labs builds smart AI workflows, chatbots, and automation systems that streamline operations and reduce manual overhead for growing businesses.',
    included: [
      'Custom AI chatbots and assistants',
      'Workflow automation for repetitive tasks',
      'Integration with existing business tools',
      'Ongoing monitoring and support',
    ],
    techStack: ['Python', 'Node.js', 'AWS'],
    timeline: 'Typically 2 to 6 weeks depending on the number of workflows and integrations.',
    pricing: 'Custom quote based on scope — book a free consultation for a tailored estimate.',
    faq: [
      {
        q: 'What kind of AI automation does Semantix Labs build?',
        a: 'We build custom AI chatbots, workflow automations, and integrations with your existing business tools to reduce manual, repetitive work.',
      },
    ],
  },
  {
    slug: 'seo-digital-marketing',
    name: 'Digital Marketing & SEO',
    shortName: 'Digital Marketing & SEO',
    icon: Megaphone,
    tagline: 'Data-driven SEO and performance campaigns.',
    description:
      'Semantix Labs runs data-driven SEO, social media marketing, and performance campaigns that grow your digital reach and revenue.',
    included: [
      'On-page and technical SEO',
      'Social media marketing',
      'Performance ad campaigns',
      'Analytics and reporting',
    ],
    techStack: ['Google Ads', 'Meta Ads'],
    timeline: 'Ongoing engagement — initial technical audit typically delivered within 1 to 2 weeks.',
    pricing: 'Custom quote based on scope — book a free consultation for a tailored estimate.',
    faq: [
      {
        q: 'Does Semantix Labs offer ongoing SEO and marketing support?',
        a: 'Yes, digital marketing and SEO is typically run as an ongoing engagement with regular reporting, alongside our 24/7 support and maintenance packages.',
      },
    ],
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce Development',
    shortName: 'E-commerce',
    icon: ShoppingCart,
    tagline: 'Online stores built to convert and scale.',
    description:
      'Semantix Labs builds scalable online stores with seamless payment integration, inventory management, and conversion-focused design.',
    included: [
      'Custom or Shopify-based storefronts',
      'Payment gateway integration',
      'Inventory and order management',
      'Conversion-focused UX',
    ],
    techStack: ['Shopify', 'React', 'Node.js'],
    timeline: 'Typically 4 to 8 weeks depending on catalog size and integrations, in line with our custom web app timelines.',
    pricing: 'Custom quote based on scope — book a free consultation for a tailored estimate.',
    faq: [
      {
        q: 'Does Semantix Labs build on Shopify or custom platforms?',
        a: 'We build both — Shopify-based stores for faster launches, and fully custom e-commerce platforms when you need more control over the buying experience.',
      },
    ],
  },
  {
    slug: 'video-production',
    name: 'Video Production & Photography',
    shortName: 'Video & Photography',
    icon: Camera,
    tagline: 'Cinematic video and photography that tell your story.',
    description:
      'Semantix Labs produces cinematic brand videos, product photography, and content creation that tell your story with impact.',
    included: [
      'Brand and promotional video production',
      'Product and lifestyle photography',
      'Social-ready short-form content',
      'See real examples on our Our Work page',
    ],
    techStack: [],
    timeline: 'Custom quote based on scope — book a free consultation for a tailored estimate.',
    pricing: 'Custom quote based on scope — book a free consultation for a tailored estimate.',
    faq: [
      {
        q: 'Can I see examples of past video and photography work?',
        a: 'Yes, our Our Work page features video reels and photography projects delivered for past clients.',
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
