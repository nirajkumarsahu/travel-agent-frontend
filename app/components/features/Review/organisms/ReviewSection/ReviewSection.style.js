import { css } from "styled-components";

export default css`
  padding: 40px 0 0;
  h2 {
    font-weight: ${props => props.theme.fw_normal};
    font-size: ${props => props.theme.fs_secondary}px;
  }

  .top-heading {
    margin: 0 0 12px;
    font-size: ${props => props.theme.fs_primary}px;
  }

  .review-card:last-child {
    border-bottom: none;

    &:after,
    &:before {
      content: none;
    }
  }

  .load-more {
    background: ${props => props.theme.color_White};
    text-align: center;
    box-shadow: 0 11px 10px 7px rgba(0, 0, 0, 0.15);

    span {
      font-weight: ${props => props.theme.fw_bold};
      font-size: ${props => props.theme.fs_secondary}px;
      padding: 30px 24px;
      display: inline-block;
      cursor: pointer;
      color: #379aff;
    }
  }

  @media ${props => props.theme.mediaQuery.medium} {
    text-align: center;

    h2 {
      font-size: ${props => props.theme.fs_medium}px;
    }

    .top-heading {
      font-size: ${props => props.theme.fs_medium_larger}px;
    }

    .load-more {
      span {
        font-size: ${props => props.theme.fs_medium}px;
        padding: 40px 0;
      }
    }
  }
`;
