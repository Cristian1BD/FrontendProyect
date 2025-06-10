import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // React ya hace el escape
    },
    resources: {
      es: {
        translation: {
          nav: {
            home: "Inicio",
            features: "Características",
            benefits: "Beneficios",
            language: "Idioma",
            student: "Soy Estudiante",
            login: "Inicio de sesión"
          }
        }
      },
      en: {
        translation: {
          nav: {
            home: "Home",
            features: "Features",
            benefits: "Benefits",
            language: "Language",
            student: "I'm a Student",
            login: "Login"
          }
        }
      },
      fr: {
        translation: {
          nav: {
            home: "Accueil",
            features: "Caractéristiques",
            benefits: "Avantages",
            language: "Langue",
            student: "Je suis étudiant",
            login: "Connexion"
          }
        }
      }
    }
  });

export default i18n;
