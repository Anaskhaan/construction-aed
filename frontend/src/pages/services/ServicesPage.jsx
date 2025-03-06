import { Check, MoveRight } from "lucide-react";
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
    li6,
    li7,
    li8,
    title3,
    Des3,
    Q,
    A,
  } = serviceData;

  return (
    <div className="py-28">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-[90%] my-8">
          <div className="col-span-2 p-4">
            <img
              src={image}
              alt="service image"
              className="w-full hidden lg:block h-auto rounded-lg"
            />
            <div className="py-4 text-gray-700">
              <h1 className="text-2xl font-bold text-gray-900">
                {title} <span className="text-[#0163BE]"> Services</span>
              </h1>
              <p className="mt-4">{description()}</p>
              <img
                src={image}
                alt="service image"
                className="w-full md:hidden mt-1  h-auto rounded-lg"
              />
              {Q && (
                <h1 className="text-black font-bold text-md lg:text-xl mt-4">
                  {Q}
                </h1>
              )}
              {A && <p className="mt-2 lg:text-md text-sm ">{A}</p>}

              <h2 className="mt-6 text-xl font-bold text-[#202020]">
                {title2}
              </h2>
              <ul className="mt-4 list-disc pl-6">
                <li>{li1()}</li>
                <li className="mt-2">{li2()}</li>
                <li className="mt-2">{li3()}</li>
                <li className="mt-2">{li4()}</li>
                {li5 && <li className="mt-2"> {li5()}</li>}
                {li6 && <li className="mt-2"> {li6()}</li>}

                {li7 && <li className="mt-2"> {li7()}</li>}
                {li8 && <li className="mt-2"> {li8()}</li>}
              </ul>
            </div>
            <div className="py-6">
              <h1 className="text-2xl font-bold text-gray-900">
                {title3} <span className="text-[#0163BE]"> Services</span>
              </h1>
              <ul>
                <li className="mt-4">{Des3()}</li>
              </ul>
            </div>
            <WhyChooseBidworks />
          </div>
          <div className="col-span-1 bg-white p-4">
            <SearchTrades />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradesPage;
