import { router } from "expo-router";
import { View } from "react-native";
import { AmountInput } from "../components/deposit/AmountInput";
import { CardSelect } from "../components/deposit/CardSelect";
import AppButton from "../components/ui/AppButton";
import { BackHeader } from "../components/ui/BackHeader";
import { ScreenWrapper } from "../components/ui/ScreenWrapper";

export default function DepositCardScreen() {
  return (
    <ScreenWrapper
      header={<BackHeader title="Deposit Card" />}
      bottomSafeAreaVisible
    >
      <View className="flex-1 justify-between gap-4">
        <AmountInput />
        <View className="gap-10">
          <CardSelect />
          <AppButton onPress={() => router.replace("/deposit-success")}>
            Deposit
          </AppButton>
        </View>
      </View>
    </ScreenWrapper>
  );
}
