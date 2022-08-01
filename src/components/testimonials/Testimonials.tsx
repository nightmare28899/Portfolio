import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

export default function Testimonials() {
  
  const testimonials = [
    {
      name: "John Doe",
      avatar: AVTR1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestias nesciunt quos, dolor ipsa harum placeat doloribus, odit, dolorum cum repellat eligendi quo incidunt distinctio architecto qui dolorem eum voluptatibus?",
    },
    {
      name: "Jane Doe",
      avatar: AVTR2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestias nesciunt quos, dolor ipsa harum placeat doloribus, odit, dolorum cum repellat eligendi quo incidunt distinctio architecto qui dolorem eum voluptatibus?",
    },
    {
      name: "John Doe",
      avatar: AVTR3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestias nesciunt quos, dolor ipsa harum placeat doloribus, odit, dolorum cum repellat eligendi quo incidunt distinctio architecto qui dolorem eum voluptatibus?",
    },
    {
      name: "Jane Doe",
      avatar: AVTR4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestias nesciunt quos, dolor ipsa harum placeat doloribus, odit, dolorum cum repellat eligendi quo incidunt distinctio architecto qui dolorem eum voluptatibus?",
    },
  ];

  const testimonialList = testimonials.map((item, index) => (
    <div key={index} className="testimonial">
      <div className="client_avatar">
        <img src={item.avatar} alt="" />
      </div>
      <h5 className="client_name">{item.name}</h5>
      <small className="client_review">{item.review}</small>
    </div>

  ));

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div
        className="container testimonials-container">
        {testimonialList}
      </div>
    </section>
  );
}
