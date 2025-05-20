import { getDatabase } from "./db";
import { Transaction } from "../types/models";

export const insertTransaction = (transaction: Transaction): void => {
  getDatabase()
    .then((db) =>
      db.runAsync(
        `
      INSERT INTO transactions (id, name, accountId, description, amount, happenedAt, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `,
        [
          transaction.id,
          transaction.name,
          transaction.accountId,
          transaction.description,
          transaction.amount,
          transaction.happenedAt,
          transaction.createdAt,
          transaction.updatedAt,
        ]
      )
    )
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

export const updateTransaction = (transaction: Transaction): void => {
  getDatabase()
    .then((db) =>
      db.runAsync(
        `
      UPDATE transactions SET name = ?, accountId = ?, description = ?, amount = ?, happenedAt = ?, updatedAt = ? WHERE id = ?;
    `,
        [
          transaction.name,
          transaction.accountId,
          transaction.description,
          transaction.amount,
          transaction.happenedAt,
          transaction.updatedAt,
          transaction.id,
        ]
      )
    )
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

export const deleteTransaction = (id: string): void => {
  getDatabase()
    .then((db) =>
      db.runAsync(
        `
      DELETE FROM transactions WHERE id = ?;
    `,
        [id]
      )
    )
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

export const getTransactionById = (id: string): Promise<Transaction | null> => {
  return getDatabase()
    .then((db) =>
      db.getFirstAsync<Transaction>(
        `
      SELECT * FROM transactions WHERE id = ?;
    `,
        [id]
      )
    )
    .then((transaction) => {
      if (!transaction) return null;
      return transaction;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

export const getAllTransactions = (): Promise<Transaction[]> => {
  return getDatabase()
    .then((db) =>
      db.getAllAsync<Transaction>(
        `
      SELECT * FROM transactions;
    `
      )
    )
    .then((transactions) => {
      return transactions;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};
