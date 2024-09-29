// src/components/ProductList.js
import React from "react";
import products from "../data/products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">รายการสินค้า</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
