import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import { BsGraphUpArrow } from "react-icons/bs";
import { PiCubeTransparentLight } from "react-icons/pi";
import { VscGraph } from "react-icons/vsc";
import { IoDiamondOutline } from "react-icons/io5";

export default function Cards() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="container px-[10%] flex w-full h-auto z-10  ">
      <motion.div
        className="
          w-full h-auto flex flex-col gap-4 items-center
          sm:flex-row sm:gap-1
        "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}

      >
        {/* Card 1 */}
        <motion.div
          variants={cardVariants}
          className="
            w-[80%] h-auto shadow-md overflow-hidden bg-slate-50
            rounded-md p-4 flex flex-col gap-2 cursor-pointer


            sm:relative sm:top-[-50px]
          "
        >
          <div className="w-full flex justify-center">
            <BsGraphUpArrow color="#0098c0" size={25} />
          </div>

          <h2 className="w-full text-center font-bold" style={{ color: "#0098c0" }}>
            Eficiência
          </h2>

          <p className="w-full text-center text-xs" style={{ color: "#0098c0" }}>
            Transformamos compromisso em resultado, com foco e precisão para alcançar o sucesso.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          className="w-[80%] h-auto shadow-md overflow-hidden bg-slate-50 rounded-md p-4 flex flex-col gap-2 cursor-pointer"
        >
          <div className="w-full flex justify-center">
            <PiCubeTransparentLight color="#0098c0" size={40} />
          </div>

          <h2 className="w-full text-center font-bold" style={{ color: "#0098c0" }}>
            Transparência
          </h2>

          <p className="w-full text-center text-xs" style={{ color: "#0098c0" }}>
            Agimos com clareza e confiança, fortalecendo parcerias duradouras.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardVariants}
          className="
            w-[80%] h-auto shadow-md overflow-hidden bg-slate-50 cursor-pointer
            rounded-md p-4 flex flex-col gap-2
            sm:relative sm:top-[-50px]
          "
        >
          <div className="w-full flex justify-center">
            <VscGraph color="#0098c0" size={30} />
          </div>

          <h2 className="w-full text-center font-bold" style={{ color: "#0098c0" }}>
            Desempenho
          </h2>

          <p className="w-full text-center text-xs" style={{ color: "#0098c0" }}>
            Entregamos resultados reais com agilidade, foco e excelência.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          variants={cardVariants}
          className="w-[80%] h-auto shadow-md overflow-hidden bg-slate-50 rounded-md p-4 flex flex-col gap-2 cursor-pointer"
        >
          <div className="w-full flex justify-center">
            <IoDiamondOutline color="#0098c0" size={30} />
          </div>

          <h2 className="w-full text-center font-bold" style={{ color: "#0098c0" }}>
            Entrega de valor
          </h2>

          <p className="w-full text-center text-xs" style={{ color: "#0098c0" }}>
            Transformamos esforço em resultados que fazem a diferença para você.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
