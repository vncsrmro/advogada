import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, BookOpen, ChevronRight, X, FileCheck, ExternalLink } from 'lucide-react';

const certifications = [
    {
        title: "Mestre em Direito Digital",
        institution: "Universidade de São Paulo (USP)",
        year: "2019",
        description: "Pesquisa focada em Responsabilidade Civil e Proteção de Dados na era da Inteligência Artificial."
    },
    {
        title: "CIPP/E - Certified Information Privacy Professional/Europe",
        institution: "IAPP (International Association of Privacy Professionals)",
        year: "2020",
        description: "Certificação global de referência em legislação europeia de proteção de dados (GDPR)."
    },
    {
        title: "CIPM - Certified Information Privacy Manager",
        institution: "IAPP (International Association of Privacy Professionals)",
        year: "2021",
        description: "Focada na gestão de programas de privacidade e operações de proteção de dados."
    },
    {
        title: "Especialista em Compliance Digital",
        institution: "Damásio Educacional",
        year: "2018",
        description: "Pós-graduação Lato Sensu em Direito Digital e Compliance."
    },
    {
        title: "Membro da Comissão de Direito Digital",
        institution: "OAB/SP",
        year: "Atual",
        description: "Atuação ativa em grupos de estudo e fomentaçao de boas práticas no direito eletrônico."
    }
];

const About: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="about" className="py-20 relative overflow-hidden bg-primary">
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

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center gap-2 text-gold font-bold hover:text-white transition-colors group uppercase tracking-wide text-sm"
                        >
                            Ver Certificações e Experiência
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Certifications Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        ></motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-2xl bg-[#1A1A1A] border border-white/10 rounded-sm shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#101010]">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Award className="w-5 h-5 text-gold" />
                                    Certificações e Títulos
                                </h3>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="p-6 overflow-y-auto custom-scrollbar">
                                <div className="space-y-6">
                                    {certifications.map((cert, index) => (
                                        <div key={index} className="flex gap-4 group">
                                            <div className="shrink-0 mt-1">
                                                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                                                    <FileCheck className="w-4 h-4" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-white font-bold text-lg mb-1 group-hover:text-gold transition-colors">{cert.title}</h4>
                                                <p className="text-gray-400 text-sm mb-2 font-medium">{cert.institution} • {cert.year}</p>
                                                <p className="text-gray-500 text-sm font-light leading-relaxed">{cert.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                                    <p className="text-gray-500 text-sm italic mb-4">
                                        "A atualização constante é um dever do advogado na era digital."
                                    </p>
                                    <a
                                        href="https://www.linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-gold text-sm font-bold hover:underline"
                                    >
                                        Ver perfil completo no LinkedIn <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default About;
