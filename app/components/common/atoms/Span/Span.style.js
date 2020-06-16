import { css } from "styled-components";

export default css`
  &.tagInfo {
    border-radius: 2.5px;
    background-color: ${props => props.theme.color_Tag};
    font-size: ${props => props.theme.fs_small}px;
    color: ${props => props.theme.color_White};
    padding: 2px 8px;
    display: inline-block;
    margin-right: 8px;
  }
  &.date {
    font-size: ${props => props.theme.fs_secondary}px;
    line-height: 1;
    color: ${props => props.theme.color_White};
    display: block;
  }
  &.title {
    font-size: ${props => props.theme.fs_primary}px;
    line-height: 1.2;
    color: ${props => props.theme.color_White};
    margin: 0 0 5px 0;
    display: block;
  }
  &.popularTitle {
    font-size: ${props => props.theme.fs_primary}px;
    line-height: 21px;
    font-weight: ${props => props.theme.fw_bold};
    color: ${props => props.theme.background_Header};
    display: inline-block;
    margin-right: 24px;
  }
  &.footerPaymentTitle {
    font-size: ${props => props.theme.fs_xsmall}px;
    line-height: 1.65;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    display: block;
    color: ${props => props.theme.color_White};
  }
  &.fabTitle {
    font-size: ${props => props.theme.fs_medium_larger}px;
    font-weight: bold;
    color: ${props => props.theme.color_TextBlack};
    margin-bottom: 16px;
    display: block;
    letter-spacing: 0px;
  }
  &.fabSubTitle {
    font-size: ${props => props.theme.fs_medium}px;
    color: ${props => props.theme.color_TextBlack};
    line-height: 24px;
    display: block;
    margin-bottom: 24px;
  }
  &.totalDownloads {
    font-size: ${props => props.theme.fs_secondary}px;
    color: ${props => props.theme.color_White};
    opacity: 0.7;
    width: 100%;
    margin: 0 0 14px;
    font-weight: ${props => props.theme.fw_normal};
  }
  &.price {
    font-size: ${props => props.theme.fs_small}px;
    line-height: 26px;
    letter-spacing: 0.35px;
    color: ${props => props.theme.color_LightGrey};
  }
  &.knowMoreLink {
    position: relative;
    padding-right: 18px;
    line-height: 1;
    display: inline-block;
    font-size: ${props => props.theme.fs_medium_larger}px;
    font-weight: ${props => props.theme.fw_SemiBold};
    line-height: 0.58;
    letter-spacing: 0.07px;
    color: ${props => props.theme.color_Tag_Link};
    text-decoration: none;
    cursor: pointer;
  }
`;
