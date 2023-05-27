import React from "react";
import {
  ecomPieChartData,
} from "../data/dummy";

import { Stacked, Pie } from "../components";

const Partners = () => {
  return (
    <div>
      <div className="flex flex-wrap display: inline mt-[80px] ml-[200px]">
        <div className="w-[vw]">
          <div className="my-[20px] mx-[20px] flex flex-wrap justify-between gap-2">
            <div className="mx-3 w-[150px] text-[#170761] text-[30px] px-10 pt-2 pb-[60px] rounded-2xl text-center h-[110px] ">
              Uber Eats
            </div>
            <div className="mx-3 w-[200px] bg-white border border-4 border-[#170761] px-10 pt-2 pb-[60px] rounded-2xl text-center h-[110px]">
              Revenue
              <p className="pt-2 text-center">$15,250</p>
            </div>
            <div className="mx-3 w-[200px] bg-white border border-4 border-[#170761] px-10 pt-2 pb-[60px] rounded-2xl text-center h-[110px]">
              Unpaid Invoice
              <p className="pt-2 text-center">17</p>
            </div>
          </div>

          <div className="my-[50px] mx-[20px] flex flex-wrap justify-between gap-5 ">
            <div className="mx-3 w-[150px] text-[#170761] text-[30px] px-10 pt-2 pb-[60px] rounded-2xl text-center h-[110px] mt-[25px]">
              Mrsool
            </div>
            <div className="mx-3 w-[200px] bg-white border border-4 border-[#170761] px-10 pt-2 pb-[60px] rounded-2xl text-center h-[110px]">
              Revenue
              <p className="pt-2 text-center">$15,250</p>
            </div>
            <div className="mx-3 w-[200px] g-white border border-4 border-[#170761] px-10 pt-2 pb-[60px] rounded-2xl text-center h-[110px]">
              Unpaid Invoice
              <p className="pt-2 text-center">17</p>
            </div>
          </div>

          <div className="my-[50px] mx-[20px] flex flex-wrap justify-between gap-5 ">
            <div className="mx-3 w-[150px] text-[#170761] text-[30px] px-10 pt-2 pb-[60px] rounded-2xl text-center h-[110px] mt-[25px]">
              Talabat
            </div>
            <div className="mx-3 w-[200px] bg-white border border-4 border-[#170761] px-10 pt-2 pb-[60px] rounded-2xl text-center h-[110px]">
              Revenue
              <p className="pt-2 text-center">$15,250</p>
            </div>
            <div className="mx-3 w-[200px] bg-white border border-4 border-[#170761] px-10 pt-2 pb-[60px] rounded-2xl text-center h-[110px]">
              Unpaid Invoice
              <p className="pt-2 text-center">17</p>
            </div>
          </div>
        </div>
        <div className="mt-[55px]">
          <div>
            {" "}
            <Pie
              id="pie-chart"
              data={ecomPieChartData}
              legendVisiblity={false}
              height="300px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
