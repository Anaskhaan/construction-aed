import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WhyChooseSwiftTakeoffs = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Why Choose <span className="text-[#0163BE]">Swift Takeoffs</span>
      </h1>
      <div>
        <div className="flex flex-col lg:flex-row items-center gap-6 ">
          {/* Content Section */}
          <div className="flex-1">
            <ul className="list-disc pl-6 text-[#333]">
              <li className="mb-4">
                <strong>Accuracy:</strong> Minimize errors and ensure reliable
                cost projections.
              </li>
              <li className="mb-4">
                <strong>Efficiency:</strong> Save time with automated,
                data-driven estimating solutions.
              </li>
              <li className="mb-4">
                <strong>Customization:</strong> Tailor estimates to the unique
                needs of each project.
              </li>
              <li className="mb-4">
                <strong>Collaboration:</strong> Work seamlessly with teams using
                cloud-based estimating tools.
              </li>
              <li className="mb-4">
                <strong>Cost Control:</strong> Identify and eliminate
                unnecessary expenses early in the planning stage.
              </li>
            </ul>
          </div>
          {/* Image Section */}
          <div className="flex-1 ">
            <div className="relative  flex justify-center items-center h-full">
              <img
                src="/meeting-young.svg"
                alt="About Us"
                className="rounded-md z-20  mr-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6">
        <span className=" font-semibold">Conclusion</span>
        <p>
          Swift Takeoffs delivers reliable, accurate, and efficient industrial
          estimating services for manufacturing plants, warehouses, processing
          facilities, and heavy industrial projects. Our estimates ensure
          financial transparency, risk reduction, and successful project
          execution.
        </p>
      </div>
      <Link to="/GetQuote">
        <div className=" flex items-center text-[#333] rounded-3xl  justify-center py-1 px-2 border-2 border-[#0163BE] w-64">
          <button className="flex justify-center items-center mr-2  ">
            Request a Quote Now
          </button>{" "}
          <ArrowRight className=" mt-1 text-[#0163BE]" />
        </div>
      </Link>
    </div>
  );
};

export default WhyChooseSwiftTakeoffs;
