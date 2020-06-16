import styled from "styled-components";

export default styled.div`
  padding: 24px 16px 16px;
  border-radius: 20px;
  margin: 0 0 12px;
  background: ${props => props.theme.color_White};

  h2 {
    margin-bottom: 24px;
  }

  input {
    border-bottom: 1px solid ${props => props.theme.color_Grey1};
    color: ${props => props.theme.color_TextBlack};
    ::placeholder {
      color: ${props => props.theme.color_TextBlack};
      opacity: 1;
    }

    :-ms-input-placeholder {
      color: ${props => props.theme.color_TextBlack};
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: ${props => props.theme.color_TextBlack};
    }
  }

  .phone-no-field {
    display: flex;
    width: 100%;
    position: relative;

    .country-code-dropdown {
      position: absolute;
      left: 0;
      top: 2px;
      z-index: 2;
    }
  }
  .list-wrapper.dropdown-effect {
    position: absolute;
    top: 36px;
    background: ${props => props.theme.color_White};
    z-index: 4;
    box-shadow: 0 12px 24px 0 rgba(30, 37, 74, 0.1);
    max-height: 255px;
    overflow-y: auto;
    min-width: 148px;
    border-radius: 4px;
    color: ${props => props.theme.color_TextBlack};
    left: -15px;
    padding: 12px 0;
    li {
      padding: 0;
    }
  }

  ul {
    padding: 0 16px;
  }
  .login-input {
    margin-bottom: 32px;
    width: 100%;

    input {
      padding: 10px 0;
    }
  }

  .phone-code {
    width: 20%;
  }

  .dynamic-placeholder {
    color: ${props => props.theme.color_Text_Grey2};
  }

  .phone-no {
    width: 100%;

    input {
      padding-left: 50px;
    }

    .dynamic-placeholder {
      left: 50px;
    }
  }

  .password-button,
  .otp-button,
  .login-button {
    width: 100%;
  }

  .password-button {
    margin-bottom: 16px;
  }

  .otp-button {
    margin-bottom: 24px;
  }

  .divider {
    margin-bottom: 16px;
    width: 100%;
    height: 1px;
    background-color: #e9f1fb;
  }

  .forgot-password {
    margin-bottom: 16px;
  }

  .two-col {
    width: 100%;
    & > div {
      width: 50%;
    }

    input[type="radio"] {
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 20px;
      min-height: 20px;
      border-radius: 50%;
      border: 2px solid #767676;
      margin-right: 10px;
      -webkit-logical-height: 0px;
      margin: -3px 10px 0 0;
      padding: 0;
      position: relative;
    }
    input[type="radio"]:checked {
      border: 2px solid #379aff;
    }
    input[type="radio"]:checked::after {
      content: " ";
      position: absolute;
      border: 6px solid #379aff;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .err-msg {
    color: #ff0000;
    font-size: 12px;
  }

  button {
    font-weight: ${props => props.theme.fw_semi_bold};
  }

  .g-recaptcha {
    margin-bottom: 12px;
  }

  .category-dropdown {
    position: relative;

    button {
      padding: 10px 20px 10px 0;
      border-bottom: 1px solid #dbdce1 !important;
      text-align: left;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      color: #2a2b30;
      border-width: 0 0 1px;
      border: none;
      background: #fff;
      border-radius: 0;
      min-height: 30px;
      position: relative;

      svg {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .go-back {
    margin-bottom: 50px;
  }

  .hideCaptcha {
    display: none;
  }

  @media ${props => props.theme.mediaQuery.medium} {
    width: 30%;
    padding: 32px 24px 16px;

    h2 {
      margin-bottom: 57px;
      font-size: ${props => props.theme.fs_medium_larger}px;
    }

    .login-input {
      margin-bottom: 52px;
    }

    input {
      font-size: ${props => props.theme.fs_secondary}px;
      min-height: 35px;
      color: ${props => props.theme.color_TextBlack};
    }

    .otp-button {
      margin-bottom: 32px;
    }
  }
`;
