import styled from "styled-components";

export default styled.div`
  padding: 24px 16px 16px;
  border-radius: 20px;
  margin: 0 0 24px;
  background: ${props => props.theme.color_White};

  h2 {
    margin-bottom: 24px;
  }

  input {
    border-bottom: 1px solid ${props => props.theme.color_Grey1};
  }

  .phone-no-field {
    display: flex;
    width: 100%;
    position: relative;

    .resend-otp-button,
    .otp-timer-info {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

  .login-input {
    margin-bottom: 32px;
    width: 100%;

    input {
      padding: 0;
    }
  }

  .phone-code {
    width: 20%;
  }

  .phone-no {
    width: 85%;
  }

  .otp-wrapper {
    width: 100%;
    position: relative;

    button,
    .otp-timer-info {
      position: absolute;
      top: 10px;
      right: 10px;
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

  .fp-form {
    display: flex;
    flex-direction: column;
  }

  .fp-heading {
    margin-bottom: 16px;
  }

  .fp-verify-text {
    color: ${props => props.theme.color_TextBlack};
    margin-bottom: 24px;
  }

  @media ${props => props.theme.mediaQuery.medium} {
    width: 30%;
    padding: 32px 24px 16px;
    .login-input {
      margin-bottom: 50px;
    }

    .otp-button {
      margin-bottom: 32px;
    }
  }
`;
