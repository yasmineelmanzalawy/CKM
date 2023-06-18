import React from 'react'
// import './FoodCourt.css'
import pexel from '../data/pexels-chan-walrus-958545.jpg'
import { Link , useNavigate } from "react-router-dom";
import restaurant from '../data/restaurant.png'
import search from '../data/search-interface-symbol.png'
import axios from '../axios.config';
import { useEffect , useState } from 'react';

const FoodCourt = () => {
  const navigate = useNavigate()
    const[brand,setbrand]=useState([]);
    useEffect(() => {
        const getBrand = async () => {
            const url = "api/all-brands";
          const { data } = await axios.get(url);
          setbrand(data);
        };
        getBrand();
      }, []);
      console.log(brand)
      const logout = (e) => {
        const url = "api/auth/logout";
        axios
          .get("sanctum/csrf-cookie")
          .then(async () => {
            axios
              .post(url)
              .then((data) => {
                localStorage.removeItem("token");
                navigate("/")
              })
              .catch((error) => {
                console.log(error);
              });
          });
      };
  return (
    <div className='bg-[white] h-full'>

<div className='mb-8'>
        <Link to="/">
        <span className="main-text p-10 font-russo text-[74px] text-[#E55807] text-gradient-to-r from-[#5A38FD]">
        CKM
      </span></Link>
        <h1 className='pl-[218px] mt-[-65px] text-[30px]'>Food Court</h1>
        <h1 className='text-center mt-[-35px] mb-[-15px]'>Trusted By <span className='text-[#E55807]'>120</span> Restaurants</h1>
       <div dir="rtl" className='mt-[-40px]'> <button
              href="/"
              onClick={logout}
              className=" align-right m-4 w-42 bg-[#E55807] font-russo text-white rounded p-2 px-6 hover:bg-[#6b2f0a] hover:scale-125 ease-liner duration-300"
            >
              {" "}
              logout
            </button></div>
    </div>
    
   
       {brand.map((x,i)=>{
        return <button onClick={()=>{
          
          localStorage.setItem("test",x.id);
          localStorage.setItem("user_id",x.user_id);
          navigate("/ckmkitchens")
        }} key={i} className='p-6 flex flex-wrap justify-center mx-auto '>
        <div className='grid grid-cols-2 gap-4 w-[1000px] bg-[#ffdfcc] block rounded-3xl'>
            <div className='m-auto'>    
                
                <button className='rounded w-[300px] align-center bg-[#E55807] m-2 mt-2 hover:bg-[#6b2f0a] text-[white] hover:text-white py-2 drop-shadow-2xl  duration-300' >{x.name}</button>
                <p className='rounded w-[300px] h-[150px] text-center bg-[#fae9de] m-2 p-2 drop-shadow-2xl'> {x.description}</p>
            </div>
           <div><img src={x.image_cover} alt={x.image_cover} className='rounded-r-3xl'/></div>
        </div>
    <br/>
    
    </button>
       })}

    </div>
  )
}

export default FoodCourt