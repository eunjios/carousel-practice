/** @jsxImportSource @emotion/react */
import React from "react";
import Slider from "react-slick";
import ImageCard from "./ImageCard";
import { css } from "@emotion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsPlus } from "react-icons/bs";
import { icon } from "../UI/style/styles";


const container = css`
  padding: 0;
  margin-left: 24px;
  box-sizing: border-box;
`;

const plus = css`
  display: flex !important;
  align-items: center;
  justify-content: center;
  height: 280px;
  padding: 0 4px;
  box-sizing: border-box;
  border-radius: 16px;
  font-size: 40px;
  background: #F4F4F4;
  color: #FFF;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const Carousel = props => {
  const settings = {
    infinite: false,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    rows: 1,
  };
  return (
    <div css={container}>
      <Slider {...settings}>
        {props.data.map(item => (
          <ImageCard 
            key={item.id}
            img={item.img}
          />
        ))}
        <div css={plus}>
          <BsPlus css={icon} />
        </div>
      </Slider>
    </div>
  )
}

export default Carousel;