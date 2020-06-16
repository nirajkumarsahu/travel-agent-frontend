import { css } from "styled-components";

export default css`
  padding: 24px 0;
  border-bottom: 1px solid ${props => props.theme.color_Grey1};

  .inner-container {
    max-width: 696px;
    width: 100%;
    margin: 0 auto;
    p {
      color: ${props => props.theme.color_TextBlack};
      font-size: ${props => props.theme.fs_primary}px;
      line-height: 24px;
      letter-spacing: 0.5px;
    }
  }

  .user-details {
    margin: 9px auto 0;
    align-items: flex-start;
    p {
      font-size: ${props => props.theme.fs_small}px;
      font-weight: ${props => props.theme.fw_bold};
      max-width: 72%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: inline-block;
    }
  }

  .user-name-location {
    padding: 0 16px;
    text-align: left;
    min-width: 0;
    width: calc(100% - 48px);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    p {
      color: ${props => props.theme.color_Grey3};
    }

    & > span {
      color: ${props => props.theme.color_Greyish};
      line-height: 1.5;
      font-size: ${props => props.theme.fs_xsmall}px;
    }
  }

  .user-loc {
    order: 3;
    width: 100%;

    a {
      display: inline-block;
      vertical-align: top;
      color: ${props => props.theme.color_Greyish};
    }
  }

  .user-visited-date {
    order: 2;
    margin-left: 8px;
  }

  .text-view {
    display: block;
    font-size: ${props => props.theme.fs_small}px;
    padding: 4px 0 0;
    cursor: pointer;
    color: #379aff;
  }

  .review-rating {
    margin-top: 4px;
  }

  @media ${props => props.theme.mediaQuery.medium} {
    .user-details {
      max-width: 67%;
      justify-content: flex-end;
      margin: 24px auto 0;
      p {
        font-size: ${props => props.theme.fs_secondary}px;
      }
    }

    .user-name-location {
      width: 370px;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: flex-start;

      & > span {
        font-size: ${props => props.theme.fs_small}px;
      }
    }

    .user-loc {
      order: 2;
    }

    .user-visited-date {
      margin-left: 0;
      order: 3;
    }

    .review-rating {
      margin-top: 6px;
    }
  }
`;
