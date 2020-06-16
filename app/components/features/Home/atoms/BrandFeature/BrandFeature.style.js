import { css } from "styled-components";

export default css`
  font-size: ${props => props.theme.fs_secondary}px;
  color: ${props => props.theme.color_TextBlack};
  svg {
    width: 28px;
    height: 28px;
  }
`;
