// src/components/ProductItem.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white p-4 rounded shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-2 rounded"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-blue-500">ราคา: ฿{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition duration-200"
      >
        สั่งซื้อ
      </button>
    </div>
  );
};

export default ProductItem;
