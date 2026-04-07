import ProductCard from "./ProductCard";

function ProductList({ products, addToCart }) {
  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </>
  );
}

export default ProductList;