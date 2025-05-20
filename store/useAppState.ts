import {
  deleteAccount,
  getAllAccounts,
  insertAccount,
  updateAccount,
} from "@/database/accounts";
import {
  deleteTransaction,
  getAllTransactions,
  insertTransaction,
  updateTransaction,
} from "@/database/transactions";
import { mockAccounts } from "@/mock/accounts";
import { mockTransactions } from "@/mock/transactions";
import { Account, Transaction } from "@/types/models";
import uuid from "react-native-uuid";
import { create } from "zustand";

type StoreState = {
  accounts: Account[];
  addAccount: (name: string) => void;
  getAccountById: (id: string) => Account | null;
  updateAccount: (account: Account) => void;
  deleteAccount: (id: string) => void;

  transactions: Transaction[];
  addTransaction: (
    accountId: string,
    amount: number,
    happenedAt: string,
    name: string,
    description: string
  ) => void;
  getTransactionById: (id: string) => Transaction | null;
  updateTransaction: (transaction: Transaction) => void;
  deleteTransaction: (id: string) => void;

  initStore: () => Promise<void>;
};

export const useAppState = create<StoreState>((set, get) => ({
  accounts: [],

  addAccount: (name: string) => {
    const account: Account = {
      id: uuid.v4(),
      name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      color: "blue-yellow", // TOOD: change default
    };

    insertAccount(account);

    set({ accounts: [...get().accounts, account] });
  },

  getAccountById(id) {
    return get().accounts.find((account) => account.id === id) ?? null;
  },

  updateAccount: (account: Account) => {
    const updatedAccount: Account = {
      ...account,
      updatedAt: new Date().toISOString(),
    };

    updateAccount(updatedAccount);

    set({
      accounts: get().accounts.map((a) =>
        a.id === account.id ? updatedAccount : a
      ),
    });
  },

  deleteAccount: (id: string) => {
    deleteAccount(id);

    const updatedAccounts = get().accounts.filter(
      (account) => account.id !== id
    );

    set({ accounts: updatedAccounts });
  },

  transactions: [],
  addTransaction: (
    accountId: string,
    amount: number,
    happenedAt: string,
    name: string,
    description: string
  ) => {
    const transaction: Transaction = {
      id: uuid.v4(),
      amount,
      accountId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      name,
      happenedAt,
      description,
    };

    insertTransaction(transaction);

    set({ transactions: [...get().transactions, transaction] });
  },

  getTransactionById: (id: string) => {
    return (
      get().transactions.find((transaction) => transaction.id === id) ?? null
    );
  },

  updateTransaction: (transaction: Transaction) => {
    const updatedTransaction: Transaction = {
      ...transaction,
      updatedAt: new Date().toISOString(),
    };

    updateTransaction(updatedTransaction);

    set({
      transactions: get().transactions.map((t) =>
        t.id === transaction.id ? updatedTransaction : t
      ),
    });
  },

  deleteTransaction: (id: string) => {
    deleteTransaction(id);

    const updatedTransactions = get().transactions.filter(
      (transaction) => transaction.id !== id
    );
    set({ transactions: updatedTransactions });
  },

  initStore: async () => {
    Promise.all([getAllAccounts(), getAllTransactions()])
      .then(([accounts, transactions]) => {
        const allAccounts = [...accounts, ...mockAccounts];
        const allTransactions = [...transactions, ...mockTransactions];

        set({ accounts: allAccounts, transactions: allTransactions });

        console.log("State is set. ");
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  },
}));
