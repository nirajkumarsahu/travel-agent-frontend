import { css } from "styled-components";

export default css`
  align-items: center;
  padding: 8px 0;
  a {
    font-size: ${props => props.theme.fs_small}px;
    color: ${props => props.theme.color_White};
    margin-right: 50px;
    opacity: 0.7;
    transition: all 0.3s;
    &:hover {
      opacity: 1;
    }
  }
  .detail-tooltip {
    position: absolute;
    top: calc(100% + 20px);
    background-color: ${props => props.theme.color_Greyish};
    padding: 12px 16px;
    color: ${props => props.theme.color_White};
    font-size: ${props => props.theme.fs_small}px;
    text-align: center;
    z-index: 2;
    line-height: 16px;
    border-radius: 8px;
    display: none;
    span {
      display: block;
      margin-top: 4px;
    }
    &::after {
      content: " ";
      position: absolute;
      top: -11px;
      content: " ";
      border-left: 14px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 13px solid ${props => props.theme.color_Greyish};
    }
  }
  .phone-icon {
    position: relative;
    width: 22px;
    height: 22px;
    &::after {
      content: " ";
      position: absolute;
      top: 100%;
      width: 50px;
      height: 12px;
    }
    &:hover .detail-tooltip {
      width: 193px;
      display: block;
      right: -26px;
      &::after {
        right: 20px;
      }
    }
  }
  .phone {
    fill: rgba(255, 255, 255, 0.5);
  }
  .mob-icon {
    width: 22px;
    position: relative;
    &::after {
      content: " ";
      position: absolute;
      top: 100%;
      width: 50px;
      height: 12px;
    }
    &:hover .detail-tooltip {
      width: 149px;
      left: -18px;
      line-height: 1.2;
      display: block;
      &::after {
        left: 16px;
      }
    }
  }
  .mobile_svg__mob-border {
    fill: rgba(255, 255, 255, 0.5);
  }
`;
