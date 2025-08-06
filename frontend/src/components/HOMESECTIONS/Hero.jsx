import { ArrowRight, Shield, Clock, Award, Phone, FileText } from "lucide-react";
import { Link } from "react-router-dom";

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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-24 lg:py-10">
            
            <div className="relative lg:pl-8 lg:mt-10 -mt-4">
              {/* Main Image Container */}
              <div className="relative">
                {/* Professional Frame */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-3">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
  src="/156.webp"
  alt="Professional Construction Estimating Services"
  className="w-full h-[300px] lg:h-[400px] object-cover transition-transform duration-700 hover:scale-105 transform scale-x-[-1]"
/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0163BE]/30 via-transparent to-transparent"></div>
                    {/* Professional Overlay Badge */}
                    <div className="absolute bottom-6 left-6 right-6 space-y-2">
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-2 shadow-lg">
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

                <div className="absolute -bottom-6 -right-4 bg-gradient-to-r from-[#0163BE] to-blue-600 text-white rounded-2xl p-4 shadow-xl z-20">
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
            {/* Right Content Section */}
            <div className="lg:space-y-8 space-y-1  lg:pr-8">
              {/* Main Headline */}
              <div className="space-y-6 mb-4">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                  Precision
                  <div className="relative inline-block ml-4">
                    <span className="text-[#0163BE] relative z-10">
                      Estimating
                    </span>
                    <div className="absolute bottom-2 left-0 w-full h-3 bg-[#0163BE]/20 -skew-x-12 transform"></div>
                  </div>
                  <br />
                  <span className="text-gray-900 font-medium">
                    for Confident
                  </span>
                  <span className="text-[#0163BE] ml-4">Bidding</span>
                </h1>
              </div>

              {/* Professional Description */}
              <div className="lg:space-y-4 space-y-0">
                <p className="text-xl lg:text-md  text-gray-600 leading-tight font-bold">
                  Trusted by 300+ Contractors Nationwide
                </p>
                <p className="text-lg text-gray-500 leading-tight lg:mt-10 -mt-2">
                  With trade-specific expertise and a proven track record, Swift Takeoffs helps you bid with confidence, submit faster, and win more work.
                </p>
              </div>

              {/* Button Group */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="tel:6788256967" 
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0163BE] text-white rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <Link 
                  href="/getquote" 
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0163BE] border border-[#0163BE] rounded-full shadow-md hover:bg-gray-50 transition-colors duration-300"
                >
                  <FileText className="w-5 h-5" />
                  Upload Plans
                </Link>
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