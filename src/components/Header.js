/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { headerData } from "../store/data";
import { sideSpacing } from "../UI/style/styles";


const container = css`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & h1 {
    margin: 0;
    font-size: 32px;
    font-weight: bold;
  }

  & p {
    margin: 0;
    fons-size: 16px;
    color: #9F9F9F;
  }
`;

const Header = () => {
  return (
    <header css={sideSpacing}>
      <div css={container}>
        <h1>{headerData.title}</h1>
        <p>{headerData.subTitle}</p>
      </div>
    </header>
  );
};

export default Header;