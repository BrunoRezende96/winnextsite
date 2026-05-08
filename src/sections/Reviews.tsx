import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "Maria Silva",
      rating: 5,
      comment:
        "Excelente trabalho! A equipe da Winnext superou todas as expectativas da nossa empresa.",
      date: "2 meses atrás",
    },
    {
      id: 2,
      name: "João Santos",
      rating: 5,
      comment:
        "Profissionais extremamente competentes. Nosso tráfego pago teve um crescimento impressionante.",
      date: "1 mês atrás",
    },
    {
      id: 3,
      name: "Ana Costa",
      rating: 5,
      comment:
        "O atendimento foi impecável e o desenvolvimento da landing page ficou incrível.",
      date: "3 semanas atrás",
    },
    {
      id: 4,
      name: "Carlos Oliveira",
      rating: 5,
      comment:
        "Empresa séria, organizada e muito profissional. Recomendo fortemente.",
      date: "4 meses atrás",
    },
    {
      id: 5,
      name: "Fernanda Lima",
      rating: 5,
      comment:
        "A automação para WhatsApp facilitou completamente nosso atendimento.",
      date: "5 meses atrás",
    },
    {
      id: 6,
      name: "Roberto Mendes",
      rating: 5,
      comment:
        "Equipe altamente qualificada. O projeto foi entregue acima do esperado.",
      date: "1 ano atrás",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? "text-[#32c685] fill-[#32c685]"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-24 bg-white px-6 md:px-[8%] overflow-hidden">
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

          <h2 className="text-4xl md:text-5xl font-black text-[#0098c0] mt-4">
            O que nossos clientes dizem
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-5 leading-relaxed">
            A satisfação dos nossos clientes é o que impulsiona a Winnext
            Company a entregar soluções modernas, inteligentes e eficientes.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="
                group
                bg-[#eef4f8]
                border
                border-gray-200
                rounded-3xl
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                hover:border-[#0098c0]
              "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              {/* Stars */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1">
                  {renderStars(review.rating)}
                </div>

                <span className="text-sm text-gray-500">
                  {review.date}
                </span>
              </div>

              {/* Comment */}
              <p className="text-gray-700 leading-relaxed mb-8">
                "{review.comment}"
              </p>

              {/* User */}
              <div className="flex items-center">
                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-[#0098c0]
                    text-white
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-lg
                    mr-4
                  "
                >
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    {review.name}
                  </h4>

                  <p className="text-sm text-[#32c685] font-medium">
                    Cliente verificado
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating Summary */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div
            className="
              bg-[#eef4f8]
              border
              border-[#0098c0]/20
              rounded-2xl
              px-8
              py-5
              shadow-lg
              flex
              items-center
              gap-4
            "
          >
            <div className="flex gap-1">
              {renderStars(5)}
            </div>

            <span className="text-lg font-bold text-[#0098c0]">
              4.9/5 • Baseado em avaliações reais
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;