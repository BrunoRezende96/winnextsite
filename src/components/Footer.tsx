import {
  MonitorSmartphone,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0098c0] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-white
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >
                <MonitorSmartphone
                  size={24}
                  className="text-[#0098c0]"
                />
              </div>

              <div>
                <h3 className="text-2xl font-black">
                  Winnext
                </h3>

                <span className="text-[#32c685] font-semibold text-sm tracking-wide">
                  COMPANY
                </span>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed">
              Soluções modernas em tecnologia, automação, marketing
              digital e desenvolvimento para empresas que desejam crescer.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-bold text-xl mb-6">
              Serviços
            </h4>

            <ul className="space-y-3 text-white/80">
              <li className="hover:text-[#32c685] transition cursor-pointer">
                Google Ads
              </li>

              <li className="hover:text-[#32c685] transition cursor-pointer">
                Meta Ads
              </li>

              <li className="hover:text-[#32c685] transition cursor-pointer">
                Landing Pages
              </li>

              <li className="hover:text-[#32c685] transition cursor-pointer">
                E-commerce
              </li>

              <li className="hover:text-[#32c685] transition cursor-pointer">
                Automação WhatsApp
              </li>

              <li className="hover:text-[#32c685] transition cursor-pointer">
                Gestão de Redes Sociais
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold text-xl mb-6">
              Empresa
            </h4>

            <ul className="space-y-3 text-white/80">
              <li className="hover:text-[#32c685] transition cursor-pointer">
                Sobre Nós
              </li>

              <li className="hover:text-[#32c685] transition cursor-pointer">
                Soluções
              </li>

              <li className="hover:text-[#32c685] transition cursor-pointer">
                Depoimentos
              </li>

              <li className="hover:text-[#32c685] transition cursor-pointer">
                FAQ
              </li>

              <li className="hover:text-[#32c685] transition cursor-pointer">
                Contato
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-xl mb-6">
              Contato
            </h4>

            <div className="space-y-4 text-white/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail size={18} className="text-[#32c685]" />
                </div>

                <span>contato@winnextcompany.com</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone size={18} className="text-[#32c685]" />
                </div>

                <span>(11) 9 8710-3956</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-8">
              <button
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-[#32c685]
                  transition-all
                  duration-300
                  hover:scale-110
                "
              >
                <Instagram size={18} />
              </button>

              <button
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-[#32c685]
                  transition-all
                  duration-300
                  hover:scale-110
                "
              >
                <Facebook size={18} />
              </button>

              <button
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-[#32c685]
                  transition-all
                  duration-300
                  hover:scale-110
                "
              >
                <Linkedin size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-16
            pt-8
            border-t
            border-white/20
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          <p className="text-white/70 text-sm text-center md:text-left">
            © 2025 Winnext Company. Todos os direitos reservados.
          </p>

          <p className="text-[#32c685] text-sm font-medium">
            Desenvolvido pela Winnext Company
          </p>
        </div>
      </div>

      {/* Linha decorativa */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#32c685] to-transparent opacity-80" />
    </footer>
  );
}