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

export default function Car() {
  const data = [
    "../public/kunal1.webp",
    "../public/kunal2.webp",
    "../public/kunal3.webp",
    "../public/kunal4.webp",
    "../public/kunal5.webp",
    "../public/kunal6.webp",
    "../public/kunal7.webp",
    "../public/kunal8.webp",
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
    <Slider {...settings} className="max-w-screen-lg m-auto p-2 scale-125 ">
      {data.map((item, index) => {
        return (
          <div
            className="  rounded-lg hover:scale-105 duration-200 "
            key={index}
          >
            <img
              className="w-full h-full rounded-xl object-cover border-8 border-white"
              src={item}
              alt=""
            />
          </div>
        );
      })}
    </Slider>
  );
}
