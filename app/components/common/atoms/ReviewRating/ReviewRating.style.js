import { css } from "styled-components";

export default css`
  padding: 2px 9px 2px;
  display: inline-block;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  background-color: ${props => props.theme.color_BgGrey};
  strong {
    line-height: 26px;
    letter-spacing: 0.34px;
    font-size: ${props => props.theme.fs_secondary}px;
    font-weight: ${props => props.theme.fw_bold};
    color: ${props => props.theme.color_DarkBlueGrey};
    padding-right: 5px;
    border-right: solid 0.5px rgba(30, 37, 74, 0.1);
  }
  span {
    padding: 4px 0px 0px 5px;
    display: inline-block;
    vertical-align: top;
    letter-spacing: 0.26px;
    font-size: ${props => props.theme.fs_xsmall}px;
    color: ${props => props.theme.color_DarkBlueGrey};
  }
`;
