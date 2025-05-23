import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ReactStars from "react-rating-stars-component";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const feedbacks = [
    {
      name: "Saara D",
      date: "08/10/19",
      feedback:
        "I had a fantastic experience with swift takeoffs Estimating services! They were extremely professional, taking the time to fully understand my project needs. Their estimate was detailed, precise, and made the whole process seamless. If you're looking for accurate and trustworthy construction estimates, I highly recommend!",
      rating: 5,
      image: "/Ellipse 133.jpg",
    },
    {
      name: "John",
      date: "10/03/20",
      feedback:
        "swift takeoffs provides prompt and excellent service. They provided our firm with detailed takeoffs and estimates for our last three projects which we were successful bidder.",
      rating: 4.5,
      image: "/Ellipse 134.jpg",
    },
    {
      name: "Anaika",
      date: "11/07/20",
      feedback:
        "swift takeoffs exceeded our expectations in every way. Their estimating services are accurate, their team is responsive and knowledgeable, and their commitment to transparency is commendable. I wholeheartedly recommend them to anyone in the construction industry. Thank you for your outstanding work!",
      rating: 4,
      image: "/Ellipse 135.jpg",
    },
    {
      name: "David",
      date: "27/12/21",
      feedback:
        "The best estimating company with the most affordable prices, very fast customer service, and very accurate estimates from the plans. I highly recommend them.",
      rating: 4.5,
      image: "/Ellipse 136.jpg",
    },
    {
      name: "Robert H.",
      date: "17/05/22",
      feedback:
        "Highly impressed with their estimation service! They went above and beyond to ensure that every aspect of my project was considered, resulting in estimates that were both comprehensive and precise.",
      rating: 5,
      image: "/Ellipse 137.jpg",
    },
  ];

  const changeSlide = (direction) => {
    setCurrentSlide((prev) => {
      const totalSlides = Math.ceil(feedbacks.length / 3);
      const newSlide = prev + direction;
      return newSlide < 0
        ? totalSlides - 1
        : newSlide >= totalSlides
        ? 0
        : newSlide;
    });
  };

  return (
    <div className="bg-gray-50 py-12">
      <h1 className="text-center text-gray-900 font-extrabold text-4xl mb-8">
        Feedback From <span className="text-[#0163BE]">Our Clients</span>
      </h1>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Carousel only for laptop view */}
        <div className="hidden lg:flex items-center justify-between absolute top-1/2 w-full px-2">
          <button
            onClick={() => changeSlide(-1)}
            className="p-3 rounded-full absolute -left-6 bg-gray-300 shadow-lg  hover:bg-[#0163BE]"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button
            onClick={() => changeSlide(1)}
            className="p-3 rounded-full absolute -right-0 bg-gray-300 shadow-lg hover:bg-[#0163BE]"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>

        {/* Feedback Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 transition-all duration-500 ease-in-out">
          {feedbacks
            .slice(currentSlide * 3, currentSlide * 3 + 3)
            .map((feedback, index) => (
              <div
                key={index}
                className="bg-white min-h-[200px] p-5 border-2 border-blue-500 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={feedback.image}
                    alt={feedback.name}
                    className="w-16 h-16 rounded-full border-2 border-[#0163BE]"
                  />
                  <div className="p-4 text-xl">
                    <h3 className="font-bold text-gray-800">{feedback.name}</h3>
                    <p className="text-sm text-gray-500">{feedback.date}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-2">
                  <p className="text-gray-700 italic text-sm">
                    <Quote
                      className="text-gray-400 mb-3 transform rotate-180"
                      fill="gray-500"
                      size={14}
                    />
                    {feedback.feedback}
                  </p>
                </div>
                <Quote
                  className="text-gray-400 ml-52 mt-0 "
                  fill="gray-500"
                  size={14}
                />
                <div className="flex items-center justify-center mt-2">
                  <ReactStars
                    count={5}
                    value={feedback.rating}
                    size={24}
                    isHalf={true}
                    edit={false}
                    activeColor="#0163BE"
                  />
                </div>
              </div>
            ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2 lg:hidden">
          {Array.from({ length: Math.ceil(feedbacks.length / 3) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-[#0163BE] w-6" : "bg-gray-300"
                }`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
