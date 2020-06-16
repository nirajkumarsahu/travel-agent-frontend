import styled from "styled-components";
import Button from "components/common/atoms/Button";

export const StyledNavigationLink = styled(Button)`
  font-size: ${props => props.theme.fs_secondary}px;

  .navigation_svg__navigation-icon {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin: 0 4px 0 0;
  }

  .navigation_svg__navigation-fill {
    fill: ${props => props.theme.color_TextBlue};
  }

  a {
    font-weight: ${props => props.theme.fw_bold};
  }
`;

export const StyledNavigationButton = styled(Button)`
  padding: 16px 20px;
  border: 1px solid #ffe86f;
  border-radius: 24px;
  font-size: ${props => props.theme.fs_small}px;
  line-height: 1.2;
  text-align: center;
  cursor: pointer;
  color: ${props => props.theme.color_TextBlack};
  -webkit-transition: all ease 0.3s;

  transition: all ease 0.3s;
  background-image: linear-gradient(247deg, #ffe86f, #fddc2c);
  min-width: 122px;
`;
