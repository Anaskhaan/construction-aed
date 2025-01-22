import { ArrowRight, MoveRight } from "lucide-react";

export default function Masonary() {
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
          <h1 className="text-3xl font-bold">Masonary Estimating Services</h1>
          <span className="text-lg flex  justify-center items-center gap-4">
            Home <MoveRight />
            Masonary Estimating Services
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-4 w-[90%] my-8">
          <div className="col-span-2  p-4">
            {/* Content for the first section */}
            <img
              src="/close-up-men-looking-plan.webp"
              alt="close up men looking plan"
              className="w-full h-auto rounded-lg"
            />
            <div className="py-4  text-gray-700">
              <h1 className="text-2xl font-bold text-gray-900">
                Masonary{" "}
                <span className="text-[#0163BE]"> Estimating Services</span>
              </h1>

              <p className="mt-4">
                Masonry estimating services from BidWorks Estimating provide
                project managers with detailed cost projections for all
                masonry-related work, including brick, block, stone, and mortar.
                Whether you’re building walls, facades, or decorative elements,
                BidWorks Estimating ensures that both material and labor costs
                are meticulously planned, reducing the risk of budget overruns.
              </p>
              <p className="mt-4">
                Masonry Estimating Services cover everything from the selection
                of masonry materials to the calculation of installation labor.
                With BidWorks Estimating, you can be confident that your masonry
                work is thoroughly accounted for, ensuring that your project
                stays on schedule and within budget.
              </p>
              <h2 className="mt-6 text-xl font-bold text-[#202020]">
                Cost Factors
              </h2>
              <ul className="mt-4 list-disc pl-6">
                <li>
                  <strong className="font-semibold text-[#202020]">
                    Materials:
                  </strong>{" "}
                  Bricks, blocks, stone, mortar, and reinforcement materials.{" "}
                  <strong className="font-semibold text-[#0163BE]">
                    BidWorks Estimating
                  </strong>{" "}
                  helps you choose the right materials based on your project’s
                  aesthetic and structural requirements.
                </li>
                <li className="mt-2">
                  <strong className="font-semibold text-[#202020]">
                    Labor:
                  </strong>{" "}
                  Skilled labor costs for masonry installation, which depend on
                  local wage rates and the complexity of the project.{" "}
                  <strong className="font-semibold text-[#0163BE]">
                    BidWorks Estimating
                  </strong>{" "}
                  ensures accurate labor cost projections, accounting for
                  project size and design intricacies
                </li>
                <li className="mt-2">
                  <strong className="font-semibold text-[#202020]">
                    Waste Minimization:
                  </strong>{" "}
                  Accurate material estimates reduce waste and unnecessary
                  spending. BidWorks Estimating calculates exact material needs,
                  reducing excess and promoting cost savings.
                </li>
                <li className="mt-2">
                  <strong className="font-semibold text-[#202020]">
                    Project Complexity:
                  </strong>{" "}
                  Ornate masonry work or projects requiring custom designs may
                  increase labor and material costs. BidWorks Estimating
                  incorporates complexity into its detailed estimates, ensuring
                  a comprehensive understanding of potential costs
                </li>
              </ul>
            </div>
            <div className="py-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Takeoff <span className="text-[#0163BE]"> Services</span>
              </h1>

              <p className="mt-4">
                Our Masonry Takeoff Services include precise quantity
                measurements for all masonry components, including bricks,
                blocks, and stone. BidWorks Estimating evaluates the type and
                quality of masonry materials to ensure you get accurate,
                cost-effective estimates that include material specifications,
                waste minimization, and labor requirements. We work closely with
                you to deliver a reliable financial plan for your masonry needs.
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
          <div className="col-span-1 bg-gray-300 p-4">
            {/* Content for the second section */}
          </div>
        </div>
      </div>
    </div>
  );
}
