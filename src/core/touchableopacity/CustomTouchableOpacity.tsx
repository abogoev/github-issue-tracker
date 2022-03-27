import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import React, { FC } from "react";
import { ACTIVE_OPACITY } from "../../utils/constants";

export interface CustomTouchableOpacityProps extends TouchableOpacityProps {}

const CustomTouchableOpacity: FC<CustomTouchableOpacityProps> = (props) => {
  return <TouchableOpacity activeOpacity={ACTIVE_OPACITY} {...props} />;
};

export default CustomTouchableOpacity;
