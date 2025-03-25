import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Mapeo de rutas a títulos
const routeTitles: Record<string, string> = {
  "/": "Inicio - Lamar",
  "/about": "Acerca de - Lamar",
  "/allpost": "Todos los Posts - Lamar",
  "/contact": "Contacto - Lamar",
  // Puedes agregar patrones para rutas dinámicas
  "/posts/": "Detalle del Post - Lamar",
  "/post/": "Posts por Categoría - Lamar",
};

export default function usePageTitle(defaultTitle: string = "Lamar") {
  const location = useLocation();

  useEffect(() => {
    // Buscar título exacto
    const exactTitle = routeTitles[location.pathname];

    // Si no hay título exacto, buscar coincidencia parcial para rutas dinámicas
    const dynamicTitle = Object.keys(routeTitles).find(
      (key) => key !== "/" && location.pathname.startsWith(key)
    );

    const title =
      exactTitle ||
      (dynamicTitle ? routeTitles[dynamicTitle] : null) ||
      `${defaultTitle} - Lamar`;

    document.title = title;
  }, [location.pathname, defaultTitle]);
}
