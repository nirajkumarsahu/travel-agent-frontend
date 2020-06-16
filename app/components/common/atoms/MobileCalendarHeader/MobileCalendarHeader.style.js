import { css } from "styled-components";

export default css`
  background: ${props => props.theme.color_PrimaryBlue};

  .date-picker-top {
    padding: 12px 8px;
    border-bottom: 1px solid ${props => props.theme.color_BgGrey};
    color: ${props => props.theme.color_White};
    font-size: ${props => props.theme.fs_secondary}px;
    justify-content: space-between;
  }

  .mobile-date-val {
    border: 1px solid ${props => props.theme.color_Transparent};
    padding: 8px 14px;
    border-radius: 15px;
    font-size: ${props => props.theme.fs_tertiary}px;
    background: ${props => props.theme.color_PrimaryBlueDark};

    &.active {
      background: ${props => props.theme.color_PrimaryBlueLight};
      border-color: ${props => props.theme.color_White};
    }
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
      font-size: ${props => props.theme.fs_tertiary}px;
    }
  }
`;
