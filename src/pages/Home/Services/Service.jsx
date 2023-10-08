import { Link } from "react-router-dom";
const Service = ({ service }) => {
  const { id, title, short_details, image,price } = service;
  
  return (
    <div
      className="relative"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
      data-aos="zoom-in"
    >
      <img className="h-80 w-full" src={image} alt="" />
      <div className="absolute inset-0  hover:bg-black/80 p-5 text-white">
        <div className="">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-lg">{short_details}</p>
          <p className="text-lg ">Registration fee: <span className="font-semibold text-pink-500">${price}</span></p>
          <Link to={`/details/${id}`}>
            <button className="px-3 py-1 text-black font-semibold bg-white mt-3 rounded-lg">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
