import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In magnam eos asperiores optio deleniti? Praesentium, accusamus fugiat? Itaque, voluptatem natus. Tempore perspiciatis distinctio blanditiis. Tempora consequatur in neque ipsa molestiae?
          </p>
        </div>

        <div>
          <p className="text- x1 font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
