import React from 'react';
import { Linkedin, Facebook, Instagram, ArrowUp } from 'lucide-react';
import SemanixLogo from './SemanixLogo';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="relative bg-black text-white py-16 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <a href="/" className="inline-block mb-6">
                            <SemanixLogo className="h-12 w-auto" theme="light" />
                        </a>
                        <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
                            We create digital experiences that blend innovation with aesthetic excellence.
                            Let's build something extraordinary together.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://lk.linkedin.com/company/semantix-labs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="https://www.facebook.com/p/Semantix-labs-61552217791739/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="https://www.instagram.com/semantixlabs/?hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="https://wa.me/94728133311"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                                aria-label="WhatsApp"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 fill-gray-300 group-hover:fill-white transition-colors"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="/#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                            <li><a href="/our-work" className="text-gray-400 hover:text-white transition-colors">Our Work</a></li>
                            <li><a href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Legal/Contact */}
                    <div>
                        <h4 className="font-semibold text-lg mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="text-gray-400">hello@semantixlabs.com</li>
                            <li className="text-gray-400">+94 72 813 3311</li>
                            <li className="text-gray-400">Colombo, Sri Lanka</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © {currentYear} Semantix Labs. All rights reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors"
                    >
                        Back to top
                        <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
