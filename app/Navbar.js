import React from "react";
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
      <div className="navbar flex justify-between items-center py-3 px-5 ">
        <div className="flex justify-center items-center md:order-1 w-20 ">
          <button className="search text-sm bg-[#D9D9D9]  text-[#DC4A2D] font-semibold py-3 px-4 ">
            Logo
          </button>
        </div>
        <div className="feature static w-auto border-2 ml-20 bg-white  flex space-x-12  text-sm py-2 pl-2 pr-5 rounded-full md:order-2">
          <button className="search bg-[#DC4A2D]  text-white font-medium py-3 px-4 rounded-full flex flex-row">
          <Image className=" mt-[2px] mr-1 rounded" src="/baggage.png" alt="gh"  width={15} height={15}/>Jobs
          </button>
          <div className="  text-center my-3 flex flex-row">
          <Image className=" mt-[2px] mr-1 rounded" src="/msg.png" alt="gh"  width={15} height={15}/>
             <span className="text-[#B0B0B0]">Messages</span>
              </div>
          <div className="text-center my-3 flex flex-row">
          <Image className=" mt-[2px] mr-1 rounded" src="/income.png" alt="gh"  width={15} height={15}/>
          <span className="text-[#B0B0B0]">Payments</span> 
             </div>
        </div>

        <div className="cart text-center md:order-3 flex space-x-4">
          <div className="search block"> 
          <Image className=" mt-[2px] mr-1 rounded" src="/bell.png" alt="gh"  width={30} height={30}/>
          </div>
          <div>
            <Image className=" mt-[2px] mr-1 rounded-full" src="/image.png" alt="gh"  width={30} height={30}/>
          </div>
          <div className="mt-1">
          <Image className=" mt-[2px] mr-1 rounded-full" src="/down.png" alt="gh"  width={15} height={15}/>
          </div>
        </div>
      </div>


      
       
    
    </>
  );
};

export default Navbar;
