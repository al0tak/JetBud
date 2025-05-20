import ScreenBackground from "@/components/ScreenBackground";
import { accountCardColorsToPaths, globalStyles } from "@/globals";
import { useAppState } from "@/store/useAppState";
import { router, useLocalSearchParams } from "expo-router";
import { ArrowLeftIcon } from "lucide-react-native";
import React from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";

const Account = () => {
  const localParams = useLocalSearchParams();
  const accountId = localParams.accountId as string;
  const getAccountById = useAppState(({ getAccountById }) => getAccountById);
  const account = getAccountById(accountId);

  if (!account) {
    return <Text>Account not found</Text>;
  }

  return (
    <ScreenBackground>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          onPress={() => router.back()}
          style={{
            flexDirection: "row",
            width: 48,
            height: 48,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArrowLeftIcon size={34} stroke="black" />
        </Pressable>

        <ImageBackground
          source={accountCardColorsToPaths[account.color]}
          style={{
            flex: 1,
            overflow: "hidden",
            borderRadius: globalStyles.defaultSpacing,
            borderWidth: 1,
            height: 48,
            boxShadow: [
              {
                offsetX: 0,
                offsetY: 3,
                color: "rgba(0, 0, 0, 0.2)",
                spreadDistance: 3,
                blurRadius: 7,
              },
            ],
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              borderRadius: globalStyles.defaultSpacing - 1,
              borderWidth: 1,
              borderColor: "rgba(255, 255, 255, 0.8)",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}
            >
              {account.name}
            </Text>
          </View>
        </ImageBackground>
        <View style={{ width: 48 }} />
      </View>

      <View>
        <Text>Transactions</Text>
      </View>
    </ScreenBackground>
  );
};

export default Account;
