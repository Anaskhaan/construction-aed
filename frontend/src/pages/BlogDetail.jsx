import { useParams } from "react-router-dom";
import { blogsData } from "../Helpers/Data";
import { useEffect } from "react";

const BlogDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { id } = useParams();
  // Convert id to a number before matching
  const blog = blogsData.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div className="px-8 py-4">
      {/* Blog Title */}
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      {/* Blog Date */}
      <p className="text-gray-600">{blog.date}</p>

      {/* Main Blog Image */}
      <img
        src={blog.imageUrl}
        alt={blog.title}
        className="w-full my-4 rounded-md"
      />

      {/* Main Blog Content */}
      <p className="text-gray-800 mb-6">{blog.content}</p>

      {/* Additional Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blog.additionalImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Additional image ${index + 1}`}
            className="w-full h-auto rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
