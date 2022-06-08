import React, { useState } from "react";
import "./index.scss";
import { imageSlider } from "../../data";
import { BiCircle } from "react-icons/bi";
import { BsCircleFill } from "react-icons/bs";

const SlideGallery = () => {
  const [current, setCurrent] = useState(0);
  return (
    <>
      <section className="slide-gallery">
        <div className="slide-gallery--img">
          {imageSlider.map((slideImage, index) => {
            return (
              <img src={slideImage.image} alt="slide" key={slideImage.id} />
            );
          })}
        </div>
        <div className="slide-gallery--btns">
          <BsCircleFill size={13} />
          <BiCircle size={15} />
          <BiCircle size={15} />
        </div>
        <div />
      </section>
    </>
  );
};

export { SlideGallery };
