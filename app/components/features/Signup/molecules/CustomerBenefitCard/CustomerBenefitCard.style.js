import styled from "styled-components";

export default styled.div`
  border-radius: 8px;
  background-color: ${props => props.theme.color_White};
  padding: 32px;

  h3 {
    font-weight: ${props => props.theme.fw_normal};
    min-height: 58px;
    margin: 0 0 24px;
  }

  p {
    font-size: ${props => props.theme.fs_small}px;
    color: ${props => props.theme.color_Greyish};
    line-height: 1.8;
  }

  svg {
    max-width: 56px;
    max-height: 48px;
    margin-bottom: 10px;
  }
`;
