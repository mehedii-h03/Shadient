import icon from "../../assets/testimonial-icon.png";

type TTestimonialCardProps = {
  message: string;
  author: string;
};

const TestimonialCard = ({ message, author }: TTestimonialCardProps) => {
  return (
    <div className="bg-secondary p-8 space-y-4 rounded-md max-w-[700px] mx-auto">
      <img className="mx-auto" src={icon} alt="" />
      <h3 className="text-primary-color text-md font-medium max-w-[67ch] mx-auto text-center">
        {message}
      </h3>
      <h5 className="text-center text-sm font-semibold">{author}</h5>
    </div>
  );
};

export default TestimonialCard;
