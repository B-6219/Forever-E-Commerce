import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center py-20 text:xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5 " alt="" />
        <p className="font-semibold">Exchange Policy</p>
        <p className="text-gray-400">No offer hassle free</p>
      </div>

      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5 " alt="" />
        <p className="font-semibold">7 days return Policy</p>
        <p className="text-gray-400">No offer hassle free</p>
      </div>

      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5 " alt="" />
        <p className="font-semibold">Customer relation</p>
        <p className="text-gray-400">We value customer feedback</p>
      </div>
    </div>
  );
};

export default OurPolicy;
