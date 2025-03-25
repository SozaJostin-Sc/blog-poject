export default function Presentation() {
  return (
    <>
      <div className="w-80 p-6 border rounded-lg shadow-sm">
        <img
          src="../public/profile-user.png"
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h3 className="text-lg font-semibold text-center">Jonny Johnson</h3>
        <p className="text-gray-600 text-sm text-center mb-4">
          The rich text element allows you to create and format headings,
          paragraphs, blockquotes, images, and video all in one place.
        </p>

        <h4 className="font-semibold text-sm mb-2">Something else here</h4>
        <p className="text-gray-600 text-sm">
          Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue
          laoreet rutrum faucibus dolor auctor.
        </p>
      </div>
    </>
  );
}
