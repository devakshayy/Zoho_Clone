import React from "react";
import { PiPaperclipHorizontalLight } from "react-icons/pi";
import { SiTicktick } from "react-icons/si";

const Customers = () => {
  const tick = (
    <>
      <SiTicktick className="text-[14px] text-[#408DFB]" />
    </>
  );

  return (
    <>
      <div className="px-[20px] py-[75px] border-b-2 bg-white">
        <div className="flex flex-col pt-4 gap-6  items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="text-[23px] font-medium">
              Business is no fun without people
            </div>
            <div className="text-[14px]">
              Create and manage your contacts,all in one place.
            </div>
          </div>
          <button className="px-4 py-2 text-[16px] rounded-md text-white uppercase bg-[#408DFB]">
            Create new customer
          </button>
          <div className="text-[14px] cursor-pointer text-[#408DFB]">
            click here to import customers from file
          </div>
        </div>
        <div className="logo-container mt-8 flex items-center justify-center gap-2">
          <span className="text-[14px]">or using</span>
          <PiPaperclipHorizontalLight className="text-[18px] cursor-pointer" />
          <div className="w-[20px] flex items-center  cursor-pointer h-[20px]">
            <img src="/gsuit.png" alt="gsuitLogo" />
          </div>
          <div className="w-[25px] flex items-center cursor-pointer h-[20px]">
            <img src="/office365.png" alt="office365.png" />
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-[#f9f9fb] items-center gap-2">
        <div className="flex flex-col items-center gap-2  py-[25px]">
          <div>Types of contacts</div>
          <div className="w-[400px] h-[250px]">
            <img src="/customerpageimage.png" alt="" />
          </div>
        </div>

        <div className="w-[800px] border-t-2 flex mb-20 h-[260px]">
          <div className="w-1/4 h-full "></div>

          <div className="pt-[50px]">
            <div className="text-xs pb-3">In the Contact module, you can:</div>
            <ul className="flex flex-col gap-1">
              <li className="flex gap-2 text-[16px] items-center">
                {" "}
                {tick}
                Invite your customers to the Customer Portal
              </li>
              <li className="flex gap-2 text-[16px] items-center">
                {tick}
                Run customer statement report
              </li>
              <li className="flex gap-2 text-[16px] items-center">
                {tick}
                Set a currency to invoice your customers.{" "}
                <span> Learn More</span>
              </li>
              <li className="flex gap-2 text-[16px] items-center">
                {tick}
                View transaction history for each customer
              </li>
              <li className="flex gap-2 text-[16px] items-center">
                {tick}
                Request feedback for your service
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
