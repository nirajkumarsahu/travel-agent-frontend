import { css } from "styled-components";

export default css`
  display: flex;
  padding: 260px 0 230px;
  position: relative;
  min-height: 663px;
  .banner-background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: #20264a;
    opacity: 0.85;
  }
  .container {
    position: relative;
    z-index: 5;
    .title-wrapper {
      min-height: 28px;
    }
  }
  h1 {
    color: ${props => props.theme.color_White};
    padding-left: 26px;
  }
  .guest-name {
    white-space: nowrap;
    font-weight: 400;
  }
  .search-wrapper {
    border-radius: 45px;
    margin-top: 25px;
    background: ${props => props.theme.color_White};
    position: relative;
    z-index: 5;
  }
  .search-top {
    display: flex;
    position: relative;
    width: calc(100% - 196px);
    align-items: center;
  }
  .header-search {
    width: 41.5%;
    border-radius: 0 0 0 40px;
    input {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      z-index: 4;
      padding-left: 50px;
      padding-right: 40px;
      min-height: 85px;
      border-top-left-radius: 40px;
      border-top-right-radius: 40px;
      font-size: ${props => props.theme.fs_medium}px;
      border: 0;
      color: ${props => props.theme.color_TextBlack};
      &::-webkit-input-placeholder {
        color: ${props => props.theme.color_Greyish};
      }
      :-ms-input-placeholder {
        color: ${props => props.theme.color_Greyish};
      }
    }
  }
  .form-error {
    box-shadow: 0 0 0 2px ${props => props.theme.color_Error_Bg};
  }
  .count {
    min-width: 55px;
    display: inline-block;
  }

  .header-datepicker {
    width: 340px;
    background: ${props => props.theme.color_Transparent};
    min-height: 85px;
    display: flex;
    align-items: center;
    border-radius: 0;
  }

  .header-dropdown {
    padding: 0 24px;
    background: ${props => props.theme.color_Transparent};
    min-height: 63px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 85px;
    width: 241px;
  }
  .search-bottom {
    display: flex;
    width: 196px;
    box-shadow: 6px 2px 10px -3px rgba(0, 0, 0, 0.15);
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
  }
  .search-bottom button {
    width: 100%;
    height: 100%;
    border-radius: 43px;
    font-size: ${props => props.theme.fs_secondary}px;
    font-weight: ${props => props.theme.fw_bold};
    margin: 0 0 0 auto;
  }
  .dropdown-effect ul li:after {
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
  .dropdown-effect ul li:hover {
    &:after {
      width: 100%;
      transition: all 1s;
    }
  }
`;
