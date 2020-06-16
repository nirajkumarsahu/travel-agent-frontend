import { css } from "styled-components";

export default css`
  background: transparent;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  .container {
    justify-content: space-between;
  }
  .header-logo svg {
    width: 100px;
  }
  .helpline-number {
    display: none;
  }
  .logo-enquiry {
    .header-logo {
      vertical-align: middle;
      svg {
        width: 126px;
      }
    }
    span {
      font-size: ${props => props.theme.fs_xsmall}px;
      color: ${props => props.theme.color_White};
      display: block;
    }
  }
  .top-list {
    padding: 0;
    margin: 0;
    display: flex;
  }

  .top-list li {
    list-style: none;
    display: flex;
    align-items: center;
    a {
      color: #fff;
      font-size: ${props => props.theme.fs_secondary}px;
    }
  }

  .tool-tip {
    background: #595a5e;
    padding: 12px 16px;
    border-radius: 5px;
    font-size: 14px;
    text-align: center;
    line-height: 1.5;
    position: absolute;
    right: 0px;
    top: 36px;
    min-width: 193px;
    display: none;

    &:before {
      content: "";
      position: absolute;
      right: 14px;
      top: -10px;
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
      border-bottom: 10px solid #595a5e;
    }
  }

  .call {
    margin-right: 0px;
    a {
      display: flex;
      align-items: center;
      font-size: ${props => props.theme.fs_secondary}px;
      margin-right: 0;
      padding: 8px;
      position: relative;
      color: #fff;
      &:hover .tool-tip {
        display: block;
      }

      svg {
        width: 16px;
        margin: 0 10px 0 0;
      }

      path {
        fill: ${props => props.theme.color_White};
      }
    }
  }

  @media ${props => props.theme.mediaQuery.medium} {
    padding-top: 25px;
    padding-bottom: 22px;
  .header-logo svg {
    width: 180px;
  }
  .logo-enquiry {
    .header-logo {
      vertical-align: middle;
      svg {
        width: 151px;
        height: 28px;
      }
    }
    span {
      font-size: ${props => props.theme.fs_small}px;
      color: ${props => props.theme.color_White};
      display: inline-block;
    }
  }
  .helpline-number {
    display: block;
  }
  .call {
    margin-right: 30px;
  }
  .tool-tip {
    right: 95px;
  }
`;
