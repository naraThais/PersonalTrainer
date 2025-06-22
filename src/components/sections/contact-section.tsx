"use client";

import type React from "react";

import { useState } from "react";
import { LuPhoneCall } from "react-icons/lu";

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

  return (
    <section
      id={id || "contact"}
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#111010" }}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl mb-6">
          <span className="text-3xl">
            <LuPhoneCall />
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          NOSSOS <span className="text-red-500">CONTATOS</span>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto px-8 py-4">
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

              <div className="flex justify-center text-center">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => {
                    const name = (
                      document.getElementById("name") as HTMLInputElement
                    )?.value;
                    const phone = (
                      document.getElementById("phone") as HTMLInputElement
                    )?.value;
                    const goalSelect = document.getElementById(
                      "goal"
                    ) as HTMLSelectElement;
                    const goal =
                      goalSelect?.options[goalSelect.selectedIndex]?.text;
                    const message = (
                      document.getElementById("message") as HTMLTextAreaElement
                    )?.value;

                    const text = `Olá! Meu nome é ${name}.\nWhatsApp: ${phone}\nObjetivo: ${goal}\nMensagem: ${message}`;
                    const url = `https://wa.me/559591186625?text=${encodeURIComponent(
                      text
                    )}`;
                    window.open(url, "_blank");
                  }}
                >
                  {getButtonText()}
                </button>
              </div>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="flex flex-col gap-8">
            <div className="bg-red-600/10 p-8 rounded-2xl border-2 border-red-600/30 transition-all duration-300 hover:border-red-600 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/30">
              <h4 className="text-red-600 text-xl font-bold mb-4 flex items-center gap-2">
                📱 WhatsApp
              </h4>
              <p className="text-gray-300 leading-relaxed">
                (95) 9118-6625
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
                Curitiba, PR
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
