import styled from "styled-components";

export default styled.div`
  padding: 24px 8px 12px;
  text-align: center;

  h3 {
    color: ${props => props.theme.color_PrimaryBlue};
    margin: 0 0 10px;
  }

  p {
    color: ${props => props.theme.color_PrimaryBlue};
    font-size: ${props => props.theme.fs_secondary}px;
    line-height: 1.6;
  }

  svg {
    max-width: 54px;
    min-height: 48px;
    max-height: 48px;
    margin: 0 0 24px;
  }

  @media ${props => props.theme.mediaQuery.medium} {
    width: 33.3%;
    padding: 24px 16px;
    display: inline-block;
    vertical-align: top;

    h3 {
      font-size: ${props => props.theme.fs_medium_larger}px;
    }
  }
`;
