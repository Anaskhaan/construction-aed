import { useState } from "react";

import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const allTrades = [
  { id: 1, name: "Existing Condition", path: "/existingconditions" },
  { id: 2, name: "Concrete Estimating", path: "/concrete" },
  { id: 3, name: "Masonary Estimating", path: "/masonary" },
  { id: 4, name: "Metal Estimating", path: "/metals" },
  { id: 5, name: "Wood, Plastic & Composities", path: "/wood" },
  { id: 6, name: "Thermal & Moisture Protection", path: "/thermal" },
  { id: 7, name: "Finishes Estimating", path: "/finishes" },
  { id: 8, name: "Specialities Estimating", path: "/specialities" },
  { id: 9, name: "Equipment Estimating", path: "/equipment" },
  { id: 10, name: "Furnishies Estimating", path: "/furnishies" },
  { id: 11, name: "Special Constuction", path: "/special" },
  { id: 12, name: "Conveying Equipment", path: "/conveying" },
  { id: 13, name: "Mechanical Support", path: "/mechanical" },
  { id: 14, name: "Fire Suppression", path: "/fire" },
  { id: 15, name: "Plumbing Estimating", path: "/plumbing" },
  { id: 16, name: "Heating Ventilation", path: "/heating" },
  { id: 17, name: "Electrical Estimating", path: "/electrical" },
  { id: 18, name: "Earthwork Estimating", path: "/earthwork" },
  { id: 19, name: "Exterior Improvements", path: "/exterior" },
  { id: 20, name: "Utilities Estimating", path: "/utilities" },
];

const defaultTrades = allTrades.slice(0, 6);

export default function SearchTrades() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTrades, setFilteredTrades] = useState(defaultTrades);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredTrades(defaultTrades);
    } else {
      const filtered = allTrades.filter((trade) =>
        trade.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTrades(filtered);
    }
  };

  const handleTradeClick = (path) => {
    window.location.href = path;
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto px-4 ">
      {/* Search and Trades Section */}
      <div className="bg-white rounded-lg shadow-xl p-6 mb-8 hidden lg:block">
        <div className="w-full">
          {/* Search Section */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search....."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-4 py-3 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-blue-500 text-white rounded-r-md">
                <Search className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
          <div className="bg-gray-300 h-[1px] w-full "></div>
          {/* Popular Trades Section */}

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {searchQuery ? "Search Results" : "Popular Trades"}
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {filteredTrades.length > 0 ? (
              filteredTrades.map((trade) => (
                <div
                  key={trade.id}
                  onClick={() => handleTradeClick(trade.path)}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <span className="text-gray-700 group-hover:text-blue-500 transition-colors">
                    {trade.name}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No matching trades found</p>
            )}
          </div>
        </div>
      </div>
      <div className="bg-[#F4FAFF] rounded-lg shadow-lg p-6 text-center ">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          Experience The Construction Estimate with{" "}
          <span className="text-blue-500">Swift Takeoffs</span>
        </h3>
        <p className="text-xl italic text-gray-600 mb-8">Within 24/48 Hours</p>
        <Link to="/contact">
          <button className="bg-blue-500 text-white px-10 py-3 rounded-full hover:bg-blue-600 transition-colors">
            Contact Now →
          </button>
        </Link>
      </div>
    </div>
  );
}
