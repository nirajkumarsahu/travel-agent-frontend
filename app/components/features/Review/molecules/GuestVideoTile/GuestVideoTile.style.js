import { css } from "styled-components";

export default css`
  padding: 30px 0;
  border-bottom: 1px solid ${props => props.theme.color_Grey1};

  .inner-container {
    p {
      color: ${props => props.theme.color_Grey3};
      line-height: 1.5;
      font-size: ${props => props.theme.fs_secondary}px;
    }
  }

  .user-details {
    margin: 9px auto 0;
  }

  .user-name-location {
    padding: 0;
    text-align: left;
    min-width: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    p {
      color: ${props => props.theme.color_TextBlack};
    }

    & > span {
      color: ${props => props.theme.color_Greyish};
      line-height: 1.5;
      font-size: ${props => props.theme.fs_xsmall}px;
    }

    &:first-of-type {
      text-transform: capitalize;
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

  .user-letter {
    display: block;
    text-align: center;
    background: #a8a9ae;
    width: 48px;
    height: 48px;
    line-height: 48px;
    font-size: 20px;
    color: #fff;
    border-radius: 50%;
    text-transform: uppercase;
    display: none;
  }

  .video-wrapper {
    border-radius: 8px;
    overflow: hidden;
  }

  iframe {
    max-width: 100%;
  }

  @media ${props => props.theme.mediaQuery.medium} {
    padding: 40px 0;

    .inner-container {
      max-width: 80%;
      margin: 0 auto;

      p {
        font-size: ${props => props.theme.fs_primary}px;
        line-height: 1.7;
      }
    }

    .user-details {
      max-width: 67%;
      justify-content: flex-end;
      margin: 24px auto 0;
    }

    .user-name-location {
      width: 370px;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: flex-start;
      padding: 0 16px;
      p {
        font-size: ${props => props.theme.fs_secondary}px;
        font-weight: ${props => props.theme.fw_bold};
      }
      & > span {
        font-size: ${props => props.theme.fs_small}px;
      }
    }

    .user-letter {
      display: block;
    }

    .user-loc {
      order: 2;
    }

    .user-visited-date {
      margin-left: 0;
      order: 3;
    }
  }
`;
