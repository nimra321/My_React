function ShareSetup() {
  return (
    <div className="text-center font-poppins py-16 px-6">

      {/* Title */}
      <span className="text-sm text-gray-500">
        Share your setup with
      </span>

      <h2 className="text-3xl mt-2 mb-12 font-bold">
        #FuniroFurniture
      </h2>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">

        {/* LEFT */}
        <div className="flex flex-col gap-4">
          <img src="/assets/gallery/set9.png" className="h-[180px] w-full object-cover" />
          <img src="/assets/gallery/set2.png" className="h-[200px] w-full object-cover" />
          <img src="/assets/gallery/set3.png" className="h-[220px] w-full object-cover" />
        </div>

        {/* CENTER BIG IMAGE */}
        <div className="flex justify-center">
          <img
            src="/assets/gallery/set5.png"
            className="w-full max-w-[400px] h-[350px] object-cover"
          />
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-4">
          <img src="/assets/gallery/set6.png" className="h-[220px] w-full object-cover" />
          <img src="/assets/gallery/set7.png" className="h-[200px] w-full object-cover" />
          <img src="/assets/gallery/set8.png" className="h-[150px] w-full object-cover" />
        </div>

      </div>
    </div>
  );
}

export default ShareSetup;