import { useCart } from "../context/CardContext";
function ProductCard({ prod }) {

    const { addToCart } = useCart();

  return (
    <div className="card shadow-sm h-100 text-center">
        <div className="card-body">
            <h5 className="card-title">{prod.name}</h5>
            <p className="card-text">{prod.price}</p>
            <button className="btn btn-primary" onClick={() => addToCart(prod)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard