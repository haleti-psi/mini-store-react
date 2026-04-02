function ProductCard({ title, price }) {
    return (
      <div>
        <h3>{title}</h3>
        <p>₹{price}</p>
        <button>Add to Cart</button>
      </div>
    );
  }
  
  export default ProductCard;