import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

interface BackHeaderProps {
  title?: string;
}

export const BackHeader = ({ title }: BackHeaderProps) => {
  return (
    <View className="px-4 py-2 flex-row">
      <View className="z-10">
        <ChevronLeft size={24} color="#000" onPress={router.back} />
      </View>
      {title && (
        <View className="absolute w-full items-center justify-center self-center ml-4">
          <Text className="font-bold text-center text-xl" numberOfLines={2}>
            {title.toLocaleUpperCase()}
          </Text>
        </View>
      )}
    </View>
  );
};
