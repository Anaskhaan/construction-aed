import { useParams } from "react-router-dom";
import { blogsData } from "../Helpers/Data";
import { useEffect, useState } from "react";
import CommentSection from "../components/CommentSection";

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
    return <p>Blog post not found.</p>;
  }

  return (
    <div className="px-8 py-4">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-600">{blog.date}</p>
      <img
        src={blog.imageUrl}
        alt={blog.title}
        className="w-full my-4 rounded-md"
      />
      <p className="text-gray-800 mb-6">{blog.content}</p>

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

      {/* Comment Section */}
      <CommentSection
        blogId={blog.id}
        commentsData={blog.comments}
        addComment={addComment}
      />
    </div>
  );
};

export default BlogDetail;
