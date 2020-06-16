import { css } from "styled-components";

export default css`
  .parent-div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    z-index: 1;
  }

  .sliderWrapper {
    width: 100%;
    overflow: hidden;
  }

  .sliderWrapper::-webkit-scrollbar {
    display: none;
  }

  .child-div {
    width: ${props => props.dimensions.desktopWidth}px;
    margin: ${props => props.dimensions.desktopMarginTopBottom}px
      ${props => props.dimensions.desktopMarginLeftRight}px;
    display: inline-block;
    vertical-align: middle;
    border-radius: 8px;
    overflow: hidden;
  }
  .slider-inner {
    white-space: nowrap;
    transition: all ease 0.5s;
    margin: 0 -12px;
  }

  .dots {
    display: flex;
    justify-content: center;
    padding: 0;
  }

  .dots li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${props => props.theme.color_PrimaryBlue};
    list-style: none;
    margin: 0 4px;
    opacity: 0.2;

    &.active {
      opacity: 1;
    }
  }

  @media ${props => props.theme.mediaQuery.xSmallMax} {
    .child-div {
      width: ${props => props.dimensions.mobileWidth}px;
      margin: ${props => props.dimensions.mobileMarginTopBottom}px
        ${props => props.dimensions.mobileMarginLeftRight}px;
    }
    .sliderWrapper {
      width: 100%;
      overflow: auto;
    }
  }
`;
