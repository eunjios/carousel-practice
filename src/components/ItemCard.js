import React from "react";
import styled from "@emotion/styled";

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 264px;
  height: 264px;
  border-radius: 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  background: ${props => props.background};
`;

const Title = styled.h1`
  color: white;
`;

const ItemCard = props => {
  return (
    <CardWrapper 
      background={props.background}
    >
      <Title>{props.title}</Title>
    </CardWrapper>
  );
};

export default ItemCard;