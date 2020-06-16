import styled from "styled-components";

export default styled.div`
  background: ${props => props.theme.color_White};
  border-radius: 43px 0 24px 24px;
  position: absolute;
  left: 0;
  width: 100%;
  top: 0;
  padding: 85px 0 14px;
  z-index: 4;
  overflow: hidden;
  .google-image {
    max-width: 144px;
    margin: 4px 12px 0 auto;
    display: block;
  }

  ul {
    margin: 0;
    padding: 8px 0 0;
    max-height: 248px;
    overflow-y: auto;
  }

  .heading {
    display: inline-block;
    font-size: ${props => props.theme.fs_secondary}px;
    vertical-align: middle;
    color: ${props => props.theme.color_TextBlack};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 26px);
  }

  .count-location {
    color: ${props => props.theme.color_Greyish};
    font-size: ${props => props.theme.fs_secondary}px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  .sub-heading {
    display: block;
    color: ${props => props.theme.color_Greyish};
    margin: 2px 0 0 25px;
    font-size: ${props => props.theme.fs_small}px;
  }

  .selected {
    .sub-heading,
    .count-location,
    .heading {
      color: ${props => props.theme.color_TextBlue};
    }
  }

  li {
    list-style: none;
    font-size: ${props => props.theme.fs_primary}px;
    position: relative;
    cursor: pointer;
    padding: 0 24px;

    &:hover {
      color: ${props => props.theme.color_TextBlue};
      .subheading,
      .count-location,
      .heading {
        color: ${props => props.theme.color_TextBlue};
      }
    }
    .list {
      padding: 12px 0;
      border-bottom: 1px solid ${props => props.theme.color_Blueish};
      width: 100%;
      position: relative;
      z-index: 1;
    }
  }

  .mapPin_svg__location-fill {
    fill: ${props => props.theme.color_TextBlack};
  }
  .map-pin {
    width: 16px;
    height: 16px;
    margin-right: 9px;
    vertical-align: middle;
  }
`;
