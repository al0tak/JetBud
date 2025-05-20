import * as SQLite from "expo-sqlite";

let db: SQLite.SQLiteDatabase | null = null;

export const getDatabase = async (): Promise<SQLite.SQLiteDatabase> => {
  if (db) return Promise.resolve(db);

  return SQLite.openDatabaseAsync("jet-bud.db")
    .then((database) => {
      db = database;
      return db;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};
