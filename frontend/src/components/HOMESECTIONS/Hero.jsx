// import { ArrowRight } from "lucide-react";

// const Hero = () => {
//   return (
//     <div>
//       <div className="relative flex lg:flex-row  flex-col-reverse h-screen ">
//         <div className="relative h-full   lg:w-1/3">
//           <img
//             src="/Hero1Image.png"
//             alt="left-img"
//             className="lg:h-full lg:w-full h-72 w-full object-cover"
//           />
//           <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
//         </div>

//         <div className="relative h-full w-full lg:w-3/4">
//           <img
//             src="/156.webp"
//             alt="right-img"
//             className="h-full w-full object-cover"
//           />
//           <div className="absolute top-0 left-0  h-full w-full lg:w-1/2 bg-gradient-to-t lg:bg-gradient-to-r from-cyan-50 to-transparent pointer-events-none"></div>
//         </div>

//         <div className="absolute lg:top-44 top-96 lg:left-32 left-6 z-10 ">
//           <h1 className="lg:text-5xl w-full lg:w-3/6 xl:w-3/6 2xl:w-3/6  text-2xl font-bold text-gray-900 leading-tight">
//             Precision <span className="text-[#0163BE]">Estimating</span> for
//             Confident Bidding.
//           </h1>
//           <p className="mt-2 lg:text-md text-lg lg:w-[50%] w-full text-[#444444] lg:font-semibold leading-tight">
//             <span className="text-[#0163BE]">Swift Takeoffs</span> & estimating
//             services deliver accurate, detailed cost assessments to help
//             contractors and developers submit competitive bids with confidence.
//           </p>
//         </div>
//         <div className="absolute lg:top-[26rem] top-[36rem] left-4 lg:left-32 z-10 ">
//           <div className=" flex items-center  justify-center ">
//             <div className=" flex items-center text-white rounded-3xl  justify-center px-3  py-1 lg:px-6 bg-[#0163BE]">
//               <button
//                 onClick={() => {
//                   const element = document.getElementById("GetQuote");
//                   if (element) {
//                     element.scrollIntoView({
//                       behavior: "smooth",
//                       block: "start",
//                     });
//                   }
//                 }}
//                 className="lg:text-lg text-sm"
//               >
//                 Get a Free Quote
//               </button>{" "}
//               <ArrowRight className=" mt-1 " />
//             </div>
//           </div>
//         </div>
//         {/* <div>
//           <img
//             src="/Hero-Vector.webp"
//             className=" absolute left-0  bottom-0"
//             alt=""
//             height={300}
//             width={300}
//           />
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { ArrowRight, Shield, Clock, Award } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50 overflow-hidden">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-40">
          <div className="absolute top-20 left-1/4 w-1 h-32 bg-gradient-to-b from-[#0163BE] to-transparent transform rotate-12"></div>
          <div className="absolute top-40 right-1/3 w-1 h-24 bg-gradient-to-b from-cyan-400 to-transparent transform -rotate-12"></div>
          <div className="absolute bottom-40 left-1/5 w-1 h-28 bg-gradient-to-b from-[#0163BE] to-transparent transform rotate-45"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#0163BE] rounded-full"></div>
          <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-cyan-400 rounded-full"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12 h-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
            {/* Left Content Section */}
            <div className="space-y-8 lg:pr-8">
              {/* Professional Badge */}
              <div className="inline-flex items-center space-x-3 bg-white rounded-full pl-2 pr-6 py-2 shadow-lg border border-gray-100">
                <div className="flex items-center justify-center w-8 h-8 bg-[#0163BE] rounded-full">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  Industry Leading Accuracy
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                  Precision
                  <div className="relative inline-block ml-4">
                    <span className="text-[#0163BE] relative z-10">
                      Estimating
                    </span>
                    <div className="absolute bottom-2 left-0 w-full h-3 bg-[#0163BE]/20 -skew-x-12 transform"></div>
                  </div>
                  <br />
                  <span className="text-gray-600 font-medium">
                    for Confident
                  </span>
                  <span className="text-[#0163BE] ml-4">Bidding</span>
                </h1>
              </div>

              {/* Professional Description */}
              <div className="space-y-4">
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
                  <span className="font-semibold text-[#0163BE]">
                    Swift Takeoffs
                  </span>{" "}
                  delivers precision-engineered cost assessments that empower
                  contractors and developers to submit winning bids with
                  complete confidence.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Our advanced estimating services combine industry expertise
                  with cutting-edge technology to ensure every project starts
                  with accurate financial foundations.
                </p>
              </div>

              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
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
                  className="group relative inline-flex items-center px-8 py-4 bg-[#0163BE] text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 text-lg">Get Free Quote</span>
                  <ArrowRight className="relative z-10 w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0163BE] to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-[#0163BE]" />
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-[#0163BE]" />
                    <span>No commitment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Section */}
            <div className="relative lg:pl-8 -mt-40 ">
              {/* Main Image Container */}
              <div className="relative">
                {/* Professional Frame */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-3">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src="/156.webp"
                      alt="Professional Construction Estimating Services"
                      className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0163BE]/30 via-transparent to-transparent"></div>

                    {/* Professional Overlay Badge */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-bold text-gray-900">
                              Professional Estimating
                            </h3>
                            <p className="text-sm text-gray-600">
                              Trusted by Industry Leaders
                            </p>
                          </div>
                          <div className="w-12 h-12 bg-[#0163BE] rounded-full flex items-center justify-center">
                            <Shield className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Professional Elements */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 z-20">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-gray-800">
                      Live Projects: 47
                    </span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#0163BE] to-blue-600 text-white rounded-2xl p-4 shadow-xl z-20">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5" />
                    <div>
                      <div className="text-sm font-bold">
                        Certified Estimators
                      </div>
                      <div className="text-xs opacity-90">
                        ISO 9001 Compliant
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background Accent */}
                <div className="absolute -z-10 top-6 left-6 w-full h-full bg-gradient-to-br from-[#0163BE]/5 to-cyan-100/30 rounded-2xl transform rotate-1"></div>
                <div className="absolute -z-20 top-12 left-12 w-full h-full bg-gradient-to-br from-cyan-100/20 to-[#0163BE]/5 rounded-2xl transform -rotate-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0163BE] to-transparent"></div>

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Crect width='1' height='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      ></div>
    </div>
  );
};

export default Hero;
