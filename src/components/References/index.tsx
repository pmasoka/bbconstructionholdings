"use client";

import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleReference";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Eng Kennedy Muzira",
    designation: "12 Morecamber Belvedere",
    content: "263772412208",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Mr. Mashavira",
    designation: "Unicef",
    content: "263772709929",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 3,
    name: "Mr. Bwanya",
    designation: "Sandringham School",
    content: "26377564984",
    image: "/images/testimonials/auth-01.png",
    star: 4,
  },
  {
    id: 4,
    name: "Mrs. Mashamba",
    designation: "8 Trail Ave Mt Pleasant",
    content: "263787271976",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 5,
    name: "Mrs. Makoni",
    designation: "Mcz",
    content: "263773391301",
    image: "/images/testimonials/auth-01.png",
    star: 4,
  },
  {
    id: 6,
    name: "Mr. Zhakata",
    designation: "841 Gerald Greystone Park",
    content: "263772708390",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 7,
    name: "Bishop Sungai",
    designation: "Mcz",
    content: "263773612234",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 8,
    name: "Dr. Madhiba",
    designation: "Mcz",
    content: "263772877022",
    image: "/images/testimonials/auth-01.png",
    star: 4,
  },
  {
    id: 9,
    name: "Eng. Paul. Gadzikwa",
    designation: "Mitex",
    content: "27788391951",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 10,
    name: "Mr. Bwennofa",
    designation: "Public Works",
    content: "263773054449",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 11,
    name: "Eng Lyona Mapfumo",
    designation: "UNWOMEN",
    content: "263783069574",
    image: "/images/testimonials/auth-01.png",
    star: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="References"
          paragraph="Trusted partners and professionals we’ve had the privilege to work with."
          center
        />

        {/* Swiper Wrapper */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          navigation={true}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="!pb-14"
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <SingleTestimonial testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
