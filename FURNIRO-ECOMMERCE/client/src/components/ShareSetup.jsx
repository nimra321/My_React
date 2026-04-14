function ShareSetup() {
  return (
    <div className="text-center font-poppins py-16 px-6">

      {/* Title */}
      <span className="text-sm text-[#B88E2F]">
        Share your glow with
      </span>

      <h2 className="text-3xl text-[#ee5784] mt-2 mb-12 font-bold">
        #GlowEraBeauty
      </h2>

      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden min-h-screen">

        {/* LEFT SIDE */}
        <div className="relative h-[420px]">

          <img
            src="/assets/Makeup-vanity.jpg"
            className="absolute top-[-6%] left-[-40px] w-[120px] h-[270px] object-cover"
          />

          <img
            src="/assets/skin-care.jpg"
            className="absolute top-[10%] left-[90px] w-[430px] h-[200px] object-cover"
          />

          <img
            src="/assets/blushes.jpg"
            className="absolute top-[60%] left-[-70px] w-[250px] h-[310px] object-cover"
          />

          <img
            src="/assets/Makeup-vanity.jpg"
            className="absolute top-[60%] left-[190px] w-[330px] h-[260px] object-cover"
          />

        </div>

        {/* CENTER */}
        <div className="flex justify-center items-center">
          <img
            src="/assets/nails.jpg"
            className="w-full max-w-[360px] h-[310px] object-cover"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="relative h-[420px]">

          <img
            src="/assets/cosmetics.jpg"
            className="absolute top-0 right-[-40px] w-[250px] h-[370px] object-cover"
          />

          <img
            src="/assets/set_pallete.jpg"
            className="absolute top-[70px] right-[220px] w-[300px] h-[300px] object-cover"
          />

          <img
            src="/assets/Makeup-vanity.jpg"
            className="absolute top-[380px] right-[80px] w-[220px] h-[150px] object-cover"
          />

          <img
            src="/assets/tools_brushes.jpg"
            className="absolute top-[380px] right-[310px] w-[210px] h-[190px] object-cover"
          />

        </div>

      </div>
    </div>
  );
}

export default ShareSetup;