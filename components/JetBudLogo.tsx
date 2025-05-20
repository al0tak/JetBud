import { RocketIcon } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

const JetBudLogo = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <RocketIcon size={30} stroke="black" />
      <Text style={{ fontSize: 34, fontWeight: "bold" }}>JetBud</Text>
    </View>
  );
};

export default JetBudLogo;
