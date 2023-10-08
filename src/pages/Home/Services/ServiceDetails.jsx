import { useContext, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const ServiceDetails = () => {
  const { id } = useParams();
  const { services } = useContext(AuthContext);
  const service = services.find((service) => service.id === parseInt(id));
  const { title, price, details, ratings, image } = service;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto flex justify-center items-center px-2">
      <div className="flex flex-col">
        <img
          className="w-full h-[400px] md:h-[550px] lg:h-[700px]"
          src={image}
          alt=""
        />
        <div className="mt-10 space-y-4">
          <div className="flex flex-col md:flex-row gap-5 justify-between">
            <div className="flex gap-5">
              <h1 className="text-4xl">{title}</h1>
              <p className="text-xl flex items-center">
                <AiFillStar className="text-amber-500"></AiFillStar>
                {ratings}
              </p>
            </div>
            <p className="text-xl">
              Registration fee:{" "}
              <span className="text-2xl font-bold text-pink-500">${price}</span>
            </p>
          </div>
          <p>{details}</p>
          <div>
            <button className="text-xl font-semibold bg-pink-500 text-white px-4 py-2 rounded-lg mb-5">
              Get Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
