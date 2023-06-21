import React, { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { Button } from ".";
import { userProfileData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar2.jpg";
import { useNavigate } from "react-router";
import axios from "../axios.config";
import { ThreeDots } from "react-loader-spinner";

const UserProfile = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { currentColor } = useStateContext();

  useEffect(() => {
    const getUser = async () => {
      const url = "api/me";
      const data = await axios.get(url);
      setUser(data.data.user);
      setIsLoading(false);
    };
    getUser();
  }, []);

  const logout = (e) => {
    const url = "api/auth/logout";
    axios.get("sanctum/csrf-cookie").then(async () => {
      axios
        .post(url)
        .then((data) => {
          localStorage.removeItem("token");
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center mt-6">
          <ThreeDots color="#6366F1" height={80} width={80} />
        </div>
      ) : (
        <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
          <img className="rounded-full h-24 w-24" src={avatar} alt="user-profile" />
          <div>
            <p className="font-semibold text-xl dark:text-gray-200">{user.name}</p>
            <p className="text-gray-500 text-[18px] dark:text-gray-400">{user.role}</p>
            <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">{user.email}</p>
          </div>
        </div>
      )}
     
      <div className="mt-3">
        <button
          type="button"
          onClick={logout}
          className="m-4 ml-[-50px] w-[80%] bg-gradient-to-br from-[#0f005a] to-[#0f79a3] text-center font-russo text-white rounded p-2 px-6 hover:bg-indigo-900 hover:scale-125 ease-liner duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
