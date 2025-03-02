import {
  AlarmClockCheck,
  ArrowRight,
  BrickWall,
  CircleCheckBig,
  CircleDollarSign,
  ClipboardCheck,
  FileText,
  HandHeart,
  Handshake,
  Hourglass,
  MonitorCog,
  MoveRight,
  Phone,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";
export default function About() {
  const About = [
    {
      label: "Fast Turnaround Times",
      icon: <AlarmClockCheck className="text-[#0163BE] w-8 font-bold h-auto" />,
    },
    {
      label: "Accurate Material Estimates",
      icon: <ClipboardCheck className="text-[#0163BE] w-8 font-bold h-auto" />,
    },
    {
      label: "On-Time Project Delivery",
      icon: <Hourglass className="text-[#0163BE] w-8 font-bold h-auto" />,
    },
    {
      label: "Reduce Material Waste",
      icon: <BrickWall className="text-[#0163BE] w-8 font-bold h-auto" />,
    },
    {
      label: "Budget-Friendly Solutions",
      icon: (
        <CircleDollarSign className="text-[#0163BE] w-8 font-bold h-auto" />
      ),
    },
    {
      label: "Comprehensive Data Analysis",
      icon: <FileText className="text-[#0163BE] w-8 font-bold h-auto" />,
    },
    {
      label: "Your All-in-One Partner",
      icon: <Handshake className="text-[#0163BE] w-8 font-bold h-auto" />,
    },
    {
      label: "Expert Support and Guidance",
      icon: <Users className="text-[#0163BE] w-8 font-bold h-auto" />,
    },
  ];
  const features = [
    {
      title: "Precision-First Approach",
      description:
        "From material takeoffs to labor costs, our attention to detail ensures that every estimate is as accurate.",
    },
    {
      title: "Tailored Solutions For Every Project",
      description:
        "We treat each one with the personalized attention it deserves. Whether it's a small residential build or a large-scale commercial project.",
    },
    {
      title: "Proactive Risk Mitigation",
      description:
        "With Swift Takeoffs, you're not just receiving numbers. Our team proactively identifies potential risks up front and flags.",
    },
    {
      title: "Technology-Driven Accuracy",
      description:
        "Clear communications and easy-to-understand reports fix full.",
    },
  ];

  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center py-24 bg-gray-50">
        <div className="relative flex justify-center items-center h-full">
          <img
            src="/group-male-architect-preparing-blueprint-office.webp"
            alt="group male architect preparing blueprint office"
            className="rounded-md z-20 w-11/12 "
          />
          <div
            className="absolute lg:w-[500px] w-[18rem] 2xl:h-[800px] 2xl:w-[780px] lg:h-[520px] h-[19rem] lg:top-8 top-1 lg:left-12 left-3 z-10 rounded-[5px] rotate-[176deg] translate-x-6 translate-y-6"
            style={{
              background: "linear-gradient(180deg, #0163BE 0%, #3693E9 100%)",
            }}
          ></div>
        </div>
        <div className="flex relative  flex-col justify-center space-y-5 h-full">
          <div>
            <img
              src="/ABOUT-VECTOR.webp"
              height={200}
              width={200}
              className=" hidden lg:block  absolute  -top-12 text-[#0163BE] right-0"
              alt="about-pic"
            />
          </div>
          <h2 className="lg:text-4xl text-2xl lg:text-left text-center font-bold  text-black">
            Your Trusted Partner in{" "}
            <span className="text-[#0163BE]">Construction Estimating</span>
          </h2>
          <p className="text-gray-600 px-3 lg:px-0  ">
            At Swift Takeoffs, we specialize in accurate and efficient
            construction estimating services, helping contractors, builders, and
            developers streamline their project planning. With over 7 years of
            industry experience, we have successfully delivered detailed
            material takeoffs and cost estimates for projects across all 50
            states.
            <br />{" "}
            <span className="font-bold">
              Build smarter. Estimate with confidence. Choose  {""}
              <span className="text-[#0163BE]">Swift Takeoffs</span>.
            </span>
          </p>

          <div className=" grid grid-cols-2 grid-rows-4 lg:px-0 px-3">
            {About.map((feature, index) => (
              <div
                key={index}
                className=" flex items-center justify-start py-2 gap-2"
              >
                {feature.icon}
                <p className="text-lg ">{feature.label}</p>
              </div>
            ))}
          </div>
          <div className="px-3 lg:px-0">
            <Link to="/contact">
              <button className="mt-6  py-2 w-64 bg-transparent font-medium rounded-3xl shadow-md border border-[#0163BE] text-black transition">
                Get in Touch →
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="py-12 relative bg-[#F8F8F8]">
          <div>
            <img
              src="/ABOUT-VECTORR2.webp"
              height={250}
              width={250}
              className=" absolute top-0 left-0"
              alt=""
            />
          </div>
          <div className="container mx-auto text-center">
            {/* Heading Section */}
            <h2 className="text-4xl font-bold text-gray-800">
              Milestones And{" "}
              <span className="text-[#0163BE]">Achievements</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-4xl mx-auto">
              At Swift Takeoffs, we’re proud of the journey that has shaped us
              into a trusted name in construction cost estimation. Each
              milestone reflects our commitment to excellence.
            </p>

            {/* Milestone Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 relative">
              {[
                {
                  icon: <Trophy className="text-[#0163BE] h-8 w-8" />,
                  title: "98% Bid-Winning Rate",
                  description:
                    "Our clients consistently secure project opportunities thanks to the accuracy and efficiency of our estimates.",
                },
                {
                  icon: <CircleCheckBig className="text-[#0163BE] h-8 w-8" />,
                  title: "Hundreds Of Projects Done",
                  description:
                    "From residential to commercial, industrial to infrastructure, we’ve tailored solutions to meet the unique needs of each project.",
                },
                {
                  icon: <MonitorCog className="text-[#0163BE] h-8 w-8" />,
                  title: "Advanced Technology",
                  description:
                    "We leverage cutting-edge software tools like PlanSwift, Bluebeam, and OST to deliver accurate estimating solutions.",
                },
                {
                  icon: <HandHeart className="text-[#0163BE] h-8 w-8" />,
                  title: "Trusted By Clients Nationwide",
                  description:
                    "We’re helping construction experts across the nation win bids with accurate, reliable estimating solutions.",
                },
              ].map((milestone, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-lg py-10 px-4 h-56 flex flex-col items-center relative ${
                    index === 1 || index === 3 ? "lg:mt-20" : ""
                  }`}
                >
                  <div className="bg-[#FFFFFF] rounded-full p-6 absolute -top-8 shadow-lg">
                    {milestone.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mt-4">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 text-center">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-6xl mx-auto p-6 bg-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">
                  Why <span className="text-[#0163BE]">Choose Us</span>?
                </h2>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-1">
                      <ShieldCheck className="text-[#0163BE] mr-2 font-extrabold h-auto w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="text-gray-600 mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/GetQuote">
                <button className="bg-white text-blue-600 border mt-3 border-blue-600 px-4 py-2 rounded-full flex justify-center items-center gap-2">
                  Get a free quote <ArrowRight />
                </button>
              </Link>
            </div>

            <div className="relative lg:block hidden">
              <div className="relative z-10">
                <img
                  src="/wmremove-transformed 4.webp"
                  alt="Laptop showing construction plans"
                  className="w-full h-auto "
                />
              </div>
              <div className="absolute top-[-20px] lg:right-[-20px] right-[-16px] w-32 h-32 bg-blue-100 rounded-full z-0"></div>
              <div className="absolute lg:top-52 top-32 lg:left-44 left-28 lg:w-[28rem] w-[20rem] h-36  bg-[#0163be] rounded-[100%] rotate-12 z-0 transform -translate-x-36 "></div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center py-12 px-4">
        <div className="w-full lg:w-[90%] bg-[#0163BE] relative p-6 md:p-12 rounded-lg">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl md:text-4xl text-white font-bold">
              Call Us Today For A Quick Quote
            </h1>
            <span className="text-lg md:text-4xl text-white flex py-4 md:py-8 gap-2 justify-center items-center">
              <Phone size={24} md:size={32} /> 123 456 7890
            </span>
            <Link to="/contact">
              <button className="py-2 px-4 text-lg border-4 rounded-full bg-white flex justify-center items-center gap-2">
                Contact Us Now <ArrowRight />
              </button>
            </Link>
          </div>

          <div className="hidden lg:block absolute p-20 rounded-full bg-[#5BA5EA] top-3 right-4 opacity-50"></div>
          <img
            src="/Vector 2.webp"
            alt="vector image"
            height={75}
            width={212}
            className="hidden lg:block absolute right-52 top-10 transform translate-x-6 translate-y-20"
          />
          <div className="hidden lg:block absolute p-20 rounded-full bg-[#5BA5EA] -bottom-4 left-8 opacity-50"></div>
          <img
            src="/Vector 2.webp"
            alt="vector image"
            height={75}
            width={212}
            className="hidden lg:block absolute left-36 top-24 transform translate-x-8 translate-y-12"
          />
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
