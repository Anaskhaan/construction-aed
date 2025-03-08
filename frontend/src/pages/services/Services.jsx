import React from "react";
import { servicesData } from "../../Helpers/Data";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const reducedContent = service.content.split(". ")[0];
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <img src={service.icon} alt={service.alt} className="w-10 h-auto mb-4" />
      {service.title()}
      <p className="text-gray-600 mt-2">{reducedContent}</p>
      <Link to={service.link}>
        <button className="mt-4 px-4 py-2 bg-[#0163be] text-white rounded-lg hover:bg-gray-800">
          See More
        </button>
      </Link>
    </div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-28">
      <div className="py-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#0163be]">
          Our Services
        </h1>
        <p className="px-4 max-w-3xl text-center">
          Enhance your bid success rate with our accurate and efficient
          construction takeoff services.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
