import MainContent from "../Ui/MainContent";
import usePageTitle from "../hook/usePageTitle";

export default function Home() {
  usePageTitle();
  return (
    <>
      <MainContent />
    </>
  );
}
