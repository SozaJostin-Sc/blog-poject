import Button from "../components/Button";
import Presentation from "../components/Presentation";
import usePageTitle from "../hook/usePageTitle";

export default function About() {
  usePageTitle();
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8">
      {/* Sección Principal */}
      <div className="flex-1 order-2 lg:order-1">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
          About me
        </h2>
        <p className="text-gray-600 mb-4 md:mb-6">
          The rich text element allows you to create and format headings,
          paragraphs, blockquotes, images, and video all in one place instead of
          having to add and format them individually. Just double-click and
          easily create content.
        </p>

        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
          Something else here
        </h3>
        <p className="text-gray-600 mb-3 md:mb-4">
          Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue
          laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus
          porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum id ligula porta felis euismod semper.
        </p>

        <h4 className="font-semibold mb-1 md:mb-2">Something else here</h4>
        <p className="text-gray-600 mb-4 md:mb-6">
          Vestibulum id ligula porta felis euismod semper. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec id elit non mi porta gravida at eget metus. Donec ullamcorper
          nulla non metus auctor fringilla.
        </p>

        <Button
          to="/contact"
          title="Get in touch"
          className="px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition"
        />
      </div>

      {/* Componente Presentation - se mostrará primero en móviles */}
      <div className="order-2 lg:order-1">
        <Presentation />
      </div>
    </div>
  );
}
