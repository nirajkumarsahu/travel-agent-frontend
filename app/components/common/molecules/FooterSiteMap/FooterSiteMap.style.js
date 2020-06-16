import { css } from "styled-components";

export default css`
  margin-right: 75px;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h4 {
    color: ${props => props.theme.color_White};
    margin: 0 0 15px;
    text-transform: capitalize;
  }

  a {
    font-size: ${props => props.theme.fs_small}px;
    text-decoration: none;
    line-height: 1.6;
    color: #ffffff;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
`;
