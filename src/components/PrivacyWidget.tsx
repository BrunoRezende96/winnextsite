import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, X, Check } from "lucide-react";

const PrivacyWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("privacy-accepted");

    if (!accepted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setIsAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("privacy-accepted", "true");
    setIsAccepted(true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (isAccepted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="
            fixed
            bottom-6
            left-6
            z-50
            w-[360px]
            max-w-[90vw]
            bg-white
            rounded-3xl
            shadow-2xl
            border
            border-gray-200
            overflow-hidden
          "
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 22,
          }}
        >
          {/* Header */}
          <div
            className="
              bg-[#0098c0]
              px-5
              py-4
              flex
              items-center
              justify-between
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-white/15
                  flex
                  items-center
                  justify-center
                "
              >
                <Shield className="w-5 h-5 text-white" />
              </div>

              <div>
                <h3 className="font-bold text-white">
                  Política de Privacidade
                </h3>

                <p className="text-white/70 text-xs">
                  Winnext Company
                </p>
              </div>
            </div>

            <button
              onClick={handleDecline}
              className="
                w-9
                h-9
                rounded-full
                flex
                items-center
                justify-center
                text-white/80
                hover:text-white
                hover:bg-white/10
                transition-all
              "
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-gray-600 leading-relaxed text-sm">
              Utilizamos cookies e tecnologias semelhantes para
              melhorar sua experiência, personalizar conteúdos e
              otimizar nossos serviços.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm mt-3">
              Ao continuar navegando em nosso site, você concorda
              com nossa política de privacidade e utilização de
              dados.
            </p>

            {/* Buttons */}
            <div className="flex gap-3 mt-6">
              <motion.button
                onClick={handleAccept}
                className="
                  flex-1
                  bg-[#32c685]
                  hover:bg-[#0098c0]
                  text-white
                  py-3
                  rounded-2xl
                  font-semibold
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  gap-2
                  shadow-lg
                "
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Check className="w-4 h-4" />
                Aceitar
              </motion.button>

              <motion.button
                onClick={handleDecline}
                className="
                  flex-1
                  bg-gray-100
                  hover:bg-gray-200
                  text-gray-700
                  py-3
                  rounded-2xl
                  font-semibold
                  transition-all
                  duration-300
                "
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Recusar
              </motion.button>
            </div>

            {/* Footer */}
            <div className="mt-5 text-center">
              <a
                href="#"
                className="
                  text-[#0098c0]
                  text-sm
                  font-medium
                  hover:text-[#32c685]
                  transition-colors
                "
              >
                Saiba mais sobre nossa política
              </a>
            </div>
          </div>

          {/* Glow line */}
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#32c685] to-transparent opacity-80" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyWidget;