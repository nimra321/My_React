import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {
  const navigate = useNavigate();

  const hasDiscount = item.discount > 0;

  const discountedPrice = hasDiscount
    ? item.price - (item.price * item.discount) / 100
    : item.price;

  // 👇 CLICK HANDLER
  const goToProduct = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="relative group bg-[#F4F5F7] overflow-hidden">

      {/* BADGES */}
      {hasDiscount && (
        <div className="absolute top-3 right-3 bg-[#E97171] text-white text-xs w-10 h-10 flex items-center justify-center rounded-full z-10">
          -{item.discount}%
        </div>
      )}

      {item.isNew && !hasDiscount && (
        <div className="absolute top-3 right-3 bg-[#2EC1AC] text-white text-xs w-10 h-10 flex items-center justify-center rounded-full z-10">
          New
        </div>
      )}

      {/* IMAGE (CLICKABLE) */}
      <div
        onClick={goToProduct}
        className="overflow-hidden cursor-pointer"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-[301px] object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-[1px]"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>

      {/* HOVER CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">

        <button
          onClick={goToProduct}
          className="bg-white text-[#B88E2F] font-semibold px-6 py-2 hover:scale-105 transition"
        >
          View Product
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

        <div className="mt-2 flex gap-2">
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
}

export default ProductCard;