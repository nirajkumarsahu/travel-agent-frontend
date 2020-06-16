import { css } from "styled-components";

export default css`
  .review-search {
    min-height: 60px;
    padding: 0;
    background: #202c60;
    .container > h1 {
      display: none;
    }

    figure {
      display: none;
    }

    &:after {
      background: transparent;
    }
  }

  .bookings {
    .slider-inner {
      padding: 0 10px;
      margin: 0 -5px;
    }
    .wrapper-head {
      margin-bottom: 5px;
    }
  }

  .white-box {
    display: none;
  }

  .search-wrapper {
    display: none;
  }

  .header-right-top {
    display: none;
  }

  .link-wrapper {
    display: none;
  }

  @media (min-width: 1024px) {
    .search-wrapper {
      display: flex;
    }

    .header-right-top {
      display: flex;
    }

    .review-search {
      padding: 115px 0 40px;
      min-height: 0;
      background: transparent;
      figure {
        display: block;
      }
      &:after {
        background: #202c60;
      }
    }

    .link-wrapper {
      display: flex;
    }
  }
`;
