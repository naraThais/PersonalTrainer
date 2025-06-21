"use client";

import type React from "react";

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
    // { name: "Central de Ajuda", href: "#help" },
    {
      name: "WhatsApp",
      href: "https://api.whatsapp.com/send?phone=5595991186625&text=Oi%2C%20tenho%20interesse%20na%20sua%20mentoria%20&fbclid=PAQ0xDSwLC1wFleHRuA2FlbQIxMAABpyilHONpCQhpmaS1hwXgYdQt6YjX20X9gyMZ5WifWtlp8-gVm4NlAsOYc-XJ_aem_UKmDo55TkI_lBJFI02_aqA9",
    },
    //{ name: "FAQ", href: "#faq" },
    //{ name: "Política de Privacidade", href: "#privacy" },
  ],
};

const socialLinks = [
  {
    name: "Instagram",
    icon: "📷",
    href: "https://instagram.com/personaltrainer",
    color: "from-pink-500 to-purple-600",
  },
  /* {
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
  },*/
  {
    name: "WhatsApp",
    icon: "💬",
    href: "https://api.whatsapp.com/send?phone=5595991186625&text=Oi%2C%20tenho%20interesse%20na%20sua%20mentoria%20&fbclid=PAQ0xDSwLC1wFleHRuA2FlbQIxMAABpyilHONpCQhpmaS1hwXgYdQt6YjX20X9gyMZ5WifWtlp8-gVm4NlAsOYc-XJ_aem_UKmDo55TkI_lBJFI02_aqA",
    color: "from-green-500 to-green-600",
  },
];

export default function Footer() {
  const handleSmoothScroll = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className=" border-t border-red-600/20"
      style={{ backgroundColor: "#111010" }}
    >
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
              Desde os 10 anos, o esporte me ensinou que disciplina, rotina e
              consistência fazem toda a diferença no resultado. Passei por
              futebol, futsal, basquete e futebol americano — e levo essa
              mentalidade pra tudo o que faço hoje. Acredito que, com pequenas
              melhorias diárias, bons hábitos e o ambiente certo, qualquer meta
              pode ser alcançada. Trabalho, pra mim, é uma via de mão dupla: o
              que você entrega, a vida devolve em forma de resultado,
              aprendizado e evolução.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <span className="text-red-500">📱</span>
                <span>(95) 9118-6625</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <span className="text-red-500">📧</span>
                <span>personal@email.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <span className="text-red-500">📍</span>
                <span>Curitiba, PR - Brasil</span>
              </div>
            </div>

            {/* Certifications */}
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
      <div
        className="border-t border-red-600/20 "
        style={{ backgroundColor: "#111010" }}
      >
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Personal Trainer. Todos os direitos reservados.
            </div>

            <div className="flex items-center space-x-6">
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
