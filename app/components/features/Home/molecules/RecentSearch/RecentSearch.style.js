import { css } from "styled-components";

export default css`
  position: relative;
  z-index: 2;
  padding-bottom: 72px;
  h2 {
    color: ${props => props.theme.color_White};
    padding: 0 23px 23px;
    font-weight: ${props => props.theme.fw_SemiBold};
  }
  .search-item {
    background: ${props => props.theme.color_Trans_White};
    padding: 14px 50px 14px 25px;
    border-radius: 43px;
    display: inline-block;
    margin-right: 15px;
    position: relative;
  }
  strong {
    font-size: ${props => props.theme.fs_secondary}px;
    font-weight: ${props => props.theme.fw_SemiBold};
    color: ${props => props.theme.color_White};
    letter-spacing: 0.32px;
    display: block;
    margin: 0 0 3px;
  }
  span {
    font-size: ${props => props.theme.fs_small}px;
    color: ${props => props.theme.color_White};
    display: block;
  }
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 22px;
    fill: ${props => props.theme.color_White};
    height: 16px;
  }
`;
