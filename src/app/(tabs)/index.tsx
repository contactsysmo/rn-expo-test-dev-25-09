import { CardWidget } from "@/src/components/dashboard/CardWidget";
import { DashboardHeader } from "@/src/components/dashboard/DashboardHeader";
import PaginatedCarousel from "@/src/components/ui/PaginatedCarousel";
import { ScreenWrapper } from "@/src/components/ui/ScreenWrapper";
import { CreditCardDetails } from "@/src/types/CreditCard";
import { useWindowDimensions } from "react-native";

export default function DashboardScreen() {
  const { width: screenWidth } = useWindowDimensions();

  return (
    <ScreenWrapper header={<DashboardHeader />} containerStyle={{ padding: 0 }}>
      <PaginatedCarousel
        data={CARDS}
        renderItem={({ item }) => <CardWidget card={item} />}
        itemWidth={screenWidth}
      />
    </ScreenWrapper>
  );
}

const CARDS: CreditCardDetails[] = [
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
