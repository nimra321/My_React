import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/ProductData";

function SingleProduct() {
  const { id } = useParams();

  const item = products.find((p) => p.id === Number(id));

  const [qty, setQty] = useState(1);

  if (!item) {
    return <h2 className="text-center mt-10">Product not found</h2>;
  }

  const hasDiscount = item.discount > 0;

  const price = hasDiscount
    ? item.price - (item.price * item.discount) / 100
    : item.price;

  const increase = () => setQty(qty + 1);

  const decrease = () => {
    if (qty > 1) setQty(qty - 1);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
      {/* IMAGE */}
      <div className="bg-white shadow-md rounded-2xl p-6 flex items-center justify-center h-[500px]">
        <img
          src={item.image}
          alt={item.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* DETAILS */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{item.name}</h1>

        {/* PRICE */}
        <div className="flex gap-3 items-center">
          <p className="text-2xl font-bold text-[#B88E2F]">
            Rs {Math.round(price)}
          </p>

          {hasDiscount && (
            <p className="line-through text-gray-400">Rs {item.price}</p>
          )}
        </div>

        <p className="text-gray-600">{item.description}</p>

        {/* STARS */}
        <div className="text-yellow-400 text-lg">★★★★☆</div>

        {/* QUANTITY */}
        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={decrease}
            className="w-10 h-10 bg-gray-200 rounded-lg"
          >
            -
          </button>

          <span className="text-lg">{qty}</span>

          <button
            onClick={increase}
            className="w-10 h-10 bg-gray-200 rounded-lg"
          >
            +
          </button>
        </div>

        {/* ADD TO CART */}
        <button className="mt-5 bg-[#B88E2F] text-white py-3 rounded-xl">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
