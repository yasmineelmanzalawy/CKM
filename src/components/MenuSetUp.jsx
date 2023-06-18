import React from "react";
import { Link , useNavigate } from "react-router-dom";
import { useState , useEffect} from "react";
import axios from "../axios.config";
import { TypeAnimation } from "react-type-animation";
import { toast } from "react-hot-toast";
const MenuSetUp = () => {
  const initialState2 = []
  const initialState3 = []
  const initialState4 = ""
  const [inventory,setInventory] = useState(initialState2)
  const [ingredients, setIngredients] = useState(initialState3);
  const [ingredientQuantity, setIngredientQuantity] = useState("");
  const [unit,setunit] = useState(initialState4)
  const [ingredient, setIngredient] = useState("");
  const initialState = {
    price: "",
    item_name: "",
    category: "",
    description: "",
    brand_id:""
  };
  const [data, setData] = useState(initialState);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const sucessful = () => toast.success("Successfully Added!");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({...data,ingredients:ingredients})
    try {
      const url = "api/Menu";
      const { data: res } = await axios.post(url,{...data,ingredients:ingredients});
      sucessful()
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  useEffect(() => {
    const getinventory = async () => {
      const url = "api/Inventory"
      const data  = await axios.get(url);
      console.log(data)
      console.log(inventory);
      setInventory(data.data);
    };
    getinventory();
  }, []);
  return (
    <div className="h-screen bg-gray-100 ">
      <div>
       <Link to="/"><span className="ml-6 px-4 main-text font-russo text-[74px] text-transparent bg-clip-text bg-gradient-to-br from-[#0f005a] to-[#0f79a3] ">
            CKM
       </span>
      </Link>
      </div>
      <div className="mb-[50px] text-right mr-12 mt-[-80px]  underline underline-offset-1 text-[#3B1EC5] text-transparent bg-clip-text bg-gradient-to-br from-[#0f005a] to-[#0f79a3] ">
          <a href="./controlunit">Skip To Controlunit</a>
        </div>
      <a href="./inventory">
            <h1 className="ml-[200px] text-2xl underline underline-offset-1 inline">
              Back
            </h1>
          </a>
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="  rounded-3xl flex flex-col justify-center h-[80%] "
        >
           <div className="flex items-center justify-center mb-[-50px]">
          <h1 className="text-center font-russo text-4xl py-8 uppercase">
            &nbsp;{" "}
          </h1>
          <TypeAnimation
            sequence={[
              
              
              "let's create a dish!",
              5000000,
              () => {
                console.log("Sequence completed"); // Place optional callbacks anywhere in the array
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "32px",
              display: "inline-block",
              fontFamily: ["Russo One", "sans-serif"],
              color: "#0C147A",
              textTransform: "uppercase",
            }}
          />
        </div>
          {/* <h1 className="text-center text-5xl text-[#3B1EC5]">
            Create Your Dish
          </h1> */}
          <div class="grid gap-6 mb-6 md:grid-cols-4 justify-items-center pt-[80px]">
            <div>
              <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Item Name
              </label>
              <input
                name="item_name"
                onChange={handleChange}
                value={data.item_name}
                type="text"
                className="w-[300px] text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Item Name"
                required
              />
            </div>
            <div>
              <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Dish description
              </label>
              <input
                name="description"
                onChange={handleChange}
                value={data.description}
                type="text"
                className="w-[300px] text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Dish description"
                required
              />
            </div>
            <div>
              <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Dish Category
              </label>
              <input
                name="category"
                onChange={handleChange}
                value={data.category}
                placeholder="Category"
                required
                className="w-[300px] text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Price
              </label>
              <input
                name="price"
                onChange={handleChange}
                value={data.price}
                type="number"
                className="w-[300px] text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Price"
                required
              />
              <input className="hidden" value={data.brand_id = localStorage.getItem("brand_id")} />
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-center text-[30px] text-[#0C147A] mb-[-40px] mt-[30px]">
                Pick your Ingredients
              </h1>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-4 justify-items-center pt-[80px]">
             { <div>
                <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                  Ingredient
                </label>

                {<select
                  onChange={(e) => {
                    setIngredient(e.target.value);
                  }}
                  value={ingredient}
                  required
                  id="searchbar"
                  onkeyup="search"
                  type="text"
                  name="inventory_item_id"
                  placeholder=""
                  className="w-[300px] text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                >
                  <option className="hidden" value="">Select Your ingredent</option>
                  {inventory.map((x,i) => {
                    return <option value={x.id}>{x.item_name}</option>
                  })}
                </select>}
              </div> } 
              <div>
                <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                  Ingredient Quantity
                </label>
                <input
                  name="quantity"
                  onChange={(e) => {
                    setIngredientQuantity(e.target.value);
                  }}
                  value={ingredientQuantity}
                  required
                  type="number"
                  placeholder="Quantity"
                  className="w-[300px] text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                  Unit
                </label>
                <input
                  name="unit"
                  onChange={(e) => {
                    setunit(e.target.value);
                  }}
                  value={unit}
                  required
                  type="text"
                  placeholder="kilograms/grams/piece/liters"
                  className="w-[300px] text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div >
                <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                  Add the ingredient
                </label>
                <button
                  type="button"
                  onClick={() => {
                    const object = {
                      inventory_item_id: ingredient,
                      quantity: ingredientQuantity,
                      unit_of_measurement:unit,
                    };
                    setIngredients([...ingredients, object]);
                    console.log(object)
                  }}
                  className="w-[300px] text-center bg-gray-200 border-[3px] border-[#0C147A] text-[#0C147A] text-lg rounded-lg focus:ring-[#0C147A] focus:border-[#0C147A]  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                >
                  Save Ingredient
                </button>
                <ul>
                  {ingredients.map((item,index) => (
                    <li key={index} className="flex justify-between">
                      <div>{item.inventory_item_id}</div>
                      <div>{item.quantity} {"GM"}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            {error && <div className="">{error}</div>}
            <button
              type="submit"
              className="text-white rounded px-4 hover:scale-125 ease-linear duration-300 bg-gradient-to-br from-[#0f005a] to-[#0f79a3] text-center h-12"
            >
              ADD DISH
            </button>
            <Link to="/controlunit">
            <button className="text-white rounded px-4 hover:scale-125 ease-linear duration-300 bg-gradient-to-br from-[#0f005a] to-[#0f79a3] text-center h-12">
              Finish
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MenuSetUp;