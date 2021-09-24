import React from "react";
import Slider from "react-slick";
import { sliderImages, imageSliderConfig } from "./Util";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './img.css'

const ImgSlider = () => {
  return (
    <article>
      <Slider className="imageSlider mt-3" {...imageSliderConfig}>
        {sliderImages.map((image) => (
          <div className="slider__container" key={image.id}>
            <img className="slider__textImage" src={image.textImage} />
            <div class="slider__imgContainer">
              <img className="slider__img" src={image.url} />
            </div>
          </div>
        ))}
      </Slider>
    </article>
  );
};


export default ImgSlider;
