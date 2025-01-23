import { ArrowRight, MoveRight } from "lucide-react";
import SearchTrades from "../../components/SearchingTrades/SearchTrades";

export default function ExistingsConditions() {
  return (
    <div>
      <div className="w-full h-48 relative">
        {/* Black Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Image */}
        <img
          src="/businesswoman.webp"
          alt="businesswoman image"
          className="w-full h-full object-cover"
        />

        {/* Text Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-4">
          <h1 className="text-3xl font-bold">Existing Condition Estimating</h1>
          <span className="text-lg flex  justify-center items-center gap-4">
            Home <MoveRight />
            Existing Condition Estimating
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-4 w-[90%] my-8">
          <div className="col-span-2  p-4">
            {/* Content for the first section */}
            <img
              src="/twoarchi.png"
              alt="Description of image"
              className="w-full h-auto rounded-lg"
            />
            <div className="py-4  text-gray-700">
              <h1 className="text-2xl font-bold text-gray-900">
                Existing Conditions{" "}
                <span className="text-[#0163BE]"> Estimating Services</span>
              </h1>

              <p className="mt-4">
                Existing Conditions estimating services from{" "}
                <strong className="font-semibold text-[#0163BE]">
                  BidWorks Estimating
                </strong>{" "}
                focus on assessing and costing all pre-existing conditions at a
                construction site, including environmental hazards, structural
                challenges, and other site-specific factors. These services are
                essential for understanding the unique challenges posed by the
                site and accounting for any pre-construction activities such as
                demolition, hazardous material handling, or site remediation.
              </p>
              <p className="mt-4">
                With{" "}
                <strong className="font-semibold text-[#0163BE]">
                  BidWorks Estimating
                </strong>
                , you&apos;ll have a clear picture of the costs associated with
                addressing these conditions, minimizing risks, and reducing the
                chances of unexpected expenses during construction.
              </p>
              <h2 className="mt-6 text-xl font-bold text-[#202020]">
                Cost Factors
              </h2>
              <ul className="mt-4 list-disc pl-6">
                <li>
                  <strong className="font-semibold text-[#202020]">
                    Site Assessments:
                  </strong>{" "}
                  Costs for environmental assessments, geotechnical surveys, and
                  structural evaluations.{" "}
                  <strong className="font-semibold text-[#0163BE]">
                    BidWorks Estimating
                  </strong>{" "}
                  helps project managers plan for soil testing, ground stability
                  checks, and hazard evaluations.
                </li>
                <li className="mt-2">
                  <strong className="font-semibold text-[#202020]">
                    Demolition:
                  </strong>{" "}
                  Costs for removing existing structures, handling debris, and
                  managing hazardous materials such as asbestos or lead.{" "}
                  <strong className="font-semibold text-[#0163BE]">
                    BidWorks Estimating
                  </strong>{" "}
                  includes both labor and equipment costs for safe, efficient
                  demolition.
                </li>
                <li className="mt-2">
                  <strong className="font-semibold text-[#202020]">
                    Remediation:
                  </strong>{" "}
                  Costs for environmental remediation processes, such as soil
                  decontamination, water treatment, or air quality control.{" "}
                  <strong className="font-semibold text-[#0163BE]">
                    BidWorks Estimating
                  </strong>{" "}
                  ensures accurate cost projection for these critical safety
                  measures.
                </li>
                <li className="mt-2">
                  <strong className="font-semibold text-[#202020]">
                    Soil and Geotechnical Conditions:
                  </strong>{" "}
                  Costs related to soil stabilization, foundation reinforcement,
                  and other necessary groundwork.{" "}
                  <strong className="font-semibold text-[#0163BE]">
                    BidWorks Estimating
                  </strong>{" "}
                  assesses these variables to ensure a solid foundation for your
                  project.
                </li>
              </ul>
            </div>
            <div className="py-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Takeoff <span className="text-[#0163BE]"> Services</span>
              </h1>

              <p className="mt-4">
                Our Existing Conditions Takeoff Services provide a comprehensive
                review of the site’s structural, environmental, and physical
                elements, ensuring accurate estimates for demolition,
                remediation, and site preparation. BidWorks Estimating takes
                into account factors such as hazardous material removal and
                environmental impact, ensuring that the site is prepared for
                safe and efficient construction.
              </p>
            </div>
            <h1 className="text-2xl font-bold">
              Why Choose{" "}
              <span className="text-[#0163BE]">BIDWORKS Estimating</span>
            </h1>
            <div>
              <div className="flex flex-col lg:flex-row items-center gap-6 py-4">
                {/* Content Section */}
                <div className="flex-1">
                  <ul className="list-disc pl-6 text-[#333]">
                    <li className="mb-4">
                      <strong>Efficiency:</strong> BidWorks simplifies the
                      process of generating accurate estimates, saving time
                      compared to manual methods.
                    </li>
                    <li className="mb-4">
                      <strong>Accuracy:</strong> It helps ensure that every
                      estimate is detailed and precise, reducing errors that can
                      lead to budget overruns.
                    </li>
                    <li>
                      <strong>Customization:</strong> The platform offers
                      customizable templates and tools that can be tailored to
                      fit the specific needs of your project.
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
                    <strong>Collaboration:</strong> It supports team
                    collaboration, allowing multiple users to work on the same
                    estimate simultaneously.
                  </li>
                  <li className="mb-4">
                    <strong>Cost-Effectiveness:</strong> BidWorks helps prevent
                    unnecessary costs by providing clear and accurate cost
                    projections from the start.
                  </li>
                  <li>
                    <strong>Data Tracking:</strong> It tracks and stores
                    historical data, making it easier to benchmark and compare
                    costs for future projects.
                  </li>
                </ul>
              </div>
            </div>
            <div className="py-6">
              <span className="text-[#333] mt-4">
                In summary, BidWorks Estimating can streamline your project
                management by delivering accurate, collaborative, and efficient
                estimating solutions.
              </span>
            </div>
            <div className=" flex items-center text-[#333] rounded-3xl  justify-center py-1 px-2 border-2 border-[#0163BE] w-64">
              <button className="flex justify-center items-center mr-2  ">
                Request a Quote Now
              </button>{" "}
              <ArrowRight className=" mt-1 text-[#0163BE]" />
            </div>
          </div>
          <div className="col-span-1 bg-white p-4">
            {/* Content for the second section */}
            <SearchTrades/>
          </div>
        </div>
      </div>
    </div>
  );
}
