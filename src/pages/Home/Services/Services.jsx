import { useEffect, useState } from "react";
import Service from "./Service";
import Aos from "aos";
import "aos/dist/aos.css";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto p-2 my-20">
      <div
        className="max-w-xl mx-auto text-center space-y-5 mb-10"
        data-aos="fade-up"
      >
        <h1 className="text-3xl font-semibold">
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
        {services.map((service, index) => (
          <Service key={index} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
