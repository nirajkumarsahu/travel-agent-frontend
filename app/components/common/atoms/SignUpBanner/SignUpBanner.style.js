import styled from "styled-components";

export default styled.div`
  .title,
  .text {
    font-size: ${props => props.theme.fs_medium_larger}px;
    font-weight: ${props => props.theme.fw_bold};
    color: ${props => props.theme.color_TextBlack};
    margin: 0 0 8px;
  }
  .text {
    font-size: ${props => props.theme.fs_medium}px;
    font-weight: normal;
    margin: 0 0 16px;
  }
  .tertiary {
    padding: 9px 15px;
    text-transform: capitalize;
    color: ${props => props.theme.color_darkBlueGrey};
    font-weight: ${props => props.theme.fw_bold};
  }
`;
