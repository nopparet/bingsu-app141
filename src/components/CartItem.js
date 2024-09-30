// src/components/CartItem.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { XIcon } from '@heroicons/react/solid';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="flex items-center mb-4 p-2 border-b">
      {/* รูปภาพสินค้า */}
      <img
        src={item.image}
        alt={`รูปภาพของ ${item.name}`}
        className="w-16 h-16 object-cover mr-4 rounded"
      />
      
      {/* รายละเอียดสินค้า */}
      <div className="flex-1">
        <h4 className="font-semibold text-lg text-pink-700">{item.name}</h4>
        <p className="text-pink-500">ราคา: ฿{item.price}</p>
        <p className="text-pink-500">รวม: ฿{(item.price * item.quantity).toFixed(2)}</p>
        
        {/* ปุ่มเพิ่ม/ลดจำนวนสินค้า */}
        <div className="flex items-center mt-2">
          <button
            onClick={() =>
              updateQuantity(item.id, item.quantity > 1 ? item.quantity - 1 : 1)
            }
            className="px-3 py-1 bg-pink-200 rounded-l hover:bg-pink-300 transition-colors duration-300"
          >
            -
          </button>
          <span className="px-4 py-1 border-t border-b border-pink-200 text-pink-700">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="px-3 py-1 bg-pink-200 rounded-r hover:bg-pink-300 transition-colors duration-300"
          >
            +
          </button>
        </div>
      </div>
      
      {/* ปุ่มลบสินค้า */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-pink-600 ml-4 hover:text-pink-800"
        title="ลบสินค้าออกจากตะกร้า"
      >
        <XIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default CartItem;
