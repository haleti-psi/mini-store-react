import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1>Mini Store</h1>
      <h2>Cart: {cart.length}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ProductList products={products} addToCart={addToCart} />
      )}
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </>
  );
}

export default App;
