import { useState } from "react";

const TradesPreviewMobile = ({ servicesData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="lg:hidden px-2 py-2">
      <div className="">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`border rounded-lg overflow-hidden  bg-white`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`w-full h-16 px-4 text-left flex items-center ${
                openIndex === index
                  ? "bg-blue-500 text-white rounded-lg"
                  : "bg-blue-50"
              }`}
            >
              <img src={service.icon} className="w-5 h-auto" alt="icons" />
              <span className="px-4">{service.name}</span>
            </button>

            {openIndex === index && (
              <div className="bg-white p-4 text-black">
                <h2 className="text-xl font-bold mb-2">{service.title()}</h2>
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
