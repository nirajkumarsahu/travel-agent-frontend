import { css } from "styled-components";
import paraConfig from "./Paragraph.config";

export default css`
  margin: 0;
  padding: 0;
  ${props => paraConfig[props.type || "type1"]};
`;
