import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import AllPost from "../pages/AllPost";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import PostDetail from "../pages/PostDetail";
import PostByCategory from "../pages/PostCategory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "allpost", element: <AllPost /> },
      { path: "contact", element: <Contact /> },
      // Rutas dinámicas para posts
      { path: "posts/:postId", element: <PostDetail /> },
      { path: "post/:postCategory", element: <PostByCategory /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
