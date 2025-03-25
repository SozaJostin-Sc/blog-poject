import { useState, useEffect } from "react";
import Button from "../components/Button";
import NavbarElements, {
  NavbarElementsLinks,
} from "../components/NavbarElements";

export default function Navbar() {
  const [showElements, setShowElements] = useState(false);

  const handleButtonClick = () => {
    setShowElements(!showElements);
  };

  // Efecto para cerrar el menú al cambiar a pantalla grande
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        setShowElements(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="w-full h-[85px] bg-[#333] p-2 relative">
        <NavbarElements />
        <div className="absolute top-0 right-0 mt-5 mr-4">
          <Button
            onClick={handleButtonClick}
            className="border-2 rounded-lg h-10 w-10 p-2 hover:bg-gray-400 md:hidden flex items-center justify-center"
          />
        </div>

        {showElements && (
          <div className="absolute top-full left-0 w-full bg-[#333] z-50 md:hidden">
            <NavbarElementsLinks className="flex flex-col items-center justify-center gap-3 p-4 text-white" />
          </div>
        )}
      </nav>
    </>
  );
}
