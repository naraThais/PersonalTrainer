"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-900"
      style={{
        alignItems: "flex-start",
        minHeight: "100vh",
        paddingTop: "5vh",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse" />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-red-300/30 rounded-full animate-spin-slow" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-red-200/20 rotate-45 animate-bounce-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-red-400/20 rounded-lg animate-pulse" />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-red-300/40 rounded-full animate-ping" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Main Title with Typing Effect */}
            <div className="space-y-4">
              <h1
                className={`text-4xl sm:text-5xl lg:text-7xl font-black leading-tight transition-all duration-1000 delay-300 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <span className="block text-white">TRANSFORME</span>
                <span className="block bg-gradient-to-r from-red-200 via-white to-red-100 bg-clip-text text-transparent animate-gradient-x">
                  SEU CORPO
                </span>
                <span className="block text-white">TRANSFORME</span>
                <span className="block bg-gradient-to-r from-red-100 via-white to-red-200 bg-clip-text text-transparent animate-gradient-x">
                  SUA VIDA
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p
              className={`text-xl sm:text-2xl text-red-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-all duration-1000 delay-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Mais de <span className="text-white font-bold">5 anos</span>{" "}
              transformando vidas através do fitness.
              <br />
              <span className="text-red-200">Seu sucesso é minha missão!</span>
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <button
                onClick={scrollToContact}
                className="group relative px-8 py-4 bg-white text-red-800 font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/30"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  🚀 COMEÇAR AGORA
                </span>
                <div className="absolute inset-0 bg-red-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>

              <button className="group px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full transition-all duration-300 hover:bg-white hover:text-red-800 hover:scale-105">
                <span className="flex items-center justify-center gap-2">
                  ▶️ VER RESULTADOS
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className={`relative transition-all duration-1000 delay-900 ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {/* Main Image Container */}
              <div className="relative w-80 h-96 sm:w-96 sm:h-[500px] bg-gradient-to-br from-red-700/50 via-red-600/30 to-red-800/50 rounded-3xl border-4 border-white/30 overflow-hidden shadow-2xl shadow-black/30 backdrop-blur-sm">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-red-900/50 animate-pulse" />

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
                  {/* Main Icon */}
                  <div className="text-8xl sm:text-9xl mb-4 animate-bounce-slow">
                    💪
                  </div>

                  {/* Text */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    FORÇA
                  </h3>
                  <p className="text-red-100 text-lg">DETERMINAÇÃO</p>
                  <p className="text-red-200 text-lg">RESULTADOS</p>

                  {/* Progress Bars */}
                  <div className="w-full space-y-3 mt-6">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-red-100">
                        <span>Força</span>
                        <span>95%</span>
                      </div>
                      <div className="w-full bg-red-900/50 rounded-full h-2">
                        <div className="bg-gradient-to-r from-white to-red-100 h-2 rounded-full animate-progress-95" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-red-100">
                        <span>Resistência</span>
                        <span>90%</span>
                      </div>
                      <div className="w-full bg-red-900/50 rounded-full h-2">
                        <div className="bg-gradient-to-r from-white to-red-100 h-2 rounded-full animate-progress-90" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-red-100">
                        <span>Motivação</span>
                        <span>100%</span>
                      </div>
                      <div className="w-full bg-red-900/50 rounded-full h-2">
                        <div className="bg-gradient-to-r from-white to-red-100 h-2 rounded-full animate-progress-100" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full animate-ping" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-200 rounded-full animate-pulse" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-8 -right-8 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -z-10 -bottom-8 -left-8 w-24 h-24 bg-red-300/30 rounded-full blur-lg animate-bounce-slow" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1100 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      ></div>
    </section>
  );
}
