"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const services = [
  {
    icon: "🏋️",
    title: "Treinamento Personalizado",
    description:
      "Treinos específicos para seus objetivos, com acompanhamento individual e progressão personalizada.",
    features: [
      "Avaliação completa",
      "Plano personalizado",
      "Acompanhamento semanal",
    ],
    color: "from-red-500 to-red-600",
    slug: "treinamento-personalizado",
  },
  {
    icon: "🥗",
    title: "Consultoria Nutricional",
    description:
      "Orientação nutricional completa para potencializar seus resultados e manter uma vida saudável.",
    features: [
      "Cardápio personalizado",
      "Suplementação",
      "Acompanhamento mensal",
    ],
    color: "from-red-600 to-red-700",
    slug: "consultoria-nutricional",
  },
  {
    icon: "📱",
    title: "Acompanhamento Online",
    description:
      "Suporte 24/7 através do app, com treinos remotos e acompanhamento da evolução.",
    features: ["App exclusivo", "Suporte 24/7", "Relatórios semanais"],
    color: "from-red-700 to-red-800",
    slug: "acompanhamento-online",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const cards = sectionRef.current?.querySelectorAll(".service-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleServiceClick = (slug: string) => {
    router.push(`/servicos/${slug}`);
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#111010" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:60px_60px]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-red-400 rounded-full animate-ping opacity-40" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce opacity-50" />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-red-300 rounded-full animate-pulse opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl mb-6">
            <span className="text-2xl">⚡</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            NOSSOS <span className="text-red-500">SERVIÇOS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Soluções completas para transformar seu corpo e sua vida com
            acompanhamento profissional
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 transition-all duration-500 hover:transform hover:-translate-y-2 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 opacity-0 translate-y-8 cursor-pointer"
              onClick={() => handleServiceClick(service.slug)}
            >
              {/* Card Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
              />

              {/* Top Border Accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              />

              {/* Icon Container */}
              <div className="relative mb-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300"
                    >
                      <div
                        className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:shadow-lg hover:shadow-red-500/30`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceClick(service.slug);
                  }}
                >
                  Saiba Mais
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-4 right-4 w-8 h-8 border border-red-500/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center space-x-4 bg-black/60 backdrop-blur-sm border border-gray-800 rounded-2xl px-8 py-6">
            <div className="text-3xl">🎯</div>
            <div className="text-left">
              <h3 className="text-white font-bold text-lg">
                Pronto para começar?
              </h3>
              <p className="text-gray-400 text-sm">
                Entre em contato e transforme sua vida hoje mesmo
              </p>
            </div>
            <button
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Falar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
