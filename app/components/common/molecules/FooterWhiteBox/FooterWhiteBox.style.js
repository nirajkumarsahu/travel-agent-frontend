import { css } from "styled-components";

export default css`
  width: 1032px;
  padding: 26px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.color_White};
  border-radius: 5px;
  .box-content {
    max-width: 635px;
  }
  h2 {
    margin: 0 0 7px;
    line-height: 1.5;
    letter-spacing: 0.1px;
    color: ${props => props.theme.color_TextBlack};
  }
  p {
    font-size: ${props => props.theme.fs_secondary}px;
    color: ${props => props.theme.color_TextBlack};
  }
  .anchor-button {
    display: inline-block;
    padding: 16px 40px;
    letter-spacing: 0.21px;
    -webkit-border-radius: 3px;
    color: ${props => props.theme.color_TextBlack};
    font-size: ${props => props.theme.fs_secondary}px;
    font-weight: ${props => props.theme.fw_bold};
    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: 25px;
    z-index: 1;
    background-image: linear-gradient(253deg, #ffe86f, #fddc2c);
    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: radial-gradient(circle, #000 15%, transparent 10.01%);
      background-repeat: no-repeat;
      background-position: 50%;
      transform: scale(0, 0);
      opacity: 0;
      transition: all ease 0.4s;
    }
    &:hover::before {
      transform: scale(10, 10);
      opacity: 0.15;
      transition: 0.3s;
    }
  }
`;
