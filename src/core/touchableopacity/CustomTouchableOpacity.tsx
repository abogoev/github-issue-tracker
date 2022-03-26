import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import React, { FC } from "react";
import { ACTIVE_OPACITY } from "../../utils/constants";

const CustomTouchableOpacity: FC<TouchableOpacityProps> = (props) => {
  return <TouchableOpacity activeOpacity={ACTIVE_OPACITY} {...props} />;
};

export default CustomTouchableOpacity;
