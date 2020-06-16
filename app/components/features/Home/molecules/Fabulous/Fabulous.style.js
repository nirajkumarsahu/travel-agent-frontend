import { css } from "styled-components";

export default css`
  text-align: center;
  padding: 40px 0;
  .sign-up-banner {
    border-radius: 8px;
    box-shadow: 0 3px 94px -8px rgba(30, 37, 74, 0.1);
    background-color: ${props => props.theme.color_White};
    width: 49%;
    padding: 23px;
  }
  .fabulous-container {
    position: relative;
    padding: 24px 30px;
    cursor: pointer;
    &.half {
      width: 49%;
      overflow: hidden;
      .fabulousFree_svg__svg {
        width: auto;
      }
    }
  }
  .fabulous-wrap {
    position: relative;
    z-index: 2;
  }
  .fabulousFree_svg__svg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: ${props => props.theme.color_White};
    border-radius: 8px;
  }
  .popup-btn {
    position: relative;
    padding: 0;
    padding-right: 20px;
    display: inline-block;
    font-size: ${props => props.theme.fs_secondary}px;
    line-height: 19px;
    letter-spacing: 0px;
    color: ${props => props.theme.color_Tag_Link};
    border-radius: 0;
    text-decoration: none;
    cursor: pointer;
    overflow: visible;
    background: none;
    outline: none;
    border: none;
    &:focus {
      outline: none;
      border: none;
    }
  }
`;
