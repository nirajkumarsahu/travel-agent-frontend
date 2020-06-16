import { css } from "styled-components";

export default css`
  .login-modal {
    padding-top: 20px;
  }
  .login-wrap {
    box-shadow: inset -1px 3px 11px 2px #eee;
  }
  .login-input {
    width: 100%;
  }
  h2 {
    text-align: center;
    margin: 0 0 10px;
    color: ${props => props.theme.color_Basic};
    font-size: ${props => props.theme.fs_bigger}px;
  }
  svg {
    width: 67px;
    height: 67px;
  }
  .sub-title {
    color: ${props => props.theme.color_GreyHex};
  }
  .sub-title,
  .referral {
    display: block;
    color: ${props => props.theme.color_LightBlack};
    text-align: center;
    cursor: pointer;
  }
  .sub-title,
  .login-btn.account-img,
  label,
  .login-input.refer,
  .display-country-code {
    margin: 0 0 15px;
  }
  .login-input {
    label {
      margin: 0;
    }
    .dynamic-placeholder.hide-on-top {
      left: 15px;
    }
  }
  .list-items {
    margin: 0 0 35px;
  }
  .account-img {
    margin-right: 20px;
    height: 67px;
    max-width: 67px;
  }
  strong {
    font-size: ${props => props.theme.fs_small}px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: ${props => props.theme.color_Basic};
    font-weight: ${props => props.theme.fw_bold};
    display: block;
  }
  .account-info {
    padding: 20px 5%;
    width: 41%;
    margin: 0;
    background-color: ${props => props.theme.color_LighterGrey};
  }
  p {
    font-size: ${props => props.theme.fs_xsmall}px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: ${props => props.theme.color_LightBlack};
  }
  .login-form {
    width: 59%;
    padding: 45px 8%;
  }
  .form-wrap {
    width: 100%;
  }
  .country-flag-code {
    position: absolute;
    top: calc(100% + 7px);
    width: 80%;
    z-index: 2;
  }
  .countries-list {
    background: ${props => props.theme.color_White};
    max-height: 200px;
    padding: 0;
    margin: 0;
    overflow: scroll;
    border: solid 1px ${props => props.theme.color_LighterBlack};
    &::after {
      position: absolute;
      height: 0;
      width: 0;
      content: "";
      display: block;
      left: 22px;
      z-index: 2;
      top: -4px;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid ${props => props.theme.color_White};
    }
    &::before {
      position: absolute;
      height: 0;
      width: 0;
      content: "";
      display: block;
      left: 21px;
      z-index: 2;
      top: -6px;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid ${props => props.theme.color_LighterBlack};
    }
  }
  .country-code {
    height: 40px;
    background-color: rgba(156, 156, 156, 0.1);
    font-size: ${props => props.theme.fs_small}px;
    line-height: 40px;
    padding: 0 5px 0 6px;
    letter-spacing: 0.2px;
    color: #3c3c3c;
    text-align: center;
    cursor: pointer;
    border-bottom: 1px solid ${props => props.theme.color_LighterBlack};
  }
  .code-flag-item {
    margin: 0;
    padding: 10px;
    font-size: ${props => props.theme.fs_small}px;
    color: ${props => props.theme.color_Basic};
  }
  .dynamic-placeholder.hide-on-top {
    top: 12px;
    left: 0;
    font-size: ${props => props.theme.fs_small}px;
    color: ${props => props.theme.color_LighterBlack};
  }
  input {
    min-height: 40px !important;
    width: 100% !important;
    padding: 7px 0px;
    font-size: ${props => props.theme.fs_small}px;
    border: none;
    border-bottom: solid 0.5px ${props => props.theme.color_LighterBlack} !important;
    &:focus {
      border: none;
      outline: none;
      box-shadow: none;
    }
  }
  #phone-number {
    padding: 7px 15px;
  }
  .login-btn {
    text-transform: capitalize;
    width: 100%;
    display: block;
    margin: 20px 0;
  }
  .referral {
    font-size: ${props => props.theme.fs_small}px;
    color: ${props => props.theme.color_Tag_Link};
  }
  .verified-number {
    position: relative;
    margin-bottom: 45px;
    line-height: 1.6;
    font-size: ${props => props.theme.fs_small}px;
  }
  .country-name {
    margin-left: 15px;
  }
  .otp-form,
  .display-country-code {
    position: relative;
  }
  .mobile_otp {
    color: ${props => props.theme.color_Basic};
  }
  .link {
    font-size: ${props => props.theme.fs_small}px;
    line-height: 15px;
    letter-spacing: 0.2px;
    color: ${props => props.theme.color_Tag_Link};
    position: absolute;
    right: 15px;
    bottom: 5px;
    z-index: 1;
    cursor: pointer;
  }
  .link.resend_otp {
    bottom: 11px;
  }

  .country-search {
    border: solid 1px ${props => props.theme.color_LighterBlack};
    border-bottom: 0;
    position: relative;
    display: flex;
    background: ${props => props.theme.color_White};
    svg {
      fill: ${props => props.theme.color_GreyHex};
      stroke: ${props => props.theme.color_GreyHex};
      z-index: 1;
      height: 16px;
      width: 16px;
      stroke-width: 1px;
    }
    input {
      float: left;
      border: 0;
      font-size: ${props => props.theme.fs_small}px;
      line-height: 1;
      padding: 0 10px 0 30px;
      letter-spacing: 0.2px;
      color: ${props => props.theme.color_Basic};
      flex-grow: 1;
      border-bottom: 0 !important;
    }
  }
  .close-search {
    position: absolute;
    right: 6px;
    top: 7px;
    width: 20px;
    cursor: pointer;
    text-align: center;
    width: 20px;
    display: inline-block;
    background: none;
    border: none;
    height: 30px;
    &:focus,
    &:hover {
      border: none;
      outline: none;
    }
    .icon {
      height: 1px;
      width: 14px;
      display: block;
      background: #000;
    }
    .bar1 {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      top: 1px;
      right: 4px;
      position: relative;
    }
    .bar2 {
      -webkit-transform: rotate(135deg);
      -moz-transform: rotate(135deg);
      -ms-transform: rotate(135deg);
      -o-transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
      -ms-transform: rotate(135deg);
      right: 4px;
      -webkit-transform: rotate(135deg);
      -ms-transform: rotate(135deg);
      transform: rotate(135deg);
      position: relative;
      top: 0px;
    }
  }
  .country-search .search-icon {
    position: absolute;
    left: 5px;
    top: 13px;
  }
`;
