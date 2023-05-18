import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Loginpage = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
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
		<div className="">
			<div className="">
				<div className="">
					<form  onSubmit={handleSubmit}>
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
						{error && <div >{error}</div>}
						<button type="submit">
						 <a href="/controlunit">
                         Sign in</a> 
						</button>
					</form>
				</div>
				<div>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button">
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Loginpage;