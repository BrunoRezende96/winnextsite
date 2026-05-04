"use client";

import {
  Megaphone,
  Globe,
  ShoppingCart,
  LayoutTemplate,
  Share2,
  Store,
  Bot,
  Clock3,
  TabletSmartphone,
  Tv,
  MonitorSmartphone,
} from "lucide-react";



const Click = [clicked, setClicked] = useState(false);


const services = [
  {
    title: "Google Ads",
    subtitle: "Gestão de Tráfego Pago",
    description:
      "Campanhas estratégicas para aumentar vendas, leads e alcance da sua empresa.",
    icon: Megaphone,
    featured: false,
  },
  {
    title: "Meta Ads",
    subtitle: "Instagram e Facebook",
    description:
      "Anúncios profissionais com foco em conversão e crescimento da marca.",
    icon: Share2,
    featured: true,
  },
  {
    title: "E-commerce Ads",
    subtitle: "Escala para Lojas Virtuais",
    description:
      "Estratégias de tráfego para maximizar vendas e performance online.",
    icon: ShoppingCart,
    featured: false,
  },
  {
    title: "Página de Vendas",
    subtitle: "Alta Conversão",
    description:
      "Páginas modernas e profissionais desenvolvidas para gerar resultados.",
    icon: LayoutTemplate,
    featured: false,
  },
  {
    title: "Landing Pages",
    subtitle: "Captação de Leads",
    description:
      "Landing pages otimizadas para campanhas e lançamentos.",
    icon: Globe,
    featured: false,
  },
  {
    title: "Redes Sociais",
    subtitle: "Gestão Estratégica",
    description:
      "Conteúdo e posicionamento profissional para sua empresa crescer.",
    icon: MonitorSmartphone,
    featured: false,
  },
  {
    title: "E-commerce",
    subtitle: "Loja Virtual Completa",
    description:
      "Criação de lojas virtuais modernas, rápidas e prontas para vender.",
    icon: Store,
    featured: false,
  },
  {
    title: "Bot WhatsApp",
    subtitle: "Automação Inteligente",
    description:
      "Automatize atendimento, vendas e suporte da sua empresa.",
    icon: Bot,
    featured: false,
  },
  {
    title: "Ponto Empresarial",
    subtitle: "Gestão Corporativa",
    description:
      "Controle de ponto e jornada de trabalho para empresas.",
    icon: Clock3,
    featured: false,
  },

  // EM BREVE
  {
    title: "Totens",
    subtitle: "Autoatendimento",
    description:
      "Locação de totens modernos para atendimento e pedidos.",
    icon: TabletSmartphone,
    soon: true,
  },
  {
    title: "Kiosks",
    subtitle: "Fast-food e Franquias",
    description:
      "Tablets e kiosks de autoatendimento para restaurantes.",
    icon: TabletSmartphone,
    soon: true,
  },
  {
    title: "SPI + Senhas",
    subtitle: "Publicidade Interna",
    description:
      "Sistema de publicidade interna com gerenciamento de senhas.",
    icon: Tv,
    soon: true,
  },
];

export default function WinnextServices() {
  return (
    <section className="w-full bg-[#eef4f8] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#32c685] font-bold uppercase tracking-[4px]">
            Winnext Company
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-[#0098c0] mt-4">
            Soluções Premium
          </h2>

          <p className="text-gray-600 mt-5 text-lg max-w-3xl mx-auto">
            Tecnologia, marketing e automação para impulsionar o crescimento da
            sua empresa com soluções modernas e inteligentes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 cursor-pointer">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`
                  relative
                  rounded-2xl
                  bg-white
                  border
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                  overflow-hidden
                  flex
                  flex-col
                  ${
                    service.featured
                      ? "border-[#0098c0] scale-[1.03] shadow-xl"
                      : "border-gray-200"
                  }
                `}
              >
                {/* MAIS ESCOLHIDO */}
                {service.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-[#32c685] text-white text-xs font-bold px-4 py-2 rounded-b-xl tracking-wide">
                      MAIS ESCOLHIDO
                    </div>
                  </div>
                )}

                {/* EM BREVE */}
                {service.soon && (
                  <div className="absolute top-0 right-0 z-20">
                    <div className="bg-green-900 text-white text-xs font-bold px-4 py-2 rounded-bl-xl tracking-wide">
                      EM BREVE
                    </div>
                  </div>
                )}

                <div className="p-8 mt-4  flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`
                      w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6
                      transition-all duration-300
                      ${
                        service.featured
                          ? "bg-[#0098c0]"
                          : "bg-[#0098c0]/10"
                      }
                    `}
                  >
                    <Icon
                      className={`
                        w-8 h-8
                        ${
                          service.featured
                            ? "text-white"
                            : "text-[#0098c0]"
                        }
                      `}
                    />
                  </div>

                  {/* Title */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>

                    <p className="text-[#32c685] font-medium mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gray-200 mb-6" />

                  {/* Description */}
                  <div className="flex-1">
                    <p className="text-gray-600 text-center leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <button
                  onClick={()=> (setClicked(true))}
                    className={`
                      mt-8
                      w-full
                      rounded-full
                      py-3.5
                      font-semibold
                      transition-all
                      duration-300
                      border-2
                      ${
                        service.featured
                          ? "bg-[#0098c0] text-white border-[#0098c0] hover:bg-[#32c685] hover:border-[#32c685]"
                          : "border-[#0098c0] text-[#0098c0] hover:bg-[#0098c0] hover:text-white"
                      }
                    `}
                  >
                    FALAR COM UM CONSULTOR
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}