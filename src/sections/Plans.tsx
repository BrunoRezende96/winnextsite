"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "R$1.000",
    period: "/mês",
    description:
      "Ideal para empresas que desejam iniciar sua presença digital com campanhas profissionais.",
    features: [
      "Gestão de Tráfego Meta Ads",
      "Gestão de Tráfego Google Ads",
      "Otimização de campanhas",
      "Relatórios de desempenho",
    ],
    featured: false,
  },
  {
    name: "Essential",
    price: "R$1.350",
    period: "/mês",
    description:
      "Perfeito para empresas que querem unir anúncios pagos e posicionamento nas redes sociais.",
    features: [
      "Gestão de Tráfego Meta Ads",
      "Gestão de Social Media",
      "Planejamento de conteúdo",
      "Estratégia de crescimento",
    ],
    featured: true,
  },
  {
    name: "Full Win",
    price: "R$1.800",
    period: "/mês",
    description:
      "A solução completa da Winnext para acelerar resultados e fortalecer sua marca.",
    features: [
      "Gestão de Tráfego Meta Ads",
      "Gestão de Tráfego Google Ads",
      "Gestão de Social Media",
      "Estratégia completa de marketing",
    ],
    featured: false,
  },
];

export default function PlansSection() {
  return (
    <section className="w-full bg-[#eef4f8] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-[#32c685] font-bold uppercase tracking-[4px]">
            Winnext Company
          </span>

          <h2 className="text-[#0098c0] text-4xl md:text-6xl font-black mt-4 leading-tight">
            Quer Ter o Melhor da Winnext,
            <br />
            investindo pouco?
          </h2>

          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            Então veja o que temos especialmente para você!
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`
                relative
                rounded-3xl
                border
                overflow-hidden
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                ${
                  plan.featured
                    ? "bg-[#0098c0] border-[#0098c0] scale-[1.03] shadow-2xl"
                    : "bg-white border-gray-200"
                }
              `}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              {/* Badge */}
              {plan.featured && (
                <div className="absolute top-0 right-0">
                  <div className="bg-[#32c685] text-white text-xs font-bold px-5 py-2 rounded-bl-2xl tracking-wide">
                    MAIS ESCOLHIDO
                  </div>
                </div>
              )}

              <div className="p-10 flex flex-col h-full">
                {/* Plan Name */}
                <div className="mb-8">
                  <h3
                    className={`text-3xl font-black ${
                      plan.featured
                        ? "text-white"
                        : "text-[#0098c0]"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  <p
                    className={`mt-3 leading-relaxed ${
                      plan.featured
                        ? "text-white/80"
                        : "text-gray-600"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-10">
                  <div className="flex items-end gap-2">
                    <span
                      className={`text-5xl font-black ${
                        plan.featured
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {plan.price}
                    </span>

                    <span
                      className={`mb-1 ${
                        plan.featured
                          ? "text-white/70"
                          : "text-gray-500"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 space-y-4 mb-10">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={`
                          min-w-[24px]
                          min-h-[24px]
                          rounded-full
                          flex
                          items-center
                          justify-center
                          ${
                            plan.featured
                              ? "bg-white/20"
                              : "bg-[#0098c0]/10"
                          }
                        `}
                      >
                        <Check
                          size={14}
                          className={
                            plan.featured
                              ? "text-white"
                              : "text-[#0098c0]"
                          }
                        />
                      </div>

                      <span
                        className={`${
                          plan.featured
                            ? "text-white/90"
                            : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className={`
                    w-full
                    rounded-full
                    py-4
                    font-bold
                    transition-all
                    duration-300
                    border-2
                    ${
                      plan.featured
                        ? "bg-white text-[#0098c0] border-white hover:bg-[#32c685] hover:text-white hover:border-[#32c685]"
                        : "border-[#0098c0] text-[#0098c0] hover:bg-[#0098c0] hover:text-white"
                    }
                  `}
                >
                  FALAR COM UM CONSULTOR
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}