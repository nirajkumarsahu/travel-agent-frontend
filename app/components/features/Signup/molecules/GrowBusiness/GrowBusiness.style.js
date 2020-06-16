import styled from "styled-components";

export default styled.div`
  padding-top: 0;
  padding-bottom: 0;
  position: relative;
  background-color: ${props => props.theme.color_PrimaryBlue};

  &:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: ${props => props.theme.gradient_Banner};
    opacity: 0.9;
  }

  & .container {
    position: relative;
  }

  .grow-business-parent {
    padding: 24px;
    width: 100%;
    border-radius: 8px;
    background-color: ${props => props.theme.color_PrimaryBlue};
    color: ${props => props.theme.color_White};
    text-align: center;
  }

  h2 {
    color: ${props => props.theme.color_White};
    font-size: ${props => props.theme.fs_medium_small}px;
  }

  p {
    margin-top: 8px;
    color: ${props => props.theme.color_White};
  }

  button {
    margin-top: 20px;
    padding: 14px 20px;
    font-weight: ${props => props.theme.fw_bold};
  }
  .travel-agent {
    display: none;
  }

  @media ${props => props.theme.mediaQuery.medium} {
    display: block;
    padding-top: 64px;
    padding-bottom: 64px;
    background-color: ${props => props.theme.color_Transparent};

    .grow-business-parent {
      width: 40%;
      padding: 40px;
      text-align: left;
    }
    .travel-agent {
      display: block;
      font-size: ${props => props.theme.fs_large}px;
    }

    &:before {
      content: "";
    }

    p {
      margin-top: 20px;
    }

    h2 {
      font-size: ${props => props.theme.fs_large}px;
    }
  }
`;
