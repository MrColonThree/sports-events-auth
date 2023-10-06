import { AiFillStar } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const services = useLoaderData();
  console.log(services);
  const service = services.find((service) => service.id === parseInt(id));
  const { title, short_details, price, details, ratings, image } = service;

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
            <p className="text-xl">Registration fee: <span className="text-2xl font-bold">${price}</span></p>
          </div>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
