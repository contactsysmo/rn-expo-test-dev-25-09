import { images } from "@/src/assets/images";
import { Image } from "expo-image";
import { Plus } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

export const DashboardHeader = () => {
  return (
    <View className="flex-row justify-between items-center px-4 py-2">
      <Image
        source={images.avatar}
        style={{ width: 40, height: 40, borderRadius: 20 }}
      />
      <View className="items-center">
        <Plus size={24} color="black" />
        <Text className="text-center text-xs">Add cart</Text>
      </View>
    </View>
  );
};
