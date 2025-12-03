import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Lock, Globe } from 'lucide-react';

const services = [
    {
        icon: Shield,
        title: "LGPD e Compliance",
        description: "Garanta a adequação da sua empresa à Lei Geral de Proteção de Dados com diagnósticos precisos e implementação eficaz."
    },
    {
        icon: FileText,
        title: "Contratos Digitais",
        description: "Elaboração e análise minuciosa de termos de uso, políticas de privacidade e contratos de prestação de serviços digitais."
    },
    {
        icon: Lock,
        title: "Cibersegurança Legal",
        description: "Assessoria jurídica especializada em incidentes de segurança, vazamento de dados e prevenção de fraudes online."
    },
    {
        icon: Globe,
        title: "Propriedade Intelectual",
        description: "Proteção da sua marca, software e conteúdo no ambiente digital contra plágio e uso indevido."
    }
];

const Expertise: React.FC = () => {
    return (
        <section id="expertise" className="py-20 bg-primary relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Sua Segurança Jurídica no <span className="text-gold italic font-serif">Ambiente Digital</span>
                    </h2>
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-8 rounded-sm bg-[#1A1A1A] border border-white/5 overflow-hidden hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(161,122,56,0.2)]"
                        >
                            {/* Abstract Background Image */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center mix-blend-overlay grayscale"></div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10 w-14 h-14 rounded-sm bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-gold/10">
                                <service.icon className="w-7 h-7 text-gray-400 group-hover:text-gold transition-colors" />
                            </div>
                            <h3 className="relative z-10 text-xl font-bold mb-3 text-white group-hover:text-gold transition-colors">
                                {service.title}
                            </h3>
                            <p className="relative z-10 text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors font-light">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
