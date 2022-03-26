import { TextStyle } from "react-native";

interface Theme {
  palette: typeof palette;
  typography: {
    largeText: TextStyle;
    regularText: TextStyle;
    regularTextBold: TextStyle;
  };
  borderRadius: 6;
}

const HELVETICA = "Helvetica";

const palette = {
  green: "#2da44e",
  blue: "rgb(9, 105, 218)",
  lightGrey: "rgb(246, 248, 250)",
  grey: "rgb(216, 222, 228)",
  neutral: "rgb(208, 215, 222)",
  white: "#fff",
  veryDarkGrey: "#24292f",
};

const theme: Theme = {
  palette,
  typography: {
    largeText: {
      fontFamily: HELVETICA,
      fontSize: 24,
      lineHeight: 36,
      fontWeight: "300",
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
  },
  borderRadius: 6,
};

export default theme;
