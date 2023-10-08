import { Carousel } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
export function CarouselCustomNavigation() {
  const { slides } = useContext(AuthContext);

  return (
    <Carousel
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="relative h-96 md:h-[600px] lg:h-[750px] w-full"
        >
          <img
            src={slide.image}
            alt={`image ${index + 1}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid place-items-center">
            <div
              className="lg:w-[800px] w-3/4 text-center  bg-black/70 md:p-10 p-5"
              data-aos="fade-up"
            >
              <h1 className="mb-4 text-3xl text-white font-semibold md:text-4xl lg:text-5xl space-y-5">
                {slide.title}
              </h1>
              <p className="text-white md:text-lg">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
