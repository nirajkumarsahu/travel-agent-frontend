import styled from "styled-components";

export default styled.div`
  svg {
    max-width: 41px;
    max-height: 41px;
  }
  .travel-agent {
    text-shadow: ${props => props.theme.shadow_White};
    font-size: ${props => props.theme.fs_xxxl}px;
    color: ${props => props.theme.color_White};
    margin-top: 38px;
  }

  .sub-title {
    text-shadow: ${props => props.theme.shadow_White};
    font-size: ${props => props.theme.fs_medium}px;
    font-weight: ${props => props.theme.fw_normal};
    color: ${props => props.theme.color_White};
    display: block;
  }

  @media ${props => props.theme.mediaQuery.medium} {
    .travel-agent {
      font-size: ${props => props.theme.fs_medium_larger}px;
      font-weight: ${props => props.theme.fw_bold};
      &::after {
        position: absolute;
        top: 20px;
        left: 0px;
        width: 24px;
        height: 4px;
        background-color: #fedd10;
      }
    }
  }
`;
