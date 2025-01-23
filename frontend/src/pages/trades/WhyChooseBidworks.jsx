import { ArrowRight } from "lucide-react";

const WhyChooseBidworks = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Why Choose <span className="text-[#0163BE]">BIDWORKS Estimating</span>
      </h1>
      <div>
        <div className="flex flex-col lg:flex-row items-center gap-6 py-4">
          {/* Content Section */}
          <div className="flex-1">
            <ul className="list-disc pl-6 text-[#333]">
              <li className="mb-4">
                <strong>Efficiency:</strong> BidWorks simplifies the process of
                generating accurate estimates, saving time compared to manual
                methods.
              </li>
              <li className="mb-4">
                <strong>Accuracy:</strong> It helps ensure that every estimate
                is detailed and precise, reducing errors that can lead to budget
                overruns.
              </li>
              <li>
                <strong>Customization:</strong> The platform offers customizable
                templates and tools that can be tailored to fit the specific
                needs of your project.
              </li>
            </ul>
          </div>
          {/* Image Section */}
          <div className="flex-1 ">
            <div className="relative flex justify-center items-center h-full">
              <img
                src="/meeting-young.webp"
                alt="About Us"
                className="rounded-md z-50  mr-2"
              />
              <div
                className="absolute w-[95%] h-[95%] -top-4 -left-5 z-10 rounded-[5px] rotate-[176deg] translate-x-6 translate-y-6"
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
              <strong>Collaboration:</strong> It supports team collaboration,
              allowing multiple users to work on the same estimate
              simultaneously.
            </li>
            <li className="mb-4">
              <strong>Cost-Effectiveness:</strong> BidWorks helps prevent
              unnecessary costs by providing clear and accurate cost projections
              from the start.
            </li>
            <li>
              <strong>Data Tracking:</strong> It tracks and stores historical
              data, making it easier to benchmark and compare costs for future
              projects.
            </li>
          </ul>
        </div>
      </div>
      <div className="py-6">
        <span className="text-[#333] mt-4">
          In summary, BidWorks Estimating can streamline your project management
          by delivering accurate, collaborative, and efficient estimating
          solutions.
        </span>
      </div>
      <div className=" flex items-center text-[#333] rounded-3xl  justify-center py-1 px-2 border-2 border-[#0163BE] w-64">
        <button className="flex justify-center items-center mr-2  ">
          Request a Quote Now
        </button>{" "}
        <ArrowRight className=" mt-1 text-[#0163BE]" />
      </div>
    </div>
  );
};

export default WhyChooseBidworks;
