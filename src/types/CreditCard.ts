export interface CreditCard {
  id: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
}

export interface CreditCardDetails extends CreditCard {
  cardBalance: number;
  colors: [string, string];
}
