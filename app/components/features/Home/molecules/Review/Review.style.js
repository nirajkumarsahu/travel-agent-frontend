import { css } from "styled-components";

export default css`
  padding-top: 25px;
  padding-bottom: 30px;
  background: ${props => props.theme.color_White};
  .review-container {
    max-width: 600px;
    text-align: center;
    white-space: normal;
    margin: 0 12px;
  }
  .description {
    line-height: 24px;
    margin-bottom: 30px;
    letter-spacing: 0.5px;
    color: ${props => props.theme.color_TextBlack};
  }
  .user {
    font-size: ${props => props.theme.fs_secondary}px;
    line-height: 24px;
    color: ${props => props.theme.color_TextBlack};
    font-weight: ${props => props.theme.fw_bold};
    margin-top: 9px;
  }
  .stay-detail {
    line-height: 1.71;
    a {
      color: ${props => props.theme.color_Text_Grey2};
    }
  }
`;
