function Range() {
  return (
    <div className="py-16 px-10 bg-gray-100 text-center">
      
      {/* Heading */}
      <h2 className="text-2xl font-bold">Browse The Range</h2>
      <p className="text-gray-500 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        
        {/* Card 1 */}
        <div>
          <img
            src="/assets/range/dining.png"
            className="rounded-lg"
          />
          <h3 className="mt-3 font-semibold">Dining</h3>
        </div>

        {/* Card 2 */}
        <div>
          <img
            src="/assets/range/livingroom.png"
            className="rounded-lg"
          />
          <h3 className="mt-3 font-semibold">Living</h3>
        </div>

        {/* Card 3 */}
        <div>
          <img
            src="/assets/range/bedroom.png"
            className="rounded-lg"
          />
          <h3 className="mt-3 font-semibold">Bedroom</h3>
        </div>

      </div>
    </div>
  )
}

export default Range