const About = () => {
  // Card data
  const cards = [
    {
      src: "/about-vector1.webp",
      alt: "about-vector1",
      title: "Registered",
      description:
        "We are a registered company in the USA, operating for the past 7 years..",
    },
    {
      src: "/about-vector2.webp",
      alt: "about-vector2",
      title: "Fast Turnaround",
      description:
        "Our rapid turnaround ensures you have ample time before the bid deadline..",
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
    <div className="relative  ">
      <img
        src="/About-Design.webp"
        alt="design decoration"
        className="absolute -top-24  -z-10   h-96 object-contain"
      />

      <div className="grid grid-cols-1 p-24 ml-24  md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col  items-center  border border-[#0163be] shadow-md rounded-lg p-4 text-center"
          >
            <img src={card.src} alt={card.alt} />
            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {card.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 text-xs">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
