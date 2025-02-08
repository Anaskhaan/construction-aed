import React, { useState } from "react";
import { blogsData } from "../Helpers/Data";
import BlogSidebar from "../components/BlogSidebar";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogList = () => {
  // State for pagination (current page and blogs per page)
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 2;

  // Get the index of the first and last blog for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  // Slice the blogsData array to only show the relevant blogs for the current page
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

  // Pagination handler to go to the next or previous page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col md:flex-row px-4 py-8">
      {/* Blog Posts Section */}
      <div className="w-full md:w-3/4 mb-8 md:mb-0">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="border-b pb-4 mb-6">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-auto object-cover object-center rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-4">{blog.date}</p>
            <p className="text-gray-800 mb-4">{blog.excerpt}</p>
            <Link
              to={`/blogsdetail/${blog.id}`}
              className="bg-white text-black px-4 py-2 rounded-3xl border border-[#0163be]"
            >
              Read More
            </Link>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex justify-center space-x-4 mt-8">
          {/* Previous Page Button */}
          {currentPage > 1 && (
            <button
              onClick={() => paginate(currentPage - 1)}
              className={`px-3 py-2 rounded-md ${
                currentPage === 2 ? "bg-[#0163be] text-white" : "bg-gray-200"
              }`}
            >
              <ArrowLeft />
            </button>
          )}

          {/* Page Number Buttons */}
          <button
            onClick={() => paginate(1)}
            className={`px-3 py-2 rounded-md ${
              currentPage === 1 ? "bg-[#0163be] text-white" : "bg-gray-200"
            }`}
          >
            1
          </button>
          <button
            onClick={() => paginate(2)}
            className={`px-3 py-2 rounded-md ${
              currentPage === 2 ? "bg-[#0163be] text-white" : "bg-gray-200"
            }`}
          >
            2
          </button>

          {/* Next Page Button */}
          {currentPage < Math.ceil(blogsData.length / blogsPerPage) && (
            <button
              onClick={() => paginate(currentPage + 1)}
              className={`px-3 py-2 rounded-md ${
                currentPage === 2 ? "bg-[#0163be] text-white" : "bg-gray-200"
              }`}
            >
              <ArrowRight />
            </button>
          )}
        </div>
      </div>

      {/* Sidebar Section */}
      <div className="w-full md:w-1/4 px-4">
        <BlogSidebar />
      </div>
    </div>
  );
};

export default BlogList;
