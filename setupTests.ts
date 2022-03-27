// "moduleNameMapper": {
//   ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
// },

// jest.useFakeTimers("modern").setSystemTime(new Date("2020-01-01").getTime());
import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);
