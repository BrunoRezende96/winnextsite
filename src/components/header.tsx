import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavMobile from "../models/navMobile";

export default function Header() {
  const [menu, setMenu] = useState(NavMobile.fechada());
  const location = useLocation();
  const navigate = useNavigate();

  function toggleMenu(): void {
    setMenu(menu.aberto ? NavMobile.fechada() : NavMobile.aberta());
  }

  function handleScroll(id: string): void {
    // HOME → TOPO DO SITE
    if (id === "top") {
      if (location.pathname !== "/") {
        navigate("/");
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // DEMAIS SEÇÕES
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  }

  return (
    <div className="sticky top-0 z-50 h-auto bg-bgPrimary flex justify-center items-center">
      <header className="container flex justify-between items-center DPad">

        {/* LOGO */}
        <div className="logo w-[120px] cursor-pointer hover:scale-[1.05] duration-300 transition-all">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src="winnextLogo.png" alt="logo" />
          </Link>
        </div>

        {/* NAV DESKTOP */}
        <nav className="w-[75%] relative items-center hidden lg:flex">
          <div className="text-white gap-6 h-6 flex absolute">
            <button className="hover:border-b-[1px] border-bgSecundary" onClick={() => handleScroll("top")}>Home</button>
            <button className="hover:border-b-[1px] border-bgSecundary" onClick={() => handleScroll("about")}>About Us</button>
            <button className="hover:border-b-[1px] border-bgSecundary" onClick={() => handleScroll("services")}>Services</button>
            <button className="hover:border-b-[1px] border-bgSecundary" onClick={() => handleScroll("how")}>How We Work</button>
            <button className="hover:border-b-[1px] border-bgSecundary" onClick={() => handleScroll("portfolio")}>Portfolio</button>
            <button className="hover:border-b-[1px] border-bgSecundary" onClick={() => handleScroll("contact")}>Contact Us</button>
          </div>
        </nav>

        {/* BOTÃO MOBILE */}
        <div className="cursor-pointer lg:hidden ml-3" onClick={toggleMenu}>
          {menu.icon}
        </div>

        {/* NAV MOBILE */}
        <aside
          className={`
            fixed top-14 right-0 h-full w-[40%] bg-bgSecundary text-white 
            flex flex-col items-center justify-center gap-12 
            transition-transform duration-500 ease-in-out
            ${menu.aberto ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <button onClick={() => { handleScroll("top"); toggleMenu(); }}>Home</button>
          <button onClick={() => { handleScroll("about"); toggleMenu(); }}>About Us</button>
          <button onClick={() => { handleScroll("services"); toggleMenu(); }}>Services</button>
          <button onClick={() => { handleScroll("how"); toggleMenu(); }}>How We Work</button>
          <button onClick={() => { handleScroll("portfolio"); toggleMenu(); }}>Portfolio</button>
          <button onClick={() => { handleScroll("contact"); toggleMenu(); }}>Contact Us</button>
        </aside>

      </header>
    </div>
  );
}
