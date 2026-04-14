import { NavLink } from "react-router-dom";

function OurProducts({ products }) {
  return (
    <div className="py-10 px-6 md:px-10">

      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Our Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {products.map((item) => {
          const hasDiscount = item.discount > 0;
          const discountedPrice = hasDiscount
            ? item.price - (item.price * item.discount) / 100
            : item.price;

          return (
            <div
              key={item.id}
              className="relative group bg-[#F4F5F7] overflow-hidden transition-all duration-300"
            >

              {/* 🔴 DISCOUNT BADGE */}
              {hasDiscount && (
                <div className="absolute top-3 right-3 bg-[#E97171] text-white text-xs w-10 h-10 flex items-center justify-center rounded-full font-semibold z-10">
                  -{item.discount}%
                </div>
              )}

              {/* 🟢 NEW BADGE */}
              {item.isNew && !hasDiscount && (
                <div className="absolute top-3 right-3 bg-[#2EC1AC] text-white text-xs w-10 h-10 flex items-center justify-center rounded-full font-semibold z-10">
                  New
                </div>
              )}

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[301px] object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-[1px]"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>

              {/* HOVER CONTENT */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">

                <button className="bg-white text-[#B88E2F] font-semibold px-6 py-2 hover:scale-105 transition">
                  Add to Cart
                </button>

                <div className="flex gap-6 items-center text-white text-sm">

                  <div className="flex items-center gap-1">
                    <img src="/assets/icons/share.png" className="w-4 h-4" />
                    <span>Share</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <img src="/assets/icons/compare.png" className="w-4 h-4" />
                    <span>Compare</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <img src="/assets/icons/like.png" className="w-4 h-4" />
                    <span>Like</span>
                  </div>

                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 transition-all duration-300 group-hover:blur-[1px] group-hover:opacity-70">

                <h3 className="font-semibold text-gray-800">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {item.description}
                </p>

                {/* PRICE */}
                <div className="mt-2 flex items-center gap-2">

                  <p className="text-[#B88E2F] font-bold">
                    Rs {Math.round(discountedPrice)}
                  </p>

                  {hasDiscount && (
                    <p className="text-gray-400 line-through text-sm">
                      Rs {item.price}
                    </p>
                  )}

                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* SHOW MORE */}
      <div className="flex justify-center mt-10">
        <NavLink to="/shop">
            <button className="w-[245px] h-[48px] border border-[#B88E2F] text-[#B88E2F] bg-white hover:bg-[#B88E2F] hover:text-white transition duration-300 font-medium">
            Show More
            </button>
        </NavLink>
        
      </div>

    </div>
  );
}

export default OurProducts;