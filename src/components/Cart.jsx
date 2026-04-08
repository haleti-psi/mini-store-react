function Cart({ cart, removeFromCart }) {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
  
    return (
      <div>
        <h2>Cart Items</h2>
        {cart.map((item, index) => (
          <div key={index}>
            <p>{item.title} - ₹{item.price}</p>
            <button onClick={() => removeFromCart(index)}>
              Remove
            </button>
          </div>
        ))}
  
        <h3>Total: ₹{total}</h3>
      </div>
    );
  }
  
  export default Cart;