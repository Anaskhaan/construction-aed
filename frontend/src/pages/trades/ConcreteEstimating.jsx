import { ArrowRight, MoveRight } from "lucide-react";
import SearchTrades from "../../components/SearchingTrades/SearchTrades";
export default function ConcreteEstimating() {
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
          <h1 className="text-3xl font-bold">Concrete Estimating Services</h1>
          <span className="text-lg flex  justify-center items-center gap-4">
            Home <MoveRight />
            Concrete Estimating Services
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-4 w-[90%] my-8">
          <div className="col-span-2  p-4">
            {/* Content for the first section */}
            <img
              src="/pointing-sketch.webp"
              alt="pointing sketch two people"
              className="w-full h-auto rounded-lg"
            />
            <div className="py-4  text-gray-700">
              <h1 className="text-2xl font-bold text-gray-900">
                Concrete{" "}
                <span className="text-[#0163BE]"> Estimating Services</span>
              </h1>

              <p className="mt-4">
                Concrete estimating services from BidWorks Estimating are
                crucial for accurately predicting the costs associated with
                concrete work, including materials, labor, and associated fees.
                Whether your project requires foundations, slabs, footings, or
                walls, BidWorks Estimating provides precise estimates to help
                you budget accurately, allocate resources effectively, and keep
                the project on track.
              </p>
              <p className="mt-4">
                Concrete Estimating Services cover everything from calculating
                the volume of concrete needed to evaluating the costs of
                reinforcement materials, such as rebar and additives. With
                BidWorks Estimating, you can be confident that your concrete
                costs are planned down to the finest detail, ensuring that all
                structural components are handled efficiently
              </p>
              <h2 className="mt-6 text-xl font-bold text-[#202020]">
                Cost Factors
              </h2>
              <ul className="mt-4 list-disc pl-6">
                <li>
                  <strong className="font-semibold text-[#202020]">
                    Materials:
                  </strong>{" "}
                  Concrete mix, rebar, additives, formwork, and other structural
                  supplies.{" "}
                  <strong className="font-semibold text-[#0163BE]">
                    BidWorks Estimating
                  </strong>{" "}
                  ensures you have the correct grade and quantity of materials
                  for your specific project needs.
                </li>
                <li className="mt-2">
                  <strong className="font-semibold text-[#202020]">
                    Labor:
                  </strong>{" "}
                  Costs for labor associated with pouring, forming, and
                  finishing concrete, based on local wage rates and project
                  size.{" "}
                  <strong className="font-semibold text-[#0163BE]">
                    BidWorks Estimating
                  </strong>{" "}
                  calculates labor costs with precision, factoring in project
                  complexity and site conditions.
                </li>
                <li className="mt-2">
                  <strong className="font-semibold text-[#202020]">
                    Project Size and Complexity:
                  </strong>{" "}
                  Larger projects or those requiring intricate concrete forms
                  (e.g., curved walls, intricate foundations) may increase
                  material and labor costs. BidWorks Estimating ensures that
                  such complexity is accounted for.
                </li>
                <li className="mt-2">
                  <strong className="font-semibold text-[#202020]">
                    Site Conditions:
                  </strong>{" "}
                  Soil type, weather, and accessibility to the site can all
                  impact concrete work. BidWorks Estimating evaluates these
                  factors to adjust material use and labor requirements
                  accordingly.
                </li>
                <li className="mt-2">
                  <strong className="font-semibold text-[#202020]">
                    Timeline:
                  </strong>{" "}
                  Tight project schedules may incur additional costs, such as
                  overtime or expedited material delivery. BidWorks Estimating
                  provides transparent cost adjustments for accelerated
                  timelines.
                </li>
              </ul>
            </div>
            <div className="py-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Takeoff <span className="text-[#0163BE]"> Services</span>
              </h1>

              <p className="mt-4">
                Our Concrete Takeoff Services include precise measurements of
                concrete components like slabs, footings, walls, and beams.
                BidWorks Estimating performs detailed quantity calculations,
                ensuring that the exact volume of concrete, rebar, and formwork
                is ordered to minimize waste and optimize costs. These takeoffs
                seamlessly integrate into our cost estimation process to offer a
                complete overview of your concrete-related expenses.
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
          <div className="col-span-1 bg-white  p-4">
            {/* Content for the second section */}
            <SearchTrades/>
          </div>
        </div>
      </div>
    </div>
  );
}
