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
    "https://i.postimg.cc/9M5j5qts/kunal1.png",
    "https://i.postimg.cc/T2cvF1yH/kunal2.png",
    "https://i.postimg.cc/NFQqLqn4/kunal3.png",
    "https://i.postimg.cc/kGwrbY3d/kunal4.png",
    "https://i.postimg.cc/PxWntrSJ/kunal5.png",
    "https://i.postimg.cc/BQQf03HZ/kunal6.png",
    "https://i.postimg.cc/9M5j5qts/kunal1.png",
 
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
