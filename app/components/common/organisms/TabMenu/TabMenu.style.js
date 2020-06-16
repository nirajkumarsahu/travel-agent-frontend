import { css } from "styled-components";

export default css`
  padding: 24px 0 0;

  ul {
    padding: 0;
    display: inline-block;
    margin: 0;
  }

  .tab {
    display: inline-block;
    color: ${props => props.theme.color_TextBlack};
    margin: 0 10px;
    padding: 0 0 12px;
    position: relative;
    font-size: ${props => props.theme.fs_small}px;
    &:hover {
      cursor: pointer;
    }

    &.active {
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -1px;
        background: ${props => props.theme.color_DarkBlueGrey};
        height: 4px;
        width: 100%;
        border-radius: 5px;
      }
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  @media ${props => props.theme.mediaQuery.medium} {
    padding: 32px 0 10px;

    text-align: center;

    ul {
      border-bottom: 1px solid ${props => props.theme.color_DarkBlueGrey};
    }

    .tab {
      padding: 0 0 16px;
      font-size: ${props => props.theme.fs_medium}px;
    }
  }
`;
