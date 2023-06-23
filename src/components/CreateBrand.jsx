import { useState } from "react";
import React from "react";
import axios from "../axios.config";
import { Link, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";


const CreateBrand = () => {
  const [data, setData] = useState({
    name: "",
    logo: null,
    cuisine: "",
    description: "",
    image_cover: null,
    user_id: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  
  const handleLogo = (event) => {
    setData({ ...data, logo: event.target.files[0] });
    console.log(event.target.files);
  };
  
  const handleCover = (event) => {
    setData({ ...data, image_cover: event.target.files[0] });
    console.log(event.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "api/Brand";
    
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("logo", data.logo);
    formData.append("cuisine", data.cuisine);
    formData.append("description", data.description);
    formData.append("image_cover", data.image_cover);
    formData.append("user_id", data.user_id);
    
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    
    try {
      const response = await axios.post(url, formData, config);
      navigate("/billing");
      console.log(response.data);
      localStorage.setItem("brand_id", response.data.data.id);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className=" h-screen bg-gray-100">
     <div className="pt-4">
       <Link to="/"><span className="ml-6 px-4 main-text font-russo text-6xl text-transparent bg-clip-text bg-gradient-to-br from-[#0f005a] to-[#0f79a3]">
            CKM
       </span>
      </Link>
      </div>
      <div className="flex flex-wrap justify-center item-center mt-4">
      <div className="flex items-center flex-col justify-center">
        <div>
        <div className="flex items-center justify-center mb-4">
          <h1 className="text-center font-russo text-4xl py-8 uppercase">
            &nbsp;{" "}
          </h1>
          <TypeAnimation
            sequence={[
              "welcome!",
              2000,
              "Let's Start By Creating Your Brand!",
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

        </div>
        {/* <h1 className="pb-16 text-center text-5xl text-transparent bg-clip-text bg-gradient-to-br from-[#0f005a] to-[#0f79a3]">
          Create Your Brand
        </h1> */}
        <div className="">
          <form
            onSubmit={handleSubmit}
            className=" rounded-3xl flex flex-wrap gap-5 justify-center h-[80%] "
          >
            <div className="">
              <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Kitchen Name
              </label>
              <input
                name="name"
                onChange={handleChange}
                value={data.name}
                type="text"
                className="text-center w-[350px] my-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Kitchen Name"
                required
              />
            </div>
            <div>
              <label className="text-center dark:text-white block text-lg font-medium text-gray-900 ">
                Cuisine
              </label>
              <select
                name="cuisine"
                onChange={handleChange}
                value={data.cuisine}
                className="text-center w-[350px] my-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Select" className="hidden">Select</option>
                <option value="American" className="text-center">American</option>
                <option value="Egyptian" className="text-center">Egyptian</option>
                <option value="Chinesse" className="text-center">Chinese</option>
                <option value="Oriental" className="text-center">Oriental</option>
                <option value="Japanesse" className="text-center">Japanese</option>
                <option value="Indonisian" className="text-center">Indonesian</option>
                <option value="French" className="text-center">French</option>
                <option value="Swedish" className="text-center">Swedish</option>
                <option value="English" className="text-center">English</option>
              </select>
            </div>
            <div className="block"> 
              <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <input
                name="description"
                onChange={handleChange}
                value={data.description}
                type="text"
                className="text-center w-[350px] my-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Describe Your Kitchen"
                required
              />
            </div>
            <div className="block">
              <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Brand cover
              </label>
              <input
                type="file"
                onChange={handleCover}
                className="text-center w-[350px] my-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                accept="image/jpeg, image/png, image/jpg, image/gif"
              />
              <input
                className="hidden"
                value={(data.user_id = localStorage.getItem("id"))}
              />
            </div>
            <div>
              <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Brand Logo
              </label>
              <input
                type="file"
                onChange={handleLogo}
                className="text-center w-[350px] my-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                accept="image/jpeg, image/png, image/jpg, image/gif"
              />
              <input
                className="hidden"
                value={(data.user_id = localStorage.getItem("id"))}
              />
            </div>
            
            <div className="flex justify-center mt-6">
              <input
                type="submit"
                className="text-white bg-gradient-to-br from-[#0f005a] to-[#0f79a3] hover:bg-blue-800 hover:scale-125 ease-liner duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 focus:ring-offset-2 font-medium text-lg rounded-lg p-3.5 cursor-pointer block mt-4 pb-[20px] h-[50px]"
                value="Create"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CreateBrand;
