import React, { useState, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "../axios.config";
import Swal from "sweetalert2";


function ShoppingCart({
  visibilty,
  products,
  onProductRemove,
  onClose,
  onQuantityChange,
}) {                         
  const[brand,setBrand] = useState([])
  useEffect(() => {
    const getinventory = async () => {
        const url = `https://battaria.glowrank.com/api/menu-items/${localStorage.getItem("test")}`;
        const data = await axios.get(url);
        console.log(data);
        console.log(brand);
        setBrand(data.data);
      };
      getinventory();
    }, []);
  return (
    <div
      className="bg-[#fae9de] px-4 py-4"
      style={{
        display: visibilty ? "block" : "none",
      }}
    >
      <div className="shoppingCart">
        <div className="flex flex-wrap">
          <button className="btn close-btn text-[#E55807]" onClick={onClose}>
            <AiFillCloseCircle size={30} />
          </button>
          <h2 className="pl-2 pt-[5.5px] text-[#E55807]">Shopping cart</h2>
        </div>
        <div className=" flex flex-wrap gap-4 justify-center">
          {products.length === 0 && (
            <span className="text-[20px] py-4 text-[#E55807]">Your basket is currently empty</span>
          )}
          {brand.map((product) => (
          <div className=""> 
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg bg-[#edded1] shadow dark:bg-gray-800 dark:border-gray-700 my-[50px] p-[10px]" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-[#E55807] text-center dark:text-white">{product.item_name}</h3>
                <span className="">
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
            <div><a href="/customerdata" className="w-[120px] block h-[40px] items-center px-3 py-2 text-sm font-medium text-center text-brown bg-[#E55807]  hover:bg-[#6b2f0a] text-white rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orannge-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Order</a>
            </div>
          )}
      </div>
    </div>
  );
}

export default ShoppingCart;
