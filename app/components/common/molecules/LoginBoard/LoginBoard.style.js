import { css } from "styled-components";

export default css`
  display: flex;
  align-items: center;
  .program-wrap {
    padding-left: 10px;
    padding-right: 27px;
    color: ${props => props.theme.color_White};
    justify-content: center;
    flex-direction: column;
  }

  .alist-icon {
    width: 23px;
    height: 20px;
  }
  .program-title {
    font-size: ${props => props.theme.fs_xsmall}px;
  }
  .program {
    font-size: ${props => props.theme.fs_secondary}px;
    font-weight: ${props => props.theme.fw_SemiBold};
  }
  .login-btn {
    font-size: ${props => props.theme.fs_small}px;
    font-weight: ${props => props.theme.fw_SemiBold};
    color: ${props => props.theme.color_White};
    border: 1px solid ${props => props.theme.color_White};
    border-radius: 21px;
    padding: 5px 20px;
    cursor: pointer;
    line-height: 30px;
    letter-spacing: 0.21px;
    box-shadow: 0 0 2px 0px ${props => props.theme.color_White} inset,
      0 0 1px 0px ${props => props.theme.color_White},
      0 0 1px 0px ${props => props.theme.color_White} inset;
  }
`;
