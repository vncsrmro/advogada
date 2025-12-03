import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.03),transparent_60%)]"></div>
                <div className="absolute top-20 right-20 w-72 h-72 bg-deep-purple/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 z-10 relative text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
                >
                    <ShieldCheck className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium text-gray-300">Direito Digital & Proteção de Dados</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                >
                    Dra. Ana Costa <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-deep-purple">
                        Sua Especialista em Direito Digital
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
                >
                    Proteção de Dados (LGPD) e Consultoria Jurídica Inovadora para o Mundo Digital.
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
                        className="group px-8 py-4 bg-secondary text-primary font-bold rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] flex items-center gap-2"
                    >
                        Agende sua Consulta Online
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href="#expertise"
                        className="px-8 py-4 text-white border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
                    >
                        Conheça Minha Especialidade
                    </a>
                </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-10 w-16 h-16 border border-white/10 rounded-xl backdrop-blur-md flex items-center justify-center hidden lg:flex"
            >
                <div className="w-8 h-8 bg-secondary/20 rounded-full"></div>
            </motion.div>

            <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-10 w-20 h-20 border border-white/10 rounded-full backdrop-blur-md flex items-center justify-center hidden lg:flex"
            >
                <div className="w-10 h-10 bg-accent/20 rounded-full"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
