import { ArrowRight } from "lucide-react";
import { useState } from "react";

const servicesData = [
  {
    name: "Concrete Estimating Service",
    icon: "/tradeicon1.webp",
    alt: "icon1",
    title: () => (
      <h1 className="text-2xl tracking-wider  font-bold text-black mb-4">
        Concrete
        <span className="text-[#0163be]">Estimating</span>
        Service
      </h1>
    ),

    content:
      " Concrete estimating services from BidWorks Estimating are crucial for accurately predicting the costs associated with concrete work, including materials, labor, and associated fees. Whether your project requires foundations, slabs, footings, or walls, BidWorks Estimating provides precise estimates to help you budget accurately, allocate resources effectively, and keep the project on track.  Concrete Estimating Services cover everything from calculating the volume of concrete needed to evaluating the costs of reinforcement materials, such as rebar and additives.  ",
    image: "tradespreview-1.webp",
    link: "#concrete-service",
  },
  {
    name: "Concrete Estimating Service",

    alt: "icon2",

    icon: "/tradeicon1.webp",
    title: () => (
      <h1 className="text-2xl  tracking-wider font-bold text-black mb-4">
        Concrete
        <span className="text-[#0163be]">Estimating</span>
        Service
      </h1>
    ),
    content:
      " Concrete estimating services from BidWorks Estimating are crucial for accurately predicting the costs associated with concrete work, including materials, labor, and associated fees. Whether your project requires foundations, slabs, footings, or walls, BidWorks Estimating provides precise estimates to help you budget accurately, allocate resources effectively, and keep the project on track.  Concrete Estimating Services cover everything from calculating the volume of concrete needed to evaluating the costs of reinforcement materials, such as rebar and additives.  ",
    image: "tradespreview-1.webp",
    link: "#masonry-service",
  },
  {
    name: "Concrete Estimating Service",

    alt: "icon3",

    icon: "/tradeicon1.webp",
    title: () => (
      <h1 className="text-2xl tracking-wider  font-bold text-black mb-4">
        Concrete
        <span className="text-[#0163be]">Estimating</span>
        Service
      </h1>
    ),
    content:
      " Concrete estimating services from BidWorks Estimating are crucial for accurately predicting the costs associated with concrete work, including materials, labor, and associated fees. Whether your project requires foundations, slabs, footings, or walls, BidWorks Estimating provides precise estimates to help you budget accurately, allocate resources effectively, and keep the project on track.  Concrete Estimating Services cover everything from calculating the volume of concrete needed to evaluating the costs of reinforcement materials, such as rebar and additives.  ",
    image: "tradespreview-1.webp",
    link: "#plumbing-service",
  },
];

const TradesPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row items-start gap-6 p-6 ">
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
          <li className="p-2 gap-2 text-center flex items-center justify-center text-white bg-[#0163be]  hover:underline cursor-pointer">
            See All <ArrowRight />
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="w-full lg:w-2/3 bg-[#EEF7FF] shadow-md rounded-md p-6">
        <h2 className=" ">{servicesData[activeIndex].title()}</h2>
        <div className=" relative">
          <p className="text-gray-600 mb-4">
            {servicesData[activeIndex].content.split(". ")[2]}.
          </p>
          <p className="text-gray-600 mb-6">
            {servicesData[activeIndex].content.split(". ").slice(1).join(". ")}
          </p>

          <a
            href={servicesData[activeIndex].link}
            className=" absolute  top-[135.5px] left-[360px] underline px-6 py-2  text-[#0163be] font-medium rounded "
          >
            View More
          </a>
        </div>
        <img
          src={servicesData[activeIndex].image}
          alt={servicesData[activeIndex].title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
      </div>
    </div>
  );
};

export default TradesPreview;
