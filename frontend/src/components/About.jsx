const About = () => {
  const cards = [
    {
      src: "/about-vector1.webp",
      alt: "about-vector1",
      title: "Registered",
      description:
        "We are a registered company in the USA, operating for the past 7 years.",
    },
    {
      src: "/about-vector2.webp",
      alt: "about-vector2",
      title: "Fast Turnaround",
      description:
        "Our rapid turnaround ensures you have ample time before the bid deadline.",
    },
    {
      src: "/about-vector3.webp",
      alt: "about-vector3",
      title: "Technical Support",
      description:
        "Our team is fully equipped to address and resolve any inquiries you may have.",
    },
    {
      src: "/about-vector4.webp",
      alt: "about-vector4",
      title: "Accurate Pricing",
      description:
        "We consider current market volatility and price fluctuations to provide estimates.",
    },
  ];

  return (
    <div className="relative">
      <img
        src="/About-Design.webp"
        alt="design decoration"
        className="absolute -top-24 -z-10 h-96 object-contain"
      />

      <div className="grid grid-cols-1 p-24 ml-24 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center border border-[#0163BE] shadow-md rounded-lg p-4 text-center"
          >
            <img src={card.src} alt={card.alt} />
            <h3 className="text-lg font-bold text-[#0163BE] mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 text-xs">{card.description}</p>
          </div>
        ))}
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center px-6 py-12 bg-gray-50">
        <div className="relative flex justify-center items-center h-full">
          <img
            src="/About-us.webp"
            alt="About Us"
            className="rounded-md z-50 w-11/12"
          />
          <div
            className="absolute w-[520px] h-[475px] top-4 left-10 z-10 rounded-[5px] rotate-[176deg] translate-x-6 translate-y-6"
            style={{
              background: "linear-gradient(180deg, #0163BE 0%, #3693E9 100%)",
            }}
          ></div>
        </div>

        <div className="flex flex-col justify-center px-6 md:px-12">
          <h3 className="text-[#202020] font-medium text-lg uppercase mb-2">
            About Us
          </h3>
          <h2 className="text-3xl font-bold leading-tight text-black">
            Excellence In Construction And Estimating{" "}
            <span className="text-[#0163BE]">Takeoff Services</span>
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            At BidWorks Estimating, we are passionate about providing
            unparalleled construction estimating and takeoff services. With over
            7 years of industry experience, we combine precision, expertise, and
            cutting-edge technology to deliver accurate cost estimates and
            comprehensive takeoff solutions tailored to your unique needs.
          </p>

          <div className="grid grid-cols-4 gap-4 mt-6 text-center">
            {[
              { value: "1200+", label: "Projects Completed" },
              { value: "417+", label: "Happy Clients" },
              { value: "50+", label: "Highly Qualified Estimators" },
              { value: "07+", label: "Years of Experience" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-xl font-bold text-[#0163BE]">{stat.value}</p>
                <p className="text-[#0163BE] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <button className="mt-6 py-2 w-64 bg-transparent font-medium rounded-3xl shadow-md border border-[#0163BE] text-black transition">
            Learn More About us →
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
