import React from 'react';
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-[#0A0A0A] border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold text-white mb-6">Dra. Ana Costa</h2>
                        <p className="text-gray-400 mb-8 max-w-md font-light">
                            Assessoria jurídica especializada em Direito Digital e Proteção de Dados. Segurança e inovação para o seu negócio.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-primary transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-primary transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contato</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:contato@draanacosta.adv.br" className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors group">
                                    <Mail className="w-4 h-4 group-hover:text-gold transition-colors" />
                                    contato@draanacosta.adv.br
                                </a>
                            </li>
                            <li>
                                <a href="tel:+551999999999" className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors group">
                                    <Phone className="w-4 h-4 group-hover:text-gold transition-colors" />
                                    (19) 99999-9999
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Links Rápidos</h3>
                        <ul className="space-y-4">
                            <li><a href="#about" className="text-gray-400 hover:text-gold transition-colors">Sobre Mim</a></li>
                            <li><a href="#expertise" className="text-gray-400 hover:text-gold transition-colors">Áreas de Atuação</a></li>
                            <li><a href="#differentials" className="text-gray-400 hover:text-gold transition-colors">Diferenciais</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gold transition-colors">Política de Privacidade</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} Dra. Ana Costa. Todos os direitos reservados.
                    </p>
                    <p className="text-gray-600 text-sm flex items-center gap-1">
                        Desenvolvido por <a href="https://inovasys.digital" target="_blank" rel="noopener noreferrer" className="text-gray-500 font-bold hover:text-gold transition-colors">InovaSys</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
