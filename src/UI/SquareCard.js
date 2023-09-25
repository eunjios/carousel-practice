/** @jsxImportSource @emotion/react */
import React from "react";
import { card, center, square } from "./style/styles";


const SquareCard = props => {
  return (
    <div css={[center, square, card]}>
      {props.children}
    </div>
  );
};

export default SquareCard;
