import { ImageSourcePropType } from "react-native";

export const accountCardWidth = 300;
export const accountCardHeight = 190;

export type AccountCardColor =
  | "green"
  | "blue-yellow"
  | "cyan-pink"
  | "orange-cyan-magenta"
  | "white-grey";

export const accountCardColorsToPaths: Record<
  AccountCardColor,
  ImageSourcePropType
> = {
  green: require("./assets/images/accountCardBackgrounds/green.png"),
  "blue-yellow": require("./assets/images/accountCardBackgrounds/blue-yellow.png"),
  "cyan-pink": require("./assets/images/accountCardBackgrounds/cyan-pink.png"),
  "orange-cyan-magenta": require("./assets/images/accountCardBackgrounds/orange-cyan-magenta.png"),
  "white-grey": require("./assets/images/accountCardBackgrounds/white-grey.png"),
};

export const globalStyles = {
  defaultSpacing: 12,
  defaultSpacingWide: 24,
};
