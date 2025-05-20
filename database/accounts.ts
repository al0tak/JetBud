import { getDatabase } from "./db";
import { Account } from "../types/models";

export const insertAccount = (account: Account): void => {
  getDatabase()
    .then((db) =>
      db.runAsync(
        `
    INSERT INTO accounts (id, name, createdAt, updatedAt, color) VALUES (?, ?, ?, ?);
    `,
        [
          account.id,
          account.name,
          account.createdAt,
          account.updatedAt,
          account.color,
        ]
      )
    )
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

export const updateAccount = (account: Account): void => {
  getDatabase()
    .then((db) =>
      db.runAsync(
        `
    UPDATE accounts SET name = ?, updatedAt = ?, color = ? WHERE id = ?;
    `,
        [account.name, account.updatedAt, account.id, account.color]
      )
    )
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

// Also deletes transactions with account's id
export const deleteAccount = (id: string): void => {
  getDatabase()
    .then((db) => {
      db.runAsync(
        `
    DELETE FROM accounts WHERE id = ?;
    `,
        [id]
      );
      return db;
    })
    .then((db) =>
      db.runAsync(`DELETE FROM transactions WHERE accountId = ?;`, [id])
    )
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

export const getAccountById = (id: string): Promise<Account | null> => {
  return getDatabase()
    .then((db) =>
      db.getFirstAsync<Account>(
        `
    SELECT * FROM accounts WHERE id = ?;
    `,
        [id]
      )
    )
    .then((account) => {
      if (!account) return null;
      return account;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

export const getAllAccounts = (): Promise<Account[]> => {
  return getDatabase()
    .then((db) =>
      db.getAllAsync<Account>(
        `
    SELECT * FROM accounts;
    `
      )
    )
    .then((accounts) => {
      return accounts;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};
