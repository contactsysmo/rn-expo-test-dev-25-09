import React from "react";
import { Text, View } from "react-native";

interface DepositDetailsRowProps {
  label: string;
  value: string;
  rightElement?: React.ReactNode;
}

export const DepositDetailsRow = ({
  label,
  value,
  rightElement,
}: DepositDetailsRowProps) => {
  return (
    <View className="flex-row justify-between gap-3">
      <Text>{label}</Text>
      <View className="flex-row gap-2">
        <Text className="font-extrabold">{value}</Text>
        {rightElement}
      </View>
    </View>
  );
};
