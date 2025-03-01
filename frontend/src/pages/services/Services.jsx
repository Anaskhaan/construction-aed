import React from "react";
import { servicesData } from "../../Helpers/Data";

const ServiceCard = ({ service }) => {
    const reducedContent = service.content.split(". ")[0];
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <img src={service.icon} alt={service.alt} className="w-16 h-16 mb-4" />
      {service.title()}
      <p className="text-gray-600 mt-2">{reducedContent}</p>
      <button className="mt-4 px-4 py-2 bg-[#0163be] text-white rounded-lg hover:bg-gray-800">
        See More
      </button>
    </div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-black">
        Our Services
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
