import { Link } from "react-router-dom";

function PageBanner({ title, bgImage }) {
  return (
    <div
      className="relative h-[300px] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-black">
        <h1 className="text-4xl font-bold mb-2 uppercase">
          {title}
        </h1>

        <p className="text-sm">
          <Link to="/" className="hover:underline">
            Home
          </Link>{" "}
          &gt; <span className="font-medium">{title}</span>
        </p>
      </div>
    </div>
  );
}

export default PageBanner;