import { useCallback, useMemo, useState } from "@lynx-js/react";
import "./App.css";

// --- Theme tokens (runtime-swappable via CSS variables) ---
const themes = {
  dark: {
    "--color-background": "rgba(9, 9, 11, 1)",
    "--color-card": "rgba(24, 24, 27, 1)",
    "--color-card-foreground": "rgba(250, 250, 250, 1)",
    "--color-primary": "rgba(255, 100, 72, 1)",
    "--color-primary-foreground": "rgba(255, 255, 255, 1)",
    "--color-secondary": "rgba(39, 39, 42, 1)",
    "--color-secondary-foreground": "rgba(250, 250, 250, 1)",
    "--color-destructive": "rgba(239, 68, 68, 1)",
    "--color-destructive-foreground": "rgba(255, 255, 255, 1)",
    "--color-success": "rgba(34, 197, 94, 1)",
    "--color-success-foreground": "rgba(255, 255, 255, 1)",
    "--color-muted": "rgba(39, 39, 42, 1)",
    "--color-muted-foreground": "rgba(161, 161, 170, 1)",
    "--color-border": "rgba(63, 63, 70, 1)",
  },
  light: {
    "--color-background": "rgba(255, 255, 255, 1)",
    "--color-card": "rgba(255, 255, 255, 1)",
    "--color-card-foreground": "rgba(9, 9, 11, 1)",
    "--color-primary": "rgba(234, 88, 12, 1)",
    "--color-primary-foreground": "rgba(255, 255, 255, 1)",
    "--color-secondary": "rgba(244, 244, 245, 1)",
    "--color-secondary-foreground": "rgba(24, 24, 27, 1)",
    "--color-destructive": "rgba(220, 38, 38, 1)",
    "--color-destructive-foreground": "rgba(255, 255, 255, 1)",
    "--color-success": "rgba(22, 163, 74, 1)",
    "--color-success-foreground": "rgba(255, 255, 255, 1)",
    "--color-muted": "rgba(244, 244, 245, 1)",
    "--color-muted-foreground": "rgba(113, 113, 122, 1)",
    "--color-border": "rgba(228, 228, 231, 1)",
  },
  ocean: {
    "--color-background": "rgba(15, 23, 42, 1)",
    "--color-card": "rgba(30, 41, 59, 1)",
    "--color-card-foreground": "rgba(226, 232, 240, 1)",
    "--color-primary": "rgba(56, 189, 248, 1)",
    "--color-primary-foreground": "rgba(2, 6, 23, 1)",
    "--color-secondary": "rgba(51, 65, 85, 1)",
    "--color-secondary-foreground": "rgba(226, 232, 240, 1)",
    "--color-destructive": "rgba(244, 63, 94, 1)",
    "--color-destructive-foreground": "rgba(255, 255, 255, 1)",
    "--color-success": "rgba(52, 211, 153, 1)",
    "--color-success-foreground": "rgba(2, 6, 23, 1)",
    "--color-muted": "rgba(51, 65, 85, 1)",
    "--color-muted-foreground": "rgba(148, 163, 184, 1)",
    "--color-border": "rgba(71, 85, 105, 1)",
  },
} as const;

type ThemeName = keyof typeof themes;
const themeNames: ThemeName[] = ["dark", "light", "ocean"];

export function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>("dark");
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [plan, setPlan] = useState<"free" | "pro">("pro");

  const name = "Hux";
  const email = "hux@example.com";

  const themeStyle = useMemo(
    () =>
      Object.entries(themes[currentTheme])
        .map(([k, v]) => `${k}:${v}`)
        .join(";"),
    [currentTheme],
  );

  const togglePush = useCallback(() => {
    "background-only";
    setPushEnabled((v) => !v);
  }, []);

  const toggleEmail = useCallback(() => {
    "background-only";
    setEmailEnabled((v) => !v);
  }, []);

  const upgradePlan = useCallback(() => {
    "background-only";
    setPlan((v) => (v === "free" ? "pro" : "free"));
  }, []);

  const planBadgeClass = plan === "pro"
    ? "bg-primary text-primary-foreground"
    : "bg-secondary text-secondary-foreground";

  return (
    <scroll-view
      className="w-full h-full bg-background"
      scroll-orientation="vertical"
      style={themeStyle}
    >
      <view className="p-6 flex flex-col gap-6">
        {/* Header */}
        <view className="flex flex-col gap-1">
          <text className="text-foreground text-2xl font-bold">Settings</text>
          <text className="text-muted-foreground text-sm">
            Manage your account and preferences.
          </text>
          <text className="text-muted-foreground text-xs mt-1">
            Requires Lynx SDK 3.6+
          </text>
        </view>

        {/* Card: Theme Switcher */}
        <view className="bg-card rounded-lg border border-border flex flex-col">
          <view className="p-4 pb-0 flex flex-col gap-1">
            <text className="text-card-foreground text-lg font-semibold">
              Theme
            </text>
            <text className="text-muted-foreground text-sm">
              Switch design tokens at runtime via CSS variables.
            </text>
          </view>

          <view className="p-4 flex flex-row gap-2">
            {themeNames.map((t) => (
              <view
                key={t}
                className={`flex-1 rounded-md py-2 items-center justify-center border ${
                  currentTheme === t
                    ? "bg-primary border-primary"
                    : "bg-secondary border-border"
                }`}
                bindtap={() => setCurrentTheme(t)}
              >
                <text
                  className={`text-sm font-medium ${
                    currentTheme === t
                      ? "text-primary-foreground"
                      : "text-secondary-foreground"
                  }`}
                >
                  {t[0].toUpperCase() + t.slice(1)}
                </text>
              </view>
            ))}
          </view>
        </view>

        {/* Card: Profile */}
        <view className="bg-card rounded-lg border border-border flex flex-col">
          <view className="p-4 pb-0 flex flex-col gap-1">
            <text className="text-card-foreground text-lg font-semibold">
              Profile
            </text>
            <text className="text-muted-foreground text-sm">
              Your public profile information.
            </text>
          </view>

          <view className="p-4 flex flex-col gap-4">
            {/* Avatar + Name row */}
            <view className="flex flex-row items-center gap-3">
              <view className="w-10 h-10 rounded-full bg-primary items-center justify-center">
                <text className="text-primary-foreground text-lg font-semibold">
                  H
                </text>
              </view>
              <view className="flex flex-col">
                <text className="text-card-foreground text-base font-medium">
                  {name}
                </text>
                <text className="text-muted-foreground text-sm">{email}</text>
              </view>
              <view className="ml-auto">
                <view className={`rounded-full px-2.5 py-0.5 ${planBadgeClass}`}>
                  <text className="text-xs font-medium">
                    {plan.toUpperCase()}
                  </text>
                </view>
              </view>
            </view>

            <view className="h-px bg-border" />

            {/* Input: Name */}
            <view className="flex flex-col gap-1.5">
              <text className="text-card-foreground text-sm font-medium">
                Display Name
              </text>
              <view className="bg-secondary rounded-md border border-border px-3 py-2">
                <text className="text-secondary-foreground text-sm">{name}</text>
              </view>
            </view>

            {/* Input: Email */}
            <view className="flex flex-col gap-1.5">
              <text className="text-card-foreground text-sm font-medium">
                Email
              </text>
              <view className="bg-secondary rounded-md border border-border px-3 py-2">
                <text className="text-secondary-foreground text-sm">
                  {email}
                </text>
              </view>
            </view>
          </view>

          <view className="p-4 pt-0 flex flex-row gap-2">
            <view
              className="bg-primary rounded-md py-2 px-4 items-center justify-center"
              bindtap={upgradePlan}
            >
              <text className="text-primary-foreground text-sm font-medium">
                {plan === "pro" ? "Downgrade" : "Upgrade to Pro"}
              </text>
            </view>
          </view>
        </view>

        {/* Card: Notifications */}
        <view className="bg-card rounded-lg border border-border flex flex-col">
          <view className="p-4 pb-0 flex flex-col gap-1">
            <text className="text-card-foreground text-lg font-semibold">
              Notifications
            </text>
            <text className="text-muted-foreground text-sm">
              Choose how you want to be notified.
            </text>
          </view>

          <view className="p-4 flex flex-col gap-3">
            {/* Switch row: Push */}
            <view
              className="flex flex-row items-center justify-between"
              bindtap={togglePush}
            >
              <view className="flex flex-col">
                <text className="text-card-foreground text-sm font-medium">
                  Push Notifications
                </text>
                <text className="text-muted-foreground text-xs">
                  Receive push notifications on your device.
                </text>
              </view>
              <view
                className={`w-10 h-6 rounded-full p-0.5 ${pushEnabled ? "bg-primary" : "bg-secondary"}`}
              >
                <view
                  className={`w-5 h-5 rounded-full bg-white ${pushEnabled ? "ml-4" : "ml-0"}`}
                />
              </view>
            </view>

            <view className="h-px bg-border" />

            {/* Switch row: Email */}
            <view
              className="flex flex-row items-center justify-between"
              bindtap={toggleEmail}
            >
              <view className="flex flex-col">
                <text className="text-card-foreground text-sm font-medium">
                  Email Notifications
                </text>
                <text className="text-muted-foreground text-xs">
                  Receive email digests and updates.
                </text>
              </view>
              <view
                className={`w-10 h-6 rounded-full p-0.5 ${emailEnabled ? "bg-primary" : "bg-secondary"}`}
              >
                <view
                  className={`w-5 h-5 rounded-full bg-white ${emailEnabled ? "ml-4" : "ml-0"}`}
                />
              </view>
            </view>
          </view>
        </view>

        {/* Card: Danger Zone */}
        <view className="bg-card rounded-lg border border-destructive flex flex-col">
          <view className="p-4 pb-0 flex flex-col gap-1">
            <text className="text-destructive text-lg font-semibold">
              Danger Zone
            </text>
            <text className="text-muted-foreground text-sm">
              Irreversible and destructive actions.
            </text>
          </view>

          <view className="p-4 flex flex-row gap-2">
            <view className="bg-destructive rounded-md py-2 px-4 items-center justify-center">
              <text className="text-destructive-foreground text-sm font-medium">
                Delete Account
              </text>
            </view>
            <view className="bg-secondary rounded-md py-2 px-4 items-center justify-center border border-border">
              <text className="text-secondary-foreground text-sm font-medium">
                Cancel
              </text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  );
}
