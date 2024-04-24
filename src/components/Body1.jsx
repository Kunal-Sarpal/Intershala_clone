import React from "react";

import 'react-multi-carousel/lib/styles.css';
import Car from "./Car";

function Body1() {
  return (
    <div className="w-full border-2 h-[90vh] ">
      <div className="h-[40%] pt-20">
        <div className="text-5xl font-bold w-full flex justify-center items-center  ">Make your dream career a reality</div>
        <div className="text-3xl font-bold w-full flex justify-center items-center mt-10 ">Trending on Internshala 🔥</div>
      </div>
      <div className="h-[60%]">
        <Car/>
      </div>
    </div>
  );
}

export default Body1;
