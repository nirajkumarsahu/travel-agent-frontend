import styled from "styled-components";

export default styled.div`
  position: relative;
  .list-wrapper {
    position: absolute;
    left: 0;
    top: 85px;
    background: ${props => props.theme.color_White};
    width: 100%;
    padding: 0;
    z-index: 2;
    box-shadow: 0 11px 10px -7px rgba(0, 0, 0, 0.15) inset;
    border-radius: 0 0 24px 24px;
    overflow: hidden;
  }
  ul {
    margin: 0;
    max-height: 240px;
    overflow-y: auto;
    padding: 0;
  }

  li {
    list-style: none;
    font-size: ${props => props.theme.fs_secondary}px;
    cursor: pointer;
    color: ${props => props.theme.color_TextBlack};
    position: relative;
    padding: 0 24px;
    &:last-child {
      border-bottom: none;
    }
    .list {
      padding: 13px 0;
      border-bottom: 1px solid ${props => props.theme.color_Blueish};
      width: 100%;
      position: relative;
      z-index: 1;
    }
  }
  .selected,
  li:hover {
    color: ${props => props.theme.color_Tag_Link};
  }

  button {
    background: ${props => props.theme.color_Transparent};
    border: none;
    font-size: ${props => props.theme.fs_medium}px;
    padding: 0;
    width: 100%;
    text-align: left;
    position: relative;
    z-index: 3;
    line-height: 30px;
    cursor: pointer;

    &:focus,
    &:visited {
      outline: none;
    }
  }

  label {
    display: block;
    position: relative;
    z-index: 3;
    font-size: ${props => props.theme.fs_small}px;
    color: ${props => props.theme.color_Greyish};
  }

  .downArrow_svg__svg {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-left: 4px;
  }
`;
