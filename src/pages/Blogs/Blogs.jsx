import { useContext, useState } from "react";
import Blog from "./Blog";
import { AuthContext } from "../../providers/AuthProviders";

const Blogs = () => {
  const [seeMore, setSeeMore] = useState(false);
  const { blogs } = useContext(AuthContext);
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
          className="px-3 py-2 text-white bg-blue-500 font-semibold rounded-lg"
        >
          {seeMore ? "See Less" : "See more"}
        </button>
      </div>
    </div>
  );
};

export default Blogs;
