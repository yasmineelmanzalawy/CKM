import React, { useState } from "react";
import { ImUser, ImUserTie } from "react-icons/im";
import { Link } from "react-router-dom";


const Register = () => {
  const [client, setclient] = useState(false);
  const [owner, setowner] = useState(false);
  return (
    <div className="">
      <Link to="/">
      <span className="main-text inline-block font-russo pl-10 text-[74px] text-indigo-800">
        CKM
      </span>
      </Link>
      <div className="flex h-[80vh] items-center justify-center flex-col  ">
        <div className="flex gap-8 justify-center">
          <button onClick={()=>{
            setclient(true);
            setowner(false);
            localStorage.setItem("role","customer")
          }} className="py-20 px-6 rounded-3xl border-4  cursor-pointer hover:bg-gray-300 hover:scale-105 duration-300 ease-out  focus:border-black ">
            <div className="flex justify-center pb-4">
              <ImUser size={20} />
            </div>
            <h1 className=" font-jarkata text-xl">
              I'm a client looking to order some food {"🍕"}
            </h1>
          </button>

          <button
          onClick={()=>{
            setclient(false);
            setowner(true);
            localStorage.setItem("role","owner")
          }}
          className="py-20 px-28 rounded-3xl border-4 cursor-pointer hover:bg-gray-300 hover:scale-105 duration-300 ease-out focus:border-black ">
            <div className="flex justify-center pb-4">
              <ImUserTie size={20} />
            </div>
            <h1 className="font-jarkata text-xl  ">
              I'm a Kitchen Owner {"🍽️"}
            </h1>
          </button>
        </div>
        <div className="flex flex-col justify-center pt-16">
            
          <button
            disabled={!client || !owner }
            type="button"
            className={`w-80 flex py-3 font-jarkata justify-center items-center font  rounded-md text-xl border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800 ${!client && !owner ? " cursor-not-allowed bg-[#9aaa97] hover:bg-[#9aaa97] " : ""}`}
          >
            <a href="/signup">

            {client ? "Join as a user" : owner ? "Join as Kitchen Owner" : `Create Account` }
            
            </a>
          </button>
          
          <h6 className=" text-center font-jarkata text-sm pt-6 text-cyan-700">
            Already Registered <br />{" "}
            <Link className=" underline" to="/login">
              Log In instead
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Register;
