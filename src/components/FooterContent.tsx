import { images } from "../routes/routes";

export default function FooterContent() {
  return (
    <>
      <section className="flex gap-2 mx-auto max-w-[940px] pt-2 pb-2 justify-start items-center mt-5">
        <img src={images.facebook} alt="facebook" className="w-5 h-5 " />
        <img src={images.twitter} alt="twitter" className="w-5 h-5" />
        <img src={images.tiktok} alt="tiktok" className="w-5 h-5" />
        <img src={images.instagram} alt="instagram" className="w-5 h-5" />
        <img src={images.whatsapp} alt="whatsapp" className="w-5 h-5" />
        <img src={images.youtube} alt="youtube" className="w-5 h-5" />
        <img src={images.linkedin} alt="linkedin" className="w-5 h-5" />
      </section>
    </>
  );
}
