import { css } from "styled-components";

export default css`
  .city-modal {
    padding: 30px 30px 30px 45px;
    height: 621px;
  }
  h2 {
    text-align: center;
    margin: 0 0 40px;
    font-size: ${props => props.theme.fs_larger}px;
  }
  .cities-wrapper {
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: auto auto auto auto;
    grid-auto-flow: column;
    grid-column-gap: 10px;
    max-height: 550px;
    overflow-y: auto;
  }
  .cities-list {
    margin: 0 0 30px;
    padding: 0;
    list-style: none;
  }
  .city-item {
    font-size: ${props => props.theme.fs_secondary}px;
    color: ${props => props.theme.color_DarkBlueGrey};
    line-height: 1.4;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
