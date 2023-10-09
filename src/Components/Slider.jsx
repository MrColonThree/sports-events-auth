import { Carousel, IconButton } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
const CarouselCustomNavigation = () => {
  const { slides } = useContext(AuthContext);

  return (
    <Carousel
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4 bg-black/50 "
        >
          <SlArrowLeft className="text-2xl"></SlArrowLeft>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-black/50 "
        >
          <SlArrowRight className="text-2xl"></SlArrowRight>
        </IconButton>
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
};

export default CarouselCustomNavigation;
