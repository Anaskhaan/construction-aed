import React from "react";

const trades = [
  {
    icon: "/tradeicon1.webp",
    id: 1,
    title: "Existing Condition",
    description:
      "Assessment of current site conditions for accurate project planning.",
  },
  {
    icon: "/tradeicon1.webp",
    id: 2,
    title: "Concrete Estimating",
    description:
      "Accurate cost estimation for concrete structures and foundations.",
  },
  {
    icon: "/tradeicon1.webp",
    id: 3,
    title: "Masonry",
    description:
      "Brick, block, and stone construction for durable building structures.",
  },
  {
    icon: "/tradeicon1.webp",
    id: 4,
    title: "Metal",
    description:
      "Structural and decorative metalwork for construction projects.",
  },
  {
    id: 5,
    title: "Woods, Plastics & Composites",
    description:
      "Materials selection and cost estimation for wood and plastic components.",
  },
  {
    icon: "/tradeicon1.webp",
    id: 6,
    title: "Thermal & Moisture Protection",
    description:
      "Ensuring insulation and waterproofing for long-lasting structures.",
  },
  {
    icon: "/tradeicon1.webp",
    id: 7,
    title: "Opening Estimating",
    description:
      "Cost evaluation for doors, windows, and other building openings.",
  },
  {
    icon: "/tradeicon1.webp",
    id: 8,
    title: "Finishes Estimating",
    description:
      "Accurate pricing for interior and exterior finishing materials.",
  },
  {
    icon: "/tradeicon1.webp",
    id: 9,
    title: "Specialties Estimating",
    description:
      "Cost assessment for specialty construction elements and features.",
  },
  {
    icon: "/tradeicon1.webp",
    id: 10,
    title: "Equipment Estimating",
    description:
      "Estimating costs for construction-related machinery and tools.",
  },
  {
    icon: "/tradeicon1.webp",
    id: 11,
    title: "Furnishings Estimating",
    description:
      "Budgeting for furniture and interior design elements in construction.",
  },
  {
    icon: "/tradeicon1.webp",
    id: 12,
    title: "Special Construction",
    description:
      "Unique or custom-built structures requiring specialized planning.",
  },
  {
    icon: "/tradeicon1.webp",
    id: 13,
    title: "Conveying Equipment",
    description:
      "Estimating costs for elevators, escalators, and material handling systems.",
  },
  {
    icon: "/tradeicon1.webp",
    id: 14,
    title: "Mechanical Support",
    description:
      "Infrastructure support for HVAC, plumbing, and mechanical systems.",
  },
  {
    icon: "/tradeicon1.webp",
    id: 15,
    title: "Fire Suppression",
    description: "Installation and cost assessment of fire protection systems.",
  },
  {
    icon: "/tradeicon1.webp",
    id: 16,
    title: "Plumbing Estimating",
    description: "Cost analysis for plumbing installations and fixtures.",
  },
  {
    icon: "/tradeicon1.webp",
    id: 17,
    title: "Heating Ventilation",
    description:
      "Design and budgeting for heating, cooling, and ventilation systems.",
  },
  {
    icon: "/tradeicon1.webp",
    id: 18,
    title: "Electrical Estimating",
    description:
      "Cost estimation for electrical installations and wiring systems.",
  },
  {
    icon: "/tradeicon1.webp",
    id: 19,
    title: "Earthwork Estimating",
    description:
      "Budget planning for excavation, grading, and site preparation.",
  },
  {
    icon: "/tradeicon1.webp",
    id: 20,
    title: "Exterior Improvements",
    description:
      "Landscaping, paving, and other exterior construction enhancements.",
  },
  {
    icon: "/tradeicon1.webp",
    id: 21,
    title: "Utilities Estimating",
    description:
      "Assessing costs for water, gas, and electrical utility connections.",
  },
];

const TradeCard = ({ trade }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 ">
       <img src={trade.icon}  />
    <h2 className="text-xl font-bold text-black">{trade.title}</h2>
      <p className="text-gray-600 mt-2">{trade.description}</p>
      <button className="mt-4 px-4 py-2 bg-[#0163be] text-white rounded-lg hover:bg-gray-800">
        See More
      </button>
    </div>
  );
};

const TradesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 ">
      <h1 className="text-3xl font-bold text-center mb-8 text-black">
        Our Trades
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trades.map((trade) => (
          <TradeCard key={trade.id} trade={trade} />
        ))}
      </div>
    </div>
  );
};

export default TradesPage;
