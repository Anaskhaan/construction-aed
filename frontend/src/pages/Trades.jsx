import React from "react";
import { Link } from "react-router-dom";

const trades = [
  {
    link: "/existingconditions",
    icon: "/icons/1.existingconditions.svg",
    id: 1,
    title: "Existing Condition",
    description:
      "Assessment of current site conditions for accurate project planning.",
  },
  {
    link: "/concrete",
    icon: "/icons/2.concrete.svg",
    id: 2,
    title: "Concrete Estimating",
    description:
      "Accurate cost estimation for concrete structures and foundations.",
  },
  {
    link: "/masonary",
    icon: "/icons/3.masonry.svg",
    id: 3,
    title: "Masonry",
    description:
      "Brick, block, and stone construction for durable building structures.",
  },
  {
    link: "/metals",
    icon: "/icons/4.metal.svg",
    id: 4,
    title: "Metal",
    description:
      "Structural and decorative metalwork for construction projects.",
  },
  {
    link: "/Wpc",
    icon: "/icons/5.wood.svg",
    id: 5,
    title: "Woods, Plastics & Composites",
    description:
      "Materials selection and cost estimation for wood and plastic components.",
  },
  {
    link: "/Tmp",
    icon: "/icons/6.thermal&moisture.svg",
    id: 6,
    title: "Thermal & Moisture Protection",
    description:
      "Ensuring insulation and waterproofing for long-lasting structures.",
  },
  {
    link: "/Opening",
    icon: "/icons/7.openings.svg",
    id: 7,
    title: "Opening Estimating",
    description:
      "Cost evaluation for doors, windows, and other building openings.",
  },
  {
    link: "/finishes",
    icon: "/icons/8.finishes.svg",
    id: 8,
    title: "Finishes Estimating",
    description:
      "Accurate pricing for interior and exterior finishing materials.",
  },
  {
    link: "/specialities",
    icon: "/icons/9.specialities.svg",
    id: 9,
    title: "Specialties Estimating",
    description:
      "Cost assessment for specialty construction elements and features.",
  },
  {
    link: "/equipment",
    icon: "/icons/10.equipement.svg",
    id: 10,
    title: "Equipment Estimating",
    description:
      "Estimating costs for construction-related machinery and tools.",
  },
  {
    link: "/furnishies",
    icon: "/icons/11.furnishes.svg",
    id: 11,
    title: "Furnishings Estimating",
    description:
      "Budgeting for furniture and interior design elements in construction.",
  },
  {
    link: "/special",
    icon: "/icons/12.specialconstruction.svg",
    id: 12,
    title: "Special Construction",
    description:
      "Unique or custom-built structures requiring specialized planning.",
  },
  {
    link: "/conveying",
    icon: "/icons/13.conveyingequipements.svg",
    id: 13,
    title: "Conveying Equipment",
    description:
      "Estimating costs for elevators, escalators, and material handling systems.",
  },
  {
    link: "/MS",
    icon: "/icons/14.mechanicalsupport.svg",
    id: 14,
    title: "Mechanical Support",
    description:
      "Infrastructure support for HVAC, plumbing, and mechanical systems.",
  },
  {
    link: "/FSE",
    icon: "/icons/15.firesuppression.svg",
    id: 15,
    title: "Fire Suppression",
    description: "Installation and cost assessment of fire protection systems.",
  },
  {
    link: "/PSE",
    icon: "/icons/16.plumbing.svg",
    id: 16,
    title: "Plumbing Estimating",
    description: "Cost analysis for plumbing installations and fixtures.",
  },
  {
    link: "/HVAC",
    icon: "/icons/17.hvac.svg",
    id: 17,
    title: "Heating Ventilation",
    description:
      "Design and budgeting for heating, cooling, and ventilation systems.",
  },
  {
    link: "/electrical",
    icon: "/icons/18.electrical.svg",
    id: 18,
    title: "Electrical Estimating",
    description:
      "Cost estimation for electrical installations and wiring systems.",
  },
  {
    link: "/earthwork",
    icon: "/icons/19.earthwork.svg",
    id: 19,
    title: "Earthwork Estimating",
    description:
      "Budget planning for excavation, grading, and site preparation.",
  },
  {
    link: "/exterior",
    icon: "/icons/20.exterior.svg",
    id: 20,
    title: "Exterior Improvements",
    description:
      "Landscaping, paving, and other exterior construction enhancements.",
  },
  {
    link: "/utilities",
    icon: "/icons/21.utilities.svg",
    id: 21,
    title: "Utilities Estimating",
    description:
      "Assessing costs for water, gas, and electrical utility connections.",
  },
];

const TradeCard = ({ trade }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 ">
      <img src={trade.icon} alt="trades icon" className="w-10 h-auto" />
      <h2 className="text-2xl font-bold text-[#0163be]">{trade.title}</h2>
      <p className="text-gray-600 mt-2">{trade.description}</p>
      <Link to={trade.link}>
        <button className="mt-4 px-4 py-2 bg-[#0163be] text-white rounded-lg hover:bg-gray-800">
          See More
        </button>
      </Link>
    </div>
  );
};

const TradesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-8 py-28">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold text-center  text-[#0163be]">
          Our Trades
        </h1>
        <p>
          From foundation to finish, we deliver fast and accurate takeoffs for
          all trades—concrete, framing, drywall, roofing, MEP, and more—helping
          you bid smarter and build better!
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trades.map((trade) => (
          <TradeCard key={trade.id} trade={trade} />
        ))}
      </div>
    </div>
  );
};

export default TradesPage;
