import { css } from "styled-components";

export default css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 56px;
  height: 56px;
  text-indent: -9999px;
  overflow: hidden;
  background: ${props => props.theme.color_White};
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  padding: 0;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.1);

  &.arrowPrev {
    left: -26px;
  }

  &.arrowPrev:after {
    content: "";
    position: absolute;
    border-top: 3px solid #1e254a;
    border-left: 3px solid #1e254a;
    width: 10px;
    height: 10px;
    top: 23px;
    left: 24px;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    border-radius: 2px;
    opacity: 0.5;
  }

  &.arrowNext {
    right: -26px;
  }

  &.arrowNext:after {
    content: "";
    position: absolute;
    border-top: 3px solid #1e254a;
    border-right: 3px solid #1e254a;
    width: 10px;
    height: 10px;
    top: 23px;
    right: 24px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    border-radius: 2px;
    opacity: 0.5;
  }
`;
