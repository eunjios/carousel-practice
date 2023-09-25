/** @jsxImportSource @emotion/react */
import React from "react";
import { screen, center, verticalStack } from "./style/styles";


const Backdrop = ({ children }) => {
  return (
    <div css={[screen, center, verticalStack]}>
      {children}
    </div>
  );
};

export default Backdrop;