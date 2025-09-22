import { images } from "@/src/assets/images";
import { CreditCardDetails } from "@/src/types/creditCard";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Copy } from "lucide-react-native";
import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

interface CardWidgetProps {
  card: CreditCardDetails;
}

export const CardWidget = ({ card }: CardWidgetProps) => {
  const [showBalance, setShowBalance] = React.useState(false);

  return (
    <TouchableOpacity
      onPress={() => setShowBalance(!showBalance)}
      className="w-full shadow-lg aspect-[1.75]"
      activeOpacity={0.7}
    >
      <LinearGradient
        colors={card.colors}
        start={{ x: 0, y: 1 }}
        style={{
          borderRadius: 16,
          padding: 20,
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <View className="flex-row justify-between items-start">
          <Text>{`Card ** ${card.cardNumber.slice(-4)}`}</Text>
          <Image
            source={images.s_card_image}
            style={{ width: 70, height: 96 }}
          />
        </View>

        {showBalance ? (
          <View className="gap-1">
            <Text className="text-xl font-extrabold">
              {card.cardBalance} PLN
            </Text>
            <Text className="text-sm">Card balance</Text>
          </View>
        ) : (
          <View>
            <View className="mb-5 gap-2">
              <Text className="text-sm">Card number</Text>
              <View className="flex-row items-center gap-3">
                <Text className="font-extrabold">{card.cardNumber}</Text>
                <Pressable>
                  <Copy size={16} color="black" />
                </Pressable>
              </View>
            </View>

            <View className="flex-row justify-between">
              <View className="flex-row gap-5">
                <View className="gap-2">
                  <Text className="text-sm">Expiry date</Text>
                  <View className="flex-row items-center gap-3">
                    <Text className="font-extrabold">{card.expiryDate}</Text>
                    <Pressable>
                      <Copy size={16} color="black" />
                    </Pressable>
                  </View>
                </View>
                <View className="gap-2">
                  <Text className="text-sm">CVV</Text>
                  <View className="flex-row items-center gap-3">
                    <Text className="font-extrabold">{card.cvv}</Text>
                    <Pressable>
                      <Copy size={16} color="black" />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};
