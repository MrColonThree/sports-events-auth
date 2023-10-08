import { useEffect, useState } from "react";
import Card from "./Card";

const Newsletter = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("/newsletter.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="my-20 px-5 max-w-screen-xl mx-auto">
      <div
        className="relative h-[550px]"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
      >
        <img
          src="https://images.unsplash.com/photo-1544097797-bf8fc095364c"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid place-items-center bg-black/75">
          <div className="text-white text-center p-5 max-w-4xl">
            <h1 className="text-2xl font-semibold text-blue-500 luna">
              SPORTACULAR360
            </h1>
            <h1 className="text-xl font-semibold my-5">DON'T MISS OUT</h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              SUBSCRIBE TO OUR NEWSLETTER TODAY
            </h1>
            <h1 className="text-lg">
              Sign-up today for the latest news and deals
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bg-gray-200">
        {cards.map((card, index) => (
          <Card key={index} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Newsletter;
