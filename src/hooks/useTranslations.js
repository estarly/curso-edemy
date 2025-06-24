import { useLanguage } from '@/contexts/LanguageContext';

// Traducciones estáticas
const translations = {
  es: {
    navigation: {
      home: "Inicio",
      courses: "Cursos",
      about: "Acerca de",
      contact: "Contacto",
      blog: "Blog",
      events: "Eventos",
      instructors: "Instructores",
      pricing: "Precios",
      faq: "Preguntas Frecuentes"
    },
    homepage: {
      home: {
        courses: "Cursos",
        instructors: "Instructores", 
        students: "Estudiantes",
        viewMore: "Ver Más"
      }
    },
    auth: {
      login: "Iniciar Sesión",
      register: "Registrarse",
      logout: "Cerrar Sesión",
      profile: "Perfil",
      accountSettings: "Configuración de cuenta"
    },
    user: {
      dashboard: "Panel de Control",
      myCourses: "Mis Cursos",
      myLearning: "Mi Aprendizaje",
      byModule: "Por Módulo",
      assignments: "Asignaciones",
      wishlist: "Lista de Deseos",
      purchaseHistory: "Historial de Compras"
    },
    admin: {
      dashboard: "Dashboard Admin",
      courses: "Cursos",
      students: "Estudiantes",
      instructors: "Instructores",
      categories: "Categorías",
      modules: "Módulos",
      banners: "Banners"
    },
    common: {
      search: "Buscar",
      loading: "Cargando...",
      save: "Guardar",
      cancel: "Cancelar",
      edit: "Editar",
      delete: "Eliminar",
      view: "Ver",
      back: "Volver",
      next: "Siguiente",
      previous: "Anterior",
      submit: "Enviar",
      close: "Cerrar"
    }
  },
  en: {
    navigation: {
      home: "Home",
      courses: "Courses",
      about: "About",
      contact: "Contact",
      blog: "Blog",
      events: "Events",
      instructors: "Instructors",
      pricing: "Pricing",
      faq: "FAQ"
    },
    homepage: {
      home: {
        courses: "Courses",
        instructors: "Instructors",
        students: "Students", 
        viewMore: "View More"
      }
    },
    auth: {
      login: "Login",
      register: "Register",
      logout: "Logout",
      profile: "Profile",
      accountSettings: "Account Settings"
    },
    user: {
      dashboard: "Dashboard",
      myCourses: "My Courses",
      myLearning: "My Learning",
      byModule: "By Module",
      assignments: "Assignments",
      wishlist: "Wishlist",
      purchaseHistory: "Purchase History"
    },
    admin: {
      dashboard: "Admin Dashboard",
      courses: "Courses",
      students: "Students",
      instructors: "Instructors",
      categories: "Categories",
      modules: "Modules",
      banners: "Banners"
    },
    common: {
      search: "Search",
      loading: "Loading...",
      save: "Save",
      cancel: "Cancel",
      edit: "Edit",
      delete: "Delete",
      view: "View",
      back: "Back",
      next: "Next",
      previous: "Previous",
      submit: "Submit",
      close: "Close"
    }
  },
  fr: {
    navigation: {
      home: "Accueil",
      courses: "Cours",
      about: "À propos",
      contact: "Contact",
      blog: "Blog",
      events: "Événements",
      instructors: "Instructeurs",
      pricing: "Tarifs",
      faq: "FAQ"
    },
    homepage: {
      home: {
        courses: "Cours",
        instructors: "Instructeurs",
        students: "Étudiants",
        viewMore: "Voir Plus"
      }
    },
    auth: {
      login: "Connexion",
      register: "S'inscrire",
      logout: "Déconnexion",
      profile: "Profil",
      accountSettings: "Paramètres du compte"
    },
    user: {
      dashboard: "Tableau de bord",
      myCourses: "Mes Cours",
      myLearning: "Mon Apprentissage",
      byModule: "Par Module",
      assignments: "Devoirs",
      wishlist: "Liste de souhaits",
      purchaseHistory: "Historique des achats"
    },
    admin: {
      dashboard: "Tableau de bord Admin",
      courses: "Cours",
      students: "Étudiants",
      instructors: "Instructeurs",
      categories: "Catégories",
      modules: "Modules",
      banners: "Bannières"
    },
    common: {
      search: "Rechercher",
      loading: "Chargement...",
      save: "Enregistrer",
      cancel: "Annuler",
      edit: "Modifier",
      delete: "Supprimer",
      view: "Voir",
      back: "Retour",
      next: "Suivant",
      previous: "Précédent",
      submit: "Soumettre",
      close: "Fermer"
    }
  }
};

export const useTranslations = () => {
  const { currentLanguage, changeLanguage, isClient } = useLanguage();

  const t = (key) => {
    if (!isClient) return key; // Fallback al key si no estamos en cliente
    
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback a español si no encuentra la traducción
        value = translations.es;
        for (const fallbackKey of keys) {
          if (value && value[fallbackKey]) {
            value = value[fallbackKey];
          } else {
            return key; // Retorna la key si no encuentra traducción
          }
        }
        break;
      }
    }
    
    return value || key;
  };

  return {
    t,
    changeLanguage,
    currentLanguage,
    isClient
  };
}; 