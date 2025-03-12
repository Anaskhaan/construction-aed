import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  Briefcase,
  Info,
  Mail,
  ArrowRight,
  PanelTopClose,
  SquarePlus,
} from "lucide-react";

const tabs = [
  { name: "Home", path: "/", icon: <Home size={25} /> },
  { name: "About Us", path: "/about", icon: <Info size={25} /> },
  {
    name: "Our Services",
    path: "/services",
    icon: <SquarePlus size={25} />,
  },
  { name: " Our Trades", path: "/trades", icon: <Briefcase size={25} /> },
  { name: "Contact Us", path: "/contact", icon: <Mail size={25} /> },
];

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-white");
  const [logoPosition, setLogoPosition] = useState("flex-1");
  const [color, setCOlor] = useState("text-black");
  const [logoImage, setLogoImage] = useState("/logo.webp");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor("bg-white shadow-md");
      setCOlor("text-black");
      setLogoPosition("justify-start"); // Move logo to the left
    } else {
      setBgColor("bg-transparent");
      setCOlor("text-black");
      setLogoPosition("lg:justify-center sm:justify-start"); // Center logo by default
    }
  };

  useEffect(() => {
    handleScroll(); // Initialize on mount
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleTabClick = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="relative">
      <div
        className={`fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-2 z-50 ${bgColor} duration-300 ease-in-out`}
      >
        <div
          className={`flex ${logoPosition} w-full transition-all duration-300`}
        >
          <Link to="/">
            <img src={logoImage} alt="Logo" className="w-24 h-auto" />
          </Link>
        </div>
        <button
          onClick={toggleSidebar}
          className={`bg-transparent focus:outline-none relative z-50 `}
        >
          <div
            className={`hamburger flex flex-col  justify-between w-8 h-5 transition-all duration-300 ease-in-out ${
              isSidebarOpen ? "open" : ""
            }`}
          >
            {/* Top Line */}
            <div
              className={`h-[2px] mb-1 ${
                color.split("-")[1] === "black" ? "bg-black" : "bg-white"
              } transition-all duration-300 ease-in-out ${
                isSidebarOpen ? "scale-x-0" : "scale-x-100"
              } origin-right`}
            ></div>

            {/* Middle Line */}
            <div
              className={`h-[2px] mb-1 ${
                color.split("-")[1] === "black" ? "bg-black" : "bg-white"
              } transition-all duration-500 ease-in-out ${
                isSidebarOpen ? "scale-x-0" : "scale-x-100"
              } origin-right`}
            ></div>
            <div
              className={`h-[2px] ${
                color.split("-")[1] === "black" ? "bg-black" : "bg-white"
              } transition-all duration-500 ease-in-out ${
                isSidebarOpen ? "scale-x-0" : "scale-x-90"
              } origin-right`}
            ></div>

            {/* Bottom Line 1 (forming the top part of the cross) */}
            <div
              className={`h-[2px] ${
                color.split("-")[1] === "black" ? "bg-black" : "bg-white"
              } transition-all duration-500 ease-in-out ${
                isSidebarOpen
                  ? "rotate-[45deg] translate-y-[8.2px] scale-x-100"
                  : "scale-x-0"
              } origin-right`}
            ></div>

            {/* Bottom Line 2 (forming the bottom part of the cross) */}
            <div
              className={`h-[2px] ${
                color.split("-")[1] === "black" ? "bg-black" : "bg-white"
              } transition-all duration-500 ease-in-out ${
                isSidebarOpen
                  ? "rotate-[-45deg] translate-y-[6px] translate-x-2 scale-x-100"
                  : "scale-x-0"
              } origin-left`}
            ></div>
          </div>
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#0163be] text-white z-40 transform transition-transform duration-500 ${
          isSidebarOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
        style={{ transition: "all 0.5s ease-in-out" }}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-5">
          {tabs.map((tab, index) => (
            <Link
              key={index}
              to={tab.path}
              className="lg:text-6xl text-3xl hover:text-[#56bafc]"
              onClick={handleTabClick}
            >
              <motion.div
                className="flex items-center group space-x-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 100 }}
                animate={
                  isSidebarOpen
                    ? {
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.2 + index * 0.1, duration: 0.4 },
                      }
                    : { opacity: 0, y: 100 }
                }
              >
                {tab.icon}
                <h1 className="relative 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-semibold duration-300 group">
                  {tab.name}
                  <span className="absolute bottom-0 left-0 h-0.5 bg-[#56bafc] w-0 group-hover:w-full duration-300"></span>
                </h1>
              </motion.div>
            </Link>
          ))}
          <div className="flex items-center justify-center rounded-3xl border border-white px-6 py-2">
            <Link
              to="/GetQuote"
              onClick={handleTabClick}
              className="bg-transparent text-white px-1 py-1 transition duration-300"
            >
              Get a Quote
            </Link>
            <ArrowRight className="text-[#56bafc]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
