import { css } from "styled-components";

export default css`
  padding: 23px 12px 105px;
  position: relative;
  .citiesBackground_svg__svg {
    position: absolute;
    bottom: 0;
    left: 0px;
    width: 100%;
    height: 485px;
    z-index: 0;
  }
  .counter-wrap {
    justify-content: space-between;
    max-width: 1200px;
    position: relative;
    z-index: 2;
    margin: 0 auto;
  }
  .counter-card {
    margin-right: 30px;
    position: relative;
    :last-child {
      margin-right: 0;
    }
  }
  .tajmahal_svg__tajmahal {
    width: 71px;
    height: 58px;
  }
  .resortBuilding_svg__resortBuilding {
    width: 71px;
    height: 57px;
  }
  .room_svg__room {
    width: 71px;
    height: 71px;
  }
  .boySmile_svg__boy-smile {
    width: 64px;
    height: 71px;
  }
`;
