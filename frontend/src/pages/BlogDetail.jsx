import { Link, useParams } from "react-router-dom";
import { blogsData } from "../Helpers/Data";
import { useEffect, useState } from "react";
import CommentSection from "../components/CommentSection";
import { ArrowLeft } from "lucide-react";
const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(() =>
    blogsData.find((b) => b.id === parseInt(id))
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle comment addition
  const addComment = (blogId, commentText) => {
    setBlog((prevBlog) => ({
      ...prevBlog,
      comments: [...prevBlog.comments, commentText],
    }));
  };

  if (!blog) {
    return (
      <p className="text-center text-red-500 text-xl font-semibold">
        Blog post not found.
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-6 bg-white shadow-lg rounded-lg">
      <Link to="/blogslist">
        <button className=" relative flex items-center justify-center hover:text-[#0163be] duration-300 ease-in-out my-4 text-black">
          <ArrowLeft /> Back to Home Page
          <span className="absolute bottom-0 left-0 h-0.5 bg-[#0163be] w-0 group-hover:w-full duration-300"></span>
        </button>
      </Link>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        {blog.title}
      </h1>
      <p className="text-gray-500 text-sm mb-4">Published on {blog.date}</p>
      <img
        src={blog.imageUrl}
        alt={blog.title}
        className="w-full my-4 rounded-lg shadow-md"
      />
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        {blog.content}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blog.additionalImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Additional image ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      {/* Comment Section */}
      <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
        {/* <CommentSection
          blogId={blog.id}
          commentsData={blog.comments}
          addComment={addComment}
        /> */}
      </div>
    </div>
  );
};

export default BlogDetail;
