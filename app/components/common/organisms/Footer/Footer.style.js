import { css } from "styled-components";

export default css`
  padding: 144px 0px 40px;
  position: relative;
  background-image: linear-gradient(144deg, #192454, #525e93);
  .link-wrapper {
    flex-wrap: wrap;
    padding-bottom: 42px;
    margin-bottom: 41px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: ${props => props.theme.color_footerLine};
      opacity: 0.15;
    }
  }
  .white-box {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translate(-50%, 50%);
    -webkit-transform: translate(-50%, 50%);
  }
  .sitemap {
    width: 49%;
  }
  .link-sec {
    margin: 0 0 40px;
  }
`;
