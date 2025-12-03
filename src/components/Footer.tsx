import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary pt-20 pb-10 relative overflow-hidden">
            {/* CTA Section */}
            <div className="container mx-auto px-6 mb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-3xl p-10 md:p-16 text-center border border-white/10 backdrop-blur-sm"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Não Deixe Seus <span className="text-secondary">Direitos Digitais</span> em Risco
                    </h2>
                    <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                        Agende agora sua consultoria e garanta a segurança jurídica do seu futuro digital com quem entende do assunto.
                    </p>
                    <a
                        href="https://wa.me/5519960003434"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-primary font-bold rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transform hover:scale-105"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Fale Diretamente com a Dra. Ana Costa
                    </a>
                </motion.div>
            </div>

            {/* Footer Content */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-t border-white/10 pt-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Dra. Ana Costa</h3>
                        <p className="text-gray-400">
                            Especialista em Direito Digital e Proteção de Dados. Segurança jurídica para o seu negócio no ambiente online.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Contato</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-secondary" />
                                <a href="mailto:contato@anacosta.adv.br" className="hover:text-white transition-colors">
                                    contato@anacosta.adv.br
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <MessageCircle className="w-5 h-5 text-secondary" />
                                <a href="https://wa.me/5519960003434" className="hover:text-white transition-colors">
                                    +55 (19) 96000-3434
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-secondary" />
                                <span>Atendimento Online para todo o Brasil</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Redes Sociais</h4>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center text-gray-500 text-sm border-t border-white/5 pt-8">
                    <p>&copy; {new Date().getFullYear()} Dra. Ana Costa. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
