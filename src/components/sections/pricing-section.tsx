"use client";
import { IoTrophyOutline } from "react-icons/io5";

const pricingPlans = [
  {
    icon: "🏃‍♂️",
    title: "BÁSICO",
    price: "R$ 150",
    period: "por mês",
    features: [
      "2x por semana",
      "Avaliação física",
      "Treino personalizado",
      "Suporte via WhatsApp",
    ],
    featured: false,
    color: "from-red-500 to-red-600",
  },
  {
    icon: "💪",
    title: "PREMIUM",
    price: "R$ 250",
    period: "por mês",
    features: [
      "3x por semana",
      "Avaliação física completa",
      "Treino + Dieta personalizada",
      "Suporte 24/7",
      "Acompanhamento online",
    ],
    featured: true,
    badge: "MAIS POPULAR",
    color: "from-red-600 to-red-700",
  },
  {
    icon: "🏆",
    title: "VIP",
    price: "R$ 400",
    period: "por mês",
    features: [
      "5x por semana",
      "Avaliação médica completa",
      "Treino + Dieta + Suplementação",
      "Personal exclusivo",
      "Acompanhamento presencial",
      "Resultados garantidos",
    ],
    featured: false,
    color: "from-red-700 to-red-800",
  },
];

export default function PricingSection() {
  const handlePlanSelect = (planTitle: string) => {
    console.log(`Plano selecionado: ${planTitle}`);
    // Aqui você pode adicionar lógica para WhatsApp ou formulário de contato
  };

  return (
    <section
      id="pricing"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#111010" }}
    >
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl mb-6">
            <span className="text-4xl">
              <IoTrophyOutline />
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            NOSSOS <span className="text-red-500">PLANOS</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl p-5 text-center transition-all duration-500 overflow-hidden min-h-[350px] cursor-pointer ${
                plan.featured
                  ? "bg-gradient-to-br from-red-600 via-red-500 to-red-700 border-2 border-red-400 shadow-2xl shadow-red-500/50 scale-105 transform hover:scale-110 animate-pulse-glow"
                  : "bg-black/40 backdrop-blur-sm border border-gray-800 hover:transform hover:-translate-y-2 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20"
              }`}
            >
              {/* Efeitos especiais para o card featured */}
              {plan.featured && (
                <>
                  {/* Borda animada */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500 via-red-400 to-red-500 opacity-75 animate-spin-slow blur-sm" />
                  <div className="absolute inset-[2px] rounded-3xl bg-gradient-to-br from-red-800/60 via-red-700/40 to-gray-900" />

                  {/* Efeito de partículas */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-red-400 rounded-full animate-ping" />
                  <div className="absolute top-8 right-6 w-1 h-1 bg-red-300 rounded-full animate-pulse" />
                  <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce" />

                  {/* Gradiente de fundo especial */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-red-800/20 rounded-3xl" />

                  {/* Badge de destaque */}
                  {plan.badge && (
                    <span className="absolute top-4 right-4 bg-white text-red-600 font-bold px-3 py-1 rounded-full text-xs shadow-lg z-20 animate-bounce">
                      {plan.badge}
                    </span>
                  )}
                </>
              )}

              {/* Efeitos para cards normais (estilo services) */}
              {!plan.featured && (
                <>
                  {/* Card Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                  />

                  {/* Top Border Accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.color} rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  />
                </>
              )}

              {/* Conteúdo do card */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="relative mb-4">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${plan.color} rounded-xl mb-2 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-xl">{plan.icon}</span>
                  </div>
                  {!plan.featured && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </div>

                <h3
                  className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                    plan.featured
                      ? "text-white"
                      : "text-white group-hover:text-red-400"
                  }`}
                >
                  {plan.title}
                </h3>

                <div
                  className={`text-3xl font-bold mb-1 ${
                    plan.featured ? "text-white animate-pulse" : "text-red-500"
                  }`}
                >
                  {plan.price}
                </div>

                <div
                  className={`mb-4 text-base transition-colors duration-300 ${
                    plan.featured
                      ? "text-red-100"
                      : "text-gray-300 group-hover:text-gray-200"
                  }`}
                >
                  {plan.period}
                </div>

                {/* Features List */}
                <ul className="list-none mb-4 space-y-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={`flex items-center justify-center transition-colors duration-300 ${
                        plan.featured ? "text-white" : "text-white"
                      }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 bg-gradient-to-r ${plan.color} rounded-full mr-2 flex-shrink-0`}
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => handlePlanSelect(plan.title)}
                  className={`w-full py-2 px-4 rounded-full text-base font-bold cursor-pointer transition-all duration-300 uppercase tracking-wider ${
                    plan.featured
                      ? "bg-white text-red-600 hover:bg-red-50 hover:scale-105 shadow-xl shadow-red-500/30 animate-pulse-button"
                      : `bg-gradient-to-r ${plan.color} text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:shadow-lg hover:shadow-red-500/30`
                  } hover:transform hover:-translate-y-1`}
                >
                  Escolher Plano
                </button>
              </div>

              {/* Decorative Elements para cards normais */}
              {!plan.featured && (
                <div className="absolute bottom-4 right-4 w-6 h-6 border border-red-500/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-all duration-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
