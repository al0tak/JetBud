import { View, Text } from "react-native";
import React from "react";
import { Transaction } from "@/types/models";

interface AccountCardTransactionProps {
  transaction: Transaction;
}

const AccountCardTransaction = ({
  transaction,
}: AccountCardTransactionProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text>{transaction.name}</Text>
      <Text>{transaction.amount}</Text>
    </View>
  );
};

export default AccountCardTransaction;
