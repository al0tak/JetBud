import AccountList from "@/components/AccountList";
import ScreenBackground from "@/components/ScreenBackground";
import { useAppState } from "@/store/useAppState";
import { router } from "expo-router";
import { ArrowLeftIcon } from "lucide-react-native";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Accounts = () => {
  const accounts = useAppState(({ accounts }) => accounts);

  return (
    <ScreenBackground>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Pressable onPress={() => router.back()} style={{ padding: 10 }}>
          <ArrowLeftIcon size={34} stroke="black" />
        </Pressable>
        <Text style={{ fontSize: 34, fontWeight: "bold" }}>My accounts</Text>
      </View>

      <AccountList accounts={accounts} />
    </ScreenBackground>
  );
};

export default Accounts;
