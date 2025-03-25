import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import AllPost from "../pages/AllPost";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import PostDetail from "../pages/PostDetail";
import PostByCategory from "../pages/PostCategory";

//img routes
import facebook from "../assets/social-media/facebook.svg";
import instagram from "../assets/social-media/instagram.svg";
import linkedin from "../assets/social-media/linkedin.svg";
import tiktok from "../assets/social-media/tik-tok.svg";
import twitter from "../assets/social-media/twitter.svg";
import whatsapp from "../assets/social-media/whatsapp.svg";
import youtube from "../assets/social-media/youtube.svg";
import hamburger from "../assets/hamburger.png";
import profileUser from "../assets/profile-user.png";

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

export const images: { [key: string]: string } = {
  facebook,
  instagram,
  linkedin,
  tiktok,
  twitter,
  whatsapp,
  youtube,
  hamburger,
  profileUser,
};
