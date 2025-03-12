import { ShieldCheck } from "lucide-react";
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
      id: 3,
      name: "RSMeans data",
      imgUrl: "/bluebeam.svg",
      className: "w-40",
    },

    {
      id: 4,
      name: "Xactimate",
      imgUrl: "/rsmeans.svg",
      className: "w-40",
    },
    {
      id: 5,
      name: "Bluebeam",
      imgUrl: "/bb-logo.svg",
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
    <div className=" bg-[#ebebeb] rounded-3xl">
      <section className="flex flex-col-reverse md:flex-row items-center lg:gap-8  px-4 md:px-16 pt-12">
        {/* Text Section */}
        <div className="flex-1  -mt-10 lg:mt-0">
          <h2 className="lg:text-2xl text-xl  font-bold text-[#202020]">
            Why Hire <span className="text-[#0163BE]">Swift Takeoffs?</span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            At <span className="text-[#0163BE]">Swift Takeoffs, </span> we
            understand that accurate, reliable cost estimates are the foundation
            of any successful construction project. Whether you&apos;re managing
            a large-scale commercial development or a residential build, our
            expert team is here to ensure that your project stays on track, on
            budget, and within scope.
          </p>

          <div className="mt-6 lg:w-3/4 w-full grid grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <ShieldCheck className="text-[#0163BE] lg:w-8 font-extrabold h-auto w-14 mt-1 lg:mt-0" />
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
              className="px-3 py-1  bg-[#0163BE] text-white font-medium rounded-3xl  text-center "
            >
              Contact Now →
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex relative mb-20">
          <img
            src="/building.webp"
            alt="Team"
            className="w-96 h-auto rounded-2xl shadow-[#0163be] shadow-xl lg:mt-32  relative z-10"
          />
        </div>
      </section>

      <div className="lg:h-72 h-44 mx-auto flex items-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="service-content mb-4 relative">
            <h2 className="font-semibold text-center lg:text-4xl text-xl">
              Software&apos;s{" "}
              <span className="text-[#0163BE]">Swift Takeoffs </span> Use
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-4 mx-auto">
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
    </div>
  );
};

export default WhyHire;
