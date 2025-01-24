import { MoveRight } from "lucide-react";
import WhyChooseBidworks from "../trades/WhyChooseBidworks";
import SearchTrades from "../../components/SearchingTrades/SearchTrades";
import { ServicesData } from "../../Helpers/Data";


const TradesPage = ({ route }) => {
  const serviceData = ServicesData.find((item) => item.route === route);


  const {
    src2,
    title,
    description,
    image,
    title2,
    li1,
    li2,
    li3,
    li4,
    li5,
    title3,
    Des3,
  } = serviceData;
  

  return (
    <div>
      
      <div className="w-full h-48 relative">
        {/* Black Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Image */}
        <img
          src={src2}
          alt="service image"
          className="w-full h-full object-cover"
        />

        {/* Text Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-4">
          <h1 className="text-4xl font-bold">{title} <span >Services</span></h1>
          <span className="text-lg flex justify-center items-center gap-4">
            Home <MoveRight /> {title}<span className=" -ml-3">Services</span>
          </span>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-4 w-[90%] my-8">
          <div className="col-span-2 p-4">
            {/* Content for the first section */}
            <img
              src={image}
              alt="service image"
              className="w-full h-auto rounded-lg"
            />
            <div className="py-4 text-gray-700">
              <h1 className="text-2xl font-bold text-gray-900">
                {title}{" "}
                <span className="text-[#0163BE]">  Services</span>
              </h1>
              <p className="mt-4">{description()}</p>

              <h2 className="mt-6 text-xl font-bold text-[#202020]">
                {title2}
              </h2>
              <ul className="mt-4 list-disc pl-6">
                <li>
                 
                  {li1()}
                </li>
                <li className="mt-2">
                
                  {li2()}
                </li>
                <li className="mt-2">
                 
                  {li3()}
                </li>
                <li className="mt-2">
                
                  {li4()}
                </li>
                <li className="mt-2">
                
                { li5 && (li5())  }
              </li>
              </ul>
            </div>
            <div className="py-6">
              <h1 className="text-2xl font-bold text-gray-900">
                {title3} <span className="text-[#0163BE]"> Services</span>
              </h1>
              <p className="mt-4">{Des3}</p>
            </div>
            <WhyChooseBidworks />
          </div>
          <div className="col-span-1 bg-white p-4">
            {/* Content for the second section */}
            <SearchTrades />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradesPage;
