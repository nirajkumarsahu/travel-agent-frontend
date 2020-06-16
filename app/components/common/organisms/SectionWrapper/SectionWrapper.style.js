import { css } from "styled-components";
import { sectionCssConfig } from "./SectionWrapper.config";

export default css`
  padding-top: 40px;
  padding-bottom: 28px;
  position: relative;
  overflow-x: hidden;
  &.bank-offers {
    margin: 0 0 16px;
  }
  .wrapper-head {
    justify-content: space-between;
    margin-bottom: 25px;
    position: relative;
    z-index: 1;
    a {
      letter-spacing: 0.07px;
    }
  }
  .link-arrow {
    padding-right: 22px;
    font-size: ${props => props.theme.fs_secondary}px;
    color: ${props => props.theme.color_Tag_Link};
    cursor: pointer;
    span {
      top: 11px;
    }
  }
  .userAvatar_svg__svg {
    width: 45px;
    height: 45px;
  }
  ${sectionCssConfig.default}
  ${props => props.type && sectionCssConfig[props.type]}
`;
