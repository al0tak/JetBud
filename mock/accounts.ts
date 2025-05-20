import { Account } from "@/types/models";

export const mockAccounts: Account[] = [
  {
    id: "1",
    name: "Personal",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    color: "green",
  },
  {
    id: "2",
    name: "Work",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    color: "cyan-pink",
  },
  {
    id: "3",
    name: "Savings",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    color: "orange-cyan-magenta",
  },
  {
    id: "4",
    name: "Vacations",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    color: "white-grey",
  },
  {
    id: "5",
    name: "Studying",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    color: "blue-yellow",
  },
];
