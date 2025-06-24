"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe ser usado dentro de un LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const [isClient, setIsClient] = useState(false);

  // Configuración de idiomas disponibles
  const languages = [
    {
      code: 'es',
      name: 'Español',
      flag: '🇪🇸',
      flagImage: '/images/flags/es.webp'
    },
    {
      code: 'en',
      name: 'English',
      flag: '🇺🇸',
      flagImage: '/images/flags/us.webp'
    }
  ];

  // Verificar que estamos en el cliente
  useEffect(() => {
    setIsClient(true);
    
    // Cargar idioma desde localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && languages.find(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Función para cambiar idioma
  const changeLanguage = (languageCode) => {
    if (languages.find(lang => lang.code === languageCode)) {
      setCurrentLanguage(languageCode);
      localStorage.setItem('preferredLanguage', languageCode);
      
      // Actualizar el atributo lang del HTML
      if (typeof document !== 'undefined') {
        document.documentElement.lang = languageCode;
      }
    }
  };

  // Obtener información del idioma actual
  const getCurrentLanguageInfo = () => {
    return languages.find(lang => lang.code === currentLanguage);
  };

  const value = {
    currentLanguage,
    languages,
    changeLanguage,
    getCurrentLanguageInfo,
    isClient
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 