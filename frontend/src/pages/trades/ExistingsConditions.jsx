// export default function ExistingsConditions() {
//   return (
//     <div>
//       <div className="w-full h-48 bg-black"></div>
//       <div className="flex justify-center items-center">
//         <div className=""></div>
//       </div>
//     </div>
//   );
// }

export default function ExistingsConditions() {
  return (
    <div>
      <div className="w-full h-48 bg-black"></div>
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
                , you'll have a clear picture of the costs associated with
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
          </div>
          <div className="col-span-1 bg-gray-300 p-4">
            {/* Content for the second section */}
          </div>
        </div>
      </div>
    </div>
  );
}
