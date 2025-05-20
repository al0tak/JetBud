import {
  accountCardColorsToPaths,
  accountCardHeight,
  accountCardWidth,
  globalStyles,
} from "@/globals";
import { Account, Transaction } from "@/types/models";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import AccountCardTransaction from "../AccountCardTransaction";

interface AccountCardProps {
  account: Account;
  transactions: Transaction[];
}

const AccountCard = ({ account, transactions }: AccountCardProps) => {
  return (
    <ImageBackground
      style={{
        overflow: "hidden",
        width: accountCardWidth,
        height: accountCardHeight,
        borderRadius: globalStyles.defaultSpacing,
        borderWidth: 1,
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
      source={accountCardColorsToPaths[account.color]}
    >
      <View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          flex: 1,
          borderRadius: 11,
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.8)",
          padding: 8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            {account.name}
          </Text>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            {transactions
              .filter((t) => t.accountId === account.id)
              .reduce((acc, curr) => acc + curr.amount, 0)}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 1,
            marginVertical: globalStyles.defaultSpacing,
            backgroundColor: "black",
          }}
        />
        <View>
          {transactions.slice(0, 6).map((transaction) => (
            <AccountCardTransaction
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};

export default AccountCard;
