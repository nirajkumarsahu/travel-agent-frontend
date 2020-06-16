import { css } from "styled-components";

export default css`
  padding: 12px 25px 12px;
  white-space: normal;
  box-shadow: 0 3px 94px 0 rgba(30, 37, 74, 0.1);
  background-color: ${props => props.theme.color_White};
  .map-pin {
    width: 12px;
    height: 18px;
    margin-right: 6px;
  }

  #mapPin_svg__a {
    fill: #a8a9ae;
  }
  .location-pay {
    justify-content: space-between;
    margin: 0 0 15px;
    .hotel-location {
      font-size: ${props => props.theme.fs_secondary}px;
      color: ${props => props.theme.color_Greyish};
    }
  }
  .nav-icon {
    width: 12px;
    margin-right: 5px;
    vertical-align: -2px;
  }
  h5 {
    font-weight: ${props => props.theme.fw_bold};
    color: ${props => props.theme.color_TextBlack};
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .direction-btn {
    font-weight: ${props => props.theme.fw_bold};
    margin-left: -11px;
  }
  .action-btn {
    position: relative;
    /* padding-right: 30px !important;
    &:before {
      content: "";
      width: 9px;
      height: 2px;
      position: absolute;
      background: ${props => props.theme.color_TextBlack};
      right: 14px;
      top: 17px;
    }
    &:after {
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      transform: rotate(45deg);
      border-top: 2px solid ${props => props.theme.color_TextBlack};
      border-right: 2px solid ${props => props.theme.color_TextBlack};
      top: 14px;
      right: 14px;
    } */
  }
`;
