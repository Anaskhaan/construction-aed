import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  Search,
  DollarSign,
  ClipboardCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

function GetStarted() {
  const [openTab, setOpenTab] = useState(1);

  const toggleTab = (tabIndex) => {
    setOpenTab(tabIndex === openTab ? null : tabIndex);
  };

  const steps = [
    {
      id: 1,
      title: "Submit Your Drawing Plans",
      icon: <FileText className="text-white" size={20} />,
      content:
        "You can easily upload your drawing plans in various formats. Simply email your construction drawings to info@swifttakeoffs.com We value your convenience, so feel free to choose the method that works best for you. Our team will review your project scope and any specific details for filing out the form.",
    },
    {
      id: 2,
      title: "We Review The Plans",
      icon: <Search className="text-white" size={20} />,
      content:
        "Our expert team carefully reviews all submitted plans and documents to understand your project requirements. We analyze every detail to ensure accurate estimation.",
    },
    {
      id: 3,
      title: "Get A Quote",
      icon: <DollarSign className="text-white" size={20} />,
      content:
        "Based on our thorough review, we prepare a detailed quote for your project. Our quotes are comprehensive and transparent, with no hidden costs.",
    },
    {
      id: 4,
      title: "Receive an Estimate",
      icon: <ClipboardCheck className="text-white" size={20} />,
      content:
        "You'll receive a complete estimate document that breaks down all costs and quantities for your construction project. This detailed estimate helps you plan your budget effectively.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center ">
      <div className="w-full bg-white  overflow-hidden">
        <div className="p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            How to Begin{" "}
            <span className="text-[#0163be]">Construction Estimation &</span>
            <br />
            <span className="text-[#0163be]">Quantity Takeoffs</span> with Us
          </h1>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Left side - Images */}
            <div className="md:w-2/5">
              <div className="grid  h-full">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Construction plans"
                  className="rounded-lg object-cover h-full w-full col-span-2"
                />
              </div>
            </div>

            {/* Right side - Steps */}
            <div className="md:w-3/5">
              <div className="space-y-4">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full flex items-center p-4 text-left focus:outline-none"
                      onClick={() => toggleTab(step.id)}
                    >
                      <div className="flex items-center">
                        <div className="bg-[#0163be] rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          <span className="text-white font-medium">
                            {step.id}
                          </span>
                        </div>
                        <h3 className="font-semibold text-lg">{step.title}</h3>
                      </div>
                      <div className="ml-auto">
                        {openTab === step.id ? (
                          <ChevronUp className="text-gray-500" size={20} />
                        ) : (
                          <ChevronDown className="text-gray-500" size={20} />
                        )}
                      </div>
                    </button>

                    {openTab === step.id && (
                      <div className="px-4 pb-4 pt-1">
                        <p className="text-gray-600">{step.content}</p>
                        {step.id === 1 && (
                          <Link to="/getquote">
                            <button className="mt-3 bg-[#0163be] text-white px-4 py-2 rounded-md text-sm hover:bg-[#0163be] transition-colors">
                              Upload Plans Here
                            </button>
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
