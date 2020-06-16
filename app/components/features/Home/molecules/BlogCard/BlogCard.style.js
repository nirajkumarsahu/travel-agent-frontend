import { css } from "styled-components";

export default css`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  &::after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000);
  }
  figure {
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  h3 {
    color: ${props => props.theme.color_White};
    margin: 0 0 12px 0;
  }
  .caption-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 16px;
    z-index: 2;
    .tag-wrapper {
      padding-bottom: 10px;
    }
  }
`;
