import { useContext } from "react";
import Service from "./Service";
import { AuthContext } from "../../../providers/AuthProviders";
import { Link } from "react-router-dom";
const Services = () => {
  const { services } = useContext(AuthContext);
 
  return (
    <div className="max-w-screen-xl mx-auto p-2 my-20">
      <div
        className="max-w-xl mx-auto text-center space-y-5 mb-10"
        data-aos="fade-up"
      >
        <h1 className="text-3xl md:text-4xl font-semibold graduate">
          VIP SPORT EVENTS AND HOSPITALITY
        </h1>
        <p>
          At Sportacular360, we don't just attend to details; we anticipate your
          needs and exceed your expectations. Let us redefine your sports and
          entertainment journey, creating cherished moments that will stay with
          you long after the final whistle or curtain call.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {services.slice(0, 6).map((service, index) => (
          <Service key={index} service={service}></Service>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/events">
          <button className="px-3 py-2 text-white text-lg bg-blue-500 font-semibold rounded-lg">
            See All Events
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
