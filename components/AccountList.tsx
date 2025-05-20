import { Account } from "@/types/models";
import React from "react";
import { View } from "react-native";
import AccountListItem from "./AccountListItem";

interface AccountListProps {
  accounts: Account[];
}

const AccountList = ({ accounts }: AccountListProps) => {
  return (
    <View>
      {accounts.map((account) => (
        <AccountListItem key={account.id} account={account} />
      ))}
    </View>
  );
};

export default AccountList;
