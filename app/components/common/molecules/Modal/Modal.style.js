import { css } from "styled-components";

export default css`
  width: 850px;
  margin: 0 auto;
  position: relative;
  z-index: 12;
  &.show {
    animation: fadeIn 0.3s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 0.3;
    }
    60% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }

  &.hide {
    opacity: 0;
    pointer-events: none;
  }
  &.small-modal {
    width: 475px;
    .popup-section {
      width: 475px;
      border-radius: 12px;
    }
    .close {
      top: 15px;
      right: 15px;
      opacity: 0.25;
    }
    .icon {
      height: 2px;
      width: 17px;
    }
    .bar1 {
      top: 2px;
      right: 3px;
    }
    .bar2 {
      right: 3px;
    }
  }
  .popup-section {
    position: fixed;
    top: 50.1%;
    margin: auto;
    z-index: 11;
    width: 850px;
    border-radius: 4px;
    transform: translateY(-50.1%);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: ${props => props.theme.color_White};
    overflow: hidden;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
    -webkit-perspective: -1px;
    -webkit-backface-visibility: hidden;
    will-change: transform;
    -webkit-filter: blur(0px);
  }
  .overlay {
    /* background: rgba(0, 0, 0, 0.5);
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0) scale(1, 1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10; */
    display: block;
  }
  .close {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 30px;
    display: inline-block;
    background: none;
    border: none;
    height: 30px;
    cursor: pointer;
    &:hover,
    &:focus {
      border: none;
      outline: none;
    }
  }
  .icon {
    height: 1px;
    width: 27px;
    display: block;
    background: ${props => props.theme.color_Black};
  }
  .bar1 {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    top: 1px;
    right: 4px;
    position: relative;
  }
  .bar2 {
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    right: 4px;
    transform: rotate(135deg);
    position: relative;
    top: 0px;
  }
`;
