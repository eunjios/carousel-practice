import React from "react";
import Slider from "react-slick";
import ItemCard from "./ItemCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  padding: 32px 0 32px 32px;
  box-sizing: border-box;
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
    <Wrapper>
      <h2>Test</h2>
      <Slider {...settings}>
        {props.data.map(item => (
          <ItemCard 
            key={item.id}
            title={item.id}
            background={item.color}
          />
        ))}
      </Slider>
    </Wrapper>
  )
}

export default Carousel;