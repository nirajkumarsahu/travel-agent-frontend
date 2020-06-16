import { css } from "styled-components";

export default css`
  font-size: ${props => props.theme.fs_medium}px;
  color: ${props => props.theme.color_TextBlack};
  margin: 16px 0 20px;
  .circle-icon {
    width: 16px;
    height: 16px;
    margin: 0 16px;
  }
`;
