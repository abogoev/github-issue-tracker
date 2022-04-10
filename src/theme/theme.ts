import { TextStyle } from "react-native";

interface Theme {
  palette: typeof palette;
  typography: {
    verylargeText: TextStyle;
    largeText: TextStyle;
    regularText: TextStyle;
    regularTextBold: TextStyle;
    smallText: TextStyle;
  };
  borderRadius: 6;
}

const HELVETICA = "Helvetica";

const palette = {
  green: "rgb(45, 164, 78)",
  blue: "rgb(9, 105, 218)",
  red: "rgb(207, 34, 46)",
  purple: "rgb(130, 80, 223)",
  darkBlue: "rgba(9,105,218,0.3)",
  white: "#fff",
  transparent: "transparent",
  lightGrey: "rgb(246, 248, 250)",
  grey: "rgb(216, 222, 228)",
  neutral: "rgb(208, 215, 222)",
  darkGrey: "rgb(87, 96, 106)",
  veryDarkGrey: "#24292f",
} as const;

const theme: Theme = {
  palette,
  typography: {
    verylargeText: {
      fontFamily: HELVETICA,
      fontSize: 24,
      lineHeight: 36,
      fontWeight: "300",
    },
    largeText: {
      fontFamily: HELVETICA,
      fontSize: 16,
      lineHeight: 24,
      fontWeight: "600",
    },
    regularText: {
      fontFamily: HELVETICA,
      fontSize: 14,
      lineHeight: 21,
      fontWeight: "400",
    },
    regularTextBold: {
      fontFamily: HELVETICA,
      fontSize: 14,
      lineHeight: 20,
      fontWeight: "500",
    },
    smallText: {
      fontFamily: HELVETICA,
      fontSize: 12,
      lineHeight: 18,
    },
  },
  borderRadius: 6,
};

export default theme;
