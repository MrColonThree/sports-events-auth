import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [seeMore, setSeeMore] = useState(false);
  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto">
      {seeMore
        ? blogs.map((blog, index) => <Blog key={index} blog={blog}></Blog>)
        : blogs
            .slice(0, 5)
            .map((blog, index) => <Blog key={index} blog={blog}></Blog>)}
      <div className="text-center mb-14">
        <button
          onClick={() => setSeeMore(!seeMore)}
          className="px-3 py-1 text-white bg-blue-500 font-semibold"
        >
          {seeMore ? "See Less" : "See more"}
        </button>
      </div>
    </div>
  );
};

export default Blogs;
