import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What Do Your Material Takeoffs Include?",
      answer:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.orem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    },
    {
      question: "What Do You Need In Order To Do A Takeoff Or Estimate?",
      answer:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.orem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    },
    {
      question: "Do You Charge For Reviewing Plans Before Placing An Order?",
      answer:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.orem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    },
    {
      question: "What Is Your Average Turnaround Time?",
      answer:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.orem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    },
    {
      question: "Do You Offer Pre-Bid And Post-Bid Meetings To Discuss The Projects?",
      answer:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.orem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    },
  ];

  return (
    <div className="max-w-3xl max-h-7xl  mx-auto p-6">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold">
          Your <span className="text-[#0163BE]">Constructed</span> Question Answers
        </h2>
        <p className="text-gray-600 mt-2">
          Find answers to all your construction estimating queries in one place. Our comprehensive FAQ section addresses
          your concerns with clarity and detail.
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
                  openIndex === index ? "rotate-180 text-white" : "text-[#515151]"
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
          <Link to= "/Contact" className="text-[#0163BE] hover:underline">
            Contact Us
          </Link>{" "}
          we will help you to get started with confidence. 
        </p>
      </div>
    </div>
  );
};

export default FAQs;


