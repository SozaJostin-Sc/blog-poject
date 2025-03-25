interface PostProps {
  title: string;
  datetime: string;
  category: string;
  body: string;
}

export default function Post({ title, datetime, category, body }: PostProps) {
  return (
    <>
      <h1>{title}</h1>
      <p>
        {datetime} | <span className="hover:text-gray-400">{category}</span>
      </p>
      <hr className="border-gray-300 my-4" />
      <p>{body}</p>
    </>
  );
}
