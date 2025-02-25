import { ArrowRight } from "lucide-react";

const ConstructionBanner = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 pt-20 mt-12 pb-5">
      {/* Main Banner */}
      <div className="bg-blue-600 rounded-lg p-8 flex flex-col-reverse md:flex-row items-center justify-between relative">
        <div className="bg-blue-400 w-24 h-24 rounded-full absolute top-24 left-10"></div>
        <div className="text-white z-10 max-w-xl">
          <h2 className="lg:text-3xl text-xl font-bold mb-4">
            Join Thousands of Contractors Who Trust Our Estimates!
          </h2>
          <p className="mb-6  text-blue-50">
            Stay ahead of the competition with fast, precise, and professional
            estimates—maximize your success today!
          </p>

          <button
            onClick={() => {
              const element = document.getElementById("GetQuote");
              if (element) {
                element.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="bg-white text-blue-600 px-6 py-2 rounded-3xl inline-flex items-center gap-2 hover:bg-blue-50 transition-colors"
          >
            Contact Us
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-96 w-80  h-24 absolute items-center lg:left-2/3 left-0 lg:-top-24 -top-44 ">
          <img src="/readybidimg.svg" alt="Banner" className="w-96 h-80" />
        </div>
        {/* Rotated SVG */}
        <div className="relative w-[230px] h-[80px] right-80  top-12 ">
          <svg
            className="absolute inset-0 w-full h-full rotate-[340deg]"
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 21.2 Q 17.67 10, 33.33 20 T 66.67 20 T 100 21"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="2 2"
              strokeOpacity="0.3"
              fill="none"
            />
            {/* Start Arrow */}
            <polygon points="0,20 3,18 3,22" fill="white" />
            {/* End Arrow */}
            <polygon points="100,20 97,18 97,22" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ConstructionBanner;
