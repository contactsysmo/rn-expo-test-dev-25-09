import { Tabs } from "expo-router";
import { House, UserPlus } from "lucide-react-native";
import React from "react";

import { HapticTab } from "@/src/components/haptic-tab";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#CDCDCD",
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => <House size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="referral"
        options={{
          title: "Referral",
          tabBarIcon: ({ color }) => <UserPlus size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
