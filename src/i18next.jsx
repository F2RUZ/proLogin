import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import uzTranslations from "../public/locales/uz.json";
import ruTranslations from "../public/locales/ru.json";
import enTranslations from "../public/locales/en.json";

i18next
  .use(initReactI18next) // Faqat React uchun integratsiya
  .init({
    fallbackLng: "uz", // Standart til
    debug: true, // Debug uchun (loyihani yakunlashda o'chirib qo'yish mumkin)
    resources: {
      uz: { translation: uzTranslations },
      ru: { translation: ruTranslations },
      en: { translation: enTranslations },
    },
    interpolation: {
      escapeValue: false, // XSS xavfsizligi uchun escape qilish kerak emas (React bilan xavfsiz)
    },
  });

export default i18next;
