import { css } from "styled-components";

export default css`
  justify-content: center;
  align-items: center;
  strong {
    font-size: ${props => props.theme.fs_xx_larger}px;
    line-height: 47px;
    font-weight: ${props => props.theme.fw_bold};
    color: ${props => props.theme.color_TextBlack};
    display: block;
    margin-bottom: 4px;
  }
  span {
    text-transform: uppercase;
    font-size: ${props => props.theme.fs_primary}px;
    line-height: 21px;
    font-weight: ${props => props.theme.fw_bold};
    color: ${props => props.theme.color_TextBlack};
  }
  .counter {
    margin-left: 20px;
    max-width: 165px;
    flex-direction: column;
  }
`;
