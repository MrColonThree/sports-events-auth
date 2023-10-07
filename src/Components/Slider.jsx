import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export function CarouselWithContent() {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    fetch("/banner.json")
      .then((res) => res.json())
      .then((data) => setSlides(data));
  }, []);

  return (
    <Carousel>
      {slides.map((slide, index) => (
        <div key={index} className="relative h-[850px] w-full">
          <img
            src={slide.image}
            alt={`image ${index + 1}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <h1 className="mb-4 text-3xl text-white font-semibold md:text-4xl lg:text-5xl">
                {slide.title}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
