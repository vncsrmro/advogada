import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* B&W Abstract/Architectural Background */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 grayscale mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 z-10 relative text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
                >
                    <ShieldCheck className="w-5 h-5 text-gold" />
                    <span className="text-sm font-medium text-gray-300 tracking-widest uppercase">Direito Digital & Proteção de Dados</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
                >
                    Dra. Ana Costa <br />
                    <span className="text-gold italic font-serif">
                        Excelência em Direito Digital
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light"
                >
                    Proteção de Dados (LGPD) e Consultoria Jurídica Estratégica para o Mundo Corporativo.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="https://wa.me/5519960003434"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-8 py-4 bg-gold text-primary font-bold rounded-sm hover:bg-white transition-all duration-500 shadow-[0_0_20px_rgba(161,122,56,0.3)] hover:shadow-[0_0_30px_rgba(161,122,56,0.5)] flex items-center gap-2 uppercase tracking-wide text-sm"
                    >
                        Agende sua Consulta
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href="#expertise"
                        className="px-8 py-4 text-white border border-white/20 rounded-sm hover:bg-white/5 transition-all duration-300 backdrop-blur-sm uppercase tracking-wide text-sm"
                    >
                        Conheça Minha Expertise
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
