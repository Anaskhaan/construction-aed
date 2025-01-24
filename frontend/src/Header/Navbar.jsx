import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const services = [
  { name: "MEP Estimating", path: "/mep" },
  { name: "Concrete Estimating", path: "/CES" },
  { name: "Painting Estimating", path: "/PES" },
  { name: "Steel Estimating", path: "/DS" },
  { name: "Massonary Takeoff", path: "/massonarytakeoff" },
  { name: "Drywall Takeoff", path: "/drywalltakeoff" },
  { name: "Lumber Takeoff", path: "/lumbertakeoff" },
  { name: "Sitework & Earthquake", path: "/siteworkandearthquake" },
];

const trades = [
  { name: "Existing Condition", path: "/existingconditions" },
  { name: "Concrete Estimating", path: "/concrete" },
  { name: "Masonary Estimating", path: "/masonary" },
  { name: "Metal Estimating", path: "/metals" },
  { name: "Wood, Plastic & Composities", path: "/wood" },
  { name: "Thermal & Moisture Protection", path: "/thermal" },
  { name: "Finishes Estimating", path: "/finishes" },
  { name: "Specialities Estimating", path: "/specialities" },
  { name: "Equipment Estimating", path: "/equipment" },
  { name: "Furnishies Estimating", path: "/furnishies" },
  { name: "Special Constuction", path: "/special" },
  { name: "Conveying Equipment", path: "/conveying" },
  { name: "Mechanical Support", path: "/mechanical" },
  { name: "Fire Suppression", path: "/fire" },
  { name: "Plumbing Estimating", path: "/plumbing" },
  { name: "Heating Ventilation", path: "/heating" },
  { name: "Electrical Estimating", path: "/electrical" },
  { name: "Earthwork Estimating", path: "/earthwork" },
  { name: "Exterior Improvements", path: "/exterior" },
  { name: "Utilities Estimating", path: "/utilities" },
];

const Navbar = () => {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [tradesDropdown, setTradesDropdown] = useState(false);
  const servicesTimeoutRef = useRef(null);
  const tradesTimeoutRef = useRef(null);

  const handleMouseEnterServices = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setServicesDropdown(true);
  };

  const handleMouseLeaveServices = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdown(false);
    }, 100);
  };

  const handleMouseEnterTrades = () => {
    if (tradesTimeoutRef.current) {
      clearTimeout(tradesTimeoutRef.current);
    }
    setTradesDropdown(true);
  };

  const handleMouseLeaveTrades = () => {
    tradesTimeoutRef.current = setTimeout(() => {
      setTradesDropdown(false);
    }, 100);
  };

  return (
    <div className="flex items-center justify-between px-16 py-4 shadow-md">
      {/* Left Side - Logo */}
      <div className="w-1/4">
        {/* Placeholder for the logo */}
        <img src="/Main-logo.webp" alt="Bidworks-logo" />
      </div>

      {/* Center - Navigation Tabs */}
      <div className="flex space-x-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-[#0163BE] transition duration-300">
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-[#0163BE] transition duration-300"
        >
          About Us
        </Link>
        <div
          className="relative"
          onMouseEnter={handleMouseEnterServices}
          onMouseLeave={handleMouseLeaveServices}
        >
          <button className="hover:text-[#0163BE] transition duration-300 flex items-center gap-1">
            Our Services <ChevronDown />
          </button>
          {servicesDropdown && (
            <div
              className="absolute left-0 bg-white shadow-md mt-2 rounded z-50 w-48"
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseLeaveServices}
            >
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="block px-4 py-2 hover:bg-blue-100"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div
          className="relative"
          onMouseEnter={handleMouseEnterTrades}
          onMouseLeave={handleMouseLeaveTrades}
        >
          <button className="hover:text-[#0163BE] transition duration-300 flex gap-1 items-center">
            Trades <ChevronDown />
          </button>
          {tradesDropdown && (
            <div
              className="absolute -right-80 top-8 bg-white shadow-md rounded z-50 w-[70vw] max-w-[1200px]"
              onMouseEnter={handleMouseEnterTrades}
              onMouseLeave={handleMouseLeaveTrades}
            >
              <div className="grid grid-cols-4 gap-4 p-4">
                {trades.map((trade, index) => (
                  <Link
                    key={index}
                    to={trade.path}
                    className="p-2 hover:bg-blue-100"
                  >
                    {trade.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        <Link
          to="/contact"
          className="hover:text-[#0163BE] transition duration-300"
        >
          Contact Us
        </Link>
      </div>

      {/* third item in navbar */}
      <div>
        <div className="flex items-center justify-center rounded-3xl border border-[#0163BE]">
          <Link
            to="/GetQuote"
            className="bg-transparent text-black px-6 py-1 transition duration-300"
          >
            Get a Quote
          </Link>
          <ArrowRight className="text-[#0163BE] mr-2" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
