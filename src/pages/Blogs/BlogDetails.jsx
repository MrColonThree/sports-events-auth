import { useParams } from "react-router-dom";
import BlogSections from "./BlogSections";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs } = useContext(AuthContext);
  const blog = blogs.find((blog) => blog.id === id);
  console.log(blog);
  const { title, date, image, intro, sections } = blog;
  console.log(sections);
  return (
    <div className="p-5 max-w-screen-xl mx-auto">
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
        <p className="">{intro}</p>
        {sections.map((section, index) => (
          <BlogSections key={index} section={section}></BlogSections>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
