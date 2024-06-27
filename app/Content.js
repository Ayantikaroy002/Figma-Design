import React from "react";
import Image from "next/image";
const Content = () => {
  return (
    <>
      <div className=" w-96 border-2 hidden md:block">
        <div className="mt-8  mx-6">
          <div className="flex flex-row">
            <button className="bg-transparent text-sm bg-[#fef2ef] text-[#DC4A2D] font-semibold  py-2 px-7 mr-4 border border-[#DC4A2D] rounded flex flex-row">
              <Image
                className=" mr-1 rounded"
                src="/dustbin.png"
                alt="gh"
                width={15}
                height={15}
              />
              Delete job
            </button>
            <button className="bg-[#DC4A2D] text-white font-bold py-2 text-sm px-9 rounded flex flex-row">
              <Image
                className=" mt-[3px] mr-2 rounded"
                src="/pencil.png"
                alt="gh"
                width={15}
                height={15}
              />
              Edit job
            </button>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row pb-6 border-b-2">
              <div className=" mx-10 pt-10 flex flex-row">
                <Image
                  className=" mt-[3px] mr-2 rounded"
                  src="/users.png"
                  alt="gh"
                  width={20}
                  height={20}
                />
                <span className="text-[#4F4F4F]" > Applicants </span>
              </div>

              <div className=" mx-10 pt-10 font-semibold">400</div>
            </div>
            <div className="flex flex-row pb-6 border-b-2">
              <div className=" mx-10 pt-8 flex flex-row ">
                <Image
                  className="  mr-1 rounded"
                  src="/user.svg"
                  alt="gh"
                  width={25}
                  height={25}
                />
                <span className="text-[#4F4F4F]"> Matches </span>
              </div>

              <div className=" ml-14 pt-8 font-semibold">100</div>
            </div>
            <div className="flex flex-row pb-6 border-b-2">
              <div className=" mx-10 pt-10 flex flex-row">
                <Image
                  className="  mr-2 rounded"
                  src="/msg.png"
                  alt="gh"
                  width={20}
                  height={10}
                />
                <span className="text-[#4F4F4F]"> Messages </span>
              </div>

              <div className=" mx-10 pt-10 font-semibold">147</div>
            </div>

            <div className="flex flex-row pb-6 border-b-2">
              <div className=" mx-10 pt-10 flex flex-row ">
                <Image
                  className="  mr-2 rounded"
                  src="/view.png"
                  alt="gh"
                  width={20}
                  height={10}
                />
                <span className="text-[#4F4F4F]"> Views </span>
              </div>

              <div className=" ml-[70px] pt-10 font-semibold">800</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
