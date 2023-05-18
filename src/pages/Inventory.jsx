import React from "react";


import { Stacked, Pie } from "../components";
import { ecomPieChartData,} from "../data/dummy";


const Inventory = () => {
  return (
    <div>
    <div className="flex flex-wrap justify-center mt-[10px]">
      <div className="flex flex-wrap gap-20 text-white">

        <div className="bg-[#231F6B] px-10 pt-2 pb-[60px] rounded-2xl text-center h-[105px]">Total Orders
        <p className="pt-2 text-center">0</p>
        <p className="pt-2 text-center">%from last week</p>
        </div>
        <div className="bg-gray bg-[#6790DD] px-10 pt-2 pb-[60px]  rounded-2xl text-center h-[105px]">Total Revenue
        <p className="pt-2 text-center">0</p>
        <p className="pt-2 text-center">%from last week</p>
        </div>
        <div className="bg-gray bg-[#78B9F2] px-10 pt-2 pb-[60px]  rounded-2xl text-center h-[105px]">Bounce Rate
        <p className="pt-2 text-center">0</p>
        <p className="pt-2 text-center">%from last week</p>
        </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-[80px] gap-[100px]">
       <div> <h2 className="flex text-3xl mb-[50px]">Sales Overview</h2>
        <Stacked width='500px' height='450px' className='text-center' /></div>
        <div>
        <h2 className="flex text-3xl mb-[50px]">Market Categorizes</h2>
         <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="200px" className='text-center'/>
       </div>
       </div>
      
    
    </div>
  );
};

export default Inventory;
