import { MoveRight } from "lucide-react";
import { data } from "../../Helpers/Data";
import WhyChooseBidworks from "./WhyChooseBidworks";
import SearchTrades from "../../components/SearchingTrades/SearchTrades";
import { Link } from "react-router-dom";

const TradesPage = ({ route }) => {
  const serviceData = data.find((item) => item.route === route);

  if (!serviceData) {
    return <div>Service not found</div>;
  }

  const {
    src2,
    title,

    description,
    image,
    title1,
    title2,
    li1,
    li2,
    li3,
    li4,
    li5,
    title3,
    Des3,
    Des1,
  } = serviceData;

  return (
    <div className="py-24">
      <Link to="/trades">
        <button className="text-black hover:underline lg:mt-12 mt-24 lg:ml-20 ml-12  lg:text-xl text-md ">
          Back to Trades Page
        </button>
      </Link>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-[90%] my-8">
          <div className="col-span-2 p-4">
            {/* Content for the first section */}

            <img
              src={image}
              alt="service image"
              className="w-full hidden lg:block  h-auto rounded-lg"
            />
            <div className="py-4 text-gray-700">
              <h1 className="text-2xl font-bold text-gray-900">
                {title1}{" "}
                <span className="text-[#0163BE]"> Estimating Services</span>
              </h1>
              <p className="mt-4">{description}</p>
              <p className="mt-4">{Des1}</p>
              <img
                src={image}
                alt="service image"
                className="w-full md:hidden h-auto rounded-lg"
              />

              <h2 className="mt-6 text-xl font-bold text-[#202020]">
                {title2}
              </h2>
              <ul className="mt-4 list-disc pl-6">
                <li>{li1()}</li>
                <li className="mt-2">{li2()}</li>
                <li className="mt-2">{li3()}</li>
                <li className="mt-2">{li4()}</li>
                <li className="mt-2">{li5 && li5()}</li>
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
