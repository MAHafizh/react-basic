import React, { useState } from "react";
import ProductList from "../components/Product/ProductList";
import { useSearchParams } from "react-router";

export default function Product() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState(searchParams.get("search") || "");
  function handleSearch() {
    setSearchParams({search: input})
  }

  return (
    <>
      <h1>Product Page</h1>

      <label htmlFor="">Search Product</label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <p>Kamu Mencari Product: {searchParams.get("search")}</p>
      <ProductList />
    </>
  );
}