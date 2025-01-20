import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <Link
          to="/services"
          className="hover:text-[#0163BE] transition duration-300"
        >
          Our Services
        </Link>
        <Link
          to="/trades"
          className="hover:text-[#0163BE] transition duration-300"
        >
          Trades
        </Link>
        <Link
          to="/contact"
          className="hover:text-[#0163BE] transition duration-300"
        >
          Contact Us
        </Link>
      </div>

      {/* Right Side - Button */}
      <div>
        <div className=" flex items-center justify-center rounded-3xl  border border-[#0163BE]">
          <Link
            to="/GetQuote"
            className="bg-transparent text-black px-6 py-1    transition duration-300"
          >
            Get a Quote
          </Link>
          <ArrowRight className=" text-[#0163BE] mr-2" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
