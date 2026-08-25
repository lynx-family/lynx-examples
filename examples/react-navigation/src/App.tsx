import { useState } from "@lynx-js/react";
import {
  createStaticNavigation,
  type StaticScreenProps,
  useNavigation,
  usePreventRemove,
} from "@react-navigation/lynx";
import { createLynxStackNavigator } from "@react-navigation/lynx/stack";

function Screen(
  { title, children }: { title: string; children?: React.ReactNode },
) {
  return (
    <view style={{ flex: 1, padding: "24px", backgroundColor: "#ffffff" }}>
      <text style={{ fontSize: "28px", fontWeight: "bold" }}>{title}</text>
      {children}
    </view>
  );
}

function Button({ label, onTap }: { label: string; onTap: () => void }) {
  return (
    <view
      bindtap={onTap}
      style={{
        marginTop: "16px",
        padding: "14px",
        borderRadius: "10px",
        backgroundColor: "#2f6fed",
      }}
    >
      <text style={{ color: "#ffffff", textAlign: "center" }}>{label}</text>
    </view>
  );
}

function HomeScreen() {
  const navigation = useNavigation("Home");

  return (
    <Screen title="Home">
      <Button
        label="Push a details screen"
        onTap={() => navigation.navigate("Details", { title: "From Home" })}
      />
      <Button
        label="Push a screen that resists going back"
        onTap={() => navigation.navigate("Draft")}
      />
    </Screen>
  );
}

function DetailsScreen({ route }: StaticScreenProps<{ title: string }>) {
  const navigation = useNavigation("Details");

  return (
    <Screen title="Details">
      <text style={{ marginTop: "8px", color: "#5a5a5a" }}>
        {route.params.title}
      </text>
      <Button label="Go back" onTap={() => navigation.goBack()} />
      <Button
        label="Back to the first screen"
        onTap={() => navigation.popToTop()}
      />
    </Screen>
  );
}

function DraftScreen() {
  const navigation = useNavigation("Draft");
  const [unsaved, setUnsaved] = useState(true);

  usePreventRemove(unsaved, () => {});

  return (
    <Screen title="Draft">
      <text style={{ marginTop: "8px", color: "#5a5a5a" }}>
        {unsaved
          ? "Unsaved. The system back gesture is blocked."
          : "Saved. Going back works again."}
      </text>
      <Button label="Save" onTap={() => setUnsaved(false)} />
      <Button label="Go back" onTap={() => navigation.goBack()} />
    </Screen>
  );
}

const Stack = createLynxStackNavigator({
  initialRouteName: "Home",
  screens: {
    Home: HomeScreen,
    Details: DetailsScreen,
    Draft: DraftScreen,
  },
});

type RootStackType = typeof Stack;

declare module "@react-navigation/lynx" {
  interface RootNavigator extends RootStackType {}
}

const Navigation = createStaticNavigation(Stack);

export function App() {
  return (
    <page style={{ display: "flex", width: "100%", height: "100%" }}>
      <Navigation />
    </page>
  );
}
