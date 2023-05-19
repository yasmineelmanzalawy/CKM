import { useState } from "react";
import axios from "../axios.config";
import { Link, useNavigate } from "react-router-dom";
import sign from "../data/sign.png";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "api/auth/register";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
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
      <div className="my-[45px] flex justify-center">
        <div className="w-0 md:w-0 lg:w-[500px]">
          <img src={sign} alt="" />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <h1 className="text-center text-[#0C147A] text-[40px] display: block mt-[50px]">
              Create an account
            </h1>
            <h1 className="text-center mt-[50px] mb-[-20px] text-[#0C147A]">Name</h1>
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={handleChange}
              value={data.name}
              required
              className="text-center display: block border-[3px] border-[#0C147A] my-[20px] mx-auto rounded-[10px] h-[50px] w-[250px]"
            />
            <h1 className="text-center mb-[-20px] text-[#0C147A]">Email</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="text-center display: block border-[3px] border-[#0C147A] my-[20px] mx-auto rounded-[10px] h-[50px] w-[250px]"
            />
            <h1 className="text-center mb-[-20px] text-[#0C147A]">Password</h1>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="text-center display: block border-[3px] border-[#0C147A] my-[20px] mx-auto rounded-[10px] h-[50px] w-[250px]"
            />
            {error && <div className="">{error}</div>}
            <button type="submit" className="text-center display: block mx-auto rounded-[10px] h-[40px] w-[100px] bg-[#0C147A] text-white mt-[20px] my-[20px] text-center">Sign Up</button>
            <h1 className="text-center">Already have an account?</h1>
            <Link to="/login">
              <button type="button" className="text-center display: block mx-auto text-center underline underline-offset-1">Log in</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
