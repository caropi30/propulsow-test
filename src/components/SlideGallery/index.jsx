import React from "react";
import "./index.scss";
import { imageSlider } from "../../data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
//import { BiCircle } from "react-icons/bi";
//import { BsCircleFill } from "react-icons/bs";

const SlideGallery = () => {
  return (
    <>
      <section className="slide-gallery">
        <Carousel
          infiniteLoop
          autoPlay
          interval="7000"
          transition="7000"
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          className="slide-gallery--carousel"
        >
          {imageSlider.map((slideImage, index) => {
            return (
              <img src={slideImage.image} alt="slide" key={slideImage.id} />
            );
          })}
        </Carousel>
        {/* <div className="slide-gallery--btns">
          <BsCircleFill size={13} />
          <BiCircle size={15} />
          <BiCircle size={15} />
        </div>*/}
        <div />
      </section>
    </>
  );
};

export { SlideGallery };
