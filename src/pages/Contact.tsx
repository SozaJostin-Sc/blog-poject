import { useState } from "react";
import Presentation from "../components/Presentation";
import usePageTitle from "../hook/usePageTitle";

export default function Contact() {
  usePageTitle();
  // Estado para manejar los valores del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Manejar cambios en los inputs
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Limpiar todos los campos
  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos
    console.log("Formulario enviado:", formData);
    // Opcional: limpiar después de enviar
    // handleClear();
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8">
      {/* Sección de Formulario */}
      <div className="flex-1 order-2 lg:order-1">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
          Get in touch
        </h2>
        <p className="text-gray-600 mb-4 md:mb-6">
          Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam
          porta sem malesuada magna mollis euismod. Etiam porta sem malesuada
          magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem
          lacinia quam venenatis vestibulum.
        </p>

        {/* Formulario */}
        <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold mb-1 text-sm md:text-base">
              NAME
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full border p-2 md:p-3 rounded-md text-sm md:text-base"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm md:text-base">
              EMAIL ADDRESS
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full border p-2 md:p-3 rounded-md text-sm md:text-base"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1 text-sm md:text-base">
              MESSAGE
            </label>
            <textarea
              name="message"
              placeholder="Enter your message"
              className="w-full border p-2 md:p-3 rounded-md h-24 md:h-32 resize-none text-sm md:text-base"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleClear}
              type="submit"
              className="px-4 py-2 md:px-6 md:py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition text-sm md:text-base"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Componente Presentation - se mostrará primero en móviles */}
      <div className="order-1 lg:order-2">
        <Presentation />
      </div>
    </div>
  );
}
