import React from "react";
import Marquee from "react-fast-marquee";

function Mar() {
  return (
    <div className="w-full h-screen mt-10 pt-10">
    <div className="w-full h-[50%]  flex flex-col justify-around">
      <div className="text-3xl font-bold flex w-full justify-center items-center">
        Top companies trust us
      </div>
      <div className=" max-w-screen-xl m-auto animate-pulse">
        <Marquee>
          <img
            className=" w-60 h-32 object-cover"
            src="https://inkbotdesign.com/wp-content/uploads/2023/08/adobe-logo-design-1024x640.webp"
            alt=""
          />
          <img
            className=" w-60  h-32 object-cover"
            src="https://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-desktop.jpg"
            alt=""
          />
          <img
            className=" w-60  h-32 object-cover"
            src="https://media.designrush.com/inspiration_images/271616/conversions/1_Salesforce_fc08f6ce4677-desktop.jpg"
            alt=""
          />
          <img
            className=" w-60  h-32 object-cover"
            src="https://media.designrush.com/inspiration_images/280757/conversions/facebook_logo_3abea1f9806e-desktop.jpg"
            alt=""
          />
          <img
            className=" w-60  h-32 object-cover"
            src="https://media.designrush.com/inspirations/303589/conversions/nasa-logo-design1-preview_mobile.jpg"
            alt=""
          />
          <img
            className=" w-60  h-32 object-cover"
            src="https://media.designrush.com/inspiration_images/137197/conversions/_1527256038_526_Google-Current-Logo-Design_d619ce0a9904-desktop.jpg"
            alt=""
          />
          <img
            className=" w-60  h-32 object-cover"
            src="https://media.designrush.com/inspiration_images/134806/conversions/_1511456036_880_microsoft-desktop.jpg"
            alt=""
          />
          <img
            className=" w-60  h-32 object-cover"
            src="https://media.designrush.com/inspirations/129679/conversions/_1523354169_521_amazon-preview_mobile.jpg"
            alt=""
          />
        </Marquee>
      </div>
      <div>

        
      </div>
      <div className="flex justify-around">
        <div>
          <div className="text-6xl font-bold text-blue-500 w-full justify-center flex mb-10">300K+</div>
          <div className="w-full justify-center flex text-2xl">companies hiring</div>
        </div>
        <div>
          <div className="text-6xl font-bold text-blue-500 w-full justify-center flex mb-10">10K+</div>
          <div className="w-full justify-center flex text-2xl">new openings everyday</div>
        </div>
        <div>
          <div className="text-6xl font-bold text-blue-500 w-full justify-center flex mb-10">21Mn+</div>
          <div className="w-full justify-center flex text-2xl">active students</div>
        </div>
        <div>
          <div className="text-6xl font-bold text-blue-500 w-full justify-center flex mb-10">600K+</div>
          <div className="w-full justify-center flex text-2xl">learners</div>
        </div>
      </div>
    </div>
    <div className="w-full h-[67%]"><img className="w-full h-full object-contain" src="https://i.postimg.cc/yNdYL9YK/kunal9.png" alt="" />
</div>

    </div>
  );
}

export default Mar;
