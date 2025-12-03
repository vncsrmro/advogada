import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const steps = [
    {
        number: "01",
        title: "Diagnóstico Gratuito",
        description: "Entendimento completo do seu cenário e necessidades através de uma análise inicial detalhada."
    },
    {
        number: "02",
        title: "Solução Personalizada",
        description: "Desenvolvimento de estratégias jurídicas sob medida para seus desafios específicos no ambiente digital."
    },
    {
        number: "03",
        title: "Execução e Acompanhamento",
        description: "Implementação das medidas e suporte contínuo para garantir sua tranquilidade e segurança jurídica."
    }
];

const Process: React.FC = () => {
    return (
        <section className="py-20 bg-primary/50 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Transparência e Eficiência em <span className="text-secondary">Cada Etapa</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden group hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="absolute -right-4 -top-4 text-9xl font-bold text-white/5 group-hover:text-white/10 transition-colors select-none">
                                {step.number}
                            </div>
                            <div className="relative z-10">
                                <div className="text-4xl font-bold text-secondary mb-4">{step.number}</div>
                                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <a
                        href="https://wa.me/5519960003434"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent/80 transition-all duration-300 shadow-[0_0_20px_rgba(94,43,255,0.3)] hover:shadow-[0_0_30px_rgba(94,43,255,0.5)]"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Solicite uma Avaliação Inicial
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
