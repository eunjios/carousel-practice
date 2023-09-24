import React from "react";
import styled from "@emotion/styled";

const StyledWrapper = styled.div`
  width: 400px;
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: #ECECEC;
`;

const Background = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>
}

export default Background;