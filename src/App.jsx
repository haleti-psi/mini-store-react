import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, title: "iPhone", price: 1000 },
    { id: 2, title: "Laptop", price: 2000 },
    { id: 3, title: "Watch", price: 500 }
  ];

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <>
      <h1>Mini Store</h1>
      <h2>Cart: {cart.length}</h2>
      <ProductList products={products} addToCart={addToCart} />
    </>
  );
}

export default App;