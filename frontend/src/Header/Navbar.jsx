[02:43, 1/25/2025] Aqsayy🌸: import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GetQuote from "./pages/GetQuote";
import { Toaster } from "react-hot-toast";

import Home from "./components/HOMESECTIONS/Home";
import About from "./pages/About";
import TradesPage from "./pages/trades/TradesPage";
import ServicesPage from './pages/services/ServicesPage'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
            <Route path="getquote" element={<GetQuote />} />
            <Route
              path="existingconditions"
              element={<TradesPage route="existingconditions" />}
            />
            <Route path="concrete" element={<TradesPage route="concrete" />} />
            <Route path="masonary" element={<TradesPage route="masonary" />} />
            <Route path="metals" element={<TradesPage route="metals" />} />
            <Route path="ConveyEquip" element={<TradesPage route="ConveyEquip" />} />
            <Route path="Wpc" element={<TradesPage route="Wpc" />} />
            <Route path="Tmp" element={<TradesPage route="Tmp" />} />
            <Route path="Opening" element={<TradesPage route="Opening" />} />
            <Route path="finishes" element={<TradesPage route="finishes" />} />
            <Route path="specialities" element={<TradesPage route="specialities" />} />
            <Route path="equipment" element={<TradesPage route="equipment" />} />
            <Route path="furnishies" element={<TradesPage route="furnishies" />} />
            <Route path="special" element={<TradesPage route="special" />} />
            <Route path="conveying" element={<TradesPage route="conveying" />} />
            {/* <Route path="mep" element={<MEP />} /> */}
            <Route path="mep" element={<ServicesPage route="mep" />} />
            <Route path="CES" element={<ServicesPage route="CES" />} />
            <Route path="PES" element={<ServicesPage route="PES" />} />
            <Route path="DS" element={<ServicesPage route="DS" />} />
            <Route path="MTS" element={<ServicesPage route="MTS" />} />
            <Route path="DTS" element={<ServicesPage route="DTS" />} />
            <Route path="LTS" element={<ServicesPage route="LTS" />} />
            <Route path="SET" element={<ServicesPage route="SET" />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
[02:44, 1/25/2025] Aqsayy🌸: import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const services = [
  { name: "MEP Estimating", path: "/mep" },
  { name: "Concrete Estimating", path: "/CES" },
  { name: "Painting Estimating", path: "/PES" },
  { name: "Steel Estimating", path: "/DS" },
  { name: "Massonary Takeoff", path: "/MTS" },
  { name: "Drywall Takeoff", path: "/DTS" },
  { name: "Lumber Takeoff", path: "/LTS" },
  { name: "Sitework & Earthquake", path: "/SET" },
];

const trades = [
  { name: "Existing Condition", path: "/existingconditions" },
  { name: "Concrete Estimating", path: "/concrete" },
  { name: "Masonary Estimating", path: "/masonary" },
  { name: "Metal Estimating", path: "/metals" },
  { name: "Wood, Plastic & Composities", path: "/Wpc" },
  { name: "Thermal & Moisture Protection", path: "/Tmp" },
  { name: "Openings Estimating Services", path: "/Opening" },
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