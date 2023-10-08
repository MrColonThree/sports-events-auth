import { useEffect } from "react";
import Banner from "./Banner";
import FeaturedBlogs from "./Featured Blogs/FeaturedBlogs";
import Newsletter from "./Newsletter/Newsletter";
import Services from "./Services/Services";
import Sponsors from "./Sponsors/Sponsors";
import Aos from "aos";
import "aos/dist/aos.css"
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init()
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Sponsors></Sponsors>
      <FeaturedBlogs></FeaturedBlogs>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
