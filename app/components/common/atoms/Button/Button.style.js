import { css } from "styled-components";

export default css`
  padding: 16px 22px;
  border: 1px solid ${props => props.theme.color_PrimaryYellowLight};
  border-radius: 24px;
  font-family: "Roboto", sans-serif;
  font-size: ${props => props.theme.fs_secondary}px;
  line-height: 1.2;
  font-weight: ${props => props.theme.fs_normal};
  text-align: center;
  cursor: pointer;
  color: ${props => props.theme.color_TextBlack};
  transition: all ease 0.4s;
  background-image: ${props => props.theme.gradient_PrimaryButton};
  min-width: 122px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin: 0;
  
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #000 15%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(0, 0);
    opacity: 0;
    transition: all ease 0.4s;
  }
  &:hover::before {
    transform: scale(10, 10);
    opacity: 0.15;
    transition: 0.3s;
  }

  .rippleContainer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }

  .rippleContainer span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${props => props.theme.color_White};
    animation: ripple 850ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }

  &:focus {
    outline: none;
  }

  &.btn-small {
    /* font-size: ${props => props.theme.fs_tertiary}px; */
    padding: 11px 16px;
  }

  &.primary-btn {
    border-color: ${props => props.theme.color_Blue1};
    background: ${props => props.theme.color_White};
    color: ${props => props.theme.color_Blue1};

    &:hover {
      background: ${props => props.theme.color_Blue1};
      color: ${props => props.theme.color_White};
    }
  }

  &.secondary-btn {
    border-color: ${props => props.theme.color_PrimaryBlueDarker};
    color: ${props => props.theme.color_PrimaryBlueDarker};
    background: ${props => props.theme.color_White};
    &:hover {
      color: ${props => props.theme.color_Blue1};
      background: ${props => props.theme.color_White};
    }
  }

  &.tertiary-btn {
    border-color: ${props => props.theme.color_White};
    color: ${props => props.theme.color_White};
    background: ${props => props.theme.color_PrimaryBlue};
  }

  &.disabled-btn {
    border-color: transparent;
    color: ${props => props.theme.color_White};
    background: ${props => props.theme.color_Grey1};
    cursor: default;
  }

  &.action-btn {
    border-radius: 24px;
    background-image: ${props => props.theme.gradient_PrimaryButton};
    font-size: ${props => props.theme.fs_small}px;
    font-weight: ${props => props.theme.fw_bold};
    text-align: center;
    color: ${props => props.theme.color_TextBlack};
    padding: 10px;
    min-width: 84px;
    min-width: 151px;
  }
`;

export const vanillaStyles = css`
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
