"use client";

import { useEffect } from "react";

export default function HeroSection({ id }: { id?: string }) {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className =
        "fixed w-1 h-1 bg-red-600/50 rounded-full pointer-events-none z-10";
      particle.style.left = Math.random() * window.innerWidth + "px";
      particle.style.top = window.innerHeight + "px";

      document.body.appendChild(particle);

      const animation = particle.animate(
        [
          { transform: "translateY(0px)", opacity: 0.5 },
          {
            transform: `translateY(-${window.innerHeight + 100}px)`,
            opacity: 0,
          },
        ],
        {
          duration: Math.random() * 3000 + 2000,
          easing: "linear",
        }
      );

      animation.onfinish = () => particle.remove();
    };

    const interval = setInterval(createParticle, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id={id || "hero"}
      className="h-screen flex items-center justify-center gradient-shift relative overflow-hidden md:hero-responsive"
    >
      {/* Floating Elements */}
      <div className="absolute w-full h-full overflow-hidden pointer-events-none">
        {/* Halteres flutuantes estilizados */}
        <div className="absolute top-1/5 left-1/10 w-20 h-20 flex items-center justify-center float-element">
          {/* Haltere */}
          <div className="flex items-center">
            <div className="w-4 h-10 bg-gray-400 rounded-full shadow-inner"></div>
            <div className="w-8 h-4 bg-gray-700 mx-1 rounded"></div>
            <div className="w-4 h-10 bg-gray-400 rounded-full shadow-inner"></div>
          </div>
        </div>
        <div
          className="absolute top-3/5 right-1/10 w-20 h-20 flex items-center justify-center float-element"
          style={{ animationDelay: "2s" }}
        >
          <div className="flex items-center">
            <div className="w-4 h-10 bg-gray-400 rounded-full shadow-inner"></div>
            <div className="w-8 h-4 bg-gray-700 mx-1 rounded"></div>
            <div className="w-4 h-10 bg-gray-400 rounded-full shadow-inner"></div>
          </div>
        </div>
        <div
          className="absolute bottom-1/5 left-1/5 w-20 h-20 flex items-center justify-center float-element"
          style={{ animationDelay: "4s" }}
        >
          <div className="flex items-center">
            <div className="w-4 h-10 bg-gray-400 rounded-full shadow-inner"></div>
            <div className="w-8 h-4 bg-gray-700 mx-1 rounded"></div>
            <div className="w-4 h-10 bg-gray-400 rounded-full shadow-inner"></div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="text-left z-10 max-w-lg px-8 ml-[5%] md:hero-content-mobile">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg fade-in-up">
          WADE - PERSONAL TRAINER
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 fade-in-up-delay-1">
          Transforme seu corpo, transforme sua vida
        </p>
        <button
          onClick={scrollToContact}
          className="bg-gradient-to-r from-red-600 to-red-500 text-white px-7 py-3 rounded-full text-lg font-bold cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/40 fade-in-up-delay-2"
        >
          AGENDE SEU TREINO
        </button>
      </div>
    </section>
  );
}
