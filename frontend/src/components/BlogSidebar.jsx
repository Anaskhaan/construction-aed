import React from "react";
import { categoriesData, latestPostsData, tagsData } from "../Helpers/Data";
import { Search } from "lucide-react";

const BlogSidebar = () => {
  return (
    <div className="p-4 border rounded-md">
      {/* Search Box */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search any Post"
            className="w-full p-3 border rounded-md focus:outline-none"
          />
          <Search className="absolute right-0 top-0 bg-[#0163be] text-white h-12 w-16 rounded-md p-3 " />
        </div>
      </div>

      {/* Latest Posts */}
      <div className="mb-8 border  p-4" style={{ borderColor: "#0163be" }}>
        <h3 className="text-xl font-bold mb-2  border-b-2 border-[#0163be] w-28 rounded-sm text-[#0163be]">
          Latest Posts
        </h3>
        <ul className="space-y-2">
          {latestPostsData.map((post) => (
            <li key={post.id} className="text-gray-700 flex gap-2 items-center">
              <img
                src={post.imageUrl}
                alt="post-thumbnail"
                className="w-14 h-14 object-cover rounded-md"
              />
              <div>
                <p className="text-sm  text-gray-500">{post.title}</p>
                <p className="text-sm text-gray-400">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div className="mb-8 border  p-4">
        <h3 className="text-xl font-bold mb-2 rounded-sm text-black border-b-2 border-[#0163be] inline-block">
          Post Categories
        </h3>

        <ul className="space-y-2 flex flex-col  ">
          {categoriesData.map((category) => (
            <li key={category.id} className="text-gray-500">
              {category.name}{" "}
              <span className="text-gray-700">
                ({Math.floor(Math.random() * 10 + 2)})
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Tags */}
      <div className="border rounded-md p-4">
        <h3 className="text-xl font-bold mb-2 text-black border-b-2 border-[#0163be] inline-block">
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tagsData.map((tag) => (
            <span
              key={tag.id}
              className="px-2 py-1 bg-gray-200 text-sm rounded-md text-gray-700 "
              style={{ borderColor: "#0163be" }}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
