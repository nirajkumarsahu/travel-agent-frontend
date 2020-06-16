import { css } from "styled-components";

export default css`
  width: 100%;
  background-color: ${props => props.theme.color_White};
  padding: 12px 10px 10px;
  display: ${props => (!props.isMobile ? "block" : "none")};
  box-shadow: 0 11px 10px -7px rgba(0, 0, 0, 0.15) inset;

  table {
    border-collapse: collapse;
    width: 317px;
  }

  th {
    padding: 5px;
    color: ${props => props.theme.color_TextBlack};
    font-size: ${props => props.theme.fs_secondary}px;
    height: 30px;
    width: 40px;
    &.disabled {
      opacity: 0.2;
    }
  }

  tr:nth-child(2) th {
    display: table-cell;
    font-weight: normal;
  }

  thead a {
    display: none;
    cursor: pointer;
  }

  select {
    border: none;
    background: ${props => props.theme.color_Transparent};
    font-size: ${props => props.theme.fs_xsmall}px;

    &#selectedMonth {
      margin-right: 10px;
    }

    &:focus {
      outline: none !important;
    }
  }

  option {
    padding: 4px 0;
  }


  .tool-tip {
    position: relative;
  }

  .tool-tip-text {
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    min-width: 180px;
    padding: 6px;
    border-radius: 30px;
    z-index: 4;
    top: -41px;
    left: -84px;
    display: block;
    color: ${props => props.theme.color_White};
    pointer-events: none;
    font-size: 12px;
  }

  .tool-tip-text:after {
    content:"";
    position: absolute;
    border-top: 6px solid rgba(0, 0, 0, 0.6);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    top: 26px;
    left: 50%;
    transform: translateX(-50%);
  }


  td {
    padding: 5px;
    text-align: center;
    color: ${props => props.theme.color_DarkBlack};
    font-size: ${props => props.theme.fs_small}px;
    cursor: pointer;
    width: 30px;
    height: 30px;

    &.selected {
      background-color: ${props => props.theme.color_PrimaryBlueLighter};
      border-radius: 0;
    }

    &.disabled {
      pointer-events: none;
      opacity: 0.2;
    }

    &.start-date.selected {
      background-image: url("static/images/selection.png"),
        ${props => props.theme.gradient_StartDate};
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      color: ${props => props.theme.color_White};
      background-color: ${props => props.theme.color_Transparent};

      &.last-night-check-in {
        background-image: url("static/svg/moonWhite.svg"), url("static/images/selection.png"),
        ${props => props.theme.gradient_StartDate};
        background-position: center top 1px, center top, center top;
        background-repeat: no-repeat;
        background-size: 6px, contain, cover;
      }

      

    }

    &.keypad-selected {
      background-image: url("static/images/selection.png");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      color: ${props => props.theme.color_White};
    }

    &.end-date.selected {
      background-image: url("static/images/selection.png"),
        ${props => props.theme.gradient_EndDate};
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      color: ${props => props.theme.color_White};
      background-color: ${props => props.theme.color_Transparent};
    }

    &.last-night-check-in {
      background-image: url("static/svg/moonBlue.svg");
      background-position: center top 1px;
      background-repeat: no-repeat;
    }
    
  }

  &.second-calender {
    margin-left: 20px;
  }

  }

  &.from-calender tbody tr:first-child td .tool-tip-text {
    top: auto;
    bottom: -41px;

    &:after {
      top: -6px;
      border-bottom: 6px solid rgba(0,0,0,0.6);
      border-top: none;
    }
  }

  &.from-calender {
    tbody td {
      &:first-child {
        .tool-tip-text {
          left: -23px;
        }
        .tool-tip-text:after {
          left: 20px;
          transform: none;
        }
      }

      &:nth-child(2) {
        .tool-tip-text {
          left: -65px;
        }
        .tool-tip-text:after {
          left: 63px;
          transform:none;
        }
      }

      &:nth-child(4) {
        .tool-tip-text {
          left: -87px;
        }
      }

      &:nth-child(6) {
        .tool-tip-text {
          left: auto;
          right: -85px
        }
        .tool-tip-text:after {
          left: auto;
          transform:none;
          right: 68px;
        }
      }

      &:last-child {
        .tool-tip-text {
          left: auto;
          right: -32px
        }
        .tool-tip-text:after {
          left: auto;
          transform:none;
          right: 16px;
        }
      }
    }
  }
  


  @media ${props => props.theme.mediaQuery.medium} {
    td {
      border-bottom: 1px solid ${props => props.theme.color_White};

      &:hover {
        background-image: url("static/images/selection.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        color: ${props => props.theme.color_White};
      }
      &.last-night-check-in:hover {
        background-image: url("static/svg/moonWhite.svg"), url("static/images/selection.png");
        background-position: center top 1px, center top;
        background-size: 6px, contain;
      }

      &:empty {
        background: ${props => props.theme.color_Transparent};
        color: ${props => props.theme.color_Transparent};
        cursor: default;
      }
    }
    thead a {
      display: block;
    }
  }
`;
