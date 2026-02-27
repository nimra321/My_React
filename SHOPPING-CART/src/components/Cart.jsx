import { useCart } from "../context/CardContext";

function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();
  return (
    <div className="container">
      <h2 className="mb-3">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="alert alert-infor">Your cart is empty</div>
      ) : (
        <>
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td style={{ width: "100px" }}>
                    <input
                      className="form-control text-center"
                      min="1"
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    />
                  </td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)} className="btn btn-outline-danger btn-sm">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-end fw-bold fs-5">Total: ${total}</div>
        </>
      )}
    </div>
  );
}

export default Cart;
