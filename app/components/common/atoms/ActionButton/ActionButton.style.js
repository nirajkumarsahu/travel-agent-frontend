import styled from "styled-components";
import Button from "components/common/atoms/Button";

export const StyledActionButton = styled(Button)`
  svg {
    width: 12px;
    margin-right: 5px;
    vertical-align: -2px;
  }
`;
export const StyledActionLink = styled.div`
  color: ${props => props.theme.color_Tag_Link};
  text-decoration: none;
  cursor: pointer;
  svg {
    width: 12px;
    margin-right: 5px;
    vertical-align: -2px;
  }
`;
