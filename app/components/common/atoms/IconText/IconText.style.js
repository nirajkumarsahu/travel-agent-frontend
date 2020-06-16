import { css } from "styled-components";

export default css`
  opacity: 0.73;
  font-size: ${props => props.theme.fs_small}px;
  font-weight: ${props => props.theme.fw_bold};
  color: ${props => props.theme.color_DarkBlueGrey};
  vertical-align: middle;
  display: inline-block;
  line-height: 1.36;
  letter-spacing: 0.35px;
`;
