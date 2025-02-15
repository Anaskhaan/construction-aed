import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { formatDistanceToNow } from "date-fns";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      id: "1",
      user: {
        name: "John Doe",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      },
      text: "This is an amazing feature! Really loving the new updates.",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      likes: 5,
      isLiked: false,
      replies: [],
    },
    {
      id: "2",
      user: {
        name: "Jane Smith",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
      },
      text: "Totally agree! The new interface is so intuitive.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60),
      likes: 3,
      isLiked: false,
      replies: [],
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleLike = (commentId) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked,
          };
        }
        return comment;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now().toString(),
      user: {
        name: "Current User",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=User",
      },
      text: newComment,
      timestamp: new Date(),
      likes: 0,
      isLiked: false,
      replies: [],
    };

    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=User"
            alt="Current user"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#0163be] focus:ring-1 focus:ring-[#0163be] outline-none resize-none"
              rows={3}
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-2 px-4 py-2 bg-[#0163be] text-white rounded-lg hover:bg-[#0163be]/90 transition-colors"
            >
              Post Comment
            </motion.button>
          </div>
        </div>
      </form>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        <AnimatePresence>
          {comments.map((comment) => (
            <motion.div
              key={comment.id}
              variants={item}
              initial="hidden"
              animate="show"
              exit="hidden"
              layout
              className="bg-white rounded-lg shadow-sm p-4"
            >
              <div className="flex gap-4">
                <img
                  src={comment.user.avatar}
                  alt={comment.user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900">
                      {comment.user.name}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {formatDistanceToNow(comment.timestamp, {
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-700">{comment.text}</p>
                  <div className="mt-3 flex items-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleLike(comment.id)}
                      className={`flex items-center gap-1 text-sm ${
                        comment.isLiked ? "text-[#0163be]" : "text-gray-500"
                      } hover:text-[#0163be] transition-colors`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill={comment.isLiked ? "#0163be" : "none"}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      {comment.likes}
                    </motion.button>
                    <button className="text-sm text-gray-500 hover:text-[#0163be] transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CommentSection;
