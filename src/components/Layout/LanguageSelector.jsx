"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector = () => {
  const { currentLanguage, languages, changeLanguage, getCurrentLanguageInfo, isClient } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLangInfo = getCurrentLanguageInfo();

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (languageCode) => {
    changeLanguage(languageCode);
    setIsOpen(false);
  };

  // No renderizar hasta que estemos en el cliente
  if (!isClient) {
    return (
      <div className="option-item">
        <div className="language-dropdown">
          <button className="btn btn-link dropdown-toggle d-flex align-items-center" disabled>
            {/*<div className="language-flag me-2">
              <span className="flag-emoji">🇪🇸</span>
            </div>*/}
            <span className="language-name d-none d-md-inline">Español</span>
            {/*<i className="bx bx-chevron-down ms-1"></i>*/}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="option-item" ref={dropdownRef}>
      <div className="dropdown language-dropdown">
        <button
          className="btn btn-link dropdown-toggle d-flex align-items-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <div className="language-flag me-2">
            {currentLangInfo?.flagImage && (
              <Image
                src={currentLangInfo.flagImage}
                alt={currentLangInfo.name}
                width={20}
                height={15}
                className="flag-icon"
              />
            ) }
          </div>
          {/*<span className="language-name d-none d-md-inline">
            {currentLangInfo?.name}
          </span>
          <i className="bx bx-chevron-down ms-1"></i>
          */}
        </button>

        <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
          {languages.map((language) => (
            <li key={language.code}>
              <button
                className={`dropdown-item d-flex align-items-center ${
                  currentLanguage === language.code ? 'active' : ''
                }`}
                onClick={() => handleLanguageChange(language.code)}
              >
                <div className="language-flag">
                  {language.flagImage && (
                    <Image
                      src={language.flagImage}
                      alt={language.name}
                      width={20}
                      height={15}
                      className="flag-icon"
                    />
                  ) }
                </div>
                {/*<span className="language-name">{language.name}</span>
                {currentLanguage === language.code && (
                  <i className="bx bx-check ms-auto"></i>
                )}*/}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .language-dropdown {
          position: relative;
        }
        
        .language-dropdown .btn-link {
          color: #333;
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 6px;
          transition: all 0.3s ease;
        }
        
        .language-dropdown .btn-link:hover {
          background-color: #f8f9fa;
          color: #fe4a55;
        }
        
        .language-dropdown .btn-link:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .language-flag {
          display: flex;
          align-items: center;
        }
        
        .flag-icon {
          border-radius: 2px;
          object-fit: cover;
        }
        
        .flag-emoji {
          font-size: 16px;
        }
        
        .language-name {
          font-size: 14px;
          font-weight: 500;
        }
        
        .dropdown-menu {
          min-width: 0%;
          border: 1px solid #e9ecef;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 8px 0;
        }
        
        .dropdown-item {
          padding: 10px 16px;
          border: none;
          background: transparent;
          width: 100%;
          text-align: left;
          transition: all 0.2s ease;
        }
        
        .dropdown-item:hover {
          background-color: #f8f9fa;
          color: #fe4a55;
        }
        
        .dropdown-item.active {
          background-color: #fe4a55;
          color: white;
        }
        
        .dropdown-item.active:hover {
          background-color: #e63946;
        }
        
        @media (max-width: 768px) {
          .language-name {
            display: none !important;
          }
          
          .language-dropdown .btn-link {
            padding: 6px 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default LanguageSelector; 