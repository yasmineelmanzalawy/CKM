import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "../axios.config";
import toast from "react-hot-toast";
import { TypeAnimation } from "react-type-animation";

const T2 = () => {
  const navigate = useNavigate();
  const [supplier, setsupplier] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [error, setError] = useState("");
  const initialState = {
    item_id: "",
    suppliers_id: "",
    quantity: "",
    unit_of_measurement: "",
    unit_price: "",
    brand_id: "",
  };
  const [data, setData] = useState(initialState);
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const sucessful = () => toast.success("Successfully Added!");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "api/transaction";
    axios
      .post(url, data)
      .then((data) => {
        console.log(data.data);
        sucessful();
        setData(initialState);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };
  useEffect(() => {
    const getinventory = async () => {
      const url = "api/Inventory";
      const data = await axios.get(url);
      console.log(data);
      console.log(inventory);
      setInventory(data.data);
    };
    getinventory();
  }, []);
  useEffect(() => {
    const getsupplier = async () => {
      const url = "api/Supplier";
      const data = await axios.get(url);
      console.log(data);
      console.log(supplier);
      setsupplier(data.data.data);
    };
    getsupplier();
  }, []);
  return (
    <div className="h-screen font-russo flex justify-center items-center bg-gray-100 ">
      <div></div>
      <form
        onSubmit={handleSubmit}
        className="  rounded-3xl flex flex-col justify-center h-[80%] "
      >
        <div className=" text-2xl underline underline-offset-1 text-[black]">
        <a href="./controlunit/Stock">
            <h1 className="pb-4 text-2xl underline underline-offset-1 inline">
              Back To Stock
            </h1>
          </a>        </div>

 <div className="flex items-center justify-center mb-[-50px]">
              <h1 className="text-center font-russo text-4xl py-8 uppercase">
                &nbsp;{" "}
              </h1>
              <TypeAnimation
                sequence={[
                  "please Submit Your Transcations!",
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
          Submit Your Transcations
        </h1> */}
        <div className="grid gap-6 mb-6 md:grid-cols-3 justify-items-center pt-[80px]">
          <div>
            <label
              htmlFor=""
              className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Item Name
            </label>
            {
              <select
                onChange={handleChange}
                value={data.item_id}
                required
                type="text"
                name="item_id"
                className="text-center w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              >
                <option className="hidden" value="">
                  Select Your ingredent
                </option>
                {inventory.map((x) => {
                  return <option value={x.id}>{x.item_name}</option>;
                })}
              </select>
            }
          </div>
          <div>
            <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Supplier Name
            </label>
            {
              <select
                onChange={handleChange}
                value={data.suppliers_id}
                required
                id="searchbar"
                onkeyup="search"
                type="text"
                name="suppliers_id"
                placeholder=""
                className="text-center w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              >
                <option className="hidden" value="">
                  Select Your Supplier
                </option>
                {supplier.map((x) => {
                  return <option value={x.id}>{x.name}</option>;
                })}
              </select>
            }
          </div>
          <div>
            <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Price
            </label>
            <input
              onChange={handleChange}
              value={data.unit_price}
              name="unit_price"
              type="text"
              id="Inventory Categories"
              className="text-center w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Price"
              required
            />
          </div>
          <div>
            <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Quantity
            </label>
            <input
              onChange={handleChange}
              value={data.quantity}
              name="quantity"
              type="text"
              id="Inventory Categories"
              className="text-center w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Quantity"
              required
            />
            <input
              value={data.brand_id=localStorage.getItem("brand_id")}
              className="hidden"
            />
          </div>
          <div className="">
            <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Measurement
            </label>
            <select
              onChange={handleChange}
              value={data.unit_of_measurement}
              required
              type="text"
              name="unit_of_measurement"
              className="w-[350px] text-center px-16 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            >
              <option className="hidden" value="">
                select
              </option>
              <option value="kilograms">kilograms</option>
              <option value="grams">grams</option>
              <option value="liters">liters</option>
              <option value="pieces">pieces</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className=" text-white bg-gradient-to-br from-[#0f005a] to-[#0f79a3] hover:bg-blue-800 hover:scale-125 ease-liner duration-300 font-medium rounded-lg text-lg  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default T2;
