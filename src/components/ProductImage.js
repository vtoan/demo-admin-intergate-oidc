import React from "react";

const productRes = "https://localhost:5001/product-images/";

export default function ProductImage({ src }) {
  return (
    <div>
      {!src ? (
        <span className="text-secondary">No image</span>
      ) : (
        <img width={100} src={productRes + src} alt="Product" />
      )}
    </div>
  );
}
