import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, ShieldAlert } from 'lucide-react';

const differentials = [
    {
        icon: MessageSquare,
        title: "Linguagem Clara",
        description: "Descomplico o jurídico para que você entenda cada passo, sem 'juridiquês' desnecessário."
    },
    {
        icon: Zap,
        title: "Agilidade e Tecnologia",
        description: "Atendimento eficiente com ferramentas modernas para agilizar processos e respostas."
    },
    {
        icon: ShieldAlert,
        title: "Foco em Prevenção",
        description: "Soluções proativas para evitar problemas futuros, economizando tempo e recursos."
    }
];

const Differentials: React.FC = () => {
    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Sua Parceria <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                                Estratégica no Digital
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Não basta apenas conhecer a lei. É preciso entender o ritmo e as necessidades do mundo digital. Minha atuação é focada em resultados práticos e segurança real.
                        </p>
                        <div className="hidden lg:block">
                            <div className="w-32 h-32 border-2 border-dashed border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        </div>
                    </motion.div>

                    <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                        {differentials.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group relative flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 overflow-hidden hover:border-secondary/30 transition-all duration-500"
                            >
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Abstract Texture/Image Background (Low Opacity) */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center mix-blend-overlay"></div>

                                <div className="relative z-10 p-3 rounded-lg bg-secondary/10 text-secondary group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">{item.title}</h3>
                                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Differentials;
