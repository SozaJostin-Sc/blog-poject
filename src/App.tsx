import { Outlet } from "react-router-dom";
import Navbar from "./Ui/Navbar";
import Footer from "./Ui/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import usePageTitle from "./hook/usePageTitle";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  usePageTitle();
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
