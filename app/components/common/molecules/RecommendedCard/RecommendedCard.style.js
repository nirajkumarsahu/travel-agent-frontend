import { css } from "styled-components";

export default css`
  border-radius: 5px !important;
  box-shadow: 2px 2px 5px 0 rgba(30, 37, 74, 0.1);
  border: solid 1px ${props => props.theme.color_LightGreyHex};
  overflow: hidden;
  position: relative;
  background-color: ${props => props.theme.color_White};
  width: 378px;
  img {
    width: 100%;
    height: 238px;
    object-fit: cover;
  }
  h3 {
    margin: 0 0 2px;
    width: 100%;
    line-height: 1.05;
    letter-spacing: 0.37px;
  }
  .hotel-link {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  .hotel-details {
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .location {
    margin: 0 0 7px;
    display: block;
    padding-left: 14px;
  }
  .rating-and-price {
    max-width: 150px;
    position: relative;
  }
  .rating-and-price .mapPin_svg__map-pin-icon {
    width: 12px;
    height: 12px;
    position: absolute;
    top: 3px;
  }
  .price-per-night {
    text-align: right;
    padding-top: 3px;
  }
  .price {
    display: block;
  }
`;
