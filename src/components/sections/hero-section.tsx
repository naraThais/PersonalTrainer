"use client";

import { useEffect, useState } from "react";
import { VscDebugStart } from "react-icons/vsc";

export default function HeroSection({ id }: { id?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id={id ?? "hero"}
      className="relative h-[90vh] flex items-start justify-center bg-gradient-to-br from-red-900 via-red-800 to-red-900 overflow-hidden"
      style={{
        alignItems: "center",
        maxWidth: "100vw",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse" />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-red-300/30 rounded-full animate-spin-slow" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-red-200/20 rotate-45 animate-bounce-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-red-400/20 rounded-lg animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-red-300/40 rounded-full animate-ping" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-8">
        {/* Main Title with Typing Effect */}
        <div className="space-y-4">
          <h1
            className={`text-4xl sm:text-5xl lg:text-7xl font-black leading-tight transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-white">TRANSFORME</span>
            <span className="block bg-gradient-to-r from-red-100 via-white to-red-200 bg-clip-text text-transparent animate-gradient-x">
              SUA VIDA
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p
          className={`text-xl sm:text-2xl text-red-100 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Mais de <span className="text-white font-bold">5 anos</span>{" "}
          transformando vidas através do fitness.
          <br />
          <span className="text-red-200">Seu sucesso é minha missão!</span>
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-white text-red-800 font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/30"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <VscDebugStart style={{ fontSize: "1.5rem" }} />
              COMEÇAR AGORA
            </span>
            <div className="absolute inset-0 bg-red-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>

          <button className="group px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full transition-all duration-300 hover:bg-white hover:text-red-800 hover:scale-105">
            <span className="flex items-center justify-center gap-2">
              VER RESULTADOS
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
