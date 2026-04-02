import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
        />
      ))}
    </>
  );
}

export default ProductList;