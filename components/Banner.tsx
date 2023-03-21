import React from "react";
import Slider from "react-slick";
import img1 from "../public/assets/images/Slider/img1.jpg";
import img2 from "../public/assets/images/Slider/img2.jpg";
import img3 from "../public/assets/images/Slider/img3.jpg";
import img4 from "../public/assets/images/Slider/img4.jpg";
import img5 from "../public/assets/images/Slider/img5.jpg";
import Image from "next/image";
import BannerText from './BannerText';
import ButtonPrimary from './ButtonPrimary';

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
  };

  return (
    <div className="w-full bg-white px-4 py-6 font-titleFont flex gap-4 border-b-[1px]">
      <div className="w-2/3 rounded-lg h-[410px] shadow-bannerShadow relative">
        <Slider {...settings}>
          <div className="w-full h-[410px] relative">
            <Image
              src={img1}
              alt="slider"
              priority
              className="w-full h-full object-cover rounded-lg"
            />
            <BannerText
                className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-white"
                title="New World Cup Ball"
                description="new ball ulta solid"
                btnText="Shop now"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              src={img2}
              alt="slider"
              priority
              className="w-full h-full object-cover rounded-lg"
            />
            <BannerText
                className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-white"
                title="New World Cup Ball"
                description="new ball ulta solid"
                btnText="Shop now"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              src={img3}
              alt="slider"
              priority
              className="w-full h-full object-cover rounded-lg"
            />
            <BannerText
                className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-white"
                title="New World Cup Ball"
                description="new ball ulta solid"
                btnText="Shop now"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              src={img4}
              alt="slider"
              priority
              className="w-full h-full object-cover rounded-lg"
            />
            <BannerText
                className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-white"
                title="New World Cup Ball"
                description="new ball ulta solid"
                btnText="Shop now"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              src={img5}
              alt="slider"
              priority
              className="w-full h-full object-cover rounded-lg"
            />
            <BannerText
                className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-white"
                title="New World Cup Ball"
                description="new ball ulta solid"
                btnText="Shop now"
            />
          </div>
        </Slider>
      </div>

      <div className="w-1/3 border-[1px] border-gray-200 rounded-lg shadow-bannerShadow p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-black">Flash Pick of the day</h2>
            <p className="text-base text-zinc-600 underline underline-offset-2">
                View all
            </p>
        </div>
        <Image 
        src={img3} 
        alt=""
        className="h-60 object-cover"
        />
        <ButtonPrimary btnText="Options"/>
        <p className="text-lg text-black font-semibold"> From $199.90</p>
        <p className="text-base text-gray-500 -mt-1">pack of three football shirts</p>
      </div>
    </div>
  );
};

export default Banner;
