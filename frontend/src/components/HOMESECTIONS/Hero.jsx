import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div>
      <div className="relative flex lg:flex-row  flex-col-reverse h-screen border-b-8 border-[#0163be]">
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
            src="/HeroImage.png"
            alt="right-img"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0  h-full w-full lg:w-1/2 bg-gradient-to-t lg:bg-gradient-to-r from-cyan-50 to-transparent pointer-events-none"></div>
        </div>

        <div className="absolute lg:top-28 top-96 lg:left-32 left-6 z-10 ">
          <h1 className="lg:text-5xl w-full lg:w-3/6 xl:w-3/6 2xl:w-3/6  text-2xl font-bold text-gray-900">
            Precision <span className="text-[#0163BE]">Estimating</span>{" "}
            Services for Seamless Project Success
          </h1>
          <p className="mt-4 lg:text-md text-sm  text-[#444444]">
            At Swift Takeoffs, we deliver accurate, data-driven cost estimates
            that keep your projects on time and within budget.
          </p>
        </div>
        <div className="absolute lg:bottom-44 bottom-36  left-2  lg:left-32 z-10 ">
          <div className=" flex items-center  justify-center ">
            <div className=" flex items-center text-white rounded-3xl  justify-center px-3  py-1 lg:px-6 bg-[#0163BE]">
              <button className="   mr-2 lg:text-lg text-sm  ">
                Get a Free Quote
              </button>{" "}
              <ArrowRight className=" mt-1 " />
            </div>
            <div className=" flex ml-4 items-center text-black rounded-3xl  justify-center py-1 px-6 bg-transparent  border border-[#0163BE]">
              <button className="   mr-2  ">Contact Us</button>{" "}
              <ArrowRight className=" mt-1 " />
            </div>
          </div>
        </div>
        <div>
          <img
            src="/Hero-Vector.webp"
            className=" absolute left-0  bottom-0"
            alt=""
            height={300}
            width={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
