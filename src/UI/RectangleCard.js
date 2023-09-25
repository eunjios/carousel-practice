/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { card, center, rectangle } from "./style/styles";


const RectangleCard = props => {
  const changedBackgroundCard = css`
    ${card}
    background: ${props.background}
  `;
  return (
    <div css={[center, rectangle, changedBackgroundCard]}>
      {props.children}
    </div>
  );
};

export default RectangleCard;
