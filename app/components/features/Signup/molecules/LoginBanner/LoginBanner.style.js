import styled from "styled-components";

export default styled.div`
  width: 100%;
  text-align: left;

  .dots {
    display: none;
  }
  .container {
    flex-wrap: wrap;
  }

  h2 {
    font-weight: ${props => props.theme.fw_normal};
    color: ${props => props.theme.color_White};
    margin-bottom: 24px;
    line-height: 1.6;
  }
  h1 {
    color: ${props => props.theme.color_White};
    margin-bottom: 80px;
    font-size: 36px;
    line-height: 1.33;
  }

  ul {
    margin-bottom: 0;
  }

  li {
    background: ${props => props.theme.color_White};

    &.active {
      background: ${props => props.theme.color_White};
    }
  }

  .travel-agent {
    margin-top: 8px;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      top: 35px;
      width: 24px;
      height: 4px;
      background-color: ${props => props.theme.color_PrimaryYellow};
      left: 0;
      transform: translateX(0);
    }
  }

  .sub-title {
    margin-top: 24px;
    font-size: ${props => props.theme.fs_medium}px;
  }

  svg {
    max-width: 63px;
    max-height: 63px;
  }
  .login-banner-slider .slider-inner {
    margin: 0;
  }

  @media ${props => props.theme.mediaQuery.smallMax} {
    text-align: center;
    padding: 75px 0 12px;
    h1 {
      font-size: 20px;
      line-height: 1.5;
      margin: 0 0 16px;
    }
    .travel-agent {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${props => props.theme.fs_medium}px;
      font-weight: ${props => props.theme.fw_bold};
      .sub-title {
        font-size: ${props => props.theme.fs_secondary}px;
        margin: 0;
        margin-left: 8px;
      }
    }
    .login-banner-slider {
      .sliderWrapper {
        overflow: auto;
      }
      .slider-inner {
        margin: 0;
      }
      .child-div {
        width: 100%;
      }
    }
    .dots {
      display: flex;
    }
  }
`;
