import { Link } from "react-router-dom";

export default function NavbarElements() {
  return (
    <div className="font-serif flex items-center justify-start gap-10 text-white p-2 mx-auto max-w-[940px]">
      <h1 className="text-[30px] font-bold">Lamar</h1>
      <NavbarElementsLinks className="hidden md:flex items-center justify-center gap-5" />
    </div>
  );
}

export function NavbarElementsLinks({ className }: { className: string }) {
  return (
    <div className={className}>
      <span>
        <Link to="/" className="text-white hover:text-gray-400">
          Home
        </Link>
      </span>
      <span>
        <Link to="/allpost" className="text-white hover:text-gray-400">
          All Post
        </Link>
      </span>
      <span>
        <Link to="/about" className="text-white hover:text-gray-400">
          About
        </Link>
      </span>
      <span>
        <Link to="/contact" className="text-white hover:text-gray-400">
          Contact
        </Link>
      </span>
    </div>
  );
}
