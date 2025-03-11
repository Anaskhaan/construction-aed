import { useState } from "react";

const TradesPreviewMobile = ({ servicesData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="lg:hidden px-2 py-2">
      <div className="space-y-1">
        {servicesData.map((service, index) => (
          <div key={index} className={`overflow-hidden  bg-white `}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`w-full h-16 px-4  text-left rounded-xl flex items-center border-2 border-gray-100   transition-transform duration-300 ${
                openIndex === index
                  ? "bg-blue-50 text-[#0163be] font-bold rounded-xl"
                  : "bg-white rounded-lg text-gray-500"
              }`}
            >
              <img src={service.icon} className="w-5 h-auto" alt="icons" />
              <h2 className="px-4">{service.name}</h2>
            </button>

            {/* 
                  
                   */}

            {openIndex === index && (
              <div className="bg-white p-4 text-black">
                <p className="text-gray-600 mb-4">{service.content}</p>
                {/* <a
                  href={service.link}
                  className="underline text-[#0163be] font-medium"
                >
                  View More
                </a> */}
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-64 object-cover rounded-md mt-4"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradesPreviewMobile;
