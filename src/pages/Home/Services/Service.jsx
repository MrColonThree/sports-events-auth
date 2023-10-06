
import { Link } from "react-router-dom";


const Service = ({service}) => {
 
  const { id, title, short_details, image } = service;
  return (
    <div className="relative">
      <img className="h-80 w-full" src={image} alt="" />
      <div className="absolute inset-0  hover:bg-blue-400/90 p-5 text-white hover:text-black">
        <div className="">
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p className="text-lg">{short_details}</p>
          <Link to={`/details/${id}`}>
            <button className="px-3 py-1 text-black font-semibold bg-white mt-3">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
