import { css } from "styled-components";

export default css`
  font-size: ${props => props.theme.fs_xsmall}px;
  font-weight: ${props => props.theme.fw_normal};
  color: ${props => props.theme.color_Green};
  border-radius: 12px;
  background: rgba(26, 174, 114, 0.2);
  padding: 4px 12px;
  :empty {
    display: none;
  }
`;
