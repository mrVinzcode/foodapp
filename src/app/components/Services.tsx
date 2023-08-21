import React from "react";
import Dash from "./Dash";
import ServicesCard from "./ServicesCard";

const servicesData = [
  {
    img: "/services__1.png",
    title: "Professional Kitchen",
    desc: "Lorem Ipsum is the world's leading authority on the oldesto  health",
  },
  {
    img: "/services__2.png",
    title: "Deliver",
    desc: "Lorem Ipsum is the world's leading authority on the oldesto  health",
  },
  {
    img: "/services__3.png",
    title: "Wine List",
    desc: "Lorem Ipsum is the world's leading authority on the oldesto  health",
  },
  {
    img: "/services__4.png",
    title: "Free Wifi",
    desc: "Lorem Ipsum is the world's leading authority on the oldesto  health",
  },
];

const Services = () => {
  return (
    <div className="container pt-40">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Choose Best <span className="text-accent">Service</span>
        </h2>
        <p className="text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing <br />
          elit. Qui est quisquam ut
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
        {servicesData.map((item, index) => (
          <ServicesCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
