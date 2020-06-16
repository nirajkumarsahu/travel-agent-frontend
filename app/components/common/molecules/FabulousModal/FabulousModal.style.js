import styled from "styled-components";

export default styled.div`
  padding-top: 20px;
  .header-bg {
    position: absolute;
    top: 0;
    width: 552px;
    z-index: -1;
  }
  h2 {
    text-align: center;
    margin: 0 0 10px;
    font-size: ${props => props.theme.fs_larger}px;
  }
  .fabulous-sub-title {
    text-align: center;
    font-size: ${props => props.theme.fs_medium_large}px;
    color: ${props => props.theme.color_TextBlack};
  }
  .fabulous-wrap {
    padding-top: 35px;
    max-height: 513px;
    overflow-y: auto;
  }
  .fabulous-left {
    padding-left: 50px;
    width: 50%;
    padding-top: 25px;
    padding-right: 55px;
  }
  .title-of-promise {
    font-size: ${props => props.theme.fs_medium_larger}px;
  }
  .promises-title {
    font-size: ${props => props.theme.fs_primary}px;
    color: ${props => props.theme.color_Black};
  }
  .benefits {
    position: relative;
    padding-left: 85px;
    min-height: 72px;
    flex-wrap: wrap;
    align-content: center;
    margin-top: 30px;
  }
  .icons {
    width: 70px;
    height: 70px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: ${props => props.theme.color_BgLightGrey};
    border-radius: 50%;
    svg {
      width: 29px;
      height: 29px;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      position: absolute;
    }
  }
  .benefit-body {
    font-size: ${props => props.theme.fs_small}px;
    flex: 0 0 100%;
  }
  .fabulus-term-wrap {
    padding: 20px 0;
  }
  .fabulus-term {
    font-size: ${props => props.theme.fs_small}px;
    color: ${props => props.theme.color_LightestGrey};
    margin: 0 0 7px;
  }
  .fabulous-right {
    color: ${props => props.theme.color_White};
    background-image: linear-gradient(to top, #5970bc, #1e254a);
    padding: 35px;
    margin-left: auto;
    width: 50%;
    max-width: 100%;
  }
  .how-works {
    font-size: ${props => props.theme.fs_medium_larger}px;
    color: ${props => props.theme.color_White};
    padding-bottom: 20px;
  }
  .box {
    padding: 25px 28px 20px 55px;
    background-color: ${props => props.theme.color_BgDarkBlue};
    position: relative;
    border-radius: 12px;
    margin-bottom: 22px;
  }
  .box-icon {
    position: absolute;
    left: 13px;
    top: 50%;
    width: 29px;
    height: 29px;
    transform: translateY(-50%);
    svg {
      width: 30px;
      height: 30px;
      fill: ${props => props.theme.color_White};
    }
  }
  .box-title {
    color: ${props => props.theme.color_White};
    font-size: ${props => props.theme.fs_primary}px;
  }
  .box-text {
    font-size: ${props => props.theme.fs_small}px;
    line-height: normal;
    color: ${props => props.theme.color_White};
  }
  .read-terms {
    background-color: ${props => props.theme.color_LightGreyHex};
    font-size: ${props => props.theme.fs_small}px;
    padding: 25px 0 25px 35px;
  }
  .term {
    color: ${props => props.theme.color_Tag_Link};
    font-size: ${props => props.theme.fs_small}px;
    border: none;
    background: none;
    position: relative;
    padding-right: 20px;
    cursor: pointer;
    &:hover,
    &:focus {
      outline: none;
      border: none;
      box-shadow: none;
    }
  }
`;
