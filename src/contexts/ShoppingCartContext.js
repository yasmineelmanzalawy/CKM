import { createContext, useContext, useEffect, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import axios from "../axios.config";
const ShoppingCartContext = createContext({});
const initialCartItems = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];

const ShoppingCartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [menuitem,setmenuitem] = useState({})
  useEffect(()=>{
    setmenuitem({
      menu_items:cartItems.map((x)=>{
        return {
          menu_item_id:x.id,
          quantity:x.quantity,
        }
      })})
  
  },[cartItems])
  const clearcart = () => {
    setCartItems([])
  }
  // useEffect(() => {
  //   const getinventory = async () => {
  //     const url = `api/menu-items/${localStorage.getItem('test')}`;
  //     const data = await axios.get(url);
  //     console.log(data)
  //     return data.data
  //   };
    
  
  //   localStorage.setItem("shopping-cart", JSON.stringify(getinventory()));
  // }, [cartItems]);

  const cartQuantity = cartItems.length ? cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  ) : 0

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };
  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const addCart = (item) => {
    setCartItems([...cartItems,{...item,quantity:1}])
  }
  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      const curritem= currItems.find((item) => item.id === id) == null
      if (curritem) {
        return [...currItems, { ...curritem, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        addCart,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        clearcart,
        menuitem,
        isOpen,
        cartQuantity,
        cartItems,
      }}
    >
      {children}
      
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
