import { Transaction } from "@/src/types/transaction";
import { ArrowDown, ArrowUp } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

interface TransactionItemProps {
  transaction: Transaction;
}

export const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const formatAmount = (amount: number) => {
    const formattedAmount = Math.abs(amount).toFixed(2);
    const sign = amount < 0 ? "-" : "+";
    return `${sign}${formattedAmount} PLN`;
  };

  const formatCardNumber = (cardNumber: string) => {
    return `** ${cardNumber.slice(-4)}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const day = date.getDate();
    const time = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return `${month} ${day}, ${time}`;
  };

  const isNegative = transaction.amount < 0;

  return (
    <View className="flex-row items-center justify-between">
      <View className="w-[40px] h-[40px] rounded-full bg-gray-100 items-center justify-center mr-3">
        {isNegative ? (
          <ArrowUp size={22} color="#272742" />
        ) : (
          <ArrowDown size={22} color="#272742" />
        )}
      </View>

      <View className="flex-1">
        <Text className="text-[#272742] font-medium text-base">
          {transaction.description}
        </Text>
        <Text className="text-[#272742] text-sm mt-1">
          {`${formatCardNumber(transaction.cardNumber)} • ${formatDate(transaction.date)}`}
        </Text>
      </View>

      <Text
        className={`font-semibold text-base ${
          isNegative ? "text-[#272742]" : "text-green-600"
        }`}
      >
        {formatAmount(transaction.amount)}
      </Text>
    </View>
  );
};
