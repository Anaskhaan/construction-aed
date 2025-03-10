import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogsData } from "../../Helpers/Data";

const BlogSection = () => {
  const carouselRef = useRef(null);

  // Enable touch-based horizontal scrolling
  const handleTouchMove = (event) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += event.touches[0].clientX * -0.1;
    }
  };

  return (
    <section className="py-12 px-4 w-11/12 mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div className="text-center md:text-left">
          <h2 className="lg:text-4xl text-xl font-semibold text-gray-900">
            Check Our <span className="text-blue-600">Latest Blogs</span>
          </h2>
          <p className="text-gray-600 mt-3">
            Stay informed with our latest blogs, covering insights, tips, and
            trends in construction estimating.
          </p>
        </div>

        {/* Button - Hidden on Mobile, Visible on Desktop */}
        <div className="hidden md:flex items-center justify-center rounded-full border border-[#0163BE]">
          <Link
            to="/blogslist"
            className="bg-transparent text-2xl text-black px-7 py-3 transition duration-300"
          >
            Explore All Blogs
          </Link>
          <ArrowRight className="text-black mr-2" />
        </div>
      </div>

      {/* Blog Grid (Laptops) & Carousel (Mobile) */}
      <div
        ref={carouselRef}
        className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-hidden snap-x snap-mandatory scrollbar-hide"
        onTouchMove={handleTouchMove}
      >
        {blogsData.slice(0, 3).map(({ id, date, title, excerpt, imageUrl }) => (
          <article
            key={id}
            className="bg-white rounded-xl overflow-hidden shadow min-w-[90%] md:min-w-0 snap-center"
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-58 object-cover"
            />
            <div className="p-6">
              <time className="text-blue-600 text-sm font-medium">{date}</time>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                {title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{excerpt}</p>
              <Link
                to={`/blogsdetail/${id}`}
                className="text-blue-600 mt-4 inline-block font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex md:hidden items-center justify-center">
        <Link
          to="/Blogs"
          className="flex items-center justify-center w-64 text-black border border-[#0163BE] px-4 py-2 rounded-full text-sm transition duration-300"
        >
          Explore All Blogs
          <ArrowRight className="ml-2 text-black" />
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
