import { router } from "expo-router";
import { Check, SquareArrowOutUpRight } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { DepositDetailsRow } from "../components/deposit/DepositDetailsRow";
import AppButton from "../components/ui/AppButton";
import { ScreenWrapper } from "../components/ui/ScreenWrapper";

export default function DepositSuccessScreen() {
  return (
    <ScreenWrapper bottomSafeAreaVisible>
      <View className="flex-1 justify-between gap-4">
        <View className="flex-1 justify-center items-center gap-7">
          <View className="w-[100px] h-[100px] rounded-full bg-accent-500 items-center justify-center">
            <Check size={50} strokeWidth={4} />
          </View>
          <Text className="text-xl font-extrabold text-center">
            CARD DEPOSIT SUCCESS
          </Text>
          <View className="rounded-[12px] border border-[#CDCDCD] p-4 w-full gap-5">
            <DepositDetailsRow label="Deposit amount" value="1000 USD" />
            <DepositDetailsRow label="Card deposit no." value="** 3512" />
            <DepositDetailsRow label="Deposit method" value="Crypto" />
            <View className="bg-[#CDCDCD] h-[1px]" />
            <DepositDetailsRow
              label="Transaction confirmation"
              value="0xad...225e"
              rightElement={
                <TouchableOpacity hitSlop={10}>
                  <SquareArrowOutUpRight size={16} strokeWidth={3} />
                </TouchableOpacity>
              }
            />
          </View>
        </View>
        <AppButton onPress={router.back}>Done</AppButton>
      </View>
    </ScreenWrapper>
  );
}
