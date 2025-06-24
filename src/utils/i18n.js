import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar archivos de traducción
import esCommon from '../locales/es/common.json';
import enCommon from '../locales/en/common.json';

const resources = {
  es: {
    common: esCommon
  },
  en: {
    common: enCommon
  }
};

// Solo inicializar i18n en el cliente
if (typeof window !== 'undefined') {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'es', // idioma por defecto
      fallbackLng: 'es',
      debug: process.env.NODE_ENV === 'development',
      
      interpolation: {
        escapeValue: false, // React ya escapa por defecto
      },
      
      defaultNS: 'common',
      ns: ['common'],
      
      react: {
        useSuspense: false,
      },
    });
}

export default i18n; 