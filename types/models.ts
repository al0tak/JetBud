import { AccountCardColor } from "@/globals";

export interface Account {
  id: string;
  name: string;
  createdAt: string; // timestamp
  updatedAt: string; // timestamp
  color: AccountCardColor;
}

export interface Transaction {
  id: string;
  name: string;
  accountId: string;
  description: string;
  amount: number;
  happenedAt: string; // timestamp
  createdAt: string; // timestamp
  updatedAt: string; // timestamp
}
