function Hero() {
  return (
    <div className="bg-gray-100 h-[100vh] flex items-center justify-center relative">
      
      {/* Background Image */}
      <img 
        src="/assets/hero-section.png"
        alt="furniture"
        className="absolute w-full h-full object-cover opacity-100"
      />

      {/* Card */}
      <div className="bg-[#f9f1e7] p-10 max-w-md rounded-md relative z-10">
        
        <p className="text-sm tracking-widest">New Arrival</p>

        <h1 className="text-3xl font-bold text-primary mt-2">
          Discover Our New Collection
        </h1>

        <p className="text-gray-600 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <button className="mt-5 bg-primary text-white px-6 py-2">
          BUY NOW
        </button>

      </div>
    </div>
  )
}

export default Hero