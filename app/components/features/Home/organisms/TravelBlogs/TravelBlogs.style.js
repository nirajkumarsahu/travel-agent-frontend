import { css } from "styled-components";

export default css`
  background: ${props => props.theme.color_White};
  padding-top: 40px;
  .container {
    position: relative;
  }
  .read-all {
    font-size: ${props => props.theme.fs_secondary}px;
    line-height: 19px;
    letter-spacing: 0.07px;
    color: ${props => props.theme.color_Tag_Link};
    position: absolute;
    right: 0;
    top: 7px;
    padding-right: 36px;
    span {
      right: 14px;
    }
  }
  h2 {
    margin-bottom: 20px;
  }
  .blog-wrapper {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 25px;
    .blog-left {
      -ms-flex: 0 0 43.2%;
      flex: 0 0 44.2%;
      max-width: 44.2%;
    }
    .blog-right {
      -ms-flex: 0 0 55.1%;
      flex: 0 0 55.1%;
      max-width: 55.1%;
      .blog-right-upper {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 8px;
        .half {
          -ms-flex: 0 0 49.5%;
          flex: 0 0 49.5%;
          max-width: 49.5%;
          height: 296px;
        }
      }
      .blog-right-lower {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 162px;
      }
    }
  }
  .popular-city-tag {
    overflow: hidden;
    padding-bottom: 3px;
  }
`;
