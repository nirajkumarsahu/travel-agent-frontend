import { css } from "styled-components";

export default css`
  .datepicker-parent {
    position: relative;
    width: 100%;
    border-color: ${props => props.theme.color_Grey1};
    border-width: 0px 1px 0px 1px;
    border-style: solid;
    outline: none;
  }

  .shadow-box {
    display: flex;
    align-items: center;
    padding: 0 23px;
    justify-content: space-between;
    position: relative;
    z-index: 4;
    width: 100%;
  }

  .datepicker-container {
    left: 0;
    z-index: 4;
    position: absolute;
    top: 66px;
    width: auto;
    height: auto;
    background: ${props => props.theme.color_Transparent};
    border-radius: 0 0 40px 40px;
  }

  .date-input {
    font-size: ${props => props.theme.fs_small}px;
    font-weight: ${props => props.theme.fw_normal};
    color: ${props => props.theme.color_Greyish};
    margin: 0 0 4px;
    cursor: pointer;
    width: 40%;
    position: relative;

    &.active:after {
      content: "";
      position: absolute;
      left: -22px;
      bottom: -22px;
      width: 136px;
      height: 2px;
      background: ${props => props.theme.color_PrimaryBlue};
    }
  }

  .date-val {
    display: block;
    font-size: ${props => props.theme.fs_medium}px;
    font-weight: ${props => props.theme.fw_normal};
    color: ${props => props.theme.color_TextBlack};
    margin-top: 4px;
  }

  .separator-arrow {
    padding: 0 5px;
    width: 20%;

    & img {
      width: 24px;
      height: 24px;
    }
  }

  .datepicker-wrapper {
    display: flex;
    height: inherit;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    overflow: hidden;

    & > div:nth-child(3) {
      tbody tr:first-child td .tool-tip-text {
        top: auto;
        bottom: -41px;

        &:after {
          top: -6px;
          border-bottom: 6px solid rgba(0, 0, 0, 0.6);
          border-top: none;
        }
      }
    }
  }

  .date-picker-select {
    background: ${props => props.theme.color_Blue1};
  }

  .date-picker-top {
    padding: 12px 8px;
    border-bottom: 1px solid ${props => props.theme.color_BgGrey};
    color: ${props => props.theme.color_White};
    font-size: ${props => props.theme.fs_secondary}px;
    justify-content: space-between;
  }

  .date-picker-day {
    padding: 0 8px;

    table {
      border-collapse: collapse;
      width: 100%;
    }
    th {
      width: 40px;
      height: 40px;
      padding: 5px;
      color: ${props => props.theme.color_White};
      font-weight: normal;
      /* font-size: ${props => props.theme.fs_tertiary}px; */
    }
  }
  .prevArrow_svg__svg {
    width: 16px;
    cursor: pointer;
    margin-left: -15px;
  }
  .prev-fill {
    fill: ${props => props.theme.color_Tag_Link};
  }
  .nextArrow_svg__svg {
    width: 16px;
    margin-right: -15px;
    cursor: pointer;
  }
  .mobile-date-val {
    border: 1px solid ${props => props.theme.color_Transparent};
    padding: 8px 14px;
    border-radius: 15px;
    /* font-size: ${props => props.theme.fs_tertiary}px; */
    background: ${props => props.theme.color_PrimaryBlueDark};

    &.active {
      background: ${props => props.theme.color_PrimaryBlueLight};
      border-color: ${props => props.theme.color_White};
    }
  }

  .calendar-wrapper {
    width: 100%;
  }

  .downArrow_svg__svg {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-left: 4px;
  }
  .rightArrowCircle_svg__svg {
    width: 22px;
  }
  .to-calender {
    position: relative;
    &:before {
      content: "";
      width: 1px;
      height: 80%;
      top: 10%;
      position: absolute;
      left: 0;
      background: ${props => props.theme.color_Grey1};
    }
  }
  td {
    width: 40px;
  }
`;
