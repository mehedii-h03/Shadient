import Container from "../../components/ui/Container";
import image from "../../assets/About.jpg";

const About = () => {
  return (
    <section className="mt-16">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-3 flex-1">
          <h3 className="text-3xl text-primary-color font-semibold">
            About us
          </h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa harum
            maxime eligendi earum. Nobis ducimus labore, doloribus molestias,
            natus delectus numquam minima impedit odit quos modi commodi
            officiis expedita veniam molestiae quam incidunt cum! Harum odit
            facere veniam. Ad culpa accusamus, numquam reprehenderit et aliquid
            commodi obcaecati incidunt iste in. Quaerat voluptatum tenetur
            praesentium odit vel tempore odio, iusto earum?
          </p>
        </div>
        <div className="flex-1 border-2 border-gray-300 rounded-lg">
          <img src={image} className="w-full h-[90%] rounded-md" alt="" />
        </div>
      </Container>
    </section>
  );
};

export default About;
