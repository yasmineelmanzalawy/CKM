import React, { useState, useEffect } from "react";
import { GiShoppingBag } from "react-icons/gi";
import ShoppingCart from "./ShoppingCart";


const products = [
  {
    id: 1,
    name: "Vivamus vitae",
    rating: 4.3,
    description:
      "Vivamus vitae neque accumsan, ultrices nisl et, viverra magna. Fusce nec maximus sem.",
    price: 199,
    image: require("../data/Image(4).png"),
  },
  {
    id: 2,
    name: "Fusce sit amet ipsum",
    rating: 4.2,
    description:
      "Maecenas fermentum urna egestas urna ullamcorper sodales. Sed a enim imperdiet, tempus massa a, iaculis tellus.",
    price: 229,
    image: require("../data/Image(10).png"),
  },
  {
    id: 3,
    name: "Etiam volutpat aliquam",
    rating: 3.2,
    description:
      "Praesent et orci vel nunc interdum aliquet et non dolor. Etiam eget finibus justo",
    price: 99,
    image: require("../data/Image(3).png"),
  },
  {
    id: 4,
    name: "Lorem ipsum dolor",
    rating: 4.8,
    description:
      "Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.",
    price: 119,
    image: require("../data/Image(1).png"),
  },
  {
    id: 4,
    name: "Lorem ipsum dolor",
    rating: 4.8,
    description:
      "Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.",
    price: 119,
    image: require("../data/Image(3).png"),
  },
  {
    id: 4,
    name: "Lorem ipsum dolor",
    rating: 4.8,
    description:
      "Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.",
    price: 119,
    image: require("../data/Image(7).png"),
  },
  {
    id: 4,
    name: "Lorem ipsum dolor",
    rating: 4.8,
    description:
      "Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.",
    price: 119,
    image: require("../data/Image(9).png"),
  },
  {
    id: 4,
    name: "Lorem ipsum dolor",
    rating: 4.8,
    description:
      "Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.",
    price: 119,
    image: require("../data/Image(11).png"),
  },
  {
    id: 4,
    name: "Lorem ipsum dolor",
    rating: 4.8,
    description:
      "Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.",
    price: 119,
    image: require("../data/Image(6).png"),
  },
  {
    id: 5,
    name: "Ultrices nisl",
    rating: 4.5,
    description:
      "Phasellus condimentum, ante et dictum placerat, nulla ipsum commodo lorem, ut mollis nibh turpis a metus.",
    price: 85,
    image: require("../data/Image(6).png"),
  },
  {
    id: 6,
    name: "Curabitur in elementum tortor",
    rating: 3.8,
    description:
      " Mauris convallis diam nibh, non malesuada enim facilisis non. Etiam sapien augue, molestie a porta sed",
    price: 149,
    image: require("../data/Image(5).png"),
  },
];

function Kitchen() {
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

  return (
    <div className="bg-[#d9c6b8]">
      <ShoppingCart
        visibilty={cartsVisibilty}
        products={productsInCart}
        onClose={() => setCartVisible(false)}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
      />
      <div className="py-1 px-4 mx-2 rounded flex flex-row-reverse flex-wrap gap-4 text-right bg-[#735443]">
        <h3 className="pt-[7px] text-[#EEEBDD]">Kitchen Name And Logo</h3>
        <button
          className="btn shopping-cart-btn text-[#EEEBDD]"
          onClick={() => setCartVisible(true)}
        >
          <GiShoppingBag size={24} />
          {productsInCart.length > 0 && (
            <span className="product-count">{productsInCart.length}</span>
          )}
        </button>
      </div>
        <h2 className="mb-[-10px] mt-[10px] text-2xl font-bold tracking-tight text-[#381e00] dark:text-white text-center">Dishes</h2>
      <main>
        <div className=" mx-[60px] pb-[50px]">
            <div className=" flex flex-wrap gap-10 justify-center">
          {products.map((product) => (
            <div className=" max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-[50px] p-[10px] bg-[#0] text-[#794101]" key={product.id} >
              <img
                className="rounded m-auto my-4"
                src={product.image}
                alt={product.image}
              />
              <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#fef5ea] text-center ">{product.name}</h4>

              <p className="mb-3 font-normal dark:text-gray-400 text-center">{product.description}</p>
              <span className=" text-center">{product.price}$</span>
              <div className="m-auto mt-4">
                <button className="margin-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#fef5ea] bg-[#735443] rounded-lg hover:bg-[#ff711f] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => addProductToCart(product)}>
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