/** @jsxImportSource @emotion/react */
import React from "react";
import RectangleCard from "../UI/RectangleCard";
import { MdOutlineWbCloudy } from "react-icons/md";
import { icon } from "../UI/style/styles";


const WeatherCard = props => {
  return (
    <RectangleCard background={props.background}>
      <h2>{props.temperature}°C</h2>
      <p>
        <MdOutlineWbCloudy css={icon} />
        {` ${props.humidity}%`}
      </p>
    </RectangleCard>
  );
};

export default WeatherCard;