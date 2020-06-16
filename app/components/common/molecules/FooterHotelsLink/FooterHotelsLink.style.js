import { css } from "styled-components";

export default css`
  .hotel-locations {
    margin: 0 0 70px;
  }
  h3,
  h2 {
    font-size: ${props => props.theme.fs_small}px;
    color: ${props => props.theme.color_White};
    margin: 0 0 10px;
    line-height: 1.35;
  }
  p {
    font-size: ${props => props.theme.fs_xsmall}px;
    color: ${props => props.theme.color_White};
    opacity: 0.7;
    text-align: justify;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    grid-column-gap: 20px;
  }
  a {
    white-space: nowrap;
    font-size: ${props => props.theme.fs_xsmall}px;
    color: ${props => props.theme.color_White};
    opacity: 0.7;
    transition: all 0.3s;
    &:hover {
      opacity: 1;
    }
  }
  .copyright {
    padding: 20px 0 0;
    p {
      text-align: center;
      margin: 0;
    }
  }
`;
