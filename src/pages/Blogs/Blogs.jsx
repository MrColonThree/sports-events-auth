import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [seeMore, setSeeMore]= useState(false);
  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2>{blogs.length}</h2>
      {blogs.map((blog,index) => (
        <Blog key={index} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
