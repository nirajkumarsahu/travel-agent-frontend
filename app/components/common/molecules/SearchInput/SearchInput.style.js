import styled from "styled-components";

export default styled.div`
  position: relative;
  z-index: 5;
  .close {
    position: absolute;
    top: 50%;
    right: 10px;
    width: 25px;
    display: inline-block;
    background: none;
    border: none;
    height: 25px;
    cursor: pointer;
    transform: translateY(-50%);
    z-index: 5;
    &:focus {
      outline: none;
    }
    .icon {
      height: 1px;
      width: 20px;
      display: block;
      background: #000;
    }
    .bar1 {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      top: 1px;
      right: 4px;
      position: relative;
    }
    .bar2 {
      -webkit-transform: rotate(135deg);
      -moz-transform: rotate(135deg);
      -ms-transform: rotate(135deg);
      -o-transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
      -ms-transform: rotate(135deg);
      right: 4px;
      -webkit-transform: rotate(135deg);
      -ms-transform: rotate(135deg);
      transform: rotate(135deg);
      position: relative;
      top: 0px;
    }
  }

  .top-search-input {
    position: relative;
    z-index: 5;
    box-shadow: none;
    border-radius: 0;

    .dynamic-placeholder {
      top: 22px;
      z-index: 5;
      left: 45px;
      color: ${props => props.theme.color_Grey4};
      font-size: ${props => props.theme.fs_secondary}px;
      cursor: text;
    }
  }

  .error-message {
    position: absolute;
    left: 52px;
    top: 85px;
    font-size: ${props => props.theme.fs_secondary}px;
    color: ${props => props.theme.color_White};
    background: ${props => props.theme.color_Error_Bg};
    padding: 16px;
    border-radius: 0 0 8px 8px;
  }

  .search_svg__svg {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    display: inline-block;
    z-index: 6;
    position: absolute;
    left: 20px;
    top: 31px;
  }

  @media ${props => props.theme.mediaQuery.medium} {
    .top-search-input {
      box-shadow: -3px 2px 10px -3px rgba(0, 0, 0, 0.15);
      border-top-left-radius: 40px;
      border-bottom-left-radius: 40px;

      .dynamic-placeholder {
        top: 30px;
        z-index: 5;
        left: 62px;
        color: ${props => props.theme.color_Grey4};
        font-size: ${props => props.theme.fs_primary}px;
      }
    }
  }
`;
