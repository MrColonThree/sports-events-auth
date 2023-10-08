import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { Link } from "react-router-dom";
import CardFeatured from "./CardFeatured";

const FeaturedBlogs = () => {
  const { blogs } = useContext(AuthContext);
  
  return (
    <div className="max-w-screen-xl mx-auto my-28">
      <div className=" text-center font-semibold text-3xl md:text-4xl graduate uppercase">
        <h1>Featured Blogs</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-5">
        {blogs.slice(0, 4).map((blog, index) => (
          <CardFeatured key={index} blog={blog}></CardFeatured>
        ))}
      </div>
      <div className="text-center mb-14">
        <Link to="/blog">
          <button className="px-3 py-2 text-white bg-blue-500 font-semibold rounded-lg">
            See more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
