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

export default function PricingSection({ id }: { id?: string }) {
  const handlePlanSelect = (planTitle: string) => {
    console.log(`Plano selecionado: ${planTitle}`);
  };

  return (
    <section
      className="py-20  relative"
      style={{ backgroundColor: "#111010" }}
      id={id || "pricing"}
    >
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-red-600 drop-shadow-md">
          PACOTES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card-border bg-gradient-to-br from-red-900/40 to-gray-900 rounded-3xl p-5 text-center relative border-2 border-red-600/30 transition-all duration-400 hover:transform hover:-translate-y-4 hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/40 overflow-hidden ${
                plan.featured
                  ? "border-red-600 bg-gradient-to-br from-red-900/40 via-red-600/20 to-gray-900 scale-105 pricing-card-featured"
                  : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-0 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-6">
                  {plan.badge}
                </div>
              )}

              <div className="text-3xl mb-2 text-red-600">{plan.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {plan.title}
              </h3>
              <div className="text-3xl font-bold text-red-600 mb-1">
                {plan.price}
              </div>
              <div className="text-gray-300 mb-4 text-base">{plan.period}</div>

              <ul className="list-none mb-4 space-y-1">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-gray-300 flex items-center justify-center"
                  >
                    <span className="text-red-600 font-bold mr-2 text-base">
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
                    ? "bg-gradient-to-r from-white to-gray-100 text-red-600 hover:from-gray-100 hover:to-white hover:shadow-lg hover:shadow-white/30"
                    : "bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-500 hover:to-red-600 hover:shadow-lg hover:shadow-red-600/50"
                } hover:transform hover:-translate-y-1`}
              >
                Escolher Plano
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
