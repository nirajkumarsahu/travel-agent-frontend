import { css } from "styled-components";

export default css`
  width: 49%;
  position: relative;
  height: 198px;
  overflow: hidden;
  border-radius: 12px;
  a {
    display: block;
    font-weight: ${props => props.theme.fw_bold};
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
  }
  .shell-loader {
    height: 195px;
  }
  figure {
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
  h4 {
    font-size: ${props => props.theme.fs_primary}px;
    text-transform: capitalize;
    margin: 0 0 10px;
  }
  .sub-title,
  .know-more {
    font-size: ${props => props.theme.fs_small}px;
    display: block;
    margin: 0 0 20px;
  }
  .sub-title {
    font-size: ${props => props.theme.fs_secondary}px;
  }
  .know-more {
    text-transform: capitalize;
  }
  .banner-text {
    position: absolute;
    top: 50%;
    width: 100%;
    left: 0;
    padding: 10px 12% 0px;
    max-width: 100%;
    transform: translateY(-50%);
  }
`;
