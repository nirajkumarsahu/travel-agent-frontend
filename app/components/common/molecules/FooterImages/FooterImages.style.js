import { css } from "styled-components";

export default css`
  padding-left: 31px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 2px;
    height: 100%;
    width: 2px;
    background-color: ${props => props.theme.color_footerLine};
    opacity: 0.15;
  }
  h3 {
    font-size: ${props => props.theme.fs_bigger}px;
    color: ${props => props.theme.color_White};
    letter-spacing: 0.14px;
    margin: 0 0 4px;
  }
  width: 50%;
  a,
  button,
  img {
    border-radius: 4px;
    overflow: hidden;
    display: block;
    margin-right: 14px;
    &.sms-link {
      width: 100%;
      cursor: pointer;
      border-radius: 21.5px;
      border: solid 1px ${props => props.theme.color_White};
      padding: 16px 20px;
      font-size: ${props => props.theme.fs_xsmall}px;
      font-weight: ${props => props.theme.fw_bold};
      background: none;
      color: ${props => props.theme.color_White};
      margin: 0 0 20px;
    }
  }
  .store {
    margin-right: 0;
  }
  .app-store {
    margin-right: 64px;
    align-items: flex-start;
    position: relative;
    max-width: 295px;
  }
  .gplay,
  .store {
    width: 140px;
    height: 44px;
  }
  .googlePlay_svg__svg,
  .appStore_svg__svg {
    width: 140px;
    height: 44px;
    vertical-align: top;
  }
  .footerPaymentTitle {
    margin: 0 0 6px;
  }
  input {
    font-size: ${props => props.theme.fs_small}px;
    padding: 6px 2px 7px 5px;
    border: none;
    display: inline-block;
    vertical-align: top;
    margin-top: 5px;
    background: transparent;
    outline: 0;
    width: 222px;
    color: ${props => props.theme.color_White};
    
    ::placeholder { 
      color: ${props => props.theme.color_White};
      opacity: 1;
    }

    :-ms-input-placeholder { 
      color: ${props => props.theme.color_White};
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
      color: ${props => props.theme.color_White};
    }
  }
  /* .send_link {
    width: 160px;
    border-radius: 2px;
    background-color: #fddc2c;
    text-align: center;
    color: #1e254a;
    font-size: ${props => props.theme.fs_small}px;
    font-weight: 700;
    line-height: 40px;
    height: 40px;
    margin: 3px;
    float: right;
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;
    padding: 0;
    border: 0;
    cursor: pointer;
  } */
  .message-wrap {
    position: relative;
    overflow: hidden;
    &.success-state {
      .message-sent{
        right: 0;
      }
    }
  }
  .get-sms {
      position: relative;
      width: 294px;
      height: 43px;
      border: 1px solid ${props => props.theme.color_White};
      border-radius: 22px;
      padding-left: 17px;
      margin-bottom: 17px;
      box-shadow: 0 0 2px 0px #fff inset, 0 0 1px 0px #fff, 0 0 1px 0px #fff inset;
      transition: all 0.2s;
  }
  .get-sms.message-sent {
        position: absolute;
        right: -100%;
        z-index: 3;
        top: 0;
        .country-code {
          display: block;
        }
        input {
          padding-left: 23px;
        }
    }
  .country-code {
    color: ${props => props.theme.color_White};
    font-size: ${props => props.theme.fs_small}px;
    position: absolute;
    left: 16px;
    top: 0;
    bottom: 0;
    line-height: 40px;
    display: none;
  }
  .success-text {
    color: ${props => props.theme.color_White};
    font-size: ${props => props.theme.fs_xsmall}px;
    position: absolute;
    right: 50px;
    top: 0;
    bottom: 0;
    line-height: 40px;
    display: none;
  }
  .send-btn {
    position: absolute;
    width: 41px;
    height: 41px;
    right: 0;
    top: 0;
    margin: 0;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    background: ${props => props.theme.color_PrimaryYellowLight};
    border: 1px solid ${props => props.theme.color_BlueBorder};
      :before{
        content: "";
        position: absolute;
        width: 13px;
        height: 13px;
        border-top: 2px solid #000;
        border-right: 2px solid #000;
        transform: rotate(45deg);
        top: 14px;
        right: 13px;
        }
      :after {
        width: 16px;
        height: 2px;
        content: "";
        position: absolute;
        right: 13px;
        top: 19px;
        background: #000;
    }
  }
  .focus {
    padding-left: 38px;
    .country-code {
      display: block;
    }
    input::placeholder { 
      opacity: 0; 
    }

    input:-ms-input-placeholder { 
      opacity: 0;
    }

    input::-ms-input-placeholder { 
      opacity: 0;
    }
  }
  .message-sent {
    .send-btn {
      background: ${props => props.theme.color_Green};
      :after {
        display: none;
      }
      :before {
        border-top: 2px solid #fff;
        border-right: 2px solid #fff;
        width: 17px;
        height: 8px;
        transform: rotate(135deg);
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: 13px auto auto;
      }
    }
    .success-text {
      display: block;
    }
  }
  .error {
    color: ${props => props.theme.color_Error_Bg};
    font-size: ${props => props.theme.fs_xsmall}px;
    position: absolute;
    right: 47px;
    top: 13px;
    // display: none;
  }
  .error-icon {
    width: 12px;
    height: 12px;
    margin-right: 3px;
    margin-top: 1px;
  }
  .scan {
    opacity: 1;
    display: block;
    margin: 0 0 16px;
  }
  .qr-code {
    max-width: 150px;
  }
  .qr-code figure {
    padding-left: 10px;
  }
`;
