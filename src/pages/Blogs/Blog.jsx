import { useEffect } from "react";
import { Link } from "react-router-dom";
const Blog = ({ blog }) => {
  const { id, title, date, image, intro } = blog;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="p-5 my-10">
      <div>
        <h1 className="mb-3 text-2xl lg:text-3xl font-bold">{title}</h1>
      </div>
      <div className="relative">
        <img className="md:h-[500px] lg:h-[650px] w-full" src={image} alt="" />
        <p className="absolute top-4 right-4 bg-blue-500/75 p-2 rounded-sm font-semibold text-white">
          {date}
        </p>
      </div>
      <div className="bg-gray-200 p-4">
        <p className="">
          {intro}
          <Link to={`/blog/${id}`} className="text-blue-500 font-bold">
            read more
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Blog;
