import React from "react";
import Image from "next/image";

const Body = () => {
  return (
    <div className="flex flex-col w-full h-full md:w-4/5 ">
      <div className="left flex flex-col md:justify-center md:items-baseline border-y-2">
        <div className="flex flex-row ">
          <h1 className="lg:text-4xl text-lg ml-5 md:ml-28 pt-10 md:mr-3  font-semibold ">
            Senior Product Designer
          </h1>
          <div className="pt-[46px] md:mr-2 ml-1 ">
             
            <Image
              className="mt-2"
              src="/ellipse.png"
              alt="gh"
              width={6}
              height={0}
            />
          </div>
          <div className=" text-[#888888] pt-[49px] text-xs"> posted 2 days ago </div>
          <div className="pt-[46px] ml-3">
            <button className="bg-[#ECFDF3] border-[#ABEFC6]  text-[#067647] text-xs py-1 px-2 rounded-full flex flex-row">
              <Image
                className="mt-1 mr-1"
                src="/ellipse1.png"
                alt="gh"
                width={6}
                height={0}
              />
              Open
            </button>
          </div>
        </div>
        <div className="md:pl-28 pl-7 pt-6 md:space-x-6 space-x-3 flex pb-6 flex-row">
          <div className="flex flex-row ">
            <Image
              className=" mr-1 "
              src="/pin.png"
              alt="gh"
              width={18}
              height={0}
            />
            <span className="text-[#5D5D5D] ">Delaware, USA</span>
          </div>
          <div>
            {" "}
            <Image
              className="mt-2"
              src="/ellipse.png"
              alt="gh"
              width={6}
              height={0}
            />{" "}
          </div>
          <div className="flex flex-row ">
            <Image
              className=" mr-1 "
              src="/coin.png"
              alt="gh"
              width={18}
              height={0}
            />
            <span className="text-[#5D5D5D] ">$300K-$400K</span>
          </div>
        </div>
      </div>
      <div className="left flex flex-col justify-center pb-9 w-full pt-10 items-baseline  border-y-2 sm:ml-6 ">
        <div className="grid md:grid-cols-4 grid-cols-2 md:space-x-7 md:mx-28  text-xs">
          <div className=" flex flex-col  ">
            <div className=" text-gray-400  "> Skills Required </div>
            <div className=" bg-white text-xs mr-28  py-1 mt-2 border border-gray-400 rounded flex flex-row ">
              <Image
                className=" ml-1 mr-1 rounded"
                src="/Figma.png"
                alt="gh"
                width={16}
                height={9}
              />
              <span className="mr-1">Figma</span>
            </div>
            <div className=" bg-white text-xs mr-20 py-1 mt-2 border border-gray-400 rounded flex flex-row">
              <Image
                className=" ml-1 mr-1 rounded"
                src="/illustrator.png"
                alt="gh"
                width={16}
                height={9}
              />
              <span className="mr-1">Adobe Illustrator</span>
            </div>
            <div className=" bg-white text-xs mr-28 py-1  mt-2 border border-gray-400 rounded flex flex-row">
              <Image
                className=" ml-1 mr-1 rounded"
                src="/xd.png"
                alt="gh"
                width={16}
                height={9}
              />
              <span className="mr-1">Adobe XD</span>
            </div>
          </div>

          <div className=" flex flex-col text-left text pl:10">
            <div className=" text-gray-400 "> Preffered Language </div>
            <div className="font-bold  ">English</div>
          </div>

          <div className=" flex flex-col pl-7 sm:mt-6 lg:mt-0">
            <div className=" text-gray-400 "> Type </div>
            <div className="font-bold">Full time</div>
          </div>

          <div className=" flex flex-col mt-0 sm:mt-6 lg:mt-0">
            <div className=" text-gray-400 ">Years of Experience </div>
            <div className="font-bold">3+ Years of Experience </div>
          </div>
        </div>
      </div>
      <div className="left flex flex-col justify-center w-full items-baseline mr-7 border-y-2">
        <h1 className=" mx-32 text-[#6E6D6D] mt-8 text-sm mb-2 font-semibold text-left">
          About the job
        </h1>
        <ol className="list-decimal text-[16px] ">
          <li className="mx-4 mb-1"> Handle the ui/ux research design</li>
          <li className="mx-4 mb-1"> Handle the ui/ux research design</li>

          <li className="mx-4 mb-1"> Handle the ui/ux research design</li>

          <li className="mx-4 mb-1"> Handle the ui/ux research design</li>
        </ol>
        <h1 className=" text-black text-[16px] mb-1 ">Benefits</h1>
        <ul className="list-disc">
          <li className="mx-7 mb-1"> Health insurance</li>
          <li className="mx-7 mb-1"> Health insurance</li>
        </ul>
        <h1 className="text-black text-[16px] mb-1">Schedule</h1>
        <ul className="list-disc">
          <li className="mx-7 mb-1"> Day shift</li>
        </ul>
        <h1 className="text-black text-[16px] mb-1 ">Supplement pay Types</h1>
        <ul className="list-disc">
          <li className="mx-7 mb-1"> Health insurance</li>
          <li className="mx-7 mb-1"> Health insurance</li>
        </ul>
        <h1 className="  text-black text-[16px] mb-10">
          Work Location: In Person
        </h1>
      </div>
      <div className="left flex flex-col  w-full h-full  justify-center items-baseline ">
        <div className="mx-20 mt-9  flex flex-row">
          <Image
            className="  rounded"
            src="/image.png"
            alt="gh"
            width={40}
            height={40}
          />
          <span className="text-xl ml-3 pt-2 ">Atlasian</span>
        </div>
        <div className=" flex flex-row  mt-4">
          <div className=" grid grid-cols-2 w-fit mx-1 ">
            <ul className="list-none ">
              <li className="text-[#6E6D6D] text-sm mb-2">Company Size</li>
              <li className="text-[16px] mb-6">1k - 2k Employees</li>
              <li className="text-[#6E6D6D] text-sm mb-2">Sector</li>
              <li className="text-[16px] mb-6">
                Information Technology, Infrastructure
              </li>
              <li className="text-[#6E6D6D] text-sm mb-2">Founded In</li>
              <li className="text-[16px] mb-6">2019</li>
            </ul>

            <div className=" ml-14">
              <ul className="list-none">
                <li className="text-[#6E6D6D] text-sm mb-2">Type</li>
                <li className="text-[16px] mb-6">Private</li>
                <li className="text-[#6E6D6D] text-sm mb-2">Funding</li>
                <li className="text-[16px] mb-6">Bootstrapped</li>
                <li className="text-[#6E6D6D] text-sm mb-2">Founded By</li>
                <li className="text-[16px] mb-6">
                  Scott Farquhar, Mike Cannon-Brookes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
