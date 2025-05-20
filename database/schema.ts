import { getDatabase } from "./db";

export const initDatabase = (): Promise<void> => {
  return getDatabase().then((db) => {
    db.execAsync(
      `
      CREATE TABLE IF NOT EXISTS accounts (
        id TEXT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS transactions (
        id TEXT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        accountId TEXT NOT NULL,
        description TEXT NOT NULL,
        amount REAL NOT NULL,
        happenedAt TEXT NOT NULL,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
      );
    `
    )
      .then(() => console.log("Database is initialized."))
      .catch((err) => {
        console.error(err);
        throw err;
      });
  });
};

export const initAndMigrateDb = async (): Promise<void> => {
  try {
    const db = await getDatabase();
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS accounts (
        id TEXT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS transactions (
        id TEXT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        accountId TEXT NOT NULL,
        description TEXT NOT NULL,
        amount REAL NOT NULL,
        happenedAt TEXT NOT NULL,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
      );
    `);
    await db.execAsync(
      `CREATE TABLE IF NOT EXISTS meta (key TEXT PRIMARY KEY NOT NULL, value TEXT);`
    );

    let currentVersion =
      (
        await db.getFirstAsync<{ value: string }>(
          `SELECT value FROM meta WHERE key = 'schemaVersion';`
        )
      )?.value ?? "1";

    if (currentVersion === "1") {
      console.log("DB version is 1, migrating...");
      await db.execAsync(
        `INSERT OR REPLACE INTO meta (key, value) VALUES ('schemaVersion', '2');`
      );

      currentVersion = "2";
    }

    if (currentVersion === "2") {
      console.log("DB version is 2, migrating...");
      await db.execAsync(
        `ALTER TABLE accounts ADD COLUMN color TEXT NOT NULL DEFAULT "";`
      );
      await db.execAsync(
        `UPDATE meta SET value = '3' WHERE key = 'schemaVersion';`
      );

      currentVersion = "3";
    }

    console.log("DB initialized and migrated to version", currentVersion);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
