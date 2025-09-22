import { CardWidget } from "@/src/components/dashboard/CardWidget";
import { DashboardHeader } from "@/src/components/dashboard/DashboardHeader";
import { LatestTransactions } from "@/src/components/dashboard/LatestTransactions";
import AppButton from "@/src/components/ui/AppButton";
import PaginatedCarousel from "@/src/components/ui/PaginatedCarousel";
import { ScreenWrapper } from "@/src/components/ui/ScreenWrapper";
import { CreditCardDetails } from "@/src/types/creditCard";
import { Plus, Settings } from "lucide-react-native";
import { Text, useWindowDimensions, View } from "react-native";

export default function DashboardScreen() {
  const { width: screenWidth } = useWindowDimensions();

  return (
    <ScreenWrapper header={<DashboardHeader />} containerStyle={{ padding: 0 }}>
      <PaginatedCarousel
        data={mockCards}
        renderItem={({ item }) => <CardWidget card={item} />}
        itemWidth={screenWidth}
      />
      <View className="p-4 border-b border-b-[#CDCDCD]">
        <View className="flex-row gap-2">
          <AppButton className="flex-1" icon={<Plus color="white" size={20} />}>
            <Text>Deposit card</Text>
          </AppButton>
          <AppButton
            className="flex-1"
            icon={<Settings color="white" size={18} />}
          >
            <Text>Card settings</Text>
          </AppButton>
        </View>
      </View>
      <View className="p-4">
        <LatestTransactions />
      </View>
    </ScreenWrapper>
  );
}

const mockCards: CreditCardDetails[] = [
  {
    id: "1",
    cardholderName: "John Doe",
    cardNumber: "1234 5678 9012 3456",
    expiryDate: "10/25",
    cvv: "123",
    cardBalance: 1234.56,
    colors: ["#C9FF08", "#C9FF08"],
  },
  {
    id: "21",
    cardholderName: "John Doe",
    cardNumber: "1234 5678 9012 3456",
    expiryDate: "11/24",
    cvv: "456",
    cardBalance: 2500.75,
    colors: ["#DBDFDF", "#A5A9AA"],
  },
  {
    id: "3",
    cardholderName: "Jane Smith",
    cardNumber: "9876 5432 1098 7654",
    expiryDate: "12/23",
    cvv: "789",
    cardBalance: 4200.0,
    colors: ["#EDDBB4", "#BAA77E"],
  },
];
