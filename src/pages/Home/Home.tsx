import About from "./About";
import Banner from "./Banner";
import Gallery from "./Gallery";
import GoodsPost from "./GoodsPost";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <GoodsPost />
      <Gallery />
      <Testimonial />
      <About />
    </div>
  );
};

export default Home;
