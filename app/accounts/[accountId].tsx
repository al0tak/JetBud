import ScreenBackground from "@/components/ScreenBackground";
import { globalStyles } from "@/globals";
import { useAppState } from "@/store/useAppState";
import { useLocalSearchParams } from "expo-router";
import React, { useRef } from "react";
import { Animated, Text, View } from "react-native";

const Account = () => {
  const localParams = useLocalSearchParams();
  const accountId = localParams.accountId as string;
  const getAccountById = useAppState(({ getAccountById }) => getAccountById);
  const account = getAccountById(accountId);
  const transactions = useAppState(({ transactions }) => transactions);

  const scrollY = useRef(new Animated.Value(0)).current;

  if (!account) {
    return <Text>Account not found</Text>;
  }

  const thisAccountTransactions = transactions.filter(
    (t) => t.accountId === accountId
  );

  const totalAmount = thisAccountTransactions.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  return (
    <ScreenBackground>
      <View
        style={{
          padding: globalStyles.defaultSpacingWide,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Animated.View
          style={{
            justifyContent: "space-between",
            width: "100%",
            height: 150,
            borderRadius: globalStyles.defaultSpacingWide,
            padding: globalStyles.defaultSpacingWide,
            boxShadow: [
              {
                offsetX: 0,
                offsetY: 3,
                color: "rgba(0, 0, 0, 0.2)",
                spreadDistance: 3,
                blurRadius: 7,
              },
            ],

            opacity: scrollY.interpolate({
              inputRange: [0, 100],
              outputRange: [1, 0.1],
            }),

            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, -40],
                }),
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [0, 100],
                  outputRange: [1, 0.9],
                }),
              },
            ],
          }}
        >
          <Text style={{ fontSize: 24 }}>{account.name}</Text>
          <Text
            style={{ fontSize: 34, fontWeight: "bold", textAlign: "right" }}
          >
            {totalAmount}
          </Text>
        </Animated.View>
      </View>

      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
      >
        <View
          style={{
            position: "relative",
            top: 200,
            marginBottom: 200,
            borderTopLeftRadius: globalStyles.defaultSpacingWide,
            borderTopRightRadius: globalStyles.defaultSpacingWide,
            padding: globalStyles.defaultSpacingWide,
          }}
        >
          <Text
            style={{ fontSize: 34, fontWeight: "bold", textAlign: "center" }}
          >
            Transactions
          </Text>
          <View>
            {transactions.map((transaction) => (
              <View key={transaction.id} style={{ padding: 40 }}>
                <Text>{transaction.name}</Text>
                <Text>{transaction.amount}</Text>
              </View>
            ))}
            <Text>End of list</Text>
          </View>
        </View>
      </Animated.ScrollView>
    </ScreenBackground>
  );
};

export default Account;
