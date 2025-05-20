import { initAndMigrateDb } from "@/database/schema";
import { useAppState } from "@/store/useAppState";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView } from "react-native";

export default function RootLayout() {
  const initStore = useAppState(({ initStore }) => initStore);

  useEffect(() => {
    initAndMigrateDb();
    initStore();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}
