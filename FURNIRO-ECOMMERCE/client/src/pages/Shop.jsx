import { useState } from "react";
import products from "../data/ProductData";
import ProductGrid from "../components/ProductGrid";
import PageBanner from "../components/PageBanner";

function Shop() {
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 12;

  const startIndex = (currentPage - 1) * productsPerPage;
  const selectedProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <>
    <PageBanner title="Shop" bgImage="/assets/bg-page-img.png" />
    <div className="px-6 md:px-10 py-10">

      {/* PRODUCTS ONLY (NO TITLE) */}
      <ProductGrid products={selectedProducts} />

      {/* PAGINATION */}
      <div className="flex justify-center gap-3 mt-10">

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-10 h-10 border ${
              currentPage === index + 1
                ? "bg-[#B88E2F] text-white"
                : "bg-white"
            }`}
          >
            {index + 1}
          </button>
        ))}

      </div>

    </div>
    </>
    
  );
}

export default Shop;