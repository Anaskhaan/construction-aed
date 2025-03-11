import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What do your Material Takeoffs include?",
      answer:
        "Our material takeoffs provide a comprehensive breakdown of all necessary materials for your project. This includes detailed quantities, specifications, and descriptions for items such as concrete, lumber, steel, drywall, and other essential materials. We ensure that every aspect is covered to help you accurately plan and budget your project.",
    },
    {
      question: "What Do You Need In Order To Do A Takeoff Or Estimate?",
      answer:
        "To perform a takeoff or estimate, we need project plans (architectural and engineering drawings), specifications (material requirements and construction methods), and a scope of work (project details and specific needs). Providing these ensures accurate and detailed estimates.",
    },
    {
      question: "How much does it cost?",
      answer:
        "The cost of our services varies based on several factors, including the complexity of the project, the level of detail required, and the specific materials involved. We strive to offer competitive pricing and provide customized quotes based on your project needs. Please reach out to us for a detailed estimate tailored to your project.",
    },
    {
      question: "Do you charge for reviewing plans before placing an order?",
      answer:
        "We believe in transparency and supporting our clients. Therefore, we offer a complimentary review of your plans to assess the scope of work and project requirements before you place an order. This helps us provide a more accurate estimate and ensures that you have a clear understanding of what to expect.",
    },
    {
      question: "What is your average turnaround time?",
      answer:
        "Our average turnaround time for estimates and takeoffs is typically [insert average time here, e.g., 3-5 business days], depending on the project's complexity and our current workload. We understand that time is of the essence, so we also accommodate urgent requests whenever possible to ensure you meet your bidding deadlines.",
    },
    {
      question: "In which country are you operating?",
      answer:
        "We are proudly operating in the USA and have been registered for the past 7 years. Our extensive experience enables us to provide tailored services that meet the unique requirements of projects across the country.",
    },
    {
      question:
        "Do you offer pre-bid and post-bid meetings to discuss the projects?",
      answer:
        "Yes, we offer both pre-bid and post-bid meetings to facilitate clear communication and address any questions or concerns. These meetings provide an opportunity to discuss project details, clarify scope, and ensure that all parties are aligned on expectations. We believe that effective communication is key to a successful project outcome.",
    },
  ];

  return (
    <div className="max-w-3xl max-h-7xl  mx-auto p-6">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold">
          Your <span className="text-[#0163BE]">Constructed</span> Question
          Answers
        </h2>
        <p className="text-gray-600 mt-2">
          Find answers to all your construction estimating queries in one place.
          Our comprehensive FAQ section addresses your concerns with clarity and
          detail.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-lg overflow-hidden ${
              openIndex === index ? "bg-[#0163BE]" : "bg-white"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`w-full p-4 text-left flex justify-between items-center  ${
                openIndex === index ? "text-white" : "text-[#515151] "
              }`}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-duration-500 ${
                  openIndex === index
                    ? "rotate-180 text-white"
                    : "text-[#515151]"
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="bg-white p-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-600">
          If you still have question about us or our services?{" "}
          <Link to="/Contact" className="text-[#0163BE] hover:underline">
            Contact Us
          </Link>{" "}
          we will help you to get started with confidence.
        </p>
      </div>
    </div>
  );
};

export default FAQs;
