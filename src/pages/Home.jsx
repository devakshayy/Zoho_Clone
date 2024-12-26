import React from "react";
import Background from "/home-header-bg-invoice-fcc5ed7e19.svg";
import { PiBuildingsThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import project from "../assets/project.png";
import salesdues from "../assets/salesdues.png";
import salesAndExpense from "../assets/salesandexpense.png";
import topexpenses from "../assets/topexpenses.png";
import totalreceivables from "../assets/totalreceivables.png";
import Footer from "../components/Footer";

const Home = () => {
  let sectionStyle = {
    width: "100%",
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
  };
  return (
    <>
      <div
        className="w-full  h-[130px] pt-3 px-2 bg-white border-b-2 sticky top-0 flex flex-col justify-between"
        style={sectionStyle}
      >
        <div className="flex items-center px-1  w-[200px] gap-2">
          <div className="bg-white p-1 flex items-center justify-center ring-1 rounded-sm w-7 h-7">
            <PiBuildingsThin />
          </div>
          <div className="flex flex-col py-1 items-start">
            <span className="text-xs font-semibold">Hello, user</span>
            <span className="text-[14px] font-extralight">Copmay name</span>
          </div>
        </div>
        <div>
          <div className="flex pb-[5px] gap-2">
            <Link
              className="text-xs focus:underline
                       underline-offset-6 decoration-4
                       decoration-[#408dfb]"
            >
              Dashboard
            </Link>
            <Link
              className="text-xs focus:underline
                      underline-offset-6 decoration-4 
                    decoration-[#408dfb]"
            >
              Announcements
            </Link>
            <Link
              className="text-xs focus:underline 
                      underline-offset-6 decoration-4
                     decoration-[#408dfb]"
            >
              Recent Updates
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-2 py-6 gap-2 tables">
        <div className="w-3/4">
          <img src={totalreceivables} alt="totalreceivables" />
        </div>
        <div className="w-3/4">
          <img src={salesAndExpense} alt="salesAndExpense" />
        </div>
        <div className="w-3/4 flex">
          <div>
            <img src={project} alt="project" />
          </div>
          <div>
            <img src={topexpenses} alt="topexpenses" />
          </div>
        </div>
        <div className="w-[485px]">
          <img src={salesdues} alt="salesDues" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
