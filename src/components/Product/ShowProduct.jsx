import React from "react";

export default function ShowProduct({ product }) {
  return (
    <>
      <h2>
        {product.id} : {product.name}
      </h2>
      <p>Price: {product.price}</p>
    </>
  );
}
