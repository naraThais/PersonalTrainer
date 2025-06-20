"use client";

import type React from "react";

import { useState } from "react";

const footerLinks = {
  services: [
    { name: "Treinamento Personalizado", href: "#services" },
    { name: "Consultoria Nutricional", href: "#services" },
    { name: "Acompanhamento Online", href: "#services" },
    { name: "Avaliação Física", href: "#contact" },
  ],
  plans: [
    { name: "Plano Básico", href: "#pricing" },
    { name: "Plano Premium", href: "#pricing" },
    { name: "Plano VIP", href: "#pricing" },
    { name: "Aula Experimental", href: "#contact" },
  ],
  company: [
    { name: "Sobre Mim", href: "#about" },
    { name: "Resultados", href: "#gallery" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
  ],
  support: [
    { name: "Central de Ajuda", href: "#help" },
    { name: "WhatsApp", href: "https://wa.me/5511999999999" },
    { name: "FAQ", href: "#faq" },
    { name: "Política de Privacidade", href: "#privacy" },
  ],
};

const socialLinks = [
  {
    name: "Instagram",
    icon: "📷",
    href: "https://instagram.com/personaltrainer",
    color: "from-pink-500 to-purple-600",
  },
  {
    name: "Facebook",
    icon: "📘",
    href: "https://facebook.com/personaltrainer",
    color: "from-blue-600 to-blue-700",
  },
  {
    name: "YouTube",
    icon: "📺",
    href: "https://youtube.com/personaltrainer",
    color: "from-red-500 to-red-600",
  },
  {
    name: "TikTok",
    icon: "🎵",
    href: "https://tiktok.com/@personaltrainer",
    color: "from-gray-800 to-gray-900",
  },
  {
    name: "WhatsApp",
    icon: "💬",
    href: "https://wa.me/5511999999999",
    color: "from-green-500 to-green-600",
  },
];

const certifications = [
  "CREF Registrado",
  "Especialista em Musculação",
  "Nutrição Esportiva",
  "Treinamento Funcional",
  "Pilates Certificado",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    // Simular inscrição na newsletter
    setTimeout(() => {
      setIsSubscribing(false);
      setSubscribeStatus("success");
      setEmail("");

      setTimeout(() => {
        setSubscribeStatus("idle");
      }, 3000);
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSmoothScroll = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-red-900/10 to-gray-900 border-t border-red-600/20">
      {/* Newsletter Section */}
      <div className="border-b border-red-600/20">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              📧 Receba Dicas Exclusivas de Treino
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Inscreva-se na nossa newsletter e receba semanalmente dicas de
              treino, nutrição e motivação direto no seu email.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor email"
                required
                className="flex-1 px-6 py-4 rounded-full bg-gray-800/50 border-2 border-red-600/30 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 focus:shadow-lg focus:shadow-red-600/30 transition-all duration-300"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className={`px-8 py-4 rounded-full font-bold text-white transition-all duration-300 ${
                  subscribeStatus === "success"
                    ? "bg-gradient-to-r from-green-600 to-green-500"
                    : "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 hover:shadow-lg hover:shadow-red-600/40"
                } ${isSubscribing ? "opacity-75" : ""}`}
              >
                {isSubscribing
                  ? "INSCREVENDO..."
                  : subscribeStatus === "success"
                  ? "INSCRITO! ✓"
                  : "INSCREVER"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-xl flex items-center justify-center text-2xl">
                💪
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  PERSONAL TRAINER
                </h3>
                <p className="text-red-400 text-sm font-medium">
                  Transformando Vidas
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Mais de 5 anos transformando vidas através do fitness.
              Especialista em emagrecimento, ganho de massa muscular e
              condicionamento físico. Seu sucesso é minha missão!
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <span className="text-red-500">📱</span>
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <span className="text-red-500">📧</span>
                <span>personal@email.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <span className="text-red-500">📍</span>
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-white font-bold mb-3">🏆 Certificações</h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-red-600/20 border border-red-600/30 rounded-full text-xs text-red-300 font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleSmoothScroll(link.href)}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Plans Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Planos</h4>
            <ul className="space-y-3">
              {footerLinks.plans.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleSmoothScroll(link.href)}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <button
                      onClick={() => handleSmoothScroll(link.href)}
                      className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 pt-8 border-t border-red-600/20">
          <div className="text-center mb-8">
            <h4 className="text-white font-bold text-xl mb-4">
              🌟 Siga nas Redes Sociais
            </h4>
            <p className="text-gray-300 mb-6">
              Acompanhe dicas diárias, treinos e transformações incríveis!
            </p>

            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-110 hover:shadow-lg hover:shadow-red-600/30`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-red-600/10 border border-red-600/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-red-500 mb-2">500+</div>
            <div className="text-gray-300 text-sm">Alunos Transformados</div>
          </div>
          <div className="bg-red-600/10 border border-red-600/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-red-500 mb-2">5+</div>
            <div className="text-gray-300 text-sm">Anos de Experiência</div>
          </div>
          <div className="bg-red-600/10 border border-red-600/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-red-500 mb-2">98%</div>
            <div className="text-gray-300 text-sm">Taxa de Sucesso</div>
          </div>
          <div className="bg-red-600/10 border border-red-600/20 rounded-xl p-6">
            <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Suporte Online</div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-red-600/20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Personal Trainer. Todos os direitos reservados. | CREF:
              123456-G/SP
            </div>

            <div className="flex items-center space-x-6">
              <button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-red-600 to-red-500 text-white p-3 rounded-full transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/40"
                title="Voltar ao topo"
              >
                ⬆️
              </button>

              <div className="flex space-x-4 text-sm text-gray-400">
                <button className="hover:text-red-400 transition-colors">
                  Termos de Uso
                </button>
                <span>•</span>
                <button className="hover:text-red-400 transition-colors">
                  Privacidade
                </button>
                <span>•</span>
                <button className="hover:text-red-400 transition-colors">
                  Cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
