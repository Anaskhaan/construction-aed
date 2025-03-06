import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WhyChooseSwiftTakeoffs = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Why Choose <span className="text-[#0163BE]">Swift Takeoffs</span>
      </h1>
      <div>
        <div className="flex flex-col lg:flex-row items-center gap-6 py-4">
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
            </ul>
          </div>
          {/* Image Section */}
          <div className="flex-1 ">
            <div className="relative flex justify-center items-center h-full">
              <img
                src="/meeting-young.webp"
                alt="About Us"
                className="rounded-md z-20  mr-2"
              />
              <div
                className="absolute lg:w-[95%] lg:h-[95%] 2xl:w-[65%] 2xl:left-16 2xl:h-[100%] w-[100%] h-[100%]  lg:-top-4 -top-5 lg:-left-5 -left-6 z-10 rounded-[5px] rotate-[176deg] translate-x-6 translate-y-6"
                style={{
                  background:
                    "linear-gradient(180deg, #0163BE 0%, #3693E9 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex-1 ">
          <ul className="list-disc pl-6 text-[#333]">
            <li className="mb-4">
              <strong>Collaboration:</strong> Work seamlessly with teams using
              cloud-based estimating tools.
            </li>
            <li className="mb-4">
              <strong>Cost Control:</strong> Identify and eliminate unnecessary
              expenses early in the planning stage.
            </li>
          </ul>
        </div>
      </div>
      <div className="py-6">
        <span className="text-[#333] mt-4">
          With Swift Takeoffs, you gain access to expert cost estimating
          services that enhance project planning, reduce financial risks, and
          ensure budget accuracy. Whether for residential, commercial, or
          industrial construction, our precise estimates help you achieve a
          successful and cost-effective project.
        </span>
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
