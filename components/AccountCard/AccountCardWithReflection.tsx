import { accountCardHeight } from "@/globals";
import { Account, Transaction } from "@/types/models";
import { Link } from "expo-router";
import React, { useRef } from "react";
import { Animated, Easing, Pressable, View } from "react-native";
import AccountCard from "./AccountCard";

interface AccountCardWithReflectionProps {
  account: Account;
  transactions: Transaction[];
}

const AccountCardWithReflection = ({
  account,
  transactions,
}: AccountCardWithReflectionProps) => {
  const animation = useRef(new Animated.Value(0)).current;

  const onCardPress = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };

  const onCardRelease = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Link
      href={{
        pathname: "/accounts/[accountId]",
        params: { accountId: account.id },
      }}
      asChild
    >
      <Pressable
        onTouchStart={onCardPress}
        onTouchEnd={onCardRelease}
        onTouchCancel={onCardRelease}
      >
        <Animated.View
          style={{
            opacity: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0.1],
            }),
          }}
        >
          <AccountCard
            account={account}
            transactions={transactions.filter(
              (transaction) => transaction.accountId === account.id
            )}
          />
          <View
            style={{
              transform: [
                { rotateX: "240deg" },
                { scaleX: 1.06 },
                { translateY: 101 },
              ],

              opacity: 0.4,

              position: "absolute",
              top: accountCardHeight,
            }}
          >
            <View style={{ opacity: 0.4 }}>
              <AccountCard
                account={account}
                transactions={transactions.filter(
                  (transaction) => transaction.accountId === account.id
                )}
              />
            </View>
          </View>
        </Animated.View>
      </Pressable>
    </Link>
  );
};

export default AccountCardWithReflection;
