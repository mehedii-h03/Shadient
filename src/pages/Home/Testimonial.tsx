import Container from "../../components/ui/Container";
import SectionHeader from "../../components/ui/SectionHeader";
import TestimonialContainer from "./TestimonialContainer";

const Testimonial = () => {
  return (
    <section className="">
      <SectionHeader title="What people says about us" subTitle="Testimonial" />
      <Container className="my-20">
        <TestimonialContainer />
      </Container>
    </section>
  );
};

export default Testimonial;
