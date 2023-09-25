import { css } from "@emotion/react";

export const center = css`
  margin: 0 auto;
`;

export const screen = css`
  width: 400px;
  max-width: 100%;
  height: 100vh;
  background: #FFF;
  padding-top: 32px;
`;

export const card = css`
  border-radius: 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.04);
  background: transparent;
`;

export const square = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 280px;
  overflow: hidden;
  cursor: pointer;
  border: 0;

  :hover {
    opacity: 0.9;
  }

  & img {
    width: 100%;
  }
`;

export const rectangle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 112px;
  box-sizing: border-box;
  padding: 32px;
  margin: 8px auto;

  & h2 {
    margin: 0;
    font-weight: 700;
  }

  & p {
    margin: 0;
    color: #9F9F9F;
    font-weight: 600;
  }

  @media (max-width: 240px) {
    padding: 4px;

    & h2 {
      font-size: 16px;
      text-align: center;
    }

    & p {
      display: none;
    }
  }
`;

export const verticalStack = css`
  display: flex;
  flex-direction: column;
`;

export const horizontalStack = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const sideSpacing = css`
  margin: 8px 24px;
`

export const icon = css`
  vertical-align: bottom;
  padding: 1px;
`;