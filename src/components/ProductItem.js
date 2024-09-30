// src/components/ProductItem.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.image}
        alt={`รูปภาพของ ${product.name}`}
        className="w-full h-40 object-cover mb-2 rounded"
      />
      <h3 className="text-lg font-semibold text-pink-700">{product.name}</h3>
      <p className="text-pink-500">ราคา: ฿{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700 transition-colors duration-300"
      >
        สั่งซื้อ
      </button>
    </div>
  );
};

export default ProductItem;
