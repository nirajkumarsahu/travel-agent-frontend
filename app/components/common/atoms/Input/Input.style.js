import { css } from "styled-components";

export default css`
  input {
    font-size: ${props => props.theme.fs_small}px;
    font-weight: ${props => props.theme.fw_normal};
    line-height: 1.5;
    color: ${props => props.theme.color_Greyish};
    border-width: 0 0 1px;
    border-color: ${props => props.theme.color_Grey1};
    background: transparent;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -o-border-radius: 0;
    border-radius: 0;
    min-height: 30px;
    min-width: 0;
    width: 100%;
    max-width: 100%;
    -webkit-logical-height: 30px;
    -webkit-appearance: none;
  }

  input:focus {
    outline: none;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .input-error {
    border-color: ${props => props.theme.color_Red1};
  }

  .error-message {
    color: ${props => props.theme.color_Red1};
    font-size: ${props => props.theme.fs_small}px;
  }

  label {
    width: 100%;
    position: relative;
    display: block;
  }

  .dynamic-placeholder {
    position: absolute;
    top: 10px;
    z-index: 0;
  }

  .visible-dynamic-label {
    .dynamic-placeholder {
      top: 7px;
      transition: 0.3s ease;
    }
  }
`;
