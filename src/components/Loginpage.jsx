import { useState } from "react";
import axios from "../axios.config";
import { Link , useNavigate } from "react-router-dom";
import log from "../data/log.png";

const Loginpage = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New state variable

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "api/auth/login";
    
    setIsLoading(true); // Set isLoading to true when submitting the form

    axios
      .get("sanctum/csrf-cookie")
      .then(async () => {
        axios
          .post(url, data)
          .then((data) => {
            localStorage.setItem("token", data.data.token);
            localStorage.setItem("id", data.data.user.id);
            localStorage.setItem("role", data.data.user.role);

            if (localStorage.getItem("role") === "owner") {
              navigate("/controlunit");
              window.location.reload();
            } else if (localStorage.getItem("role") === "customer") {
              navigate("/foodcourt");
              window.location.reload();
            }
            
            console.log(data.data);
            console.log(data.data.token);
          })
          .catch((error) => {
            if (
              error.response &&
              error.response.status >= 400 &&
              error.response.status <= 500
            ) {
              setError(error.response.data.message);
            }
          })
          .finally(() => {
            setIsLoading(false); // Set isLoading to false when the request is completed
          });
      });
  };
 
  return (
    <div className="">
      <Link to="/">
        <span className="ml-6 px-4 main-text font-russo text-[74px] text-transparent bg-clip-text bg-gradient-to-br from-[#0f005a] to-[#0f79a3]">
          CKM
        </span>
      </Link>
      <div className="mt-[-20px] font-russo flex justify-center">
        <div className="w-0 pr-4 md:w-0 lg:w-[450px]"><img src={log} alt="" /></div>
        <div className="">
          <form className="pl-4" onSubmit={handleSubmit}>
            <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-br from-[#0f005a] to-[#0f79a3] text-[40px] display: block mt-[50px]">
              Login to your account
            </h1>
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
            {error && <div className="text-center text-red-600 text-xs underline font ">{error}</div>}
            <button
              className="display: block mx-auto rounded-[10px] h-[40px] w-[100px]  bg-gradient-to-br from-[#0f005a] to-[#0f79a3]  hover:scale-125 ease-liner duration-300 text-white mt-[70px] my-[20px] text-center"
              type="submit"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-1 ml-1" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.418 0 8-3.582 8-8h-4a4 4 0 11-8 0V5.291z" />
                  </svg>
                  Loading...
                </span>
              ) : (
                'Log In'
              )}
            </button>
            <div>
              <h1 className="text-center">You don't have an account? </h1>
              <Link to="/signup">
                <button className="display: block mx-auto text-center underline underline-offset-1" type="button">Sign Up</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
