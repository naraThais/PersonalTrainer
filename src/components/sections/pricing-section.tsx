"use client";

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
      className="py-20  relative overflow-hidden"
      style={{ backgroundColor: "#111010" }}
    >
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-red-600 drop-shadow-md">
          PACOTES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-5 text-center border-2 transition-all duration-500 overflow-hidden min-h-[350px] ${
                plan.featured
                  ? "bg-gradient-to-br from-red-600 via-red-500 to-red-700 border-red-400 shadow-2xl shadow-red-500/50 scale-105 transform hover:scale-110 animate-pulse-glow"
                  : "border-red-700 hover:transform hover:-translate-y-2 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/30 "
              }`}
              style={{ backgroundColor: "#111010" }}
            >
              {/* Efeito de brilho especial para o card featured */}
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
                </>
              )}

              {/* Conteúdo do card */}
              <div className="relative z-10">
                <div
                  className={`text-3xl mb-2 ${
                    plan.featured ? "animate-bounce-slow" : ""
                  }`}
                >
                  {plan.icon}
                </div>

                <h3
                  className={`text-xl font-bold mb-2 ${
                    plan.featured ? "text-white" : "text-white"
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
                  className={`mb-4 text-base ${
                    plan.featured ? "text-red-100" : "text-gray-300"
                  }`}
                >
                  {plan.period}
                </div>

                <ul className="list-none mb-4 space-y-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={`flex items-center justify-center ${
                        plan.featured ? "text-white" : "text-white"
                      }`}
                    >
                      <span
                        className={`font-bold mr-2 text-base ${
                          plan.featured ? "text-red-200" : "text-red-500"
                        }`}
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePlanSelect(plan.title)}
                  className={`w-full py-2 px-4 rounded-full text-base font-bold cursor-pointer transition-all duration-300 uppercase tracking-wider ${
                    plan.featured
                      ? "bg-white text-red-600 hover:bg-red-50 hover:scale-105 shadow-xl shadow-red-500/30 animate-pulse-button"
                      : "bg-red-600 text-white hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/50"
                  } hover:transform hover:-translate-y-1`}
                >
                  Escolher Plano
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
