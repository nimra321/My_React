import ProductCard from "./ProductCard"

const Products = [
    {id:  1, name: "Laptop", price: 800},
    {id:  2, name: "Phone", price: 500},
    {id:  3, name: "Headphones", price: 100},
    {id:  4, name: "Keyboard", price: 700},
    {id:  5, name: "Mouse", price: 250},
]

function ProductList() {
  return (
    <div className="row">
        {
            Products.map((product) => (
                <div key={product.id} className="col-md-3 mb-4">
                    <ProductCard prod={product} />
                </div>
            ))
        }
        
      </div>
  )
}

export default ProductList