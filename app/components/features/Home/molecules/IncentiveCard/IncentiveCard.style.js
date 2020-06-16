import { css } from "styled-components";

export default css`
  padding: 24px;
  white-space: normal;
  text-align: center;
  svg {
    width: 88px;
    margin: 0 auto 18px;
    display: block;
  }
  small {
    font-size: ${props => props.theme.fs_primary}px;
    font-weight: normal;
    line-height: normal;
    color: #a8a9ae;
  }
  @media ${props => props.theme.mediaQuery.smallMax} {
    svg {
      width: 56px;
      margin: 0 auto 18px;
      display: block;
    }
  }
`;
