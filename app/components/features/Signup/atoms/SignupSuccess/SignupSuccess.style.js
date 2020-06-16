import styled from "styled-components";

export default styled.div`
  padding: 24px 16px 16px;
  border-radius: 20px;
  margin: 0 0 24px;
  background: ${props => props.theme.color_White};
  text-align: center;

  h2 {
    margin-bottom: 24px;
  }

  h3 {
    font-size: ${props => props.theme.fs_primary}px;
    margin: 0 0 12px;
  }
  p {
    font-size: ${props => props.theme.fs_small}px;
    color: ${props => props.theme.color_Greyish};
  }

  input {
    border-bottom: 1px solid ${props => props.theme.color_Grey1};
  }

  .phone-no-field {
    display: flex;
    width: 100%;
    position: relative;
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

  .phone-no {
    width: 100%;
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

  .dynamic-placeholder {
    color: ${props => props.theme.color_Text_Grey2};
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
      width: auto;
      margin: -8px 10px 0 0;
    }
  }

  .back-signup {
    position: absolute;
    left: 0;
    bottom: 32px;
    text-align: center;
    width: 100%;

    svg {
      width: 16px;
      vertical-align: middle;
      margin: -2px 6px 0 0;
    }
  }

  .thankyou-svg {
    margin: 48px 0 16px;

    svg {
      width: 47px;
    }
  }

  @media ${props => props.theme.mediaQuery.medium} {
    width: 30%;
    padding: 32px 24px 16px;

    .thankyou-svg {
      margin: 48px 0 16px;

      svg {
        width: 72px;
      }
    }
    h3 {
      font-size: ${props => props.theme.fs_medium_larger}px;
      margin: 0 0 20px;
    }
    p {
      font-size: ${props => props.theme.fs_medium}px;
    }

    .otp-button {
      margin-bottom: 32px;
    }
  }
`;
