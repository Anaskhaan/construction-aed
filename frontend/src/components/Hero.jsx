import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div>
      <div className="relative flex h-screen border-b-8 border-[#0163be]">
        {/* Left Image with White Overlay */}
        <div className="relative h-full w-1/3">
          <img
            src="/Hero1Image.png"
            alt="left-img"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        </div>

        {/* Right Image */}
        <div className="relative h-full w-3/4">
          <img
            src="/HeroImage.png"
            alt="right-img"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-cyan-50 to-transparent pointer-events-none"></div>
        </div>

        {/* Heading and Paragraph */}
        <div className="absolute top-28 left-32 z-10 ">
          <h1 className="text-5xl font-bold text-gray-900">
            Precision <span className="text-[#0163BE]">Estimating</span> <br />{" "}
            Services for Seamless <br /> Project Success
          </h1>
          <p className="mt-4 text-md  text-[#444444]">
            At BidWorks Estimating, we deliver accurate, data-driven cost
            estimates <br /> that keep your projects on time and within budget.
          </p>
        </div>
        <div className="absolute bottom-44   left-32 z-10 ">
          <div className=" flex items-center  justify-center ">
            <div className=" flex items-center text-white rounded-3xl  justify-center py-1 px-6 bg-[#0163BE]">
              <button className="   mr-2  ">Get a Free Quote</button>{" "}
              <ArrowRight className=" mt-1 " />
            </div>
            <div className=" flex ml-4 items-center text-black rounded-3xl  justify-center py-1 px-6 bg-transparent  border border-[#0163BE]">
              <button className="   mr-2  ">Contact Us</button>{" "}
              <ArrowRight className=" mt-1 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
