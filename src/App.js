// src/App.js
import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4 text-center text-2xl">
          ร้านค้าออนไลน์ของฉัน
        </header>
        <div className="flex flex-col md:flex-row p-4">
          <div className="md:w-3/4">
            <ProductList />
          </div>
          <div className="md:w-1/4 md:ml-4 mt-4 md:mt-0">
            <Cart />
          </div>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
