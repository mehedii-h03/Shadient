import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";
import TestimonialCard from "../../components/ui/TestimonialCard";

const TestimonialContainer = () => {
  const testimonial = [
    {
      message:
        "The relief supplies brought hope to our community during our time of need. Thank you for your support!",
      author: "Ramon Santos, Disaster Survivor",
    },
    {
      message:
        "I was deeply touched by the generosity of the relief efforts. It made a significant difference in our recovery process.",
      author: "Elena Perez, Relief Aid Recipient",
    },
    {
      message:
        "The relief team worked tirelessly to provide assistance to those affected by the disaster. Their dedication is commendable.",
      author: "Pedro Rodriguez, Volunteer Worker",
    },
    {
      message:
        "The relief goods were efficiently distributed and greatly appreciated by our community. They helped us get back on our feet.",
      author: "Carmen Gonzalez, Local Leader",
    },
    {
      message:
        "The relief supplies were a lifeline for many families in our area. Your support made a real difference in our recovery efforts.",
      author: "Jose Martinez, Community Member",
    },
    {
      message:
        "The relief team's coordination and distribution efforts were outstanding. They provided essential aid to those most in need.",
      author: "Ana Rivera, Relief Coordinator",
    },
  ];

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        {testimonial.map((item, index) => (
          <SwiperSlide key={index + 1}>
            <TestimonialCard message={item.message} author={item.author} />
          </SwiperSlide>
        ))}

        <div className="mb-10"></div>
      </Swiper>
    </div>
  );
};

export default TestimonialContainer;
