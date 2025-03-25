import { Link } from "react-router-dom";

interface ButtonProps {
  onClick?: () => void;
  title?: string;
  className?: string;
  to?: string;
  imageSrc?: string;
  altText?: string;
}

export default function Button({
  onClick,
  title,
  className = "",
  to,
  imageSrc,
  altText = "button image",
}: ButtonProps) {
  if (to) {
    return (
      <Link to={to} className={`inline-block ${className}`}>
        {imageSrc ? (
          <img src={imageSrc} alt={altText} className="w-6 h-6" />
        ) : (
          <span>{title}</span>
        )}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {imageSrc ? (
        <img src={imageSrc} alt={altText} className="w-6 h-6" />
      ) : (
        title
      )}
    </button>
  );
}
