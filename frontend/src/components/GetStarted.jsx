import { ArrowBigDown, LucideArrowBigDownDash } from "lucide-react";

export default function   GetStarted() {
  const steps = [
    {
      title: "Send Us Your Plans",
      icon: "/Send.webp",
      description:
        "Upload your plans or email them to info@swifttakeoffs.com. Include details about your project and scope of work.",
    },
    {
      title: "Receive a Quote",
      icon: "/Quote.webp",
      description:
        "We’ll provide a detailed quote before starting. Each project is unique, so we carefully review the scope, complexity, and trades involved.",
    },
    {
      title: "Receive Your Cost Estimate",
      icon: "/Calculation.webp",
      description:
        "Our team provides takeoffs and estimates for your project. You'll receive a PDF and Excel file, plus optional lead generation services.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-24 h-full">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">
          How To <span className="text-blue-600">Get Started</span> With Us
        </h2>
        <p className="mt-6 text-gray-600 max-w-4xl mx-auto">
          Share your project plans, and we'll handle the rest—from providing a
          detailed quote to delivering precise cost estimates.
        </p>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 relative">
        {steps.map(({ title, icon, description }, index) => (
          <div
            key={index}
            className={`text-center ${
              index === 1 ? "md:mt-28" : "md:self-start"
            } relative`}
          >
            {/* Icon */}
            <div className="w-28 h-28 mx-auto flex items-center justify-center relative">
              <img src={icon} alt={`${title} icon`} className="w-44 h-34" />
            </div>
            <div className="flex flex-col items-center lg:hidden">
  {/* Dashed Vertical Line */}
  <div className="border-l-2 border-dashed border-blue-600 mt-2 h-16" />
  
  {/* Downward Arrow Icon */}
  <span className="text-blue-600 w-6 h-6 ml-[13.1px] -mt-1 rotate-90 font-bold text-2xl" >&gt;</span>

</div>

            {/* Title and Description */}
            <h3 className="text-xl font-bold  mb-4">{title}</h3>
            <p className="text-gray-600">{description}</p>

            {index === 0 && (
              <img
                src="/Vector 9.webp"
                alt="Right arrow"
                className="hidden md:block absolute top-16 -right-32 w-57 h-28 transform rotate-45"
              />
            )}

            {index === 2 && (
              <img
                src="/Vector 9.webp"
                alt="Left arrow"
                className="hidden md:block absolute bottom-24 -left-32 transform -rotate-36 w-50 h-28"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
