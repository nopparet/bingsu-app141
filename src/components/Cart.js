// src/components/Cart.js
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, discount, applyCoupon, coupon } = useContext(CartContext);
  const [couponInput, setCouponInput] = useState("");

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discountAmount = subtotal * discount;
  const shipping = cart.length > 0 ? 100 : 0;
  const total = subtotal - discountAmount + shipping;

  const handleApplyCoupon = () => {
    applyCoupon(couponInput);
    setCouponInput("");
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-pink-700">ตะกร้าสินค้า</h2>
      {cart.length === 0 ? (
        <p className="text-pink-500">ไม่มีสินค้าในตะกร้า</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mt-4">
            <input
              type="text"
              value={couponInput}
              onChange={(e) => setCouponInput(e.target.value)}
              placeholder="ใส่คูปอง"
              className="border p-1 mr-2 rounded text-pink-700"
            />
            <button
              onClick={handleApplyCoupon}
              className="bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700 transition-colors duration-300"
            >
              ใช้คูปอง
            </button>
          </div>
          {coupon && (
            <p className="text-green-600 mt-2">คูปอง "{coupon}" ถูกนำมาใช้แล้ว</p>
          )}
          <div className="mt-4">
            <p className="text-pink-700">ยอดรวม: ฿{subtotal.toFixed(2)}</p>
            <p className="text-pink-700">ส่วนลด: -฿{discountAmount.toFixed(2)}</p>
            <p className="text-pink-700">ค่าขนส่ง: +฿{shipping}</p>
            <hr className="my-2 border-pink-300" />
            <p className="font-bold text-pink-800">ราคารวม: ฿{total.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
