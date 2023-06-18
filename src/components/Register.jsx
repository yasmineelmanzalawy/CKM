import React, { useState } from "react";
import { ImUser, ImUserTie } from "react-icons/im";
import { Link } from "react-router-dom";


const Register = () => {
  const [client, setclient] = useState(false);
  const [owner, setowner] = useState(false);
  return (
    <div className="">
      <Link to="/">
      <span className="ml-6 px-4 main-text font-russo text-[74px] text-transparent bg-clip-text bg-gradient-to-br from-[#0f005a] to-[#0f79a3] ">
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
              <ImUser size={50} />
            </div>
            <h1 className=" text-center font-russo text-2xl">
              I'm a client looking to order <br /> some food {"🍕"}
            </h1>
          </button>

          <button
          onClick={()=>{
            setclient(false);
            setowner(true);
            localStorage.setItem("role","owner")
          }}
          className="py-20 px-14 rounded-3xl border-4 cursor-pointer hover:bg-gray-300 hover:scale-105 duration-300 ease-out focus:border-black ">
            <div className="flex justify-center pb-4">
              <ImUserTie size={50} />
            </div>
            <h1 className="font-russo text-2xl  ">
              I'm a Kitchen Owner {"🍽️"}
            </h1>
          </button>
        </div>
        <div className="flex flex-col justify-center pt-16">
            
          <button
            disabled={!client || !owner }
            type="button"
            className={`bg-gradient-to-br from-[#0f005a] to-[#0f79a3] text-white text-2xl p-4 rounded-2xl ${!client && !owner ? " cursor-not-allowed bg-[#9aaa97] hover:bg-[#9aaa97] " : ""}`}
          >
            <a href="/signup">

            {client ? "Join as a Customer" : owner ? "Join as Kitchen Owner" : `Create Account` }
            
            </a>
          </button>
          
          <h6 className="font-russo text-center text-sm pt-6 text-black">
            Already Registered <br />{" "}
            <Link className=" underline hover:text-[#0f79a3] " to="/login">
              Log In instead
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Register;
