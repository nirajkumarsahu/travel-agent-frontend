import styled from "styled-components";

export default styled.div`
  padding: 30px 10% 30px;
  .header-bg {
    position: absolute;
    top: 0;
    width: 552px;
    left: 0;
    z-index: -1;
  }
  h2 {
    font-size: ${props => props.theme.fs_medium_larger}px;
  }
  .fabulous-sub-title {
    font-size: ${props => props.theme.fs_primary}px;
    color: ${props => props.theme.color_DarkBlueGrey};
    margin: 0 0 30px;
  }
  .term-list,
  .dashed {
    margin: 0;
    padding-left: 20px;
    padding: 0;
  }
  .dashed {
    padding-top: 20px;
  }
  .dashed-list {
    text-indent: 20px;
    position: relative;
    list-style: none;
    &::after {
      content: "";
      position: absolute;
      top: 8px;
      left: 0;
      width: 10px;
      height: 1px;
      background: ${props => props.theme.color_Black};
    }
  }
  .term-item {
    margin: 0 0 15px;
    list-style: disc inside;
    font-size: ${props => props.theme.fs_small}px;
    color: ${props => props.theme.color_Black};
  }
`;
