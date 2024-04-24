import React from "react";

function Navbar() {
  return (
    <div className="flex justify-around  items-center px-2   text-lg font-semibold max-w-screen-xl m-auto border-b">
      <div className="flex gap-10 justify-center items-center ">
        <div className="h-fit w-32"><img className="w-full h-full object-cover"src="https://internshala.com//static/images/internshala_og_image.jpg" alt="" /></div>
        <div>Interships</div>
        <div>Jobs</div>
        <div>Courses</div>
      </div>
      <div className="flex gap-10 justify-center items-center">
        <div><input type="text" /></div>
        <div className="p-2 px-3 border-blue-500 text-blue-500 border-[1px] rounded-md w-20 flex items-center justify-center">Login</div>
        <div className="bg-blue-500 rounded-md text-white p-2 px-5">Candiate Sign-up</div>
        <div className="bg-blue-500 rounded-md text-white p-2 px-5">Employer Sign-up</div>
      </div>
    </div>
  );
}

export default Navbar;
