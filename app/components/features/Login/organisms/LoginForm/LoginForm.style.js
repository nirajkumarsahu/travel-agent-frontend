import { css } from "styled-components";

export default css`
  .phone-no-field {
    display: flex;
    width: 100%;
    position: relative;
  }
  .country-code-dropdown {
    margin-bottom: 32px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .login-input {
    padding-top: 20px;
  }
  .phone-code {
    width: 20%;
  }
  .phone-no {
    width: 100%;
  }
  @media ${props => props.theme.mediaQuery.medium} {
    width: 30%;
  }
`;
