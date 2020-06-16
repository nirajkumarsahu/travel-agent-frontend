import { css } from "styled-components";
import headingConfig from "./Heading.config";

export default css`
  color: ${props => props.theme.color_TextBlack};
  ${props => headingConfig[props.type]};
  font-weight: ${props => props.theme.fw_bold};
`;
