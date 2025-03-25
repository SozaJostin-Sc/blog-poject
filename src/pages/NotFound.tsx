import usePageTitle from "../hook/usePageTitle";

export default function NotFound() {
  usePageTitle();
  return (
    <>
      <div>404 Not found</div>
    </>
  );
}
