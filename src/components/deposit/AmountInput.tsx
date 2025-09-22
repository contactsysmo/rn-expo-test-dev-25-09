import { ChevronDown } from "lucide-react-native";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export const AmountInput = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="flex-row gap-3 items-center">
        <View className="w-fit">
          <TextInput
            placeholder="1000"
            style={{
              fontSize: 40,
              fontWeight: "bold",
              textAlign: "right",
            }}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>
        <Text className="text-[40px] font-bold">USD</Text>
        <TouchableOpacity className="flex-row items-center gap-1">
          <Text className="text-xl">USD</Text>
          <ChevronDown size={12} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
