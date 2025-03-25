import Button from "./Button";
import { Link } from "react-router-dom";
interface CardProps {
  tittle: string;
  datetime: string;
  category: string;
  body: string;
  buttonRoute: string;
  link: string;
}

export default function Card({
  tittle,
  datetime,
  category,
  body,
  buttonRoute,
  link,
}: CardProps) {
  return (
    <>
      <div className="flex items-start justify-center gap-2 flex-col border-b-1 border-gray-400 pb-10">
        <h1 className="font-bold text-black hover:text-gray-500 text-3xl">
          {tittle}
        </h1>
        <div>
          <p className="text-gray-400">
            {datetime} |{" "}
            <span className="hover:text-black cursor-pointer">
              <Link to={link}>{category}</Link>
            </span>
          </p>
        </div>
        <p>{body}</p>
        <Button
          title="Continue reading -->"
          className="p-2 rounded-[15px] border-gray-300 text-black border-1 hover:border-black mt-2"
          to={buttonRoute}
        />
      </div>
    </>
  );
}
