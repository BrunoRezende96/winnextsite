"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CTAQuestions() {
  const [step, setStep] = useState(0);

  const [answers, setAnswers] = useState({
    nome: "",
    empresa: "",
    servico: "",
    possuiSite: "",
    investeMarketing: "",
    objetivo: "",
  });

  const slideAnimation = {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -80 },
    transition: { duration: 0.4 },
  };

  const nextStep = (key: keyof typeof answers, value: string) => {
    setAnswers((s) => ({ ...s, [key]: value }));
    setStep((s) => s + 1);
  };

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de solicitar uma consultoria com a Winnext Company.\n\n` +
      `• Nome: ${answers.nome}\n` +
      `• Empresa: ${answers.empresa}\n` +
      `• Serviço desejado: ${answers.servico}\n` +
      `• Possui site? ${answers.possuiSite}\n` +
      `• Já investe em marketing? ${answers.investeMarketing}\n` +
      `• Objetivo principal: ${answers.objetivo}`
  );

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/5511987103956?text=${whatsappMessage}`,
      "_blank"
    );
  };

  const buttonStyle =
    "w-full rounded-2xl bg-[#0098c0] hover:bg-[#32c685] text-white py-4 px-6 font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl";

  return (
    <section
      id="contact"
      className="w-full py-24 px-6 bg-[#eef4f8]"
    >
      <div className="max-w-3xl mx-auto">
        <div
          className="
            bg-white
            rounded-[32px]
            shadow-2xl
            border
            border-gray-200
            p-8 md:p-14
            overflow-hidden
          "
        >
          <AnimatePresence mode="wait">
            {/* STEP 0 */}
            {step === 0 && (
              <motion.div
                key="step0"
                {...slideAnimation}
                className="text-center"
              >
                <span className="text-[#32c685] font-bold uppercase tracking-[4px]">
                  Winnext Company
                </span>

                <h2 className="text-4xl md:text-5xl font-black text-[#0098c0] mt-5 leading-tight">
                  Vamos impulsionar
                  <br />
                  sua empresa?
                </h2>

                <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                  Responda algumas perguntas rápidas para que nossa equipe
                  prepare a melhor solução para o seu negócio.
                </p>

                <button
                  onClick={() => setStep(1)}
                  className="
                    mt-10
                    bg-[#0098c0]
                    hover:bg-[#32c685]
                    text-white
                    px-10
                    py-5
                    rounded-2xl
                    text-lg
                    font-bold
                    transition-all
                    duration-300
                    shadow-xl
                    hover:shadow-2xl
                    hover:-translate-y-1
                  "
                >
                  COMEÇAR AGORA
                </button>
              </motion.div>
            )}

            {/* STEP 1 */}
            {step === 1 && (
              <motion.div key="step1" {...slideAnimation}>
                <h2 className="text-3xl font-black text-[#0098c0] mb-8">
                  Qual é o seu nome?
                </h2>

                <input
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={answers.nome}
                  onChange={(e) =>
                    setAnswers((s) => ({
                      ...s,
                      nome: e.target.value,
                    }))
                  }
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                    focus:border-[#0098c0]
                    transition-all
                    mb-6
                  "
                />

                <button
                  disabled={answers.nome.trim().length < 3}
                  onClick={() => setStep(2)}
                  className={buttonStyle}
                >
                  CONTINUAR
                </button>
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div key="step2" {...slideAnimation}>
                <h2 className="text-3xl font-black text-[#0098c0] mb-8">
                  Qual é o nome da sua empresa?
                </h2>

                <input
                  type="text"
                  placeholder="Digite o nome da empresa"
                  value={answers.empresa}
                  onChange={(e) =>
                    setAnswers((s) => ({
                      ...s,
                      empresa: e.target.value,
                    }))
                  }
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                    focus:border-[#0098c0]
                    transition-all
                    mb-6
                  "
                />

                <button
                  disabled={answers.empresa.trim().length < 2}
                  onClick={() => setStep(3)}
                  className={buttonStyle}
                >
                  CONTINUAR
                </button>
              </motion.div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <motion.div key="step3" {...slideAnimation}>
                <h2 className="text-3xl font-black text-[#0098c0] mb-8">
                  Qual serviço você procura?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Google Ads",
                    "Meta Ads",
                    "Landing Page",
                    "E-commerce",
                    "Social Media",
                    "Automação WhatsApp",
                  ].map((service) => (
                    <button
                      key={service}
                      onClick={() =>
                        nextStep("servico", service)
                      }
                      className="
                        rounded-2xl
                        border-2
                        border-[#0098c0]
                        text-[#0098c0]
                        py-4
                        px-6
                        font-semibold
                        transition-all
                        duration-300
                        hover:bg-[#0098c0]
                        hover:text-white
                      "
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <motion.div key="step4" {...slideAnimation}>
                <h2 className="text-3xl font-black text-[#0098c0] mb-8">
                  Sua empresa já possui site?
                </h2>

                <div className="flex gap-4">
                  <button
                    onClick={() =>
                      nextStep("possuiSite", "Sim")
                    }
                    className={buttonStyle}
                  >
                    SIM
                  </button>

                  <button
                    onClick={() =>
                      nextStep("possuiSite", "Não")
                    }
                    className={buttonStyle}
                  >
                    NÃO
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 5 */}
            {step === 5 && (
              <motion.div key="step5" {...slideAnimation}>
                <h2 className="text-3xl font-black text-[#0098c0] mb-8">
                  Você já investe em marketing digital?
                </h2>

                <div className="flex gap-4">
                  <button
                    onClick={() =>
                      nextStep("investeMarketing", "Sim")
                    }
                    className={buttonStyle}
                  >
                    SIM
                  </button>

                  <button
                    onClick={() =>
                      nextStep("investeMarketing", "Não")
                    }
                    className={buttonStyle}
                  >
                    NÃO
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 6 */}
            {step === 6 && (
              <motion.div key="step6" {...slideAnimation}>
                <h2 className="text-3xl font-black text-[#0098c0] mb-8">
                  Qual é o principal objetivo da sua empresa?
                </h2>

                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Gerar mais vendas",
                    "Captar mais leads",
                    "Fortalecer a marca",
                    "Automatizar atendimento",
                  ].map((goal) => (
                    <button
                      key={goal}
                      onClick={() =>
                        nextStep("objetivo", goal)
                      }
                      className="
                        rounded-2xl
                        border-2
                        border-[#0098c0]
                        text-[#0098c0]
                        py-4
                        px-6
                        font-semibold
                        transition-all
                        duration-300
                        hover:bg-[#0098c0]
                        hover:text-white
                      "
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* FINAL */}
            {step === 7 && (
              <motion.div
                key="step7"
                {...slideAnimation}
                className="text-center"
              >
                <span className="text-[#32c685] font-bold uppercase tracking-[4px]">
                  Winnext Company
                </span>

                <h2 className="text-5xl font-black text-[#0098c0] mt-5">
                  Falta pouco!
                </h2>

                <p className="text-gray-600 mt-6 text-lg leading-relaxed">
                  Nossa equipe já possui informações suficientes para
                  entender sua necessidade.
                </p>

                <button
                  onClick={openWhatsApp}
                  className="
                    mt-10
                    bg-[#32c685]
                    hover:bg-[#0098c0]
                    text-white
                    px-10
                    py-5
                    rounded-2xl
                    text-lg
                    font-bold
                    transition-all
                    duration-300
                    shadow-xl
                    hover:shadow-2xl
                    hover:-translate-y-1
                  "
                >
                  FALAR COM UM CONSULTOR
                </button>

                {/* Summary */}
                <div
                  className="
                    mt-10
                    bg-[#eef4f8]
                    rounded-3xl
                    p-8
                    text-left
                    border
                    border-gray-200
                  "
                >
                  <h3 className="font-black text-[#0098c0] text-xl mb-5">
                    Resumo das respostas
                  </h3>

                  <ul className="space-y-3 text-gray-700">
                    <li>
                      • Nome: <strong>{answers.nome}</strong>
                    </li>

                    <li>
                      • Empresa: <strong>{answers.empresa}</strong>
                    </li>

                    <li>
                      • Serviço: <strong>{answers.servico}</strong>
                    </li>

                    <li>
                      • Possui site:{" "}
                      <strong>{answers.possuiSite}</strong>
                    </li>

                    <li>
                      • Investe em marketing:{" "}
                      <strong>{answers.investeMarketing}</strong>
                    </li>

                    <li>
                      • Objetivo:{" "}
                      <strong>{answers.objetivo}</strong>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}