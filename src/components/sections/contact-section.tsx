"use client";

import type React from "react";
import { useState } from "react";
import { GrContact } from "react-icons/gr";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    goal: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", goal: "", message: "" });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 2000);
  };

  const getButtonText = () => {
    if (isSubmitting) return "ENVIANDO...";
    if (submitStatus === "success") return "MENSAGEM ENVIADA! ✓";
    return "ENVIAR MENSAGEM";
  };

  const getButtonClass = () => {
    const baseClass =
      "w-full py-4 px-8 rounded-xl text-lg font-bold cursor-pointer transition-all duration-300 uppercase tracking-wider";

    if (submitStatus === "success") {
      return `${baseClass} bg-gradient-to-r from-green-600 to-green-500 text-white transform scale-105 shadow-lg shadow-green-500/30`;
    }

    if (isSubmitting) {
      return `${baseClass} bg-gradient-to-r from-gray-600 to-gray-500 text-white opacity-75`;
    }

    return `${baseClass} bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-500 hover:to-red-600 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-red-600/40`;
  };

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#111010" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,255,255,0.05),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-red-400 rounded-full animate-ping opacity-40" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce opacity-50" />
      </div>

      <div className="max-w-4xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl mb-6">
            <span className="text-2xl">
              <GrContact />
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            ENTRE EM <span className="text-red-500">CONTATO</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Pronto para transformar sua vida? Preencha o formulário e vamos
            criar o plano perfeito para seus objetivos
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="group relative bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 transition-all duration-500 hover:transform hover:-translate-y-2 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20">
          {/* Card Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500" />

          {/* Top Border Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

          {/* Icon Container */}
          <div className="relative mb-8">
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                Formulário de Contato
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                Preencha e receba uma resposta personalizada
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-white font-semibold"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border border-gray-700 rounded-xl bg-gray-900/50 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-red-500 focus:shadow-lg focus:shadow-red-500/20"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label
                  htmlFor="goal"
                  className="block mb-2 text-white font-semibold"
                >
                  Objetivo Principal *
                </label>
                <div className="relative">
                  <select
                    id="goal"
                    name="goal"
                    value={formData.goal}
                    onChange={handleInputChange}
                    required
                    className="custom-select w-full p-4 border border-gray-700 rounded-xl bg-gray-900/90 text-white transition-all duration-300 focus:outline-none focus:border-red-500 focus:shadow-lg focus:shadow-red-500/20 appearance-none cursor-pointer pr-12"
                    style={{
                      backgroundImage: "none",
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                    }}
                  >
                    <option value="">Selecione seu objetivo</option>
                    <option value="emagrecimento">Emagrecimento</option>
                    <option value="ganho-massa">Ganho de Massa Muscular</option>
                    <option value="condicionamento">
                      Condicionamento Físico
                    </option>
                    <option value="definicao">Definição Muscular</option>
                    <option value="saude">Saúde e Bem-estar</option>
                    <option value="reabilitacao">Reabilitação</option>
                    <option value="performance">Performance Esportiva</option>
                    <option value="outro">Outro</option>
                  </select>

                  {/* Custom Arrow */}
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-white font-semibold"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Conte mais sobre seus objetivos, disponibilidade de horários, experiência anterior..."
                  className="w-full p-4 border border-gray-700 rounded-xl bg-gray-900/50 text-white placeholder-gray-500 transition-all duration-300 focus:outline-none focus:border-red-500 focus:shadow-lg focus:shadow-red-500/20 resize-vertical min-h-[120px]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={getButtonClass()}
                onClick={() => {
                  const name = (
                    document.getElementById("name") as HTMLInputElement
                  )?.value;
                  const goalSelect = document.getElementById(
                    "goal"
                  ) as HTMLSelectElement;
                  const goal =
                    goalSelect?.options[goalSelect.selectedIndex]?.text;
                  const message = (
                    document.getElementById("message") as HTMLTextAreaElement
                  )?.value;

                  const text = `Olá! Meu nome é ${name}.\nObjetivo: ${goal}\nMensagem: ${message}`;
                  const url = `https://wa.me/5588992897651?text=${encodeURIComponent(
                    text
                  )}`;
                  window.open(url, "_blank");
                }}
              >
                {getButtonText()}
              </button>
            </form>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-4 right-4 w-8 h-8 border border-red-500/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-all duration-500" />
        </div>
      </div>
    </section>
  );
}
