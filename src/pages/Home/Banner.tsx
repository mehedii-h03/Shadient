import bannerImg from "../../assets/banner.jpg";
import Container from "../../components/ui/Container";

const Banner = () => {
  return (
    <section className="border-b">
      <Container className="my-5 lg:my-14">
        <div className="flex flex-1 justify-center items-center gap-5 flex-col lg:flex-row">
          <div className="">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold max-w-[23ch] leading-normal text-primary-color text-center lg:text-left">
              Seeking Financial Aid for Medical Emergencies or Social Causes?
            </h1>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="secondary-btn">Request Donation</button>
              <button className="outline-btn">Donate and help</button>
            </div>
          </div>
          <div className="flex-1 border-[4px] border-gray-300 rounded-lg ">
            <img
              className="w-full h-full max-h-96 rounded-md object-cover"
              src={bannerImg}
              alt="Banner Image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
