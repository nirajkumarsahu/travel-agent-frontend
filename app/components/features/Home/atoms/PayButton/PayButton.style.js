import { css } from "styled-components";

export default css`
  border-radius: 24px;
  background-image: linear-gradient(245deg, #ffe86f, #fddc2c);
  font-size: ${props => props.theme.fs_small}px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.color_TextBlack};
  padding: 11px 10px;
  width: 100%;
  max-width: 138px;
`;
