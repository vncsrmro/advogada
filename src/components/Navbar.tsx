import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShieldCheck } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '#home' },
        { name: 'Sobre', href: '#about' },
        { name: 'Expertise', href: '#expertise' },
        { name: 'Diferenciais', href: '#differentials' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#101010]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-sm bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:border-gold transition-colors">
                        <ShieldCheck className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-white font-heading font-bold text-lg tracking-wide">DRA. ANA COSTA</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-gold transition-colors uppercase tracking-wider relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <a
                        href="https://wa.me/5519960003434"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-transparent border border-gold text-gold text-sm font-bold rounded-sm hover:bg-gold hover:text-primary transition-all duration-300 uppercase tracking-wide"
                    >
                        Agendar
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-gold transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#101010] border-b border-white/10 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-gray-300 hover:text-gold transition-colors border-b border-white/5 pb-2"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://wa.me/5519960003434"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-gold text-primary font-bold text-center rounded-sm uppercase tracking-wide hover:bg-white transition-colors"
                            >
                                Agendar Consulta
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
