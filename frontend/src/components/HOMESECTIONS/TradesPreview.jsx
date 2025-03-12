// import { ArrowRight } from "lucide-react";
// import { useState } from "react";
// import TradesPreviewMobile from "./TradesPreviewMobile";
// import { Link } from "react-router-dom";
// import { servicesData } from "../../Helpers/Data";

// const TradesPreview = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="mt-10">
//       <h2 className="font-semibold lg:text-4xl text-2xl px-2 text-center">
//         Construction<span className="text-[#0163BE]"> Trades We</span> Cover
//       </h2>

//       <div className="w-full flex justify-center">
//         <span className="text-sm text-center w-3/2 lg:w-1/2 text-gray-700">
//           We specialize in providing construction takeoff services that support
//           contractors in accurately estimating costs and quantities.
//         </span>
//       </div>

//       <div className="hidden lg:flex flex-col lg:flex-row items-center justify-center gap-6 px-6 ">
//         {/* Tabs */}
//         <div className="w-full lg:w-1/4">
//           <ul className="overflow-hidden ">
//             {servicesData.map((service, index) => (
//               <li
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 className={`cursor-pointer flex items-center h-20 border-2 text-gray-700 border-white transition-transform duration-300 ${
//                   activeIndex === index
//                     ? "bg-blue-50 text-[#0163be] font-bold rounded-xl border-2 border-blue-50 scale-102 "
//                     : "rounded-lg"
//                 } p-4`}
//               >
//                 <img src={service.icon} className="w-5 h-auto" alt="icons" />
//                 <div className="ml-3 space-x-3 ">{service.name}</div>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Content */}
//         <div className=" lg:w-3/4 bg-[#EEF7FF] shadow-md rounded-md p-6 mt-6 h-[41rem]">
//           <h2 className="text-[#0163be]">
//             {servicesData[activeIndex].title()}
//           </h2>
//           <div className="relative h-full">
//             <p className="text-gray-600 mb-4">
//               {servicesData[activeIndex].content}.
//             </p>
//             <p className="text-gray-600 mb-6">
//               {servicesData[activeIndex].content
//                 .split(". ")
//                 .slice(1)
//                 .join(". ")}
//             </p>

//             <img
//               src={servicesData[activeIndex].image}
//               alt={servicesData[activeIndex].title}
//               className="absolute bottom-8 left-0 w-full lg:h-72 h-20 object-cover rounded-md"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="block lg:hidden">
//         <TradesPreviewMobile servicesData={servicesData} />
//       </div>

//       <div className="mt-10 relative bg-[#0163be] w-11/12 mx-auto text-white p-8 rounded-md flex items-center justify-between">
//         <div className="flex flex-col gap-2">
//           <h3 className="lg:text-3xl text-xl relative font-semibold">
//             Win More Bids with Accurate, Fast, and Professional Estimates!
//           </h3>

//           <div className=" absolute lg:top-8 top-2 lg:left-8 left-2 lg:w-24 w-36 h-36 lg:h-24 bg-white rounded-full opacity-35"></div>
//           <p className="lg:text-md text-xs  lg:w-9/12 w-full  lg:mb-0 mb-4">
//             Leave The Stress Of Managing Bids Behind! With Swift Takeoffs, Our
//             Precise And Reliable Services Empower You To Win More Projects
//             Effortlessly.
//           </p>
//         </div>
//         <Link
//           to="contact"
//           className="flex text-sm bg-white  absolute lg:right-32 2xl:right-96 lg:bottom-16 bottom-2 text-black lg:px-8 px-2 py-1  rounded-3xl  hover:bg-gray-200"
//         >
//           Get A Free Quote <ArrowRight className="ml-2" />
//         </Link>
//         <div className="relative w-full flex justify-center">
//           <svg
//             className="lg:w-[200px] w-[180px] h-[40px]   absolute lg:left-56 2xl:left-96 lg:top-4 top-6  lg:rotate-[340deg] rotate-[130deg]"
//             viewBox="0 0 100 40"
//             preserveAspectRatio="none"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M0 21.2 Q 17.67 10, 33.33 20 T 66.67 20 T 100 21"
//               stroke="white"
//               strokeWidth="2"
//               strokeDasharray="3 3"
//               strokeOpacity="0.5"
//               fill="none"
//             />
//             <polygon points="0,20 3,18 3,22" fill="white" />
//             <polygon points="100,20 97,18 97,22" fill="white" />
//           </svg>
//         </div>

//         <div className=" absolute lg:bottom-2 lg:right-2 bottom-3 right-6 w-16  h-16 bg-white rounded-full opacity-35"></div>
//       </div>
//     </div>
//   );
// };

// export default TradesPreview;

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import TradesPreviewMobile from "./TradesPreviewMobile";
import { Link } from "react-router-dom";

const TradesPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const servicesData = [
    {
      name: "Concrete Estimating",
      icon: "/icons/2.concrete.svg",
      title: () => "Concrete Estimating",
      content:
        "Concrete Estimating Services cover everything from calculating the volume of concrete needed to evaluating the costs of reinforcement materials, such as rebar and additives. With Swift Takeoffs, you can be confident that your concrete costs are planned down to the finest detail, ensuring that all structural components are handled efficiently.",
      image: "/tradespre/concrete.webp",
    },
    {
      name: "Electrical Estimating",
      icon: "/icons/18.electrical.svg",
      title: () => "Electrical Estimating",
      content:
        "Electrical estimating services from Swift Takeoffs provide detailed cost projections for the installation of wiring, lighting, and power distribution systems. These services ensure that all electrical needs are included in the project budget, allowing for safe and efficient installation of electrical systems.",
      image: "/tradespre/mep.webp",
    },
    {
      name: "Masonary Estimating",
      icon: "/icons/3.masonry.svg",
      title: () => "Masonary Estimating",
      content:
        "Masonry Estimating Services cover everything from the selection of masonry materials to the calculation of installation labor. With Swift Takeoffs, you can be confident that your masonry work is thoroughly accounted for, ensuring that your project stays on schedule and within budget.",
      image: "/tradespre/masonry.webp",
    },
    {
      name: "Plumbing Estimating",
      icon: "/icons/16.plumbing.svg",
      title: () => "Plumbing Estimating",
      content:
        "Plumbing Estimating Services include a comprehensive breakdown of costs for pipes, fixtures, valves, and connectors, ensuring that all plumbing materials and labor costs are included in the project’s financial plan. With Swift Takeoffs, you’ll receive accurate estimates for all aspects of plumbing work, from water supply installation to drainage system design.",
      image: "/tradespre/plumbing.webp",
    },
    {
      name: "Wood, Plastics & Composities",
      icon: "/icons/5.wood.svg",
      title: () => "Wood, Plastics & Composities",
      content:
        "Wood, Plastics, and Composites estimating services from Swift Takeoffs provide precise cost projections for projects requiring wood framing, millwork, plastic components, and composite materials. These services cover both structural and aesthetic applications, ensuring that all elements are accounted for in the project budget.",
      image: "/tradespre/wood.webp",
    },
    {
      name: "Openings Estimating",
      icon: "/icons/7.openings.svg",
      title: () => "Openings Estimating",
      content:
        "Openings estimating services from Swift Takeoffs provide accurate cost projections for doors, windows, skylights, and other openings in a building. These services help ensure that all fenestration and access points are included in the project’s financial plan, enabling efficient resource allocation and installation.",
      image: "/tradespre/opening.webp",
    },
    {
      name: "Specialties Estimating",
      icon: "/icons/9.specialities.svg",
      title: () => "Specialties Estimating",
      content:
        "Specialties estimating services from Swift Takeoffs cover a wide range of non-standard construction elements such as partitions, signage, and built-in furnishings. These services ensure that specialized materials and labor are accounted for in the project budget, preventing costly oversights or delays.",
      image: "/tradespre/specialities.webp",
    },
    {
      name: "Finishies Estimating",
      icon: "/icons/8.finishes.svg",
      title: () => "Finishies Estimating",
      content:
        "Finishes estimating services from Swift Takeoffs are essential for projecting the costs related to the aesthetic and functional finishing components of your project, such as painting, flooring, and wall coverings. These services help you ensure that the final stages of construction are completed efficiently and within budget, delivering the desired look and feel of the finished space.",
      image: "/tradespre/finishes.webp",
    },
    {
      name: "Exterier Improvments",
      icon: "/icons/20.exterior.svg",
      title: () => "Exterier Improvments",
      content:
        "Exterior Improvements estimating services from Swift Takeoffs provide detailed cost projections for landscaping, paving, and other outdoor elements of your construction project. These services ensure that all exterior features are included in the project budget, allowing for efficient planning and execution of outdoor spaces",
      image: "/tradespre/finishes.webp",
    },
  ];

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

      <div className="hidden lg:flex flex-col lg:flex-row items-center justify-center gap-6 px-6">
        <div className="w-full lg:w-1/4">
          <ul className="overflow-hidden">
            {servicesData.map((service, index) => (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer flex items-center h-[75px] border-2 text-gray-700 border-white transition-transform duration-300 ${
                  activeIndex === index
                    ? "bg-blue-50 text-[#0163be] font-bold rounded-xl border-2 border-blue-50 scale-102"
                    : "rounded-lg"
                } p-4`}
              >
                <img src={service.icon} className="w-5 h-auto" alt="icons" />
                <div className="ml-3 space-x-3">{service.name}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-3/4 bg-[#EEF7FF] shadow-md rounded-md px-6 py-4 h-[42rem]">
          <h2 className="text-[#0163be] lg:text-2xl text-xl">
            {servicesData[activeIndex].title()}
          </h2>
          <div className="relative h-full">
            <p className="text-gray-600 mb-4">
              {servicesData[activeIndex].content}
            </p>
            <img
              src={servicesData[activeIndex].image}
              alt={servicesData[activeIndex].title()}
              className="absolute bottom-8 left-0 w-full lg:h-[29rem] h-20 object-cover rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <TradesPreviewMobile servicesData={servicesData} />
      </div>
    </div>
  );
};

export default TradesPreview;
