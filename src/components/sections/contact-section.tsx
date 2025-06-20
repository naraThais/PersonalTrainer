"use client";

import type React from "react";

import { useState } from "react";

export default function ContactSection({ id }: { id?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }, 1500);
  };

  const getButtonText = () => {
    if (isSubmitting) return "ENVIANDO...";
    if (submitStatus === "success") return "MENSAGEM ENVIADA!";
    return "ENVIAR MENSAGEM";
  };

  const getButtonClass = () => {
    const baseClass =
      "w-full py-4 px-8 rounded-full text-lg font-bold cursor-pointer transition-all duration-300 uppercase tracking-wider";

    if (submitStatus === "success") {
      return `${baseClass} bg-gradient-to-r from-green-600 to-green-500 text-white transform -translate-y-1`;
    }

    return `${baseClass} bg-gradient-to-r from-red-600 to-red-500 text-white hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/60`;
  };

  return (
    <section
      id={id || "contact"}
      className="py-20 bg-gradient-to-br from-gray-900 to-red-900/20"
    >
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-red-600 drop-shadow-md">
          CONTATO
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Formulário */}
          <div className="bg-red-600/10 p-12 rounded-3xl border-2 border-red-600/30">
            <h3 className="text-red-600 mb-8 text-2xl font-bold">
              Envie sua Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-red-600 font-bold"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-4 border-2 border-red-600/30 rounded-xl bg-gray-900/80 text-white text-lg transition-all duration-300 focus:outline-none focus:border-red-600 focus:shadow-lg focus:shadow-red-600/30"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-red-600 font-bold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-4 border-2 border-red-600/30 rounded-xl bg-gray-900/80 text-white text-lg transition-all duration-300 focus:outline-none focus:border-red-600 focus:shadow-lg focus:shadow-red-600/30"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-red-600 font-bold"
                >
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full p-4 border-2 border-red-600/30 rounded-xl bg-gray-900/80 text-white text-lg transition-all duration-300 focus:outline-none focus:border-red-600 focus:shadow-lg focus:shadow-red-600/30"
                />
              </div>

              <div>
                <label
                  htmlFor="goal"
                  className="block mb-2 text-red-600 font-bold"
                >
                  Objetivo
                </label>
                <div className="relative">
                  <select
                    id="goal"
                    name="goal"
                    required
                    className="w-full p-4 border-2 rounded-xl bg-gray-900/80 text-white text-lg transition-all duration-300 focus:outline-none focus:border-red-600 focus:shadow-lg focus:shadow-red-600/30 appearance-none [&:invalid]:border-red-600"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione seu objetivo
                    </option>
                    <option value="emagrecimento">Emagrecimento</option>
                    <option value="ganho-massa">Ganho de Massa</option>
                    <option value="condicionamento">
                      Condicionamento Físico
                    </option>
                    <option value="reabilitacao">Reabilitação</option>
                    <option value="outro">Outro</option>
                  </select>
                  {/* Remove o ícone padrão do select, não adiciona nenhum ícone customizado */}
                  <style jsx>{`
                    select::-ms-expand {
                      display: none;
                    }
                    select {
                      background-image: none !important;
                    }
                  `}</style>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-red-600 font-bold"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Conte mais sobre seus objetivos e disponibilidade..."
                  className="w-full p-4 border-2 border-red-600/30 rounded-xl bg-gray-900/80 text-white text-lg transition-all duration-300 focus:outline-none focus:border-red-600 focus:shadow-lg focus:shadow-red-600/30 resize-vertical min-h-[120px]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={getButtonClass()}
              >
                {getButtonText()}
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="flex flex-col gap-8">
            <div className="bg-red-600/10 p-8 rounded-2xl border-2 border-red-600/30 transition-all duration-300 hover:border-red-600 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/30">
              <h4 className="text-red-600 text-xl font-bold mb-4 flex items-center gap-2">
                📱 WhatsApp
              </h4>
              <p className="text-gray-300 leading-relaxed">
                (11) 99999-9999
                <br />
                Atendimento de Segunda a Sexta
                <br />
                das 6h às 22h
              </p>
            </div>

            <div className="bg-red-600/10 p-8 rounded-2xl border-2 border-red-600/30 transition-all duration-300 hover:border-red-600 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/30">
              <h4 className="text-red-600 text-xl font-bold mb-4 flex items-center gap-2">
                📧 Email
              </h4>
              <p className="text-gray-300 leading-relaxed">
                personal@email.com
                <br />
                Resposta em até 24 horas
              </p>
            </div>

            <div className="bg-red-600/10 p-8 rounded-2xl border-2 border-red-600/30 transition-all duration-300 hover:border-red-600 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/30">
              <h4 className="text-red-600 text-xl font-bold mb-4 flex items-center gap-2">
                📍 Localização
              </h4>
              <p className="text-gray-300 leading-relaxed">
                São Paulo, SP
                <br />
                Atendimento domiciliar e em academias parceiras
              </p>
            </div>

            <div className="bg-red-600/10 p-8 rounded-2xl border-2 border-red-600/30 transition-all duration-300 hover:border-red-600 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/30">
              <h4 className="text-red-600 text-xl font-bold mb-4 flex items-center gap-2">
                🌐 Redes Sociais
              </h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                Acompanhe nosso trabalho:
              </p>
              <div className="flex gap-4">
                {["📘", "📷", "🐦", "💬"].map((emoji, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-red-600/50"
                  >
                    {emoji}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
