import { Transaction } from "@/src/types/transaction";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { TransactionItem } from "./TransactionItem";

export const LatestTransactions = () => {
  return (
    <View>
      <View className="flex-row items-center justify-between">
        <Text className="text-lg font-semibold mb-4">Latest Transactions</Text>
        <TouchableOpacity>
          <Text className="text-lg font-semibold mb-4">See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 24 }}
      >
        {mockTransactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ScrollView>
    </View>
  );
};

const mockTransactions: Transaction[] = [
  {
    id: "txn_001",
    date: "2025-09-22T14:30:00Z",
    description: "Card Transfer",
    amount: -100.0,
    cardNumber: "1234 5678 9012 3512",
  },
  {
    id: "txn_002",
    date: "2025-09-21T09:15:00Z",
    description: "Salary Deposit",
    amount: 4500.0,
    cardNumber: "1234 5678 9012 3512",
  },
  {
    id: "txn_003",
    date: "2025-09-21T16:45:00Z",
    description: "Grocery Store",
    amount: -85.5,
    cardNumber: "1234 5678 9012 3512",
  },
  {
    id: "txn_004",
    date: "2025-09-20T12:20:00Z",
    description: "Coffee Shop",
    amount: -12.75,
    cardNumber: "1234 5678 9012 3512",
  },
  {
    id: "txn_005",
    date: "2025-09-19T18:00:00Z",
    description: "Online Transfer",
    amount: 250.0,
    cardNumber: "1234 5678 9012 3512",
  },
  {
    id: "txn_006",
    date: "2025-09-19T10:30:00Z",
    description: "Gas Station",
    amount: -65.4,
    cardNumber: "1234 5678 9012 3512",
  },
  {
    id: "txn_007",
    date: "2025-09-18T15:22:00Z",
    description: "Restaurant",
    amount: -95.2,
    cardNumber: "1234 5678 9012 3512",
  },
  {
    id: "txn_008",
    date: "2025-09-17T11:45:00Z",
    description: "ATM Withdrawal",
    amount: -200.0,
    cardNumber: "1234 5678 9012 3512",
  },
  {
    id: "txn_009",
    date: "2025-09-16T08:30:00Z",
    description: "Investment Return",
    amount: 320.75,
    cardNumber: "1234 5678 9012 3512",
  },
  {
    id: "txn_010",
    date: "2025-09-15T13:15:00Z",
    description: "Subscription Fee",
    amount: -19.99,
    cardNumber: "1234 5678 9012 3512",
  },
];
