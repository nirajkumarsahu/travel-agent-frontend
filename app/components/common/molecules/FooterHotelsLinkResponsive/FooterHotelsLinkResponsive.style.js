import { css } from "styled-components";

export default css`
  .hotel-locations {
    margin: 0 0 35px;
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
    text-align: justify;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    column-count: 2;
  }
  a {
    white-space: nowrap;
    font-size: ${props => props.theme.fs_xsmall}px;
    color: ${props => props.theme.color_White};
    transition: all 0.3s;
    &:hover {
      opacity: 1;
    }
  }

  .hotels-in {
    display: none;
  }

  @media ${props => props.theme.mediaQuery.medium} {
    .hotel-locations {
      margin: 0 0 70px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: auto auto auto auto auto auto auto;
      grid-column-gap: 20px;
      column-count: none;
    }

    a {
      opacity: 0.7;
    }

    p {
      opacity: 0.7;
    }

    .hotels-in {
      display: inline-block;
      vertical-align: middle;
      padding-right: 5px;
      margin-top: -2px;
    }
  }
`;
