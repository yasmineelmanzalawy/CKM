 import { useState } from "react";
import axios from "../axios.config";
import { Link , useNavigate } from "react-router-dom";

const Loginpage = () => {
  
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

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
            // console.log(data);
            console.log(data.data.token)
          })
          .catch((error) => {
            console.log(error);
          });
          
      });
  };
  return (
    <div className="">
      <div className="">
        <div className="">
          <form onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className=""
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className=""
            />
            {error && <div>{error}</div>}
            <button type="submit">Sign in</button>
          </form>
        </div>
        <div>
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
