import { css } from "styled-components";

export default css`
  .show-container {
    padding: 0;
    margin-top: 10px;
    color: ${props => props.theme.color_Black};
  }

  .white-box {
    display: none;
  }

  footer {
    padding: 10px;
  }

  .property-link-container {
    display: flex;

    li {
      a {
        background: #367db5;
      }
    }
  }
`;
