 import { useState } from "react";
import axios from "../axios.config";
import { Link , useNavigate } from "react-router-dom";
import { useUserStore } from "../hooks/username";
import log from "../data/log.png"

const Loginpage = (props) => {
  
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const setUserData = useUserStore((state) => state.setUserData)
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "api/auth/login";

    axios
      .get("sanctum/csrf-cookie")
      .then(async () => {
        axios
          .post(url, data)
          .then((data) => {
            localStorage.setItem("token", data.data.token);
            navigate("/controlunit");
            console.log(data.data);
            console.log(data.data.token)
            setUserData(data.data.user.name)
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };
 
  return (
    <div className="">
      <div className="border-4 border-[#0C147A] my-[50px] flex justify-center">
        <div className="w-0 md:w-0 lg:w-[500px]"><img src={log} alt="" /></div>
        <div className="">
          <form className="" onSubmit={handleSubmit}>
            <h1 className="text-center text-[#0C147A] text-[40px] display: block mt-[50px]">Login to Your Account</h1>
            <h1 className="text-center mt-[50px] mb-[-20px] text-[#0C147A]">Email</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="text-center display: block border-[3px] border-[#0C147A] my-[20px] mx-auto rounded-[10px] h-[50px] w-[250px]"
            />
            <h1 className="text-center mt-[20px] mb-[-20px] text-[#0C147A]">Password</h1>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="text-center display: block border-[3px] border-[#0C147A] my-[20px] mx-auto rounded-[10px] h-[50px] w-[250px]"
            />
            {error && <div>{error}</div>}
            <button className="text-center display: block mx-auto rounded-[10px] h-[40px] w-[100px] bg-[#0C147A] text-white mt-[70px] my-[20px] text-center" type="submit">Log In</button>
        <div>
          <h1 className="text-center">You don't have an account? </h1>
          <Link to="/signup">
            <button className="text-center display: block mx-auto text-center underline underline-offset-1" type="button">Sign Up</button>
          </Link>
        </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;