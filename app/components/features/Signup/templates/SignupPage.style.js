import { css } from "styled-components";

export default css`
  .signup-section {
    padding: 24px 0 0;
    background-image: linear-gradient(
      250deg,
      #6f77a5,
      rgba(79, 88, 142, 0.92) 28%,
      #20264a
    );
  }
  .company-benefit-wrap {
    background: #fff;
    margin: 0 0 10px;
  }
  .full-width {
    width: 100%;
  }

  .company-benefits {
    padding: 24px 0;
    h3 {
      display: none;
    }
  }

  .signup-section .flex {
    flex-wrap: wrap;
  }

  .signup-form-wrapper {
    width: 100%;
    min-height: 328px;
    position: relative;
    order: 2;
    margin-top: 20px;

    h3 {
      margin: 0 0 16px;
    }
  }

  .country-code-dropdown {
    margin: 0 12px 0 0;

    button {
      font-size: 16px;
    }
    .list-wrapper {
      position: absolute;
      top: 36px;
      background: ${props => props.theme.color_White};
      z-index: 4;
      box-shadow: 0 12px 24px 0 rgba(30, 37, 74, 0.1);
      max-height: 255px;
      overflow-y: auto;
      min-width: 148px;
      border-radius: 4px;
      color: ${props => props.theme.color_TextBlack};
      left: -15px;
    }

    ul {
      padding: 0 16px;
    }

    li {
      padding: 15px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.03);
      display: flex;
      align-items: center;
      .list {
        padding: 0;
        border: 0;
      }
    }

    .item-text {
      display: inline-block;
      vertical-align: middle;
    }

    .item-value {
      display: inline-block;
      vertical-align: middle;
      min-width: 55px;
    }
  }

  .banner-main-section {
    order: 1;
  }

  .slider-inner {
    margin: 0px;
  }
  .link-wrapper {
    display: none;
  }
  @media (min-width: 1024px) {
    .company-benefit-wrap {
      margin: 0 0 20px;
    }
    .dots {
      display: none !important;
    }
    .company-benefits {
      padding: 40px 0;
      h3 {
        display: block;
      }
    }
    .country-code-dropdown button {
      font-size: 18px;
    }

    .signup-section {
      padding: 104px 0 24px;
      opacity: 0.9;
      background-image: linear-gradient(
        250deg,
        #6f77a5,
        rgba(79, 88, 142, 0.92) 28%,
        #20264a
      );
    }
    .signup-section .flex {
      flex-wrap: nowrap;
    }
    .signup-form-wrapper {
      width: 384px;
      min-height: 425px;
      margin-top: 0;
    }

    .banner-main-section {
      width: calc(100% - 384px);
      padding-right: 184px;
    }

    .link-wrapper {
      display: flex;
    }
  }
`;
