import { css } from "styled-components";

export default css`
  text-align: center;
  padding: 25px;
  min-height: 300px;
  flex-direction: column;
  .tick-icon {
    display: inline-block;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    margin: 0 0 17px;
    background: #f0b836;
    position: relative;
    &:after,
    &:before {
      position: absolute;
      content: "";
      width: 55px;
      height: 8px;
      right: 18%;
      top: 46%;
      background: #fff;
      border-radius: 0 5px 5px 5px;
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
    &:before {
      right: 51%;
      top: 53%;
      width: 26px;
      background: #fff;
      border-radius: 5px 0px 5px 5px;
      transform: rotate(45deg);
    }
  }
  h3 {
    font-size: ${props => props.theme.fs_medium_larger}px;
    color: ${props => props.theme.color_DarkBlue};
    font-weight: ${props => props.theme.fw_semibold};
    margin: 0 0 10px;
  }
  img {
    width: 80px;
    width: 80px;
    margin: 0 0 26px;
  }
  .subtitle {
    color: ${props => props.theme.color_DarkBlue};
    font-size: ${props => props.theme.fs_secondary}px;
  }
  .thanksModal_svg__svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    z-index: -1;
  }
`;
