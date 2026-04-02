import ProductList from "./components/ProductList";

function App() {
  const products = [
    { id: 1, title: "iPhone", price: 1000 },
    { id: 2, title: "Laptop", price: 2000 },
    { id: 3, title: "Watch", price: 500 }
  ];

  return (
    <>
      <h1>Mini Store</h1>
      <ProductList products={products} />
    </>
  );
}

export default App;