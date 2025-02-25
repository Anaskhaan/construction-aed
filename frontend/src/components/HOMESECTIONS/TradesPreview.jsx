import { ArrowRight } from "lucide-react";
import { useState } from "react";
import TradesPreviewMobile from "./TradesPreviewMobile";
import { Link } from "react-router-dom";

const servicesData = [
  {
    name: "Concrete Estimating Service",
    icon: "/tradeicon1.webp",
    alt: "icon1",
    title: () => (
      <h1 className="text-2xl font-bold mb-4">Concrete Estimating Service</h1>
    ),

    content:
      " Concrete estimating services from Swift Takeoffs are crucial for accurately predicting the costs associated with concrete work, including materials, labor, and associated fees. Whether your project requires foundations, slabs, footings, or walls, Swift Takeoffs provides precise estimates to help you budget accurately, allocate resources effectively, and keep the project on track.  Concrete Estimating Services cover everything from calculating the volume of concrete needed to evaluating the costs of reinforcement materials, such as rebar and additives.  ",
    image: "tradespreview-1.svg",
    // link: "#concrete-service",
  },
  {
    name: "Masonry Estimating Service",

    alt: "icon2",

    icon: "/tradeicon1.webp",
    title: () => (
      <h1 className="text-2xl   font-bold text-black mb-4">
        Masonary Estimating Service
      </h1>
    ),
    content:
      "Masonry estimating services from Swift Takeoffs provide project managers with detailed cost projections for all masonry-related work, including brick, block, stone, and mortar. Whether you’re building walls, facades, or decorative elements, Swift Takeoffs ensures that both material and labor costs are meticulously planned, reducing the risk of budget overruns.Masonry Estimating Services cover everything from the selection of masonry materials to the calculation of installation labor. With Swift Takeoffs, you can be confident that your masonry work is thoroughly accounted for, ensuring that your project stays on schedule and within budget.",
    image: "tradespreview-1.webp",
    // link: "#masonry-service",
  },
  {
    name: "Plumbing Estimating Service",

    alt: "icon3",

    icon: "/tradeicon1.webp",
    title: () => (
      <h1 className="text-2xl font-bold  text-black mb-4">
        Plumbing Estimating Service
      </h1>
    ),
    content:
      "Plumbing estimating services from Swift Takeoffs provide detailed cost projections for the installation of water supply, drainage, and waste systems. These services ensure that all plumbing-related needs are included in the project budget, allowing for efficient installation and long-term operation of water systems.Plumbing Estimating Services include a comprehensive breakdown of costs for pipes, fixtures, valves, and connectors, ensuring that all plumbing materials and labor costs are included in the project’s financial plan. With Swift Takeoffs, you’ll receive accurate estimates for all aspects of plumbing work, from water supply installation to drainage system design.",
    image: "tradespreview-1.webp",
    // link: "#plumbing-service",
  },
  {
    name: "Earthwork Estimating Service",

    alt: "icon3",

    icon: "/tradeicon1.webp",
    title: () => (
      <h1 className="text-2xl font-bold text-black mb-4">
        Earthwork Estimating Service
      </h1>
    ),
    content:
      "Earthwork estimating services from Swift Takeoffs provide detailed cost projections for excavation, grading, and site preparation. These services ensure that all earthmoving activities are included in the project budget, allowing for efficient site preparation and foundation work.Earthwork Estimating Services include a comprehensive breakdown of costs for materials, labor, and equipment needed for excavation, grading, and site preparation. With Swift Takeoffs, you’ll receive accurate estimates that help ensure your site is properly prepared for construction, minimizing risks and avoiding delays.",
    image: "tradespreview-1.png",
    // link: "#plumbing-service",
  },
  {
    name: "Electrical Estimating Service",

    alt: "icon3",

    icon: "/tradeicon1.webp",
    title: () => (
      <h1 className="text-2xl font-bold text-black mb-4">
        Electrical Estimating Service
      </h1>
    ),
    content:
      "Electrical estimating services from Swift Takeoffs provide detailed cost projections for the installation of wiring, lighting, and power distribution systems. These services ensure that all electrical needs are included in the project budget, allowing for safe and efficient installation of electrical systems.Electrical Estimating Services include a comprehensive breakdown of costs for wiring, fixtures, switches, and electrical panels, ensuring that all electrical components are accounted for in the project’s financial plan. With Swift Takeoffs, you’ll receive accurate estimates for all aspects of electrical work, from wiring installation to power distribution design.",
    image: "tradespreview-1.webp",
    // link: "#plumbing-service",
  },
  {
    name: "Utilities Estimating Service",

    alt: "icon3",

    icon: "/tradeicon1.webp",
    title: () => (
      <h1 className="text-2xl font-bold text-black mb-4">
        Utilities Estimating Service
      </h1>
    ),
    content:
      "Utilities estimating services from Swift Takeoffs provide detailed cost projections for the installation of water, sewer, gas, and electrical infrastructure. These services ensure that all necessary utility connections are included in the project budget, allowing for efficient planning and installation.Utilities Estimating Services include a comprehensive breakdown of costs for materials, labor, and equipment needed to connect water, sewer, gas, and electrical systems to the building. With Swift Takeoffs, you’ll receive accurate estimates that help ensure all utility connections are properly planned and integrated into the overall project.",
    image: "tradespreview-1.webp",
    // link: "#plumbing-service",
  },
  {
    name: "Specialties Estimating Service",

    alt: "icon3",

    icon: "/tradeicon1.webp",
    title: () => (
      <h1 className="text-2xl font-bold text-black mb-4">
        Specialties Estimating Service
      </h1>
    ),
    content:
      "Specialties estimating services from Swift Takeoffs cover a wide range of non-standard construction elements such as partitions, signage, and built-in furnishings. These services ensure that specialized materials and labor are accounted for in the project budget, preventing costly oversights or delays.Specialties Estimating Services provide accurate cost projections for customized or specialized project components that fall outside the usual scope of construction, ensuring that your project stays on budget while meeting specific functional and aesthetic needs. Swift Takeoffs ensures that every specialty item is fully integrated into the project’s financial plan.",
    image: "tradespreview-1.webp",
    // link: "/plumbing-service",
  },
  {
    name: "Finishes Estimating Services",

    alt: "icon3",

    icon: "/tradeicon1.webp",
    title: () => (
      <h1 className="text-2xl font-bold text-black mb-4">
        Finishes Estimating Services
      </h1>
    ),
    content:
      "Finishes estimating services from Swift Takeoffs are essential for projecting the costs related to the aesthetic and functional finishing components of your project, such as painting, flooring, and wall coverings. These services help you ensure that the final stages of construction are completed efficiently and within budget, delivering the desired look and feel of the finished space.Finishes Estimating Services include detailed cost projections for interior and exterior finishes, ensuring that all aesthetic and functional elements are accounted for in the financial plan. With Swift Takeoffs, you’ll receive accurate estimates for all finishing work, helping you deliver a high-quality project on time and within budget.",
    image: "tradespreview-1.webp",
    // link: "/plumbing-service",
  },
];

const TradesPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h1 className="flex items-center justify-center lg:text-3xl text-lg font-semibold py-3">
        Our Construction trade <span className="text-blue-600"> Services</span>
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
                {/* <img src={service.icon} alt={service.alt} /> */}
                <div className=" mt-3 ml-3 space-x-3">{service.name}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="w lg:w-2/3 bg-[#EEF7FF] shadow-md rounded-md p-6">
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
          className="flex text-sm bg-white  absolute lg:right-32 lg:bottom-16 bottom-2 text-black lg:px-8 px-2 py-1  rounded-3xl  hover:bg-gray-200"
        >
          Get A Free Quote <ArrowRight className="ml-2" />
        </Link>
        <div className="relative w-full flex justify-center">
          <svg
            className="lg:w-[200px] w-[180px] h-[40px]   absolute lg:left-56 lg:top-4 top-6  lg:rotate-[340deg] rotate-[130deg]"
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
