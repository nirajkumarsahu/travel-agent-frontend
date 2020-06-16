import { css } from "styled-components";

export default css`
  display: inline-block;
  width: 12px;
  height: 2px;
  background: ${props => props.theme.color_Tag_Link};
  top: 9px;
  position: absolute;
  right: 3px;
  &:before {
    width: 2px;
    height: 8px;
    transform: rotate(45deg);
    content: "";
    position: absolute;
    right: 2px;
    top: -1px;
    background: ${props => props.theme.color_Tag_Link};
  }
  &:after {
    width: 2px;
    height: 8px;
    transform: rotate(-45deg);
    content: "";
    position: absolute;
    right: 2px;
    bottom: -1px;
    background: ${props => props.theme.color_Tag_Link};
  }
`;
