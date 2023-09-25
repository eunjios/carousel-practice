import React from "react";
import SquareCard from "../UI/SquareCard";


const ImageCard = props => {
  return (
    <SquareCard >
      <img src={props.img} alt="sample"/>
    </SquareCard>
  );
};

export default ImageCard;