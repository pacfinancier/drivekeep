export interface DeliveryDetails {
  date: Date | null;
  time: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  instructions: string;
}