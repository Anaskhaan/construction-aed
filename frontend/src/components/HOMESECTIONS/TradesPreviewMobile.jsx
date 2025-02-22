import { useState } from "react";
import { ChevronDown } from "lucide-react";

const TradesPreviewMobile = ({ servicesData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="lg:hidden p-6">
      <div className="space-y-4">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`border rounded-lg overflow-hidden ${
              openIndex === index ? "bg-[#0163BE] text-white" : "bg-white"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-4 text-left flex justify-between items-center"
            >
              <span>{service.name}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
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
