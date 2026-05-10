import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quais serviços a Winnext Company oferece?",
    answer:
      "A Winnext Company oferece soluções em tráfego pago, desenvolvimento web, automação para WhatsApp, gestão de redes sociais, e-commerce, landing pages, sistemas empresariais e soluções de autoatendimento.",
  },
  {
    question: "Vocês trabalham com Google Ads e Meta Ads?",
    answer:
      "Sim. Desenvolvemos campanhas estratégicas no Google Ads, Facebook Ads e Instagram Ads com foco em geração de leads, vendas e fortalecimento de marca.",
  },
  {
    question: "A Winnext cria lojas virtuais?",
    answer:
      "Sim. Desenvolvemos e-commerces modernos, rápidos e responsivos, preparados para alta performance e crescimento do seu negócio.",
  },
  {
    question: "Vocês desenvolvem landing pages?",
    answer:
      "Sim. Criamos landing pages profissionais e otimizadas para conversão, ideais para campanhas, lançamentos e captação de leads.",
  },
  {
    question: "O bot para WhatsApp funciona automaticamente?",
    answer:
      "Sim. Os bots automatizam atendimento, respostas, captação de clientes e processos comerciais de forma inteligente e personalizada.",
  },
  {
    question: "A Winnext faz gestão de redes sociais?",
    answer:
      "Sim. Realizamos planejamento, posicionamento estratégico, identidade visual e gestão profissional das redes sociais da sua empresa.",
  },
  {
    question: "O sistema de ponto empresarial atende empresas de qualquer porte?",
    answer:
      "Sim. Nossa solução de gestão de ponto empresarial pode ser adaptada para pequenas, médias e grandes empresas.",
  },
  {
    question: "Como funciona a locação de totens de autoatendimento?",
    answer:
      "A Winnext disponibiliza soluções modernas em totens de autoatendimento para empresas, eventos, restaurantes e estabelecimentos comerciais.",
  },
  {
    question: "O que são os kiosks de autoatendimento?",
    answer:
      "São tablets e terminais inteligentes utilizados para pedidos e atendimento automático em restaurantes, fast-foods e franquias.",
  },
  {
    question: "O sistema SPI + Senhas serve para quais empresas?",
    answer:
      "O sistema é ideal para clínicas, recepções, empresas e estabelecimentos que desejam organizar filas e exibir publicidade interna simultaneamente.",
  },
  {
    question: "Os serviços da Winnext podem ser personalizados?",
    answer:
      "Sim. Desenvolvemos soluções sob medida conforme as necessidades e objetivos de cada cliente.",
  },
  {
    question: "Como posso contratar um serviço?",
    answer:
      "Basta entrar em contato com nossa equipe através do botão 'FALAR COM UM CONSULTOR' para receber atendimento personalizado.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-[#eef4f8]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#32c685] font-bold uppercase tracking-[4px]">
            Winnext Company
          </span>

          <h2 className="text-[#0098c0] text-4xl md:text-5xl font-black mt-4">
            Dúvidas Frequentes
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Tire suas dúvidas sobre nossos serviços, soluções e tecnologias.
          </p>
        </div>

        {/* FAQ */}
        <div className="flex flex-col gap-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`
                  rounded-2xl
                  bg-white
                  border
                  overflow-hidden
                  transition-all
                  duration-300
                  shadow-sm
                  hover:shadow-xl
                  ${
                    isOpen
                      ? "border-[#0098c0]"
                      : "border-gray-200"
                  }
                `}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    text-left
                    px-6
                    py-5
                    group
                  "
                >
                  <span
                    className={`
                      font-semibold
                      text-lg
                      transition-colors
                      duration-300
                      ${
                        isOpen
                          ? "text-[#0098c0]"
                          : "text-gray-800"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  <div
                    className={`
                      min-w-[42px]
                      min-h-[42px]
                      rounded-full
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "bg-[#0098c0]"
                          : "bg-[#0098c0]/10"
                      }
                    `}
                  >
                    <ChevronDown
                      className={`
                        transition-transform
                        duration-300
                        ${
                          isOpen
                            ? "rotate-180 text-white"
                            : "text-[#0098c0]"
                        }
                      `}
                    />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`
                    transition-all
                    duration-300
                    overflow-hidden
                    ${
                      isOpen
                        ? "max-h-60 opacity-100 pb-6"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div className="px-6">
                    <div className="w-full h-px bg-gray-200 mb-5" />

                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}