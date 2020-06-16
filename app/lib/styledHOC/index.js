import styled from "styled-components";

export default (Component, styles) =>
  styled(Component)`
    ${styles}
  `;
