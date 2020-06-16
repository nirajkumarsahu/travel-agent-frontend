import { css } from "styled-components";

export default css`
  position: relative;
  height: 174px;
  z-index: 1;
  .shell-loader {
    width: 180px;
    height: 174px;
  }
  a {
    display: block;
    height: 100%;
  }
  a:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(30, 37, 74, 0.01),
      #1e254a
    );
  }
  img {
    height: 100%;
  }

  .hotel-details {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    display: block;
    color: ${props => props.theme.color_White};
    padding: 7px 8px;

    .hotel-location {
      display: block;
      font-size: ${props => props.theme.fs_primary}px;
      font-weight: ${props => props.theme.fw_bold};
      margin: 0 0 5px;
    }

    .price {
      display: block;
      font-size: ${props => props.theme.fs_secondary}px;
    }
  }

  @media ${props => props.theme.mediaQuery.medium} {
    .hotel-details {
      padding: 18px 16px;
    }
  }
`;
