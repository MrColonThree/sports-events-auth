import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Service from "../Home/Services/Service";

const Events = () => {
  const { services } = useContext(AuthContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto p-2 my-20">
      <div
        className="max-w-xl mx-auto text-center space-y-5 mb-10"
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-semibold uppercase graduate">
          OUR SPORT EVENTS AND HOSPITALITY
        </h1>
        <p>
          Immerse yourself in the world of sports with our all-encompassing
          approach that combines thrilling events and unmatched hospitality
          services.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {services.map((service, index) => (
          <Service key={index} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Events;
