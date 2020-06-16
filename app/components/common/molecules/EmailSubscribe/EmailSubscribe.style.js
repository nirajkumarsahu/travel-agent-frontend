import { css } from "styled-components";

export default css`
  padding: 0px 15px 30px;
  margin: 0 0 14px;
  background-color: ${props => props.theme.color_White};
  strong {
    color: ${props => props.theme.color_TextBlack};
    font-weight: ${props => props.theme.fw_bold};
    font-size: ${props => props.theme.fs_medium}px;
    letter-spacing: 0.33px;
    margin-right: 19px;
  }
  .relative {
    position: relative;
  }
  .dynamic-placeholder.hide-on-top {
    top: 17px;
    left: 26px;
    font-size: ${props => props.theme.fs_small}px;
    color: ${props => props.theme.color_LighterBlack};
    letter-spacing: 0.47px;
  }
  input {
    min-height: 48px !important;
    width: 400px !important;
    padding: 9px 26px 9px 16px;
    border-radius: 100px !important;
    color: ${props => props.theme.color_TextBlack};
    border: solid 0.5px ${props => props.theme.color_LightBlack} !important;
    padding-right: 150px;
  }
  input::placeholder {
    color: ${props => props.theme.color_LighterBlack};
  }

  input:-ms-input-placeholder {
    color: ${props => props.theme.color_LighterBlack};
  }

  input::-ms-input-placeholder {
    color: ${props => props.theme.color_LighterBlack};
  }
  button {
    position: absolute;
    right: 1px;
    top: 1px;
    line-height: 1;
    font-weight: ${props => props.theme.fw_bold};
    font-size: ${props => props.theme.fs_secondary}px;
    color: ${props => props.theme.color_DarkBlueGrey};
    letter-spacing: 0.27px;
    z-index: 1;
    margin: 0;
    min-width: 120px;
    padding: 14px 27px;
  }
  .error {
    p {
      font-size: ${props => props.theme.fs_xsmall}px;
      color: ${props => props.theme.color_Error};
      position: absolute;
      top: calc(100% + 6px);
      left: 30px;
    }
    input {
      border-color: ${props => props.theme.color_Error} !important;
    }
  }
`;
