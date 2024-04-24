import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "grey",
        padding: "5px",
        borderRadius: "100%",
        justifyContent: "center",
        justifyItems: "center",
        width: "20px",
        height: "20px ",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "grey",
        padding: "5px",
        borderRadius: "100%",
        justifyContent: "center",
        justifyItems: "center",
        width: "20px",
        height: "20px ",
      }}
      onClick={onClick}
    />
  );
}

export default function Body2() {
  const data = [
    {
      position: "Operations",
      company: "Thomas Cook",
      location: "Mumbai",
      salary: "₹ 2,500 /month",
      duration: "3 Months",
      category: "Internship",
      details: "View details",
    },
    {
      position: "Video Editing/Making",
      company: "FileSure India Private Limited",
      logo: "logo",
      location: "Mumbai",
      salary: "₹ 5,000-10,000 /month",
      duration: "3 Months",
      category: "Internship",
      details: "View details",
    },
    {
      position: "Technical SEO",
      company: "The Hindu",
      logo: "logo",
      location: "Chennai",
      salary: "₹ 18,000 /month",
      duration: "6 Months",
      category: "Internship",
      details: "View details",
    },
    {
      position: "Inside Sales",
      company: "ClearTax",
      location: "Bangalore",
      salary: "₹ 20,000 /month + Incentives",
      duration: "3 Months",
      category: "Internship",
      details: "View details",
    },
    {
      position: "Graphic Design",
      company: "FileSure India Private Limited",
      logo: "logo",
      location: "Mumbai",
      salary: "₹ 5,000-10,000 /month",
      duration: "3 Months",
      category: "Internship",
      details: "View details",
    },
    {
      position: "Social Media Marketing",
      company: "FileSure India Private Limited",
      logo: "logo",
      location: "Mumbai",
      salary: "₹ 5,000-10,000 /month",
      duration: "3 Months",
      category: "Internship",
      details: "View details",
    },
    {
      position: "Audio Making/Editing",
      company: "Saregama India Limited",
      logo: "logo",
      location: "Mumbai",
      salary: "₹ 5,000-10,000 /month",
      duration: "6 Months",
      category: "Internship",
      details: "View details",
    },
    {
      position: "Fundraising",
      company: "World Wide Fund For Nature-India",
      location: "Delhi (Hybrid)",
      salary: "₹ 5,000-15,000 /month",
      duration: "6 Months",
      category: "Internship",
      details: "View details",
    },
  ];
  const data2 = [
    "Big brands",
    "Work from home",
    "Part-time",
    "MBA",
    "Engineering",
    "Media",
    "Design",
    "Data Science"
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="flex w-full h-screen flex-col justify-around">
        <div>
          <Slider
            {...settings}
            className="max-w-screen-lg m-auto p-2 scale-125 "
          >
            {data.map((item, index) => {
              return (
                <div
                  className=" rounded-lg hover:scale-105 duration-200 p-2"
                  key={index}
                >
                  <div className=" w-80 h-60 flex flex-col justify-between  p-5  border-2 border-zinc-400 rounded-lg shadow-sm shadow-zinc-300">
                    <div className="border-b-[1px] ">
                      <p className="text-sm font-semibold">{item.position}</p>
                      <p className="text-sm text-zinc-600">{item.company}</p>
                    </div>
                    <div>
                      <p className="text-xs">{item.location}</p>
                      <p className="text-xs">{item.salary}</p>
                      <p className="text-xs">{item.duration}</p>
                    </div>
                    <div className="flex justify-between w-64 items-center ">
                      <p className="text-xs bg-zinc-300 p-1 px-2 rounded-md">
                        {item.category}
                      </p>
                      <p className="text-sm font-semibold w-full flex justify-end text-blue-500 underline">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div>
            <div className="text-3xl font-bold w-full flex justify-center items-center mb-5">Latest jobs on Internshala</div>
            <div className="flex w-full justify-center items-center gap-7">
            <div className=" tracking-widest font-semibold text-zinc-600"> POPULAR CATEGORIES:</div>
      {data2.map((category, index) => (
        <button
          key={index}
          className="rounded-full border-2 px-3 p-1 flex   text-black"
        >
          {category}
        </button>
      ))}
    </div>
        </div>
        <div>
          <Slider
            {...settings}
            className="max-w-screen-lg m-auto p-2 scale-125 "
          >
            {data.map((item, index) => {
              return (
                <div
                  className=" rounded-lg hover:scale-105 duration-200 p-2"
                  key={index}
                >
                  <div className=" w-80 h-60 flex flex-col justify-between  p-5  border-2 border-zinc-400 rounded-lg shadow-sm shadow-zinc-300">
                    <div className="border-b-[1px] ">
                      <p className="text-sm font-semibold">{item.position}</p>
                      <p className="text-sm text-zinc-600">{item.company}</p>
                    </div>
                    <div>
                      <p className="text-xs">{item.location}</p>
                      <p className="text-xs">{item.salary}</p>
                      <p className="text-xs">{item.duration}</p>
                    </div>
                    <div className="flex justify-between w-64 items-center ">
                      <p className="text-xs bg-zinc-300 p-1 px-2 rounded-md">
                        {item.category}
                      </p>
                      <p className="text-sm font-semibold w-full flex justify-end text-blue-500 underline">
                        {item.details}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
     
      </div>
    </>
  );
}
