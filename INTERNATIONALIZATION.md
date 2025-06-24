# Implementación de Internacionalización (i18n)

## Resumen

Se ha implementado un sistema completo de internacionalización para el sitio web de Pilar, permitiendo cambiar entre español, inglés y francés.

## Estructura de Archivos

```
src/
├── locales/
│   ├── es/
│   │   └── common.json          # Traducciones en español
│   ├── en/
│   │   └── common.json          # Traducciones en inglés
│   └── fr/
│       └── common.json          # Traducciones en francés
├── contexts/
│   └── LanguageContext.js       # Contexto para manejo de idioma
├── components/Layout/
│   └── LanguageSelector.jsx     # Componente selector de idioma
├── hooks/
│   └── useTranslations.js       # Hook personalizado para traducciones
├── utils/
│   └── i18n.js                  # Configuración de i18next
└── app/
    └── layout.js                # Layout principal con providers

public/
└── images/
    └── flags/                   # Imágenes de banderas
        ├── es.png
        ├── en.png
        └── fr.png
```

## Características Implementadas

### 1. Selector de Idioma
- **Ubicación**: Menú superior, junto al menú de usuario
- **Funcionalidad**: Dropdown con banderas y nombres de idiomas
- **Responsive**: Se adapta a dispositivos móviles
- **Persistencia**: Guarda la preferencia en localStorage

### 2. Traducciones
- **Idiomas**: Español (es), Inglés (en), Francés (fr)
- **Estructura**: Organizadas por secciones (navigation, auth, user, etc.)
- **Fallback**: Español como idioma por defecto

### 3. Contexto de Idioma
- **Estado Global**: Maneja el idioma actual en toda la aplicación
- **Sincronización**: Actualiza automáticamente todos los componentes
- **HTML Lang**: Actualiza el atributo lang del documento

## Uso

### En Componentes

```jsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('homepage.hero.title')}</h1>
      <p>{t('homepage.hero.description')}</p>
    </div>
  );
};
```

### Con Hook Personalizado

```jsx
import { useTranslations } from '@/hooks/useTranslations';

const MyComponent = () => {
  const { t, currentLanguage, changeLanguage } = useTranslations();
  
  return (
    <div>
      <p>Idioma actual: {currentLanguage}</p>
      <button onClick={() => changeLanguage('en')}>
        Cambiar a inglés
      </button>
    </div>
  );
};
```

### Con Contexto de Idioma

```jsx
import { useLanguage } from '@/contexts/LanguageContext';

const MyComponent = () => {
  const { currentLanguage, languages, changeLanguage } = useLanguage();
  
  return (
    <div>
      {languages.map(lang => (
        <button 
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
        >
          {lang.flag} {lang.name}
        </button>
      ))}
    </div>
  );
};
```

## Agregar Nuevas Traducciones

### 1. Agregar a los archivos JSON

```json
// src/locales/es/common.json
{
  "nuevaSeccion": {
    "titulo": "Nuevo Título",
    "descripcion": "Nueva descripción"
  }
}
```

### 2. Usar en componentes

```jsx
const { t } = useTranslation();
return <h1>{t('nuevaSeccion.titulo')}</h1>;
```

## Agregar Nuevo Idioma

### 1. Crear archivo de traducción

```bash
mkdir -p src/locales/pt
touch src/locales/pt/common.json
```

### 2. Actualizar configuración

```jsx
// src/utils/i18n.js
import ptCommon from '../locales/pt/common.json';

const resources = {
  // ... otros idiomas
  pt: {
    common: ptCommon
  }
};
```

### 3. Actualizar contexto

```jsx
// src/contexts/LanguageContext.js
const languages = [
  // ... otros idiomas
  {
    code: 'pt',
    name: 'Português',
    flag: '🇵🇹',
    flagImage: '/images/flags/pt.png'
  }
];
```

## Dependencias Instaladas

```json
{
  "i18next": "^23.7.16",
  "next-i18next": "^15.2.0",
  "react-i18next": "^13.5.0"
}
```

## Configuración de Next.js

El sistema está configurado para funcionar con Next.js 14 y App Router.

## Consideraciones de SEO

- El atributo `lang` del HTML se actualiza automáticamente
- Los metadatos pueden ser configurados por idioma
- URLs con prefijos de idioma pueden ser implementados

## Próximos Pasos

1. **Imágenes de Banderas**: Agregar las imágenes PNG de las banderas
2. **URLs Multilingües**: Implementar rutas con prefijos de idioma
3. **Metadatos Dinámicos**: Configurar metadatos específicos por idioma
4. **Contenido Dinámico**: Traducir contenido de la base de datos
5. **Testing**: Agregar pruebas para las traducciones

## Comandos de Instalación

```bash
# Instalar dependencias
npm install i18next next-i18next react-i18next

# Crear directorios necesarios
mkdir -p src/locales/{es,en,fr}
mkdir -p src/contexts
mkdir -p src/hooks
mkdir -p public/images/flags

# Descargar imágenes de banderas (opcional)
# Usar servicios como flagpedia.net o countryflags.io
``` 