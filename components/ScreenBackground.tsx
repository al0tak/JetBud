import React from "react";
import { View, ViewProps } from "react-native";

interface ScreenBackgroundProps extends ViewProps {
  children?: React.ReactNode;
}

const ScreenBackground = ({
  children,
  style,
  ...rest
}: ScreenBackgroundProps) => {
  return (
    <View style={[{ flex: 1, backgroundColor: "white" }, style]} {...rest}>
      {children}
    </View>
  );
};

export default ScreenBackground;
