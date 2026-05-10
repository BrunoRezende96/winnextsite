"use client";

import { useEffect, useState } from "react";
import WinnextButton from "../components/winnextButton";

const slides = [
  {
    title: "Rumo a sua próxima conquista",
    description:
      "Soluções modernas em marketing, tecnologia e automação para acelerar resultados empresariais.",
    image:
      "../src/assets/HomeSlide1.png",
  },
  {
    title: "Tecnologia que impulsiona empresas",
    description:
      "Estratégias digitais inteligentes para posicionar sua marca e gerar crescimento contínuo.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Automação, performance e inovação",
    description:
      "Transforme atendimento, vendas e experiência digital com soluções de alta performance.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 transition-all duration-1000
            ${current === index
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-105 z-0"
            }
          `}
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-r
                from-[#0098c0]/95
                via-[#0098c0]/75
                to-[#32c685]/40
              "
            />


          </div>

          {/* Content */}
          <div
            className="
              relative z-20
              max-w-7xl
              mx-auto
              h-full
              flex
              items-center
              px-6
              md:px-12
            "
          >
            <div className="max-w-3xl">
              {/* Badge */}
              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  backdrop-blur-md
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  uppercase
                  tracking-widest
                  text-white
                  mb-8
                "
              >
                Winnext Company
              </span>

              {/* Title */}
              <h1
                className="
                  text-5xl
                  md:text-7xl
                  font-black
                  leading-[0.95]
                  text-white
                "
              >
                {slide.title}
              </h1>

              {/* Description */}
              <p
                className="
                  mt-8
                  text-lg
                  md:text-xl
                  text-white/85
                  leading-relaxed
                  max-w-2xl
                "
              >
                {slide.description}
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-5 h-auto w-auto">
                <WinnextButton buttonType="small" />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          z-30
          flex
          gap-4
        "
      >
        {slides.map((_, index) => (
          <div
            key={index}
            className={`
              rounded-full
              transition-all
              duration-500
              ${current === index
                ? "w-14 h-3 bg-white"
                : "w-3 h-3 bg-white/50"
              }
            `}
          />
        ))}
      </div>

      {/* Extra Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#32c685]/20 blur-3xl rounded-full z-0" />

      {/* Custom Shape */}
      <style>{`
          .clip-path-slant {
            clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
      `}</style>
    </section>
  );
}