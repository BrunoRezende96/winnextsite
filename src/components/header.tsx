
import { useState } from "react"
import { Link } from "react-router-dom"
import NavMobile from "../models/navMobile";


export default function Header() {

    const [menu, setMenu] = useState(NavMobile.fechada())

    function toggleMenu() {
        setMenu(menu.aberto ? NavMobile.fechada() : NavMobile.aberta())
    }

    return (
        <div className="sticky top-0 z-50 h-14 bg-bgPrimary flex justify-center items-center" >
            <header className="container flex justify-between items-center DPad" >

                <div className="logo w-[150px] cursor-pointer hover:scale-[1.05] duration-300 transition-all" >
                    <Link to="/">
                        <img src="winnextLogo.png" alt="logo" />
                    </Link>
                </div>


                <nav className="w-[75%] relative items-center md:p-0 hidden bg-orange-400 lg:flex" >
                    <div className="text-white gap-6 h-6 hidden md:flex absolute" >
                        <Link to="/" className="hover:border-b hover:border-b-bgThird " >Home</Link>
                        <Link to="/about-us" className="hover:border-b hover:border-b-bgThird " >About Us</Link>
                        <Link to="/services" className="hover:border-b hover:border-b-bgThird " >Services</Link>
                        <Link to="/how-we-work" className="hover:border-b hover:border-b-bgThird  ">How We Work</Link>
                        <Link to="/portfolio" className="hover:border-b hover:border-b-bgThird " >Portfolio</Link>
                        <Link to="/contact-us" className="hover:border-b hover:border-b-bgThird " >Contact Us</Link>
                    </div>
                </nav>

                <div className="cursor-pointer lg:hidden ml-3" onClick={toggleMenu} >
                    {menu.icon}
                </div>

                {/* Navbar Lateral Mobile */}
                <aside
                    className={`
            fixed top-14 right-0 h-full w-[40%] bg-bgSecundary text-white 
            flex flex-col items-center justify-center gap-12 
            transition-transform duration-500 ease-in-out
            ${menu.aberto ? "translate-x-0" : "translate-x-full"}
          `}
                >
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                    <Link to="/about-us" onClick={toggleMenu}>About Us</Link>
                    <Link to="/services" onClick={toggleMenu}>Services</Link>
                    <Link to="/how-we-work" onClick={toggleMenu}>How We Work</Link>
                    <Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
                    <Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link>
                </aside>


            </header>
        </div>
    )
}