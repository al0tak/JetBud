import { Account } from "@/types/models";
import React from "react";
import { Text, View } from "react-native";

interface AccountListItemProps {
  account: Account;
}

const AccountListItem = ({ account }: AccountListItemProps) => {
  return (
    <View>
      <Text>{account.name}</Text>
    </View>
  );
};

export default AccountListItem;
