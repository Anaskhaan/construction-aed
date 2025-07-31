import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Check,
  Star,
  ThumbsUp,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const feedbacks = [
    {
      name: "Saara D",
      date: "August 10, 2019",
      feedback:
        "I had a fantastic experience with swift takeoffs Estimating services! They were extremely professional, taking the time to fully understand my project needs. Their estimate was detailed, precise, and made the whole process seamless. If you're looking for accurate and trustworthy construction estimates, I highly recommend!",
      rating: 5,
      image: "/Ellipse 133.jpg",
      helpful: 12,
      verified: true,
    },
    {
      name: "John",
      date: "March 10, 2020",
      feedback:
        "swift takeoffs provides prompt and excellent service. They provided our firm with detailed takeoffs and estimates for our last three projects which we were successful bidder.",
      rating: 4.5,
      image: "/Ellipse 134.jpg",
      helpful: 8,
      verified: true,
    },
    {
      name: "Anaika",
      date: "July 11, 2020",
      feedback:
        "swift takeoffs exceeded our expectations in every way. Their estimating services are accurate, their team is responsive and knowledgeable, and their commitment to transparency is commendable. I wholeheartedly recommend them to anyone in the construction industry. Thank you for your outstanding work!",
      rating: 4,
      image: "/Ellipse 135.jpg",
      helpful: 15,
      verified: true,
    },
    {
      name: "David",
      date: "December 27, 2021",
      feedback:
        "The best estimating company with the most affordable prices, very fast customer service, and very accurate estimates from the plans. I highly recommend them.",
      rating: 4.5,
      image: "/Ellipse 136.jpg",
      helpful: 6,
      verified: true,
    },
    {
      name: "Robert H.",
      date: "May 17, 2022",
      feedback:
        "Highly impressed with their estimation service! They went above and beyond to ensure that every aspect of my project was considered, resulting in estimates that were both comprehensive and precise.",
      rating: 5,
      image: "/Ellipse 137.jpg",
      helpful: 21,
      verified: true,
    },
  ];

  const testimonialsPerPage = 3;
  const totalSlides = Math.ceil(feedbacks.length / testimonialsPerPage);

  // Handle mouse movement for interactive effects
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  // Auto-rotate slides
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovering, totalSlides]);

  const changeSlide = (direction) => {
    setCurrentSlide((prev) => {
      const newSlide = prev + direction;
      return newSlide < 0 ? totalSlides - 1 : newSlide % totalSlides;
    });
  };

  const getStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  const getVisibleTestimonials = () => {
    const startIndex = currentSlide * testimonialsPerPage;
    return feedbacks.slice(startIndex, startIndex + testimonialsPerPage);
  };

  // Google Logo SVG Component
  const GoogleLogo = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:py-20 lg:px-8 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#0163BE] rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 bg-[#0163BE] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Google Business Badge */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100 mb-8">
            <GoogleLogo />
            <span className="text-gray-700 font-medium">Reviews</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold text-gray-900">4.9</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-5xl  font-extrabold text-gray-900 mb-6">
            <span className="block">Don't just take our word for it - </span>
            <span className="block text-[#0163BE] bg-gradient-to-r from-[#0163BE] to-[#0190BE] bg-clip-text text-transparent">
              hear what our clients say
            </span>
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
            Real reviews from real construction professionals who trust our
            estimating services
          </p>
        </div>

        {/* Main Testimonials Carousel */}
        <div
          className="relative"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Interactive Glow Effect */}
          <div
            className="absolute inset-0 rounded-3xl transition-all duration-700 pointer-events-none opacity-0 hover:opacity-100"
            style={{
              background: `radial-gradient(400px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(1, 99, 190, 0.05), transparent 50%)`,
            }}
          />

          {/* Navigation Arrows */}
          <button
            onClick={() => changeSlide(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 p-4 rounded-full bg-white shadow-xl border border-gray-200 hover:bg-[#0163BE] hover:border-[#0163BE] transition-all duration-300 group hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
          </button>

          <button
            onClick={() => changeSlide(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 p-4 rounded-full bg-white shadow-xl border border-gray-200 hover:bg-[#0163BE] hover:border-[#0163BE] transition-all duration-300 group hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
          </button>

          {/* Testimonials Grid */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
                    {feedbacks
                      .slice(
                        slideIndex * testimonialsPerPage,
                        (slideIndex + 1) * testimonialsPerPage
                      )
                      .map((feedback, index) => (
                        <div
                          key={`${slideIndex}-${index}`}
                          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-gray-100 hover:border-[#0163BE]/20 group hover:-translate-y-2"
                        >
                          {/* Google Review Header */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <GoogleLogo />
                              <span className="text-sm text-gray-500 font-medium">
                                Review
                              </span>
                            </div>
                            {feedback.verified && (
                              <div className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                <Check className="w-3 h-3" />
                                <span>Verified</span>
                              </div>
                            )}
                          </div>

                          {/* User Info */}
                          <div className="flex items-center mb-4">
                            <div className="relative mr-4">
                              <img
                                src={feedback.image}
                                alt={feedback.name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                              />
                              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <GoogleLogo />
                              </div>
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 text-lg">
                                {feedback.name}
                              </h3>
                              <div className="flex items-center gap-2 mt-1">
                                <div className="flex items-center gap-1">
                                  {getStars(feedback.rating)}
                                </div>
                                <span className="text-sm text-gray-500">
                                  {feedback.rating}/5
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Review Content */}
                          <div className="mb-6">
                            <Quote className="w-6 h-6 text-[#0163BE]/20 mb-2" />
                            <p className="text-gray-700 leading-relaxed text-sm line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                              {feedback.feedback}
                            </p>
                          </div>

                          {/* Review Footer */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div className="text-xs text-gray-500">
                              {feedback.date}
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1 text-xs text-gray-500">
                                <ThumbsUp className="w-3 h-3" />
                                <span>Helpful ({feedback.helpful})</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-12 gap-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? "w-8 h-3 bg-[#0163BE] shadow-lg"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Google Business Stats */}
        <div className="mt-16 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <GoogleLogo />
                <span className="text-xl font-bold text-gray-900">
                  G Business
                </span>
              </div>
              <p className="text-gray-600 text-sm">Verified Reviews</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#0163BE] mb-1">4.9</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm">Average Rating</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-[#0163BE] mb-1">127+</div>
              <p className="text-gray-600 text-sm">Total Reviews</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-1">100%</div>
              <p className="text-gray-600 text-sm">Recommended</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center">
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Join hundreds of satisfied clients who trust our estimating
              services and leave us glowing reviews
            </p>

            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#0163BE] rounded-full hover:bg-[#0153a1] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              <Link to="/contact" className="relative z-10">
                Get Your Free Estimate
              </Link>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0163BE] to-[#0190BE] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <div className="flex items-center mt-6 gap-3 text-sm text-gray-500">
              <GoogleLogo />
              <span>See all our reviews</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-gray-900">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
