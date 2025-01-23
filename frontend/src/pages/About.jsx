import { ArrowRight, MoveRight, Phone } from "lucide-react";

export default function About() {
  const About = [
    {
      label: "Fast Turnaround Times",
      icon: "/shield-check.png",
    },
    {
      label: "Accurate Material Estimates",
      icon: "/shield-check.png",
    },
    {
      label: "On-Time Project Delivery",
      icon: "/shield-check.png",
    },
    {
      label: "Reduce Material Waste",
      icon: "/shield-check.png",
    },
    {
      label: "Budget-Friendly Solutions",
      icon: "/shield-check.png",
    },
    {
      label: "Comprehensive Data Analysis",
      icon: "/shield-check.png",
    },
    {
      label: "Your All-in-One Partner",
      icon: "/shield-check.png",
    },
    {
      label: "Expert Support and Guidance",
      icon: "/shield-check.png",
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
        "With BidWorks Estimating, you're not just receiving numbers. Our team proactively identifies potential risks up front and flags.",
    },
    {
      title: "Technology-Driven Accuracy",
      description:
        "Clear communications and easy-to-understand reports fix full.",
    },
  ];

  return (
    <div>
      <section>
        <div className="w-full  h-48 relative">
          {/* Black Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

          {/* Image */}
          <img
            src="/image.webp"
            alt="about page top image"
            className="w-full h-full object-cover"
          />

          {/* Text Content */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-4">
            <h1 className="text-5xl font-bold">About Us</h1>
            <span className="text-lg flex  justify-center items-center gap-4">
              Home <MoveRight />
              Contact Us
            </span>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 items-center py-12 bg-gray-50">
        <div className="relative flex justify-center items-center h-full">
          <img
            src="/group-male-architect-preparing-blueprint-office.webp"
            alt="group male architect preparing blueprint office"
            className="rounded-md z-50 w-11/12 "
          />
          <div
            className="absolute w-[520px] h-[550px] top-8 left-12 z-10 rounded-[5px] rotate-[176deg] translate-x-6 translate-y-6"
            style={{
              background: "linear-gradient(180deg, #0163BE 0%, #3693E9 100%)",
            }}
          ></div>
        </div>
        <div className="flex relative  flex-col justify-center space-y-10 h-full">
          <div>
            <img
              src="/ABOUT-VECTOR.webp"
              height={200}
              width={200}
              className=" absolute -top-12 text-[#0163BE] right-0"
              alt=""
            />
          </div>
          <h2 className="text-4xl  font-bold  text-black">
            Your Trusted Partner in <br /> Construction{" "}
            <span className="text-[#0163BE]"> Estimating</span>
          </h2>
          <p className="text-gray-600 mt-4  ">
            At BidWorks Estimating, we combine precision, expertise, <br /> and
            cutting-edge technology to help your projects succeed. <br /> From
            planning to completion, we&apos;re here to support your <br />{" "}
            vision every step of the way
          </p>

          <div className=" grid grid-cols-2 grid-rows-4 ">
            {About.map((feature, index) => (
              <div
                key={index}
                className=" flex items-center justify-start py-2 gap-2"
              >
                <img
                  src={feature.icon}
                  alt={feature.label}
                  className="w-6 h-6"
                />
                <p className="text-lg ">{feature.label}</p>
              </div>
            ))}
          </div>

          <button className="mt-6 py-2 w-64 bg-transparent font-medium rounded-3xl shadow-md border border-[#0163BE] text-black transition">
            Learn More About us →
          </button>
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
              Milestones And <span className="text-blue-600">Achievements</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-4xl mx-auto">
              At BidWorks Estimating, we’re proud of the journey that has shaped
              us into a trusted name in construction cost estimation. Each
              milestone reflects our commitment to excellence.
            </p>

            {/* Milestone Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 relative">
              {[
                {
                  icon: "/trophy-fill.webp",
                  title: "98% Bid-Winning Rate",
                  description:
                    "Our clients consistently secure project opportunities thanks to the accuracy and efficiency of our estimates.",
                },
                {
                  icon: "/checkbox-circle-fill.webp",
                  title: "Hundreds Of Projects Done",
                  description:
                    "From residential to commercial, industrial to infrastructure, we’ve tailored solutions to meet the unique needs of each project.",
                },
                {
                  icon: "/computer-fill.webp",
                  title: "Advanced Technology",
                  description:
                    "We leverage cutting-edge software tools like PlanSwift, Bluebeam, and OST to deliver accurate estimating solutions.",
                },
                {
                  icon: "/service-fill.webp",
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
                    <img
                      src={milestone.icon}
                      alt={milestone.title}
                      className="w-8 h-8"
                    />
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
                  Why <span className="text-blue-600">Choose Us</span>?
                </h2>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-1">
                      <img
                        src="shield-check.png"
                        alt="shield image"
                        height={70}
                        width={70}
                        className="h-full w-full"
                      />
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

              <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-full flex justify-center items-center gap-2">
                Get a free quote <ArrowRight />
              </button>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/wmremove-transformed 4.webp"
                  alt="Laptop showing construction plans"
                  className="w-full h-auto "
                />
              </div>
              <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-blue-100 rounded-full z-0"></div>
              <div className="absolute top-52 left-44 w-[28rem] h-36  bg-[#0163be] rounded-[100%] rotate-12 z-0 transform -translate-x-36 "></div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center py-12">
        <div className="w-[90%] bg-[#0163BE]   relative">
          <div className="flex justify-center items-center py-12 flex-col">
            <h1 className="text-4xl text-white font-bold ">
              Call Us Today For A Quick Quote
            </h1>
            <span className="text-4xl text-white flex py-8 gap-2 justify-center items-center mt-10">
              <Phone size={32} />
              123 456 7890
            </span>
            <div className="flex justify-center items-start py-2">
              <button className="py-2 px-4 text-lg border-4 rounded-full bg-white flex justify-center items-center gap-2">
                Contact Us Now <ArrowRight />
              </button>
            </div>
          </div>
          <div className="absolute p-20 rounded-full bg-[#5BA5EA] top-3 right-4 opacity-50"></div>

          <img
            src="/Vector 2.webp"
            alt="vector image"
            height={75}
            width={212}
            className=" absolute right-52 top-10 transform translate-x-6 translate-y-20"
          />
          <div className="absolute p-20 rounded-full bg-[#5BA5EA] -bottom-4 left-8 opacity-50"></div>
          <img
            src="/Vector 2.webp"
            alt="vector image"
            height={75}
            width={212}
            className=" absolute left-36 top-24 transform translate-x-8 translate-y-12"
          />
        </div>
      </section>
      <section></section>
    </div>
  );
}
