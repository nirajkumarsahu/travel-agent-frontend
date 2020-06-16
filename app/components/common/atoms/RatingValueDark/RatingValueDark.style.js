import { css } from "styled-components";

export default css`
  background-color: ${props => props.theme.color_PrimaryBlue};
  font-size: ${props => props.theme.fs_small}px;
  font-weight: ${props => props.theme.fw_bold};
  line-height: 1.4;
  text-align: center;
  color: ${props => props.theme.color_White};
  padding: 5px;
  border-radius: 4px;
  display: block;
  min-width: 37px;

  @media ${props => props.theme.mediaQuery.medium} {
    min-width: 52px;
    font-size: ${props => props.theme.fs_medium}px;
    padding: 5px;
  }
`;
