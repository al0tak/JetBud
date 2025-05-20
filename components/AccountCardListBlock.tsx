import { globalStyles } from "@/globals";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import AccountCardList from "./AccountCardList";

const AccountCardListBlock = () => {
  return (
    <View
      style={{
        backgroundColor: "rgb(245, 245, 245)",
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: globalStyles.defaultSpacingWide,
        overflow: "hidden",
        paddingTop: globalStyles.defaultSpacingWide,
        gap: globalStyles.defaultSpacingWide,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: globalStyles.defaultSpacingWide,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Accounts</Text>
        <Pressable
          style={{
            paddingHorizontal: 8,
            paddingVertical: 4,
            backgroundColor: "rgb(227, 227, 227)",
            borderRadius: 8,
          }}
          onPress={() => router.push("/accounts/accounts")}
        >
          <Text style={{ color: "rgb(118, 118, 118)" }}>View all</Text>
        </Pressable>
      </View>
      <AccountCardList />
    </View>
  );
};

export default AccountCardListBlock;
