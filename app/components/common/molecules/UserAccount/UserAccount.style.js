import { css } from "styled-components";

export default css`
  position: relative;
  max-width: 220px;
  z-index: 5;
  .profile-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 8px;
    background: ${props => props.theme.color_BgGrey};
    font-size: ${props => props.theme.fs_secondary}px;
    color: ${props => props.theme.color_TextBlack};
    font-weight: ${props => props.theme.fw_SemiBold};
    text-align: center;
    line-height: 32px;
  }
  .fab-credit {
    width: 13px;
    height: 13px;
    display: inline-block;
    margin-right: 6px;
    vertical-align: -2px;
  }
  .guest-name {
    max-width: 96px;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    vertical-align: top;
    width: auto;
    position: relative;
    padding-right: 12px;
    font-size: ${props => props.theme.fs_secondary}px;
    color: ${props => props.theme.color_White};
    font-weight: ${props => props.theme.fw_SemiBold};
    margin: 0 0 6px;
  }
  .user-info {
    position: relative;
    align-items: flex-start;
  }
  .user-credits {
    font-size: ${props => props.theme.fs_small}px;
    color: ${props => props.theme.color_White};
    white-space: nowrap;
    max-width: 135px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .caret {
    position: absolute;
    width: 7px;
    height: 7px;
    border-top: 1px solid ${props => props.theme.color_White};
    border-right: 1px solid ${props => props.theme.color_White};
    border-left: 1px solid transparent;
    border-bottom: 1px solid transparent;
    transform: rotate(133deg);
    top: 3px;
    right: 0;
  }
  .link-list {
    display: none;
    position: absolute;
    top: 60px;
    right: -30px;
    box-shadow: 0 12px 24px 0 rgba(30, 37, 74, 0.1);
    background: ${props => props.theme.color_White};
    z-index: 5;
    color: ${props => props.theme.color_TextBlack};
    width: 246px;
    border-radius: 12px;
  }
  .link-list li {
    position: relative;
    padding: 0 25px;
  }
  .link-list li a {
    border-bottom: 1px solid #e9f1fb;
    position: relative;
    z-index: 1;
  }
  .link-list li:first-child {
    border-radius: 12px 12px 0 0;
    overflow: hidden;
  }
  .link-list li:last-child {
    border-radius: 0 0 12px 12px;
    overflow: hidden;
  }
  .link-list li:last-child a {
    border-bottom: 0;
  }
  .link-list:before {
    content: "";
    background: transparent;
    position: absolute;
    width: 100%;
    height: 30px;
    left: 7px;
    top: -28px;
  }
  .link-list:after {
    content: "";
    background: ${props => props.theme.color_White};
    position: absolute;
    width: 18px;
    height: 18px;
    right: 55px;
    top: -9px;
    transform: rotate(45deg);
    z-index: -1;
  }
  .link-list a {
    padding: 15px 0;
    display: inline-block;
    width: 100%;
    color: ${props => props.theme.color_TextBlack};
  }
  .link-list button {
    padding: 15px 0px !important;
    background: none;
    border: none;
    text-align: left;
    width: 100%;
    position: relative;
    z-index: 1;
  }
  :hover {
    .link-list {
      display: block;
    }
  }
  ul.link-list li::after {
    content: "";
    width: 0;
    height: 100%;
    background: rgba(240, 243, 247, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  ul.link-list li:hover {
    &::after {
      width: 100%;
      transition: all 1s;
    }
  }
`;
