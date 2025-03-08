import { useNavigate } from "react-router-dom";

const HomepageServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "GC Estimating Services",
      route: "/GCES",
      description:
        "Swift Takeoffs delivers accurate, detailed estimates for general contractors, ensuring efficient budgeting, competitive bids, and cost optimization for successful projects.",
      img: "/mesonicon.svg",
    },
    {
      id: 2,
      title: "Sub-Contractor Estimating Services",
      route: "/SES",
      description:
        "Swift Takeoffs provides precise, trade-specific estimates for subcontractors, helping with accurate bids, cost control, and resource optimization to maximize profitability.",
      img: "/troyicon.svg",
    },
    {
      id: 3,
      title: "Cost Estimating Services",
      route: "/CES",
      description:
        "Swift Takeoffs offers accurate and detailed cost estimates, helping contractors and developers budget effectively, minimize risks, and optimize project costs for successful execution.",
      img: "/cost.svg",
    },
    {
      id: 4,
      title: "Material Takeoff Services",
      route: "/PES",
      description:
        "Swift Takeoffs provides precise material quantity calculations, ensuring accurate budgeting, reduced waste, and efficient procurement for construction projects.",
      img: "/material.svg",
    },
    {
      id: 5,
      title: "Residential Estimating Services",
      route: "/RES",
      description:
        "Swift Takeoffs delivers accurate cost estimates for residential projects, ensuring efficient budgeting, competitive bids, and cost-effective resource planning for builders and contractors.",
      img: "/residential.svg",
    },
    {
      id: 6,
      title: "Commercial Estimating Services",
      route: "/CoES",
      description:
        "Swift Takeoffs provides detailed and accurate cost estimates for commercial projects, helping contractors budget efficiently, optimize costs, and submit competitive bids for successful project execution.",
      img: "/commercial.svg",
    },
    {
      id: 7,
      title: "Industrial Estimating Services",
      route: "/IES",
      description:
        "Swift Takeoffs delivers precise and comprehensive cost estimates for industrial projects, ensuring accurate budgeting, resource allocation, and competitive bidding for contractors and developers.",
      img: "/industrial.svg",
    },
    {
      id: 8,
      title: "Preliminary Estimating Services",
      route: "/PRES",
      description:
        "Swift Takeoffs provides early-stage cost assessments, helping contractors and developers plan budgets, evaluate feasibility, and minimize financial risks before project execution.",
      img: "/preliminary.svg",
    },
  ];

  return (
    <div className="bg-[#ebebeb] py-10  h-auto">
      <div className="service-content text-center">
        <h2 className="font-semibold lg:text-4xl text-2xl">
          <span className="text-[#0163BE]">Swift Takeoffs</span> Services
        </h2>
        <p className="text-sm lg:text-lg  px-5 lg:p-5">
          Swift Takeoffs provides accurate and reliable estimates for General
          Contractors, Subcontractors, Lenders, Builders, Architects,
          Engineering Firms, and Vendors, ensuring efficient budgeting, cost
          control, and competitive bidding for all construction projects.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 p-8 gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => navigate(service.route)}
            className="p-4 border-b-8 border-[#0163be] rounded-lg shadow-md bg-white hover:cursor-pointer hover:shadow-lg hover:bg-[#3482cb] hover:border-white hover:text-white"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-12 h-auto p-1 "
            />
            <div>
              <h3 className="text-xl font-semibold ">{service.title}</h3>
              <p className="leading-tight">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepageServices;
