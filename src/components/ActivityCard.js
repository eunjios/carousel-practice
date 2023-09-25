/** @jsxImportSource @emotion/react */
import React from "react";
import RectangleCard from "../UI/RectangleCard";
import { IoMdTime } from "react-icons/io";
import { icon } from "../UI/style/styles";


const ActivityCard = props => {
  const duration = Math.ceil(
    (props.endTime.getTime() - props.startTime.getTime()) / (60 * 1000)
  );

  return (
    <RectangleCard background={props.background}>
      <h2>{props.distance}km</h2>
      <p>
        <IoMdTime css={icon} />
        {` ${duration}min`}
      </p>
    </RectangleCard>
  );
};

export default ActivityCard;