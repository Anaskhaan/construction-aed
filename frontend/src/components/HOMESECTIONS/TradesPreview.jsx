import { ArrowRight } from "lucide-react";
import { useState } from "react";
import TradesPreviewMobile from "./TradesPreviewMobile";
import { Link } from "react-router-dom";
import { servicesData } from "../../Helpers/Data";

const TradesPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mt-10">
      <h2 className="font-semibold lg:text-4xl text-2xl px-2 text-center">
        Construction<span className="text-[#0163BE]"> Trades We</span> Cover
      </h2>

      <div className="w-full flex justify-center">
        <span className="text-sm text-center w-3/2 lg:w-1/2 text-gray-700">
          We specialize in providing construction takeoff services that support
          contractors in accurately estimating costs and quantities.
        </span>
      </div>

      <div className="hidden lg:flex flex-col lg:flex-row items-center justify-center gap-6 px-6 ">
        {/* Tabs */}
        <div className="w-full lg:w-1/4">
          <ul className="overflow-hidden ">
            {servicesData.map((service, index) => (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer flex items-center h-20 border-2 text-gray-700 border-white transition-transform duration-300 ${
                  activeIndex === index
                    ? "bg-blue-50 text-[#0163be] font-bold rounded-xl border-2 border-blue-50 scale-102 "
                    : "rounded-lg"
                } p-4`}
              >
                <img src={service.icon} className="w-5 h-auto" alt="icons" />
                <div className="ml-3 space-x-3 ">{service.name}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className=" lg:w-3/4 bg-[#EEF7FF] shadow-md rounded-md p-6 mt-6 h-[41rem]">
          <h2 className="text-[#0163be]">
            {servicesData[activeIndex].title()}
          </h2>
          <div className="relative h-full">
            <p className="text-gray-600 mb-4">
              {servicesData[activeIndex].content}.
            </p>
            <p className="text-gray-600 mb-6">
              {servicesData[activeIndex].content
                .split(". ")
                .slice(1)
                .join(". ")}
            </p>

            <img
              src={servicesData[activeIndex].image}
              alt={servicesData[activeIndex].title}
              className="absolute bottom-8 left-0 w-full lg:h-72 h-20 object-cover rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <TradesPreviewMobile servicesData={servicesData} />
      </div>

      <div className="mt-10 relative bg-[#0163be] w-11/12 mx-auto text-white p-8 rounded-md flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="lg:text-3xl text-xl relative font-semibold">
            Win More Bids with Accurate, Fast, and Professional Estimates!
          </h3>

          <div className=" absolute lg:top-8 top-2 lg:left-8 left-2 lg:w-24 w-36 h-36 lg:h-24 bg-white rounded-full opacity-35"></div>
          <p className="lg:text-md text-xs  lg:w-9/12 w-full  lg:mb-0 mb-4">
            Leave The Stress Of Managing Bids Behind! With Swift Takeoffs, Our
            Precise And Reliable Services Empower You To Win More Projects
            Effortlessly.
          </p>
        </div>
        <Link
          to="contact"
          className="flex text-sm bg-white  absolute lg:right-32 2xl:right-96 lg:bottom-16 bottom-2 text-black lg:px-8 px-2 py-1  rounded-3xl  hover:bg-gray-200"
        >
          Get A Free Quote <ArrowRight className="ml-2" />
        </Link>
        <div className="relative w-full flex justify-center">
          <svg
            className="lg:w-[200px] w-[180px] h-[40px]   absolute lg:left-56 2xl:left-96 lg:top-4 top-6  lg:rotate-[340deg] rotate-[130deg]"
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 21.2 Q 17.67 10, 33.33 20 T 66.67 20 T 100 21"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="3 3"
              strokeOpacity="0.5"
              fill="none"
            />
            <polygon points="0,20 3,18 3,22" fill="white" />
            <polygon points="100,20 97,18 97,22" fill="white" />
          </svg>
        </div>

        <div className=" absolute lg:bottom-2 lg:right-2 bottom-3 right-6 w-16  h-16 bg-white rounded-full opacity-35"></div>
      </div>
    </div>
  );
};

export default TradesPreview;
