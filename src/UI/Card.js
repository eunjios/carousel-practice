import React from "react";
import styled from "@emotion/styled";

const CardWrapper = styled.div`
  border-radius: 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

const Card = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;