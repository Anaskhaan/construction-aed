import { ArrowRight, MoveRight } from "lucide-react";
import SearchTrades from "../../components/SearchingTrades/SearchTrades";

export default function Metals() {
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
          <h1 className="text-3xl font-bold">Metals Estimating Services</h1>
          <span className="text-lg flex  justify-center items-center gap-4">
            Home <MoveRight />
            Metals Estimating Services
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-4 w-[90%] my-8">
          <div className="col-span-2  p-4">
            {/* Content for the first section */}
            <img
              src="/male-engineer-reading-documents-while-checking-quality-manufactured-steel-rood-industrial-building.webp"
              alt="male engineer reading documents while checking quality manufactured steel rood industrial building"
              className="w-full h-auto rounded-lg"
            />
            <div className="py-4  text-gray-700">
              <h1 className="text-2xl font-bold text-gray-900">
                Metal{" "}
                <span className="text-[#0163BE]"> Estimating Services</span>
              </h1>

              <p className="mt-4">
                Metals estimating services from BidWorks Estimating offer a
                comprehensive breakdown of the costs associated with metal
                fabrication and installation, including structural and
                decorative metalwork. Whether it’s structural steel, aluminum
                framing, or ornamental railings, BidWorks Estimating provides
                accurate estimates to ensure efficient budgeting for
                metal-related components of your construction project.
              </p>
              <p className="mt-4">
                Metals Estimating Services cover everything from the procurement
                of raw materials to the costs of custom metalwork and finishing.
                With BidWorks Estimating, you’ll receive reliable estimates that
                allow for precise cost control and project planning.
              </p>
              <h2 className="mt-6 text-xl font-bold text-[#202020]">
                Cost Factors
              </h2>
              <ul className="mt-4 list-disc pl-6">
                <li>
                  <strong className="font-semibold text-[#202020]">
                    Materials:
                  </strong>{" "}
                  Structural steel, aluminum, copper, and other metal
                  components. BidWorks Estimating ensures that you select the
                  most cost-effective and structurally sound metals for your
                  project.
                </li>
                <li className="mt-2">
                  <strong className="font-semibold text-[#202020]">
                    Labor:
                  </strong>{" "}
                  Skilled labor costs for welding, installation, and assembly of
                  metal components.{" "}
                  <strong className="font-semibold text-[#0163BE]">
                    BidWorks Estimating
                  </strong>{" "}
                  includes wage rates, productivity expectations, and complexity
                  to ensure accurate labor cost projections.
                </li>
                <li className="mt-2">
                  <strong className="font-semibold text-[#202020]">
                    Fabrication:
                  </strong>{" "}
                  Costs for cutting, welding, shaping, and assembling metal
                  elements. BidWorks Estimating factors in fabrication
                  complexity to provide accurate, transparent pricing.
                </li>
                <li className="mt-2">
                  <strong className="font-semibold text-[#202020]">
                    Transportation:
                  </strong>{" "}
                  Costs for transporting heavy or large metal components to the
                  site.{" "}
                  <strong className="font-semibold text-[#0163BE]">
                    BidWorks Estimating
                  </strong>{" "}
                  evaluates transportation logistics to avoid unexpected
                  delivery costs.
                </li>
                <li className="mt-2">
                  <strong className="font-semibold text-[#202020]">
                    Finishing:
                  </strong>{" "}
                  Expenses for coatings, painting, or surface treatments to
                  protect metal surfaces.{" "}
                  <strong className="font-semibold text-[#0163BE]">
                    BidWorks Estimating
                  </strong>{" "}
                  accounts for all necessary finishes to ensure long-term
                  durability and aesthetic appeal.
                </li>
              </ul>
            </div>
            <div className="py-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Takeoff <span className="text-[#0163BE]"> Services</span>
              </h1>

              <p className="mt-4">
                Our Metals Takeoff Services provide detailed measurements of
                metal components such as beams, columns, railings, and other
                structural or decorative elements. BidWorks Estimating ensures
                that material quantities are calculated accurately, factoring in
                the exact specifications required for your project. We deliver
                comprehensive estimates that include metal fabrication,
                transportation, labor, and finishing costs, ensuring you have
                complete control over your metalwork expenses.
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
