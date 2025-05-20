import ScreenBackground from "@/components/ScreenBackground";
import { router } from "expo-router";
import { ArrowLeftIcon } from "lucide-react-native";
import React from "react";
import { Pressable, Text, View } from "react-native";

const settings = () => {
  return (
    <ScreenBackground>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Pressable onPress={() => router.back()} style={{ padding: 10 }}>
          <ArrowLeftIcon size={34} stroke="black" />
        </Pressable>
        <Text style={{ fontSize: 34, fontWeight: "bold" }}>Settings</Text>
      </View>
    </ScreenBackground>
  );
};

export default settings;
