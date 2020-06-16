import styled from "styled-components";
import { ButtonVanilla } from "../Button/Button";

export default styled(ButtonVanilla)`
  color: ${props => props.theme.color_TextBlack};
  font-size: ${props => props.theme.fs_secondary}px;
  &:focus,
  &:hover {
    outline: none;
    border: none;
  }
`;
