import { Link } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";

const Sidebar = ({
  isOpen,
  toggleSidebar,
  servicesDropdown,
  setServicesDropdown,
  tradesDropdown,
  setTradesDropdown,
  services,
  trades,
}) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 p-2 text-black"
      >
        <X size={24} />
      </button>

      <div className="h-full flex flex-col">
        <div className="mt-16 p-4 space-y-6 flex-grow overflow-y-auto">
          <Link to="/" className="block py-2 hover:text-[#0163BE]">
            Home
          </Link>
          <Link to="/about" className="block py-2 hover:text-[#0163BE]">
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              className="flex gap-1 items-center py-2 w-full text-left hover:text-[#0163BE]"
              onClick={() => setServicesDropdown(!servicesDropdown)} // Toggle on click
            >
              Our Services <ChevronDown />
            </button>
            {servicesDropdown && (
              <div className="space-y-2 pl-4">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="block py-1 hover:bg-blue-100"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Trades Dropdown */}
          <div className="relative">
            <button
              className="flex gap-1 items-center py-2 w-full text-left hover:text-[#0163BE]"
              onClick={() => setTradesDropdown(!tradesDropdown)} // Toggle on click
            >
              Trades <ChevronDown />
            </button>
            {tradesDropdown && (
              <div className="space-y-2 pl-4">
                {trades.map((trade, index) => (
                  <Link
                    key={index}
                    to={trade.path}
                    className="block py-1 hover:bg-blue-100"
                  >
                    {trade.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className="block py-2 hover:text-[#0163BE]">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
