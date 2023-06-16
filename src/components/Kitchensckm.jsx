import React, { useState, useEffect } from "react";
import { GiShoppingBag } from "react-icons/gi";
import ShoppingCart from "./ShoppingCart";
import axios from "../axios.config";

function Kitchen() {
  const[brand,setBrand] = useState([])
 
  const [cartsVisibilty, setCartVisible] = useState(false);
  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  }, [productsInCart]);
  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setProducts([...productsInCart, newProduct]);
  };

  const onQuantityChange = (productId, count) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -1) {
        oldState[productsIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onProductRemove = (product) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex(
        (item) => item.id === product.id
      );
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };
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
    <div className="bg-[white]">
      <ShoppingCart
        visibilty={cartsVisibilty}
        products={productsInCart}
        onClose={() => setCartVisible(false)}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
      />
      <div className="py-1 px-4 rounded-br rounded-bl flex flex-row-reverse flex-wrap gap-4 text-right bg-[#E55807]">
        <h3 className="pt-[7px] text-[white]">Kitchen Name And Logo</h3>
        <button
          className="btn shopping-cart-btn text-[white]"
          onClick={() => setCartVisible(true)}
        >
          <GiShoppingBag size={24} />
          {productsInCart.length > 0 && (
            <span className="product-count">{productsInCart.length}</span>
          )}
        </button>
      </div>
        <h2 className="mb-[-10px] mt-[10px] text-2xl font-bold tracking-tight text-[#E55807] dark:text-white text-center">Dishes</h2>
      <main>
        <div className=" mx-[60px] pb-[50px]">
            <div className=" flex flex-wrap gap-10 justify-center">
          {brand.map((product) => (
            <div className=" max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-[50px] p-[10px] bg-[#0] text-[#794101]" key={product.id} >
              <img
                className="rounded m-auto my-4"
                src={product.image}
                alt={product.image}
              />
              <h4 className="mb-2 text-2xl text-[#E55807] font-bold tracking-tight text-gray-900 dark:text-[#fef5ea] text-center ">{product.item_name}</h4>

              <p className="mb-3 font-normal text-[black] dark:text-gray-400 text-center">{product.description}</p>
              <span className="text-[#E55807] justify-center">{product.price}$</span>
              <div className="m-auto mt-4">
                <button className="inline-flex justify-center px-3 py-2 text-sm font-medium text-center text-[white] bg-[#E55807] rounded-lg hover:bg-[#6b2f0a]  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:[bg-blue-700] dark:focus:ring-blue-800" onClick={() => addProductToCart(product)}>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>
      </main>
    </div>
  );
}

export default Kitchen;