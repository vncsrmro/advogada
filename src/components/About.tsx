import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Column 1: Visual (Photo) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-5/12 relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                            {/* Placeholder for Professional Photo */}
                            <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-80 mix-blend-overlay grayscale hover:grayscale-0 transition-all duration-700"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60"></div>
                                <span className="relative z-20 text-gray-500 font-heading text-lg tracking-widest uppercase border border-gray-600 px-4 py-2 rounded">Foto Dra. Ana Costa</span>
                            </div>

                            {/* Decorative Frame */}
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-secondary/30 to-deep-purple/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10 blur-sm"></div>
                        </div>

                        {/* Abstract Background Element behind photo */}
                        <div className="absolute -top-10 -left-10 w-full h-full border border-white/5 rounded-2xl -z-10 transform -rotate-3"></div>
                        <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-deep-purple/10 rounded-full blur-[80px] -z-10"></div>
                    </motion.div>

                    {/* Column 2: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-7/12"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-deep-purple/10 border border-deep-purple/20 text-deep-purple text-sm font-medium mb-6">
                            <Award className="w-4 h-4" />
                            <span>Excelência e Credibilidade</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Tecnologia e Direito: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                Uma Visão Inovadora.
                            </span>
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg mb-8">
                            <p>
                                Com uma trajetória marcada pela excelência acadêmica e prática, dedico minha carreira a descomplicar o Direito Digital. Minha missão é traduzir a complexidade da LGPD e das novas tecnologias em segurança jurídica real para o seu negócio.
                            </p>
                            <p>
                                Acredito que a inovação não deve ser barrada pela burocracia, mas sim impulsionada por uma base legal sólida e estratégica.
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                    <BookOpen className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Formação de Prestígio</h4>
                                    <p className="text-sm text-gray-500">Mestre em Direito Digital pela USP e Especialista em Cyber Security.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                    <Award className="w-6 h-6 text-deep-purple" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">10+ Anos de Experiência</h4>
                                    <p className="text-sm text-gray-500">Atuação focada em consultoria para startups e empresas de tecnologia.</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-secondary font-bold hover:text-white transition-colors group"
                        >
                            Ver Certificações e Experiência
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
