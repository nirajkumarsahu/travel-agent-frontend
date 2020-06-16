import { css } from "styled-components";

export default css`
  padding: 75px 0 10px;
  position: relative;
  background-image: linear-gradient(144deg, #192454, #525e93);
  .white-box {
    display: none;
  }
  .link-wrapper {
    flex-wrap: wrap;
    padding-bottom: 42px;
    margin-bottom: 41px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: ${props => props.theme.color_footerLine};
      opacity: 0.15;
    }
  }
  .white-box {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translate(-50%, 50%);
    -webkit-transform: translate(-50%, 50%);
  }
  .sitemap {
    width: 49%;
  }
  .link-sec {
    margin: 0 0 40px;
  }

  .book-hotels {
    font-size: ${props => props.theme.fs_small}px;
    color: ${props => props.theme.color_White};
    margin: 0 0 10px;
    line-height: 1.35;
    padding: 0 12px 10px;
    font-weight: ${props => props.theme.fw_SemiBold};
    position: relative;
    border-bottom: 1px solid ${props => props.theme.color_White};

    .arrowIcon {
      position: absolute;
      right: 9px;
      top: 0;
      left: auto;
      transform: rotate(90deg);
      transition: all ease 0.3s;

      svg {
        width: 11px;
        height: 11px;
      }
    }
  }

  .book-hotels.footer-open {
    .arrowIcon {
      transform: rotate(-90deg);
    }
  }

  .copyright {
    padding: 20px 0 0;
    p {
      text-align: center;
      margin: 0;
      color: ${props => props.theme.color_White};
      font-size: ${props => props.theme.fs_xsmall}px;
    }
  }

  .footer-option {
    width: 50%;
    border-left: 1px solid rgba(181, 181, 181, 0.15);
    display: flex;
    flex-wrap: wrap;
  }

  .footer-option:last-child {
    border-right: none;
  }

  .about-us {
    width: 100%;
    padding-left: 40px;
    color: ${props => props.theme.color_White};
    h3 {
      color: ${props => props.theme.color_White};
    }
    ul {
      padding: 0;
      margin: 12px 0;
    }
    li {
      display: flex;
      font-size: ${props => props.theme.fs_small}px;
      line-height: 20px;
      opacity: 0.7;
    }
  }

  .phoneLine_svg__phoneLine-icon,
  .locationLine_svg__locationLine-icon,
  .shieldLine_svg__shieldLine-icon {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin: 2px 16px 0 0;
  }

  .phoneLine_svg__phoneLine-fill,
  .locationLine_svg__locationLine-fill,
  .shieldLine_svg__shieldLine-fill {
    fill: ${props => props.theme.color_White};
  }

  @media ${props => props.theme.mediaQuery.medium} {
    padding: 144px 0 40px;
  }
`;
