import { Car, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-bgPrimary border-t border-none text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        {/* Grid 4 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Coluna 1 - Marca */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white rounded flex items-center justify-center">
                <Car size={18} className="text-black" />
              </div>

              <span className="font-bold text-xl">
                Auto<span className="text-[#8B0000]">Drive</span>
              </span>
            </div>

            <p className="text-white text-sm leading-relaxed">
              A empresa número 1 em soluções de alta performance, conectando empresas e clientes com tecnologia e eficiência.
            </p>
          </div>

          {/* Coluna 2 - Planos */}
          <div>
            <h4 className="font-bold mb-4 text-white">Planos</h4>

            <ul className="space-y-2 text-sm text-white">
              <li className="hover:text-white cursor-pointer">Starter</li>
              <li className="hover:text-white cursor-pointer">Básico</li>
              <li className="hover:text-white cursor-pointer">Amigo</li>
              <li className="hover:text-red-500 cursor-pointer">Super Amigo</li>
              <li className="hover:text-white cursor-pointer">Parceiro</li>
              <li className="hover:text-white cursor-pointer">VIP</li>
              <li className="hover:text-white cursor-pointer">Agência</li>
            </ul>
          </div>

          {/* Coluna 3 - Empresa */}
          <div>
            <h4 className="font-bold mb-4 text-white">Empresa</h4>

            <ul className="space-y-2 text-sm text-white">
              <li className="hover:text-white cursor-pointer">Sobre nós</li>
              <li className="hover:text-white cursor-pointer">Como funciona</li>
              <li className="hover:text-white cursor-pointer">Depoimentos</li>
              <li className="hover:text-white cursor-pointer">Contato</li>
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div>
            <h4 className="font-bold mb-4 text-white">Contato</h4>

            <div className="space-y-3 text-sm text-white">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-white" />
                suporte@autodrive.com
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} className="text-white" />
                (11) 9 8710-3956
              </div>
            </div>

            {/* Redes sociais (seguro, sem lucide) */}
            <div className="flex gap-4 mt-6 text-lg">
              <span className="cursor-pointer hover:text-red-500 transition">
                📸
              </span>
              <span className="cursor-pointer hover:text-red-500 transition">
                📘
              </span>
              <span className="cursor-pointer hover:text-red-500 transition">
                🐦
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white pt-6 flex flex-col md:flex-row justify-center items-center text-xs 11 98710-3956 gap-4">
          <p> Orgulhosamente desenvolvido por Winnext Company© 2023. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Linha vermelha glow */}
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#8B0000] to-transparent shadow-[0_0_10px_rgba(139,0,0,0.8)]" />
    </footer>
  );
}