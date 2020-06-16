import { css } from "styled-components";

export default css`
  white-space: normal;
  border-radius: 8px;
  background-color: ${props => props.theme.color_White};
  .shell-loader {
    height: 222px;
  }
  .card {
    position: relative;
    img {
      max-height: 222px;
      object-fit: cover;
      width: 100%;
    }
    svg {
      margin: 16px;
      border-radius: 8px;
      position: absolute;
      top: 0;
      left: 0;
      width: 92px;
      height: 92px;
    }
  }
  .brand-text {
    width: 100%;
    padding: 24px 16px 0px 16px;
    font-size: ${props => props.theme.fs_primary}px;
    font-weight: ${props => props.theme.fw_bold};
    color: ${props => props.theme.color_TextBlack};
    margin: 0 0 24px;
  }
  .brand-feature {
    margin: 0;
    padding: 0 16px;
    li {
      margin: 0px 0 16px;
      list-style: none;
      position: relative;
      svg {
        vertical-align: middle;
        margin-right: 8px;
      }
    }
  }
`;
