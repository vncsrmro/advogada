import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Como funciona a adequação à LGPD?",
        answer: "O processo começa com um diagnóstico completo dos dados que sua empresa coleta e processa. Em seguida, elaboramos um plano de ação para ajustar processos, documentos e sistemas, garantindo conformidade legal e segurança."
    },
    {
        question: "Por que preciso de Termos de Uso e Política de Privacidade?",
        answer: "Esses documentos são essenciais para proteger sua empresa de responsabilidades legais, definir as regras do jogo com seus usuários e cumprir a legislação de proteção de dados (LGPD)."
    },
    {
        question: "O que fazer em caso de vazamento de dados?",
        answer: "A primeira ação é conter o incidente e avaliar a extensão. Em seguida, é necessário notificar a ANPD e os titulares dos dados, conforme a lei. Minha assessoria guia você em todo esse processo de gestão de crise."
    },
    {
        question: "Você atende empresas de todo o Brasil?",
        answer: "Sim! O atendimento é 100% digital, permitindo agilidade e eficiência para clientes em qualquer lugar do país ou do mundo."
    }
];

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-primary relative">
            <div className="container mx-auto px-6 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Dúvidas <span className="text-secondary">Comuns</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="border border-white/10 rounded-xl overflow-hidden bg-white/5"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-bold text-lg text-white">{faq.question}</span>
                                {activeIndex === index ? (
                                    <Minus className="w-5 h-5 text-secondary flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-secondary flex-shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-gray-400 border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
