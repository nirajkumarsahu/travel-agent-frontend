import { css } from "styled-components";

export default css`
  max-width: 100px;
  font-size: ${props => props.theme.fs_small}px;
  color: ${props => props.theme.color_DarkBlueGrey};
  line-height: 26px;
  letter-spacing: 0.34px;
  strong {
    font-size: ${props => props.theme.fs_medium}px;
    font-weight: ${props => props.theme.fw_bold};
  }
`;
