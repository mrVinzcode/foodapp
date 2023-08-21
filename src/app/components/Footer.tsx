import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container pt-40">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">About Us</h2>
          <p className="leading-[1.8]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ut
            expedita molestias repudiandae pariatur fuga ab, molestiae velit
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">The Restaurant</h2>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Chefs</li>
            <li>Events</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <div className="flex gap-8 text-accent text-2xl pt-16">
            <FaFacebookF />
            <FaLinkedinIn />
            <BsTwitter />
            <BsPinterest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
