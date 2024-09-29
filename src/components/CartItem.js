// src/components/CartItem.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

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
        <h4 className="font-semibold text-lg">{item.name}</h4>
        <p className="text-gray-700">ราคา: ฿{item.price}</p>
        
        {/* ปุ่มเพิ่ม/ลดจำนวนสินค้า */}
        <div className="flex items-center mt-2">
          <button
            onClick={() =>
              updateQuantity(item.id, item.quantity > 1 ? item.quantity - 1 : 1)
            }
            className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
          >
            -
          </button>
          <span className="px-4 py-1 border-t border-b">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>
      
      {/* ปุ่มลบสินค้า */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 ml-4 hover:text-red-700"
        title="ลบสินค้าออกจากตะกร้า"
      >
        &#10005;
      </button>
    </div>
  );
};

export default CartItem;
