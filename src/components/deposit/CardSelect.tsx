import { images } from "@/src/assets/images";
import { Image } from "expo-image";
import { ChevronRight } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const CardSelect = () => {
  return (
    <View className="gap-1">
      <Text>Select card to deposit</Text>
      <TouchableOpacity
        className="px-4 py-3 border border-[#CDCDCD] rounded-[8px] flex-row justify-between items-center gap-2"
        activeOpacity={0.7}
      >
        <View className="flex-row items-center gap-3">
          <Image
            source={images.cardPreview}
            style={{ width: 40, height: 26 }}
          />
          <View>
            <Text className="text-base font-medium">Classic Card</Text>
            <Text className="text-sm mt-1">** 3512</Text>
          </View>
        </View>
        <ChevronRight size={20} />
      </TouchableOpacity>
    </View>
  );
};
