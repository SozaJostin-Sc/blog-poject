import { useParams } from "react-router-dom";
import { cardsData } from "./PostCard";
import Art from "./category/art/Art";
import Technology from "./category/tecnology/Technology";

export default function PostByCategory() {
  const { postCategory } = useParams<{ postCategory?: string }>();

  // Filtrar posts por categoría
  const categoryPosts = postCategory
    ? cardsData.filter(
        (post) => post.category.toLowerCase() === postCategory.toLowerCase()
      )
    : [];

  // Si no hay posts en la categoría, mostrar mensaje
  if (categoryPosts.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 text-xl">
        📂 No hay posts en la categoría "{postCategory}"
      </div>
    );
  }

  // Renderizar el componente según la categoría
  if (postCategory?.toLowerCase() === "arte") {
    return <Art />;
  }

  if (postCategory?.toLowerCase() === "tecnología") {
    return <Technology />;
  }

  return null;
}
