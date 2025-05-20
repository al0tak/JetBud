import { accountCardHeight, accountCardWidth, globalStyles } from "@/globals";
import { useAppState } from "@/store/useAppState";
import React from "react";
import { FlatList, View } from "react-native";
import AccountCardWithReflection from "./AccountCard/AccountCardWithReflection";

const AccountCardList = () => {
  const accounts = useAppState(({ accounts }) => accounts);
  const transactions = useAppState(({ transactions }) => transactions);

  const snapWidth = accountCardWidth + globalStyles.defaultSpacing;

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      snapToInterval={snapWidth}
      data={accounts}
      style={{
        height: accountCardHeight + 20, // card + part of the reflection
        position: "relative",
      }}
      ListHeaderComponent={
        <View style={{ width: globalStyles.defaultSpacingWide }} />
      }
      ListFooterComponent={
        <View style={{ width: globalStyles.defaultSpacingWide }} />
      }
      ItemSeparatorComponent={() => (
        <View style={{ width: globalStyles.defaultSpacing }} />
      )}
      renderItem={({ item }) => (
        <AccountCardWithReflection
          account={item}
          transactions={transactions.filter(
            (transaction) => transaction.accountId === item.id
          )}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default AccountCardList;
