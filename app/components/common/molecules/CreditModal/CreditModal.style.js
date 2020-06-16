import { css } from "styled-components";

export default css`
  text-align: center;
  padding: 25px;
  min-height: 300px;
  h3 {
    font-size: ${props => props.theme.fs_medium_larger}px;
    color: ${props => props.theme.color_Black};
    font-weight: ${props => props.theme.fs_bold};
    margin: 0 0 15px;
  }
  svg {
    width: 80px;
    width: 80px;
    margin: 0 0 26px;
  }
  .credit {
    color: ${props => props.theme.color_DarkBlue};
    font-size: ${props => props.theme.fs_primary}px;
    display: block;
    width: 100%;
    margin: 0 0 20px;
  }
  .credit-score {
    font-size: ${props => props.theme.fs_bigger}px;
  }
  .subtitle {
    color: ${props => props.theme.color_DarkBlue};
    font-size: ${props => props.theme.fs_secondary}px;
  }
  .creditModal_svg__svg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    left: 0;
    z-index: -1;
  }
`;
