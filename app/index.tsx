import AccountCardListBlock from "@/components/AccountCardListBlock";
import JetBudLogo from "@/components/JetBudLogo";
import ScreenBackground from "@/components/ScreenBackground";
import { globalStyles } from "@/globals";
import { SettingsIcon } from "lucide-react-native";
import { Pressable, View } from "react-native";

export default function Index() {
  return (
    <ScreenBackground>
      <View
        style={{
          padding: globalStyles.defaultSpacing,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <JetBudLogo />
        <Pressable onPress={() => alert("Hello!")}>
          <SettingsIcon size={34} stroke="black" />
        </Pressable>
      </View>

      <AccountCardListBlock />
    </ScreenBackground>
  );
}
