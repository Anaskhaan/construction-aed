import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div>
      <div className="relative flex lg:flex-row  flex-col-reverse h-screen ">
        <div className="relative h-full   lg:w-1/3">
          <img
            src="/Hero1Image.png"
            alt="left-img"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        </div>

        <div className="relative h-full w-full lg:w-3/4">
          <img
            src="/156.webp"
            alt="right-img"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0  h-full w-full lg:w-1/2 bg-gradient-to-t lg:bg-gradient-to-r from-cyan-50 to-transparent pointer-events-none"></div>
        </div>

        <div className="absolute lg:top-28 top-96 lg:left-32 left-6 z-10 ">
          <h1 className="lg:text-5xl w-full lg:w-3/6 xl:w-3/6 2xl:w-3/6  text-2xl font-bold text-gray-900 leading-tight">
            Precision <span className="text-[#0163BE]">Estimating</span> for
            Confident Bidding.
          </h1>
          <p className="mt-2 lg:text-md text-lg lg:w-[50%] w-full text-[#444444] lg:font-semibold leading-tight">
            <span className="text-[#0163BE]">Swift Takeoffs</span> & estimating
            services deliver accurate, detailed cost assessments to help
            contractors and developers submit competitive bids with confidence.
          </p>
        </div>
        <div className="absolute lg:bottom-64 bottom-32  left-4  lg:left-32 z-10 ">
          <div className=" flex items-center  justify-center ">
            <div className=" flex items-center text-white rounded-3xl  justify-center px-3  py-1 lg:px-6 bg-[#0163BE]">
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
                className="lg:text-lg text-sm"
              >
                Get a Free Quote
              </button>{" "}
              <ArrowRight className=" mt-1 " />
            </div>
          </div>
        </div>
        {/* <div>
          <img
            src="/Hero-Vector.webp"
            className=" absolute left-0  bottom-0"
            alt=""
            height={300}
            width={300}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
