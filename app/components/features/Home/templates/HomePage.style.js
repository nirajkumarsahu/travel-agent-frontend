import { css } from "styled-components";

export default css`
  .bookings {
    .slider-inner {
      padding: 0 10px;
      margin: 0 -5px;
    }
    .wrapper-head {
      margin-bottom: 5px;
    }
  }
  .search-overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: rgba(0, 0, 0, 0.3);
    display: none;
  }
`;
