import React, { useEffect, useState } from "react";
import ShowProduct from "./ShowProduct";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("rendered");
    async function fetchProduct() {
      const response = await fetch("/products.json");
      const data = await response.json();
      setProducts(data);
    }
    fetchProduct();
  }, []);

    // const fetchProduct = useCallback(async () => {
    //   const response = await fetch("/products.json");
    //   const data = await response.json();
    //   setProducts(data);
    // }, []);

    // useEffect(() => {
    //   console.log('rendered')
    //   fetchProduct();
    // }, [fetchProduct]);

  return (
    <>
      <h1>product list</h1>
      {products.map((product) => (
        <ShowProduct product={product} key={product.id} />
      ))}
    </>
  );
}
