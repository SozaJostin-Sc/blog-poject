import { useParams } from "react-router-dom";
import { cardsData } from "./PostCard";
import Post from "../components/Post";

export default function PostDetail() {
  const { postId } = useParams<{ postId?: string }>();

  // Buscar el post por ID
  const post = postId ? cardsData.find((post) => post.id === postId) : null;

  if (!post) {
    return (
      <div className="text-center py-20 text-red-500 text-xl">
        ❌ Post no encontrado
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Post
        title={post.tittle}
        datetime={post.datetime}
        category={post.category}
        body={post.body}
      />
    </div>
  );
}
