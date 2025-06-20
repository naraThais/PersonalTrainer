"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: "🏋️",
    title: "Treinamento Personalizado",
    description:
      "Treinos específicos para seus objetivos, com acompanhamento individual e progressão personalizada.",
  },
  {
    icon: "🥗",
    title: "Consultoria Nutricional",
    description:
      "Orientação nutricional completa para potencializar seus resultados e manter uma vida saudável.",
  },
  {
    icon: "📱",
    title: "Acompanhamento Online",
    description:
      "Suporte 24/7 através do app, com treinos remotos e acompanhamento da evolução.",
  },
];

export default function ServicesSection({ id }: { id?: string }) {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      ref={sectionRef}
      id={id || "services"}
      className="py-20 bg-gradient-to-b from-gray-900 to-red-900/20"
    >
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-red-600 drop-shadow-md">
          SERVIÇOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card service-card-hover bg-gradient-to-br from-gray-900 to-red-900/20 p-8 rounded-2xl border-2 border-red-600/30 transition-all duration-300 hover:transform hover:-translate-y-3 hover:border-red-600 hover:shadow-xl hover:shadow-red-600/30 relative overflow-hidden opacity-0 translate-y-8"
            >
              <div className="text-5xl text-red-600 mb-4">{service.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
