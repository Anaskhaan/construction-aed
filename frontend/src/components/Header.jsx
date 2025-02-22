import { useState, useEffect } from "react";
import Navbar from "../Header/Navbar";
import Top from "../Header/Top";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-white fixed top-0 left-0 w-full z-50 transition-all duration-300">
        <Top />
        <Navbar />
      </div>
    </>
  );
}
