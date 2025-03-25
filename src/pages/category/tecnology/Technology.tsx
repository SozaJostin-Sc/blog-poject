import PostCard from "../../PostCard";

export default function Technology() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-2 max-w-[940px] mx-auto gap-10 mt-10">
        <h1 className="font-sans text-4xl">Tecnología</h1>
        <hr />
        <PostCard category="Tecnología" />
      </div>
    </>
  );
}
