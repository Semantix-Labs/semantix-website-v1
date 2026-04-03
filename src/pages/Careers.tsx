import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { X, Menu, Briefcase, Globe, Heart, Zap, ArrowRight, ArrowUpRight, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import SemanixLogo from '@/components/SemanixLogo';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from '@emailjs/browser';

const PERKS = [
  {
    title: 'Work from Anywhere',
    description: 'We are a remote-first team. Work from the comfort of your home, a cafe, or anywhere in the world.',
    icon: Globe,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    title: 'Continuous Innovation',
    description: 'Work with cutting-edge tech. We are constantly exploring and building the future of digital experiences.',
    icon: Zap,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  },
  {
    title: 'Work Life Freedom',
    description: 'We trust our team. Enjoy flexible schedules and the freedom to balance your personal and professional life.',
    icon: Heart,
    color: 'text-rose-400',
    bg: 'bg-rose-400/10'
  },
  {
    title: 'Career Growth',
    description: 'Clear career pathways, mentorship, and a hefty learning budget to enhance your skills.',
    icon: Briefcase,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10'
  }
];

const JOB_OPENINGS = [
  {
    id: 1,
    title: 'Digital Marketing Manager (Brand & Growth)',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    description: 'Lead our brand presence and drive high-impact growth campaigns across all digital channels.',
    aboutRole: "We're looking for a driven and creative Digital Marketing Manager to join the Semantix Labs team. In this role, you'll take ownership of our clients' social media presence, craft compelling brand narratives, and lead strategies that drive real digital growth and visibility.",
    responsibilities: [
      "Managing and growing clients' social media profiles across platforms (Instagram, LinkedIn, Facebook, TikTok, etc.)",
      "Developing and executing digital marketing strategies to boost brand awareness and audience engagement",
      "Creating and overseeing content calendars, campaigns, and paid ad initiatives",
      "Monitoring performance metrics and optimizing strategies for maximum reach and ROI",
      "Collaborating with creative teams to ensure consistent brand messaging and visual identity",
      "Identifying growth opportunities through market trends, competitor analysis, and audience insights"
    ],
    requirements: [
      "2+ years of experience in digital marketing, brand, or growth roles",
      "Proven experience managing social media profiles for brands or clients",
      "Strong understanding of brand positioning, messaging, and digital communication",
      "Exposure to growth marketing, paid campaigns, or funnel optimization",
      "Analytical mindset with a passion for creative storytelling"
    ]
  },
  {
    id: 2,
    title: 'Digital Marketing Intern',
    department: 'Marketing',
    location: 'Remote',
    type: 'Internship',
    description: 'Kickstart your career by helping execute innovative marketing strategies and learning from our team.',
    aboutRole: "Are you a passionate and curious individual looking to kickstart your career in digital marketing? Semantix Labs is looking for a motivated Digital Marketing Intern to join our remote team. This is your chance to gain hands-on experience in a fast-paced, creative environment where you'll learn, grow, and make a real impact.",
    responsibilities: [
      "Assisting in managing and scheduling content across social media platforms (Instagram, LinkedIn, Facebook, etc.)",
      "Supporting the team in executing digital marketing campaigns",
      "Researching industry trends, competitors, and audience insights",
      "Helping create engaging content ideas and captions for clients",
      "Monitoring social media performance and compiling basic reports",
      "Collaborating with the team on brand communication and creative projects"
    ],
    requirements: [
      "Currently pursuing or recently completed a degree in Marketing, Business, Communications, or a related field",
      "A genuine interest in digital marketing, social media, and brand building",
      "Good written communication skills in English",
      "Willingness to learn, take initiative, and work independently",
      "Basic knowledge of social media platforms and how they work",
      "Any prior experience in content creation or marketing is a plus but not required"
    ],
    benefits: [
      "Real work experience with actual clients",
      "Mentorship and guidance from an experienced marketing team",
      "A flexible, fully remote work setup",
      "A stepping stone to a full-time career in digital marketing"
    ]
  },
  {
    id: 3,
    title: 'Graphic Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Contract / Project Basis',
    description: "Partner with us on a flexible, project-by-project basis to create stunning visual assets for the diverse clients we manage.",
    aboutRole: "We are looking for a highly creative and detail-oriented Graphic Designer to partner with Semantix Labs on a flexible, project-by-project basis. In this role, you will work closely with our core team to deliver premium, eye-catching visual assets for the diverse range of clients we manage. This is a perfect opportunity for a talented freelancer looking for consistent project flow.",
    responsibilities: [
      "Designing high-quality visual assets for social media, digital campaigns, and brand identities.",
      "Collaborating with our marketing team to translate client briefs into compelling visuals.",
      "Delivering projects on agreed-upon deadlines with a high standard of aesthetics.",
      "Ensuring all graphics align seamlessly with the specific brand guidelines of our clients.",
      "Iterating on designs based on constructive feedback from our team and clients."
    ],
    requirements: [
      "Proven experience as a Graphic Designer with a strong, modern portfolio.",
      "Proficiency in industry-standard design tools (Adobe Creative Suite, Figma, etc.).",
      "Ability to adapt to various brand voices and visual styles quickly.",
      "Strong communication skills and absolute reliability as an independent contractor.",
      "Capacity to manage multiple project timelines efficiently."
    ],
    benefits: [
      "Flexible, remote work on a project-by-project basis.",
      "Opportunity to work with exciting and diverse global clients.",
      "Clear, communicative briefs and a highly collaborative agency team.",
      "Competitive, reliable project-based compensation."
    ]
  }
];

const Careers = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const formRef = useRef<HTMLFormElement>(null);

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CAREERS_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/semantixlabs/30min' });
    } else {
      window.open('https://calendly.com/semantixlabs/30min', '_blank');
    }
  };

  const handleApplyClick = (job: any) => {
    setSelectedJob(job);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSubmitting(true);

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS environment variables are missing.');
      toast.error("Configuration Error", {
        description: "Email service is not configured properly. Please check your environment variables."
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      toast.success("Application Submitted Successfully!", {
        description: "Thank you for applying to Semantix Labs. We'll be in touch soon."
      });
      
      formRef.current.reset();
      setSelectedJob(null);
    } catch (error: any) {
      console.error('Detailed EmailJS error:', error);
      toast.error("Error sending application", {
        description: "Something went wrong. Please try again later or contact us directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const jobPostingSchemas = JOB_OPENINGS.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": [job.aboutRole, "Responsibilities: " + job.responsibilities.join(". "), "Requirements: " + job.requirements.join(". ")].join(" "),
    "datePosted": "2025-03-01",
    "validThrough": "2025-12-31",
    "employmentType": job.type === "Full-time" ? "FULL_TIME" : job.type === "Internship" ? "INTERN" : "CONTRACTOR",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Semantix Labs",
      "sameAs": "https://semantixlabs.com",
      "logo": "https://semantixlabs.com/logo_favicon.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "LK"
      }
    },
    "jobLocationType": "TELECOMMUTE",
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "Worldwide"
    }
  }));

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-purple-500/30 font-sans">
      <SEO
        title="Careers at Semantix Labs | Remote Digital Agency Jobs"
        description="Join Semantix Labs — a remote-first digital agency. We're hiring for Digital Marketing, Design, and more. Work from anywhere, build with great people."
        keywords="Semantix Labs careers, remote jobs digital agency, digital marketing jobs, graphic designer remote, marketing internship, web agency jobs"
        canonicalUrl="https://semantixlabs.com/careers"
      />
      {jobPostingSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Careers at Semantix Labs",
          "url": "https://semantixlabs.com/careers",
          "description": "Explore open roles at Semantix Labs, a remote-first premium digital agency. Join our team of designers, marketers, and builders.",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://semantixlabs.com/" },
              { "@type": "ListItem", "position": 2, "name": "Careers", "item": "https://semantixlabs.com/careers" }
            ]
          }
        })}
      </script>
      
      {/* Navigation */}
      <nav className="fixed top-4 md:top-6 left-4 right-4 md:left-0 md:right-0 z-50 flex justify-center transition-all duration-300">
        <div className="w-full max-w-[1200px] bg-black/70 backdrop-blur-xl border border-white/10 rounded-full px-6 md:px-8 py-3 shadow-2xl shadow-purple-500/5 flex items-center justify-between">
          <a href="/" className="z-50 shrink-0">
            <SemanixLogo className="h-12 md:h-14 w-auto transition-transform hover:scale-105" theme="light" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <a href="/" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Home</a>
            <a href="/our-work" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Our Work</a>
            <a href="/careers" className="text-sm font-medium text-white transition-colors">Careers</a>
            <a href="/#contact" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Contact</a>
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
          <div className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in-95 p-6 duration-300">
            <a href="/" className="text-3xl font-medium text-white">Home</a>
            <a href="/our-work" className="text-3xl font-medium text-white">Our Work</a>
            <a href="/careers" className="text-3xl font-medium text-white">Careers</a>
            <a href="/#contact" className="text-3xl font-medium text-white">Contact</a>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-12 py-6 text-lg" onClick={openCalendly}>
              Start Project
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none" />

        <div className="text-center max-w-4xl mx-auto space-y-8 mt-12 md:mt-24">
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-purple-500/30 text-purple-300 text-sm font-semibold tracking-wide uppercase">
            Join Our Team
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Future</span> With Us
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We are a collective of dreamers, builders, and storytellers. Help us push the boundaries of digital experiences and shape the next generation of web and media.
          </p>
          <div className="pt-6">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg group shadow-xl shadow-white/5"
              onClick={() => {
                document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Open Roles
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Why work at Semantix Labs?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We believe in doing our best work, and doing it together. Here are some of the ways we support our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERKS.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <div 
                  key={index} 
                  className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-2 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3", perk.bg)}>
                    <Icon className={cn("w-7 h-7", perk.color)} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{perk.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {perk.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Openings Section */}
      <section id="openings" className="py-24 px-6 md:px-12 lg:px-24 bg-black/40">
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight text-center">
              Career Openings
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto text-center">
              Find your next role and join our global mission.
            </p>
          </div>

          <div className="space-y-6">
            {JOB_OPENINGS.map((job) => (
              <div 
                key={job.id} 
                className="group relative bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 shadow-lg"
              >
                {/* Job Info */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-purple-500/10 text-purple-300 border border-purple-500/20 uppercase">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      {job.location}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
                    {job.description}
                  </p>
                </div>

                {/* Apply Button */}
                <div className="shrink-0 pt-4 md:pt-0 border-t border-white/10 md:border-transparent mt-4 md:mt-0 items-center">
                  <Button 
                    variant="outline"
                    className="w-full md:w-auto mt-2 md:mt-0 bg-transparent text-white border-white/20 hover:bg-white hover:text-black rounded-full px-8 py-6 h-auto group-hover:border-white/50 transition-all text-base font-medium"
                    onClick={() => handleApplyClick(job)}
                  >
                    Apply Now
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {JOB_OPENINGS.length === 0 && (
            <div className="py-20 text-center border border-dashed border-white/20 rounded-3xl bg-white/5">
              <p className="text-gray-500 text-lg">No open positions at the moment, but feel free to send us your resume!</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Modal */}
      <Dialog open={!!selectedJob} onOpenChange={(open) => !open && setSelectedJob(null)}>
        <DialogContent className="sm:max-w-2xl md:max-w-3xl w-[90vw] bg-black/90 border-white/10 backdrop-blur-2xl text-white">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-2xl font-bold">Apply for {selectedJob?.title}</DialogTitle>
            <DialogDescription className="text-gray-400">
              {selectedJob?.department} · {selectedJob?.location} · {selectedJob?.type}
            </DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-white/5 data-[state=active]:bg-white/10 p-1 rounded-xl">
              <TabsTrigger value="description" className="rounded-lg data-[state=active]:bg-white/10 data-[state=active]:text-white transition-all">Job Description</TabsTrigger>
              <TabsTrigger value="application" className="rounded-lg data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-300 transition-all">Application</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="space-y-4 pt-2 max-h-[60vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-white/5">
              <h4 className="font-semibold text-white text-lg">About the role</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {selectedJob?.aboutRole || selectedJob?.description}
              </p>
              
              <h4 className="font-semibold text-white text-lg pt-4">What You'll Be Doing</h4>
              <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
                {selectedJob?.responsibilities ? selectedJob.responsibilities.map((req: string, i: number) => (
                  <li key={i}>{req}</li>
                )) : (
                  <li>Driving high impact projects for Semantix Labs.</li>
                )}
              </ul>
              
              <h4 className="font-semibold text-white text-lg pt-4">What We're Looking For</h4>
              <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
                {selectedJob?.requirements ? selectedJob.requirements.map((req: string, i: number) => (
                  <li key={i}>{req}</li>
                )) : (
                  <li>Strong passion and understanding of the digital agency space.</li>
                )}
              </ul>

              {selectedJob?.benefits && (
                <>
                  <h4 className="font-semibold text-white text-lg pt-4">What's In It For You?</h4>
                  <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
                    {selectedJob.benefits.map((benefit: string, i: number) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </>
              )}
            </TabsContent>
            
            <TabsContent value="application">
              <form ref={formRef} onSubmit={onSubmit} className="space-y-4 mt-2">
                <input type="hidden" name="job_title" value={selectedJob?.title || ''} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-gray-300">Full Name <span className="text-rose-500">*</span></Label>
                    <Input id="fullName" name="user_name" required placeholder="John Doe" className="bg-white/5 border-white/10 focus-visible:ring-purple-500 text-white placeholder:text-gray-500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">E-Mail <span className="text-rose-500">*</span></Label>
                    <Input id="email" name="user_email" type="email" required placeholder="john@example.com" className="bg-white/5 border-white/10 focus-visible:ring-purple-500 text-white placeholder:text-gray-500" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-300">Phone <span className="text-rose-500">*</span></Label>
                  <Input id="phone" name="phone" type="tel" required placeholder="+1 (555) 000-0000" className="bg-white/5 border-white/10 focus-visible:ring-purple-500 text-white placeholder:text-gray-500" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resumeUrl" className="text-gray-300">CV/Resume Link (Google Drive, Notion, etc.) <span className="text-rose-500">*</span></Label>
                  <Input id="resumeUrl" name="resume_url" type="url" required placeholder="https://docs.google.com/..." className="bg-white/5 border-white/10 focus-visible:ring-purple-500 text-white placeholder:text-gray-500" />
                  <p className="text-xs text-gray-500">Please make sure the link is publicly accessible.</p>
                </div>

                <div className="space-y-2 pb-2">
                  <Label htmlFor="coverMessage" className="text-gray-300">Short Cover Message <span className="text-rose-500">*</span></Label>
                  <Textarea id="coverMessage" name="message" required placeholder="Why would you like to join Semantix Labs?" className="min-h-[100px] bg-white/5 border-white/10 focus-visible:ring-purple-500 text-white placeholder:text-gray-500 resize-none" />
                </div>

                <div className="flex items-start space-x-3 pt-2">
                  <Checkbox id="consent" required className="mt-1 border-white/20 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500" />
                  <div className="grid gap-1.5 leading-none">
                    <label htmlFor="consent" className="text-sm font-medium leading-none text-gray-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      I consent
                    </label>
                    <p className="text-xs text-gray-500">
                      I consent to Semantix Labs processing my application data.
                    </p>
                  </div>
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full mt-6 bg-white text-black hover:bg-gray-200 font-semibold py-6 rounded-xl text-md transition-all">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Careers;
