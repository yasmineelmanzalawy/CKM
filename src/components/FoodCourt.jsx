import React from 'react'
// import './FoodCourt.css'
import pexel from '../data/pexels-chan-walrus-958545.jpg'
import { Link , useNavigate } from "react-router-dom";
import restaurant from '../data/restaurant.png'
import search from '../data/search-interface-symbol.png'


const FoodCourt = () => {
  return (
    <div className='bg-[#edded1] h-full'>

<div className=''>
        <Link to="/">
        <span className="main-text  p-10 font-russo text-[74px] text-[#794101] text-gradient-to-r from-[#5A38FD]">
        CKM
      </span></Link>
        <h1 className='pl-[218px] mt-[-65px] text-[30px]'>Food Court</h1>
        <h1 className='text-center mt-[-35px] mb-[-15px]'>Trusted By <span className='text-[#794101]'>120</span> Restaurants</h1>
       
    </div>
    <div className='p-6 flex flex-wrap justify-center rounded'>
            <div className='grid grid-cols-2 gap-4 w-[1000px] bg-[#d9c6b8] block'>
                <div className='m-auto'>    
                    
                    <Link to="/ckmkitchens"><button className='rounded w-[300px] align-center bg-[#735443] m-2 mt-2 hover:bg-[#6b2f0a] text-[#edded1] hover:text-white py-2 drop-shadow-2xl' >Kitchen name</button></Link>
                    <p className='rounded w-[300px] h-[150px] text-center bg-[#edded1] m-2 p-2 drop-shadow-2xl'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis placeat, cumque architecto necessitatibus deleniti optio aliquam official.</p>
                </div>
               <div><img src={pexel} alt="" /></div>
            </div>
        <br/>
        
        </div>
       
    <div className='m-6 flex flex-wrap justify-center rounded'>
            <div className='grid grid-cols-2 gap-4 w-[1000px] bg-[#d9c6b8] block'>
                <div className='m-auto'>    
                    <button className='rounded w-[300px] align-center bg-[#735443] m-2 mt-2 hover:bg-[#6b2f0a] text-[#edded1] hover:text-white py-2 drop-shadow-2xl' >Kitchen name</button>
                    <p className='rounded w-[300px] h-[150px] text-center bg-[#edded1] m-2 p-2 drop-shadow-2xl'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis placeat, cumque architecto necessitatibus deleniti optio aliquam official.</p>
                </div>
               <div><img src={pexel} alt="" /></div>
            </div>
        <br/>
        
        </div>
       
    <div className='m-6 flex flex-wrap justify-center rounded'>
            <div className='grid grid-cols-2 gap-4 w-[1000px] bg-[#d9c6b8] block'>
                <div className='m-auto'>    
                    <button className='rounded w-[300px] align-center bg-[#735443] m-2 mt-2 hover:bg-[#6b2f0a] text-[#edded1] hover:text-white py-2 drop-shadow-2xl' >Kitchen name</button>
                    <p className='rounded w-[300px] h-[150px] text-center bg-[#edded1] m-2 p-2 drop-shadow-2xl'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis placeat, cumque architecto necessitatibus deleniti optio aliquam official.</p>
                </div>
               <div><img src={pexel} alt="" /></div>
            </div>
        <br/>
        
        </div>
       
    <div className='m-6 flex flex-wrap justify-center rounded'>
            <div className='grid grid-cols-2 gap-4 w-[1000px] bg-[#d9c6b8] block'>
                <div className='m-auto'>    
                    <button className='rounded w-[300px] align-center bg-[#735443] m-2 mt-2 hover:bg-[#6b2f0a] text-[#edded1] hover:text-white py-2 drop-shadow-2xl' >Kitchen name</button>
                    <p className='rounded w-[300px] h-[150px] text-center bg-[#edded1] m-2 p-2 drop-shadow-2xl'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis placeat, cumque architecto necessitatibus deleniti optio aliquam official.</p>
                </div>
               <div><img src={pexel} alt="" /></div>
            </div>
        <br/>
        
        </div>
       
    <div className='p-6 flex flex-wrap justify-center rounded'>
            <div className='grid grid-cols-2 gap-4 w-[1000px] bg-[#d9c6b8] block'>
                <div className='m-auto'>    
                    <button className='rounded w-[300px] align-center bg-[#735443] m-2 mt-2 hover:bg-[#6b2f0a] text-[#edded1] hover:text-white py-2 drop-shadow-2xl' >Kitchen name</button>
                    <p className='rounded w-[300px] h-[150px] text-center bg-[#edded1] m-2 p-2 drop-shadow-2xl'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis placeat, cumque architecto necessitatibus deleniti optio aliquam official.</p>
                </div>
               <div><img src={pexel} alt="" /></div>
            </div>
        <br/>
        
        </div>
       

    </div>
  )
}

export default FoodCourt