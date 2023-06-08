import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";


function ShoppingCart({
  visibilty,
  products,
  onProductRemove,
  onClose,
  onQuantityChange,
}) {
  return (
    <div
      className="bg-[#735443] rounded mx-2 px-4 py-4"
      style={{
        display: visibilty ? "block" : "none",
      }}
    >
      <div className="shoppingCart">
        <div className="flex flex-wrap">
          <button className="btn close-btn text-[#edded1]" onClick={onClose}>
            <AiFillCloseCircle size={30} />
          </button>
          <h2 className="pl-2 pt-1.5 text-[#edded1]">Shopping cart</h2>
        </div>
        <div className=" flex flex-wrap gap-4 justify-center">
          {products.length === 0 && (
            <span className="empty-text">Your basket is currently empty</span>
          )}
          {products.map((product) => (
          <div className=""> 
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg bg-[#edded1] shadow dark:bg-gray-800 dark:border-gray-700 my-[50px] p-[10px]" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h3>
                <span className="product-price">
                  {product.price * product.count}$
                </span>
              </div>
              <select
                className="count"
                value={product.count}
                onChange={(event) => {
                  onQuantityChange(product.id, event.target.value);
                }}
              >
                {[...Array(10).keys()].map((number) => {
                  const num = number + 1;
                  return (
                    <option value={num} key={num}>
                      {num}
                    </option>
                  );
                })}
              </select>
              <button
                className="btn remove-btn"
                onClick={() => onProductRemove(product)}
              >
                <RiDeleteBin6Line size={20} />
              </button>
            </div>
            </div> 
          ))}
          </div>
          {products.length > 0 && (
            <div><a href="/customerdata" className="w-[120px] block h-[40px] items-center px-3 py-2 text-sm font-medium text-center text-brown bg-[#edded1] rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orannge-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Order</a>
            </div>
          )}
      </div>
    </div>
  );
}

export default ShoppingCart;
