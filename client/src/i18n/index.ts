import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './pt.json';
import en from './en.json';
import es from './es.json';
import fr from './fr.json';

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
    es: {translation: es},
    fr: {translation: fr},
  },
  lng: 'pt',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
