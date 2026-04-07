function ProductCard({ title, price, product, addToCart }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>₹{price}</p>
      <button type="button" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}
  
  export default ProductCard;