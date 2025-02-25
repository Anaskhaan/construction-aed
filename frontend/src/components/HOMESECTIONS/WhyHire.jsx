import { Link } from "react-router-dom";

const WhyHire = () => {
  const LOGOS = [
    {
      id: 1,
      name: "Planswift",
      imgUrl: "/planswift.svg",
      className: "w-40",
    },
    {
      id: 2,
      name: "On-Screen Takeoff",
      imgUrl: "/onscreentakeoff.svg",
      className: "w-40",
    },

    {
      id: 4,
      name: "RSMeans data",
      imgUrl: "/rsmeans.svg",
      className: "w-40",
    },
    {
      id: 5,
      name: "Bluebeam",
      imgUrl: "/bluebeam.svg",
      className: "w-40",
    },
    {
      id: 6,
      name: "ProEst",
      imgUrl: "/proeast.svg",
      className: "w-32",
    },
    {
      id: 7,
      name: "CostX",
      imgUrl: "/costx.svg",
      className: "w-32",
    },
    {
      id: 8,
      name: "Kubla",
      imgUrl: "/kubla.svg",
      className: "w-32",
    },
  ];

  const features = [
    {
      title: "Accurate Estimates",
      description:
        "Advanced tools ensure precise, data-driven estimates that keep your project on budget.",
    },
    {
      title: "Expertise Across Trades",
      description:
        "Extensive experience in multiple construction trades for tailored, reliable work estimates.",
    },
    {
      title: "Cost-Effective Solutions",
      description:
        "We help reduce costs by actively reducing waste and optimizing resource allocation.",
    },
    {
      title: "Transparent And Collaborative",
      description:
        "Clear communication and easy-to-understand reports for full project alignment.",
    },
  ];

  return (
    <>
      <section className="flex flex-col-reverse md:flex-row items-center gap-8 px-6 md:px-16 py-12 bg-white">
        {/* Text Section */}
        <div className="flex-1  ">
          <h2 className="lg:text-2xl text-xl  font-bold text-[#202020]">
            Why Hire <span className="text-[#0163BE]">Swift Takeoffs?</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            At Swift Takeoffs, we understand that accurate, reliable cost
            estimates are the foundation of any successful construction project.
            Whether you&apos;re managing a large-scale commercial development or
            a residential build, our expert team is here to ensure that your
            project stays on track, on budget, and within scope.
          </p>

          <div className="mt-6 lg:w-3/4 w-full grid grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <img src="/shield-check.png" alt="" />
                <div>
                  <h4 className="font-bold text-[#202020]">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className=" mt-12">
            <Link
              to="contact"
              className="px-6 py-2  bg-[#0163BE] text-white font-medium rounded-3xl  text-center "
            >
              Contact Now →
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex relative mb-24">
          <div className=" absolute -top-3 -left-3 border border-l-2  border-t-2 border-b-transparent border-r-transparent border-[#0163be] h-44 w-64"></div>
          <img
            src="/group-architect.webp"
            alt="Team Collaboration"
            className="   absolute bottom-0 lg:-bottom-12 lg:-left-32 h-64 w-64 lg:h-96 lg:w-96 -left-12 z-20 transform  translate-y-32"
          />
          <img
            src="/group-smiling-engineers.webp"
            alt="Team"
            className="rounded-lg  w-full h-auto relative  z-10"
          />
          <div className=" absolute -bottom-3 -right-3 border border-r-2  border-b-2 border-t-transparent border-l-transparent border-[#0163be] h-56 lg:w-72  w-40"></div>

          <div
            className="absolute w-full h-full top-0 left-0 -z-10 rounded-lg border-2 border-[#0163BE]"
            style={{ transform: "translate(15px, 15px)" }}
          ></div>
        </div>
      </section>

      <div className="bg-[#ebebeb] p-4 mt-4 h-80 mx-auto ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="service-content mb-16 relative">
            <h2 className="font-semibold text-center text-4xl">
              Software&apos;s{" "}
              <span className="text-blue-500">Swift Takeoffs </span> Use
            </h2>
            <div className="w-36 h-12 border-t-4 rounded-[100%] border-blue-500 border-b-transparent border-l-transparent border-r-transparent mx-auto lg:mt-3 mt-1 absolute lg:left-[48%] left-10"></div>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
            {LOGOS.map((logo) => (
              <div
                key={logo.id}
                className="lg:p-2 flex items-center justify-center"
              >
                <img
                  src={logo.imgUrl}
                  alt={logo.name}
                  className={`${logo.className} h-auto object-contain`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyHire;
