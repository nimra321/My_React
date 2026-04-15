import { NavLink } from "react-router-dom";
import ProductGrid from "./ProductGrid";

function OurProducts({ products }) {
  return (
    <div className="py-10 px-6 md:px-10">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Our Products
      </h2>

      {/* ONLY 8 PRODUCTS */}
      <ProductGrid products={products.slice(0, 8)} />

      {/* BUTTON */}
      <div className="flex justify-center mt-10">
        <NavLink to="/shop">
          <button className="w-[245px] h-[48px] border border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white">
            Show More
          </button>
        </NavLink>
      </div>

    </div>
  );
}

export default OurProducts;