import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, BookOpen, ChevronRight, FileCheck, ChevronUp } from 'lucide-react';

const certifications = [
    {
        title: "Mestre em Direito Digital",
        institution: "Universidade de São Paulo (USP)",
        year: "2019",
        description: "Pesquisa focada em Responsabilidade Civil e Proteção de Dados na era da Inteligência Artificial."
    },
    {
        title: "CIPP/E - Certified Information Privacy Professional/Europe",
        institution: "IAPP",
        year: "2020",
        description: "Certificação global de referência em legislação europeia de proteção de dados (GDPR)."
    },
    {
        title: "CIPM - Certified Information Privacy Manager",
        institution: "IAPP",
        year: "2021",
        description: "Focada na gestão de programas de privacidade e operações de proteção de dados."
    },
    {
        title: "Especialista em Compliance Digital",
        institution: "Damásio Educacional",
        year: "2018",
        description: "Pós-graduação Lato Sensu em Direito Digital e Compliance."
    }
];

const About: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="about" className="py-20 relative overflow-hidden bg-primary">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-start gap-16">

                    {/* Column 1: Visual (Photo) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-5/12 relative sticky top-24"
                    >
                        <div className="relative z-10 rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                            {/* Professional Photo */}
                            <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('/images/dra-ana.png')] bg-cover bg-center opacity-90 mix-blend-normal grayscale hover:grayscale-0 transition-all duration-700"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-40"></div>
                                <span className="sr-only">Foto Dra. Ana Costa</span>
                            </div>

                            {/* Decorative Frame */}
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm -z-10 blur-sm"></div>
                        </div>

                        {/* Abstract Background Element behind photo */}
                        <div className="absolute -top-6 -left-6 w-full h-full border border-gold/20 rounded-sm -z-10 transform -rotate-2"></div>
                    </motion.div>

                    {/* Column 2: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-7/12"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-gold/10 border border-gold/20 text-gold text-sm font-medium mb-6 uppercase tracking-wider">
                            <Award className="w-4 h-4" />
                            <span>Excelência e Credibilidade</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
                            Tecnologia e Direito: <br />
                            <span className="text-gray-400 font-light">
                                Uma Visão Inovadora.
                            </span>
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg mb-8 font-light leading-relaxed">
                            <p>
                                Com uma trajetória marcada pela excelência acadêmica e prática, dedico minha carreira a descomplicar o Direito Digital. Minha missão é traduzir a complexidade da LGPD e das novas tecnologias em segurança jurídica real para o seu negócio.
                            </p>
                            <p>
                                Acredito que a inovação não deve ser barrada pela burocracia, mas sim impulsionada por uma base legal sólida e estratégica.
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            <div className="flex gap-4 group">
                                <div className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-gold/30 transition-colors">
                                    <BookOpen className="w-6 h-6 text-gray-300 group-hover:text-gold transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Formação de Prestígio</h4>
                                    <p className="text-sm text-gray-500">Mestre em Direito Digital pela USP e Especialista em Cyber Security.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 group">
                                <div className="w-12 h-12 rounded-sm bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-gold/30 transition-colors">
                                    <Award className="w-6 h-6 text-gray-300 group-hover:text-gold transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">10+ Anos de Experiência</h4>
                                    <p className="text-sm text-gray-500">Atuação focada em consultoria para startups e empresas de tecnologia.</p>
                                </div>
                            </div>
                        </div>

                        <div className="border border-white/10 rounded-sm overflow-hidden bg-[#1A1A1A]/50">
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors group"
                            >
                                <span className="text-gold font-bold uppercase tracking-wide text-sm flex items-center gap-2">
                                    Ver Certificações e Experiência
                                </span>
                                {isExpanded ? (
                                    <ChevronUp className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors" />
                                ) : (
                                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gold transition-colors" />
                                )}
                            </button>

                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 space-y-6 border-t border-white/5">
                                            {certifications.map((cert, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ x: -20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex gap-4 group/cert"
                                                >
                                                    <div className="shrink-0 mt-1">
                                                        <div className="w-2 h-2 rounded-full bg-gold/50 mt-2 group-hover/cert:bg-gold transition-colors"></div>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white font-bold text-base group-hover/cert:text-gold transition-colors">{cert.title}</h4>
                                                        <p className="text-gray-400 text-sm">{cert.institution} <span className="text-white/20">•</span> {cert.year}</p>
                                                    </div>
                                                </motion.div>
                                            ))}

                                            <div className="pt-4 mt-4">
                                                <a
                                                    href="https://www.linkedin.com"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs text-gray-500 hover:text-gold transition-colors flex items-center gap-1"
                                                >
                                                    Ver currículo completo no LinkedIn <ChevronRight className="w-3 h-3" />
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
