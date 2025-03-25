import Button from "../components/Button";
import PostCard from "../pages/PostCard";

export default function MainContent() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-2 max-w-[940px] mx-auto gap-10 mt-10">
        <PostCard limit={5} />
        <Button
          title="More Posts -->"
          className="border-1 pt-2 pb-2 pr-4 pl-4  border-gray-300 text-black  hover:border-black mt-4"
          to="/allpost"
        />
      </div>
    </>
  );
}
