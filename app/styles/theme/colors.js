const colors = {
  color_Black: "#000",
  color_Black2: "#212121",
  color_Basic: "#3c3c3c",
  color_Blue1: "#202c60",
  color_Grey1: "#DBDCE1",
  color_DarkBlueGrey: "#1e254a",
  color_BgDarkBlue: "rgba(31, 39, 76, 0.5)",
  color_Grey2: "#424349",
  color_Text_Grey2: "#A8A9AE",
  color_TextBlack: "#101217",
  color_alert: "#ee492b",
  color_Red1: "#ff0000",
  color_White: "#fff",
  color_Trans_White: "rgba(255, 255, 255, 0.5)",
  color_DarkBlue: "#20264a",
  color_PrimaryBlueDark: "#323c65",
  color_PrimaryBlueDarker: "#19234C",
  color_PrimaryBlue: "#202C60",
  color_BlueBorder: "#374275",
  color_PrimaryBlueLighter: "#D2D4DF",
  color_Transparent: "transparent",
  background_Header: "#1e254a",
  color_Tag: "#4554a2",
  color_Tag_Link: "#379aff",
  color_LightGrey: "rgba(49, 49, 49, 0.5)",
  color_LightGreyHex: "#f0f0f0",
  color_Yellow: "#fddc2c",
  color_BgGrey: "#f0f3f7",
  color_BgLightGrey: "#f4f4f4",
  color_LightestGrey: "rgba(0, 0, 0, 0.4)",
  color_WhiteOpacity: "rgba(255, 255, 255, 0.8)",
  color_LighterGrey: "rgba(181,181,181,0.15)",
  color_MediumGrey: "#d6d6d6",
  color_DLink: "#b7b7b7",
  color_LightBlack: "#979797",
  color_LighterBlack: "#9b9b9b",
  color_GreyHex: "#9c9c9c",
  color_Error: "#ff4d4d",
  color_Error_Bg: "#d65656",
  color_Text_Grey2_rgba: "rgba(117, 118, 123, 0.7)",
  color_Red_rgba: "rgba(238,73,43,0.7)",
  color_Blue_rgba: "rgba(30, 37, 74, 0.7)",
  color_PrimaryYellowLight: "#FEDD10",
  color_Greyish: "#75767b",
  color_Blueish: "#e9f1fb",
  color_Green: "#1aae72",
  color_footerLine: "#b5b5b5",
  color_DarkBlack: "rgba(0, 0, 0, 0.87)"
};

const gradients = {
  gradient_PrimaryButton: `linear-gradient(247deg, #FEE33F, #FEDD10)`,
  gradient_CityCard: "linear-gradient(to bottom, transparent, #1e254a)",
  gradient_StartDate:
    "linear-gradient(to right, transparent 0, transparent 50%, #d2d4df 51%, #d2d4df 100%)",
  gradient_EndDate:
    "linear-gradient( to right, #d2d4df 0, #d2d4df 50%, transparent 51%, transparent 100%);",
  gradient_footer: `linear-gradient(to top, #192454, #525e93)`,
  gradient_Banner:
    "linear-gradient(246deg, #6f77a5, rgba(79, 88, 142, 0.92) 28%, #20264a);"
};

export default {
  ...colors,
  ...gradients
};
