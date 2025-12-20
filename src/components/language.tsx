import { useState } from "react";

export type Language = "pt" | "en";

export function Language() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language") as Language | null;
    return saved ?? "en"; // idioma padrão FIXO
  });

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return { language, changeLanguage };
}
