
import { Link } from "react-router-dom";

const CardFeatured = ({ blog }) => {
  const { id, title, date, image, intro } = blog;

  return (
    <div
      className="flex flex-col p-5 justify-between items-center border shadow-lg"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      data-aos="fade-up"
    >
      <div className="">
        <h1 className="mb-3 text-2xl lg:text-3xl font-semibold flex-grow">{title}</h1>
      </div>
      <div className="relative">
        <img className="md:h-[280px] lg:h-[350px]" src={image} alt="" />
        <p className="absolute top-4 right-4 bg-blue-500/75 p-2 rounded-sm font-semibold text-sm text-white">
          {date}
        </p>
      </div>
      <div className="bg-gray-200 p-4 flex-grow">
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

export default CardFeatured;
