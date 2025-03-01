import { ArrowRight } from "lucide-react";
import { useState } from "react";
import TradesPreviewMobile from "./TradesPreviewMobile";
import { Link } from "react-router-dom";
import { servicesData } from "../../Helpers/Data";

const TradesPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h1 className="flex items-center justify-center font-bold lg:text-3xl text-2xl text-[#0163BE] py-3">
        Our Trades
      </h1>
      <div className="w-full flex justify-center">
        <span className="text-sm text-center w-3/2 lg:w-1/2 ">
          We specialize in providing construction takeoff services that support
          contractors in accurately estimating costs and quantities.
        </span>
      </div>

      <div className="hidden lg:flex flex-col lg:flex-row items-start gap-6 p-6 ">
        {/* Tabs */}
        <div className="w-full lg:w-1/3">
          <ul className="bg-[white] shadow-md rounded-md overflow-hidden">
            {servicesData.map((service, index) => (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer flex items-center   p-4 border-b border-gray-200 ${
                  activeIndex === index ? "bg-blue-50 font-semibold" : ""
                } hover:bg-blue-50`}
              >
                <img src={service.icon} alt={service.alt} />
                <div className=" mt-3 ml-3 space-x-3">{service.name}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="w lg:w-2/3 bg-[#EEF7FF] shadow-md rounded-md p-6 h-[43rem]">
          <h2 className="">{servicesData[activeIndex].title()}</h2>
          <div className=" relative">
            <p className="text-gray-600 mb-4">
              {servicesData[activeIndex].content.split(". ")[2]}.
            </p>
            <p className="text-gray-600 mb-6">
              {servicesData[activeIndex].content
                .split(". ")
                .slice(1)
                .join(". ")}
            </p>
          </div>

          <img
            src={servicesData[activeIndex].image}
            alt={servicesData[activeIndex].title}
            className="w-full h-64 object-cover rounded-md mb-6"
          />
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
    </>
  );
};

export default TradesPreview;
