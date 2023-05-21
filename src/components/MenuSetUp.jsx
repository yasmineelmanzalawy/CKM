import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../axios.config";

const MenuSetUp = () => {
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [ingredientQuantity, setIngredientQuantity] = useState("");
  const [data, setData] = useState({
    dishName: "",
    dishCategory: "",
    timeToPrepare: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({...data,ingredients:ingredients})
    try {
      const url = "";
      const { data: res } = await axios.post(url,{data:{...data,ingredients:ingredients}});
      navigate("/controlunit");
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

  return (
    <div>
      {" "}
      <div className="h-screen flex justify-center items-center bg-gray-100 ">
        <form
          onSubmit={handleSubmit}
          className="  rounded-3xl flex flex-col justify-center h-[80%] "
        >
           <div className="flex lustify-between gap-[645px]">
          <a href="/inventory"><h1 className="pb-4 text-2xl underline underline-offset-1 inline">Back</h1></a>
          <a href="/controlunit"><h1 className="pb-4 text-2xl underline underline-offset-1 text-[#3B1EC5] inline">Skip</h1></a>
        </div>
          <h1 className="text-center text-5xl text-[#3B1EC5]">
            Create Your Dish
          </h1>
          <div class="grid gap-6 mb-6 md:grid-cols-3 justify-items-center pt-[80px]">
            <div>
              <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Dish Name
              </label>
              <input
                name="dishName"
                onChange={handleChange}
                value={data.dishName}
                type="text"
                className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Dish Name"
                required
              />
            </div>
            <div>
              <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Dish Category
              </label>
              <input
                name="dishCategory"
                onChange={handleChange}
                value={data.dishCategory}
                required
                className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Time To Prepare
              </label>
              <input
                name="timeToPrepare"
                onChange={handleChange}
                value={data.timeToPrepare}
                type="number"
                className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Time In Minutes"
                required
              />
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-center text-[30px] text-[#3B1EC5] mb-[-40px] mt-[30px]">
                Choose your Ingredients
              </h1>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-3 justify-items-center pt-[80px]">
              <div>
                <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                  Ingredient
                </label>

                <input
                  onChange={(e) => {
                    setIngredient(e.target.value);
                  }}
                  value={ingredient}
                  required
                  id="searchbar"
                  onkeyup="search"
                  type="text"
                  name="ingredient"
                  placeholder="Search ingredient.."
                  className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                />
              </div>
              <div>
                <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                  Ingredient Quantity
                </label>
                <input
                  name="ingredientsQuantity"
                  onChange={(e) => {
                    setIngredientQuantity(e.target.value);
                  }}
                  value={ingredientQuantity}
                  required
                  type="number"
                  placeholder="Quantity"
                  className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                      ingredient: ingredient,
                      ingredientQuantity: ingredientQuantity,
                    };
                    setIngredients([...ingredients, object]);
                  }}
                  className="text-center bg-gray-200 border-[3px] border-[blue] text-[blue] text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                >
                  Save Ingredient
                </button>
                <ul>
                  {ingredients.map((item,index) => (
                    <li key={index} className="flex justify-between">
                      <div>{item.ingredient}</div>
                      <div>{item.ingredientQuantity} {"GM"}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            {error && <div className="">{error}</div>}
            <button
              //   onclick={Addeditem()}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              ADD DISH
            </button>
            <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Finish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MenuSetUp;
