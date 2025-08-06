import {
  ShieldCheck,
  Timer,
  Headphones,
  BadgeDollarSign,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
const About = () => {
  const cards = [
    {
      icon: <ShieldCheck size={40} className="text-[#0163BE]" />,
      title: "Registered",
      description:
        "We are a registered company in the USA, operating for the past 7 years.",
    },
    {
      icon: <Timer size={40} className="text-[#0163BE]" />,
      title: "Fast Turnaround",
      description:
        "Our rapid turnaround ensures you have ample time before the bid deadline.",
    },
    {
      icon: <Headphones size={40} className="text-[#0163BE]" />,
      title: "Technical Support",
      description:
        "Our team is fully equipped to address and resolve any inquiries you may have.",
    },
    {
      icon: <BadgeDollarSign size={40} className="text-[#0163BE]" />,
      title: "Accurate Pricing",
      description:
        "We consider current market volatility and price fluctuations to provide estimates.",
    },
  ];

  return (
    <div className="relative">
      {/* About Us Section */}
      <section className="flex flex-col md:grid md:grid-cols-2 items-center  -mt-20 md:mt-0 lg:mt-0">
        <div className="relative flex justify-center items-center h-full mb-6 md:mb-0">
          <img
            src="/About-us.webp"
            alt="About Us"
            className="rounded-md w-full z-20 md:w-11/12 "
          />
        </div>

        <div className=" top-12 flex flex-col justify-center text-left  px-4 md:px-12  md:text-left">
          <h2 className="lg:text-2xl text-xl   font-bold leading-tight text-black">
            Excellence In Construction And Estimating{" "}
            <span className="text-[#0163BE]">Takeoff Services</span>
          </h2>
          <p className="text-gray-600 mt-4 lg:text-sm text-md ">
            At <span className="text-[#0163BE]">Swift Takeoffs</span>, we are
            passionate about providing unparalleled construction estimating and
            takeoff services. With over 7 years of industry experience, we
            combine precision, expertise, and cutting-edge technology to deliver
            accurate cost estimates and comprehensive takeoff solutions tailored
            to your unique needs.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 text-center">
            {[
              { value: "2783+", label: "Projects Completed" },
              { value: "417+", label: "Happy Clients" },
              { value: "50+", label: "Highly Qualified Estimators" },
              { value: "07+", label: "Years of Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-lg md:text-xl font-bold text-[#0163BE]">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-xs md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
          <Link to="/about">
            <button className="mt-6 py-2 flex items-center justify-center w-full md:w-64 bg-transparent font-medium rounded-3xl shadow-md border border-[#0163BE] text-black transition">
              Learn More About us{" "}
              <div>
                {" "}
                <ArrowRight className=" mt-1" />{" "}
              </div>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
