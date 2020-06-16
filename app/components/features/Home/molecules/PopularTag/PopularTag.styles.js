import { css } from "styled-components";

export default css`
  margin-bottom: 15px;
  a {
    text-decoration: none;
    font-size: ${props => props.theme.fs_secondary}px;
    line-height: 19px;
    color: ${props => props.theme.color_Tag_Link};
    display: inline-block;
    border: 1px solid ${props => props.theme.color_Tag_Link};
    border-radius: 4px;
    margin-right: 8px;
    text-align: center;
    padding: 5px 16px;
    margin-bottom: 10px;
    opacity: 0.8;
    transition: all 0.3s;
    &:hover {
      opacity: 1;
    }
  }
`;
