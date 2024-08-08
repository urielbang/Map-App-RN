import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("places.db"); // Correct method to open the database

export function init() {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS PLACES (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          imageUrl TEXT NOT NULL,
          address TEXT NOT NULL,
          lat REAL NOT NULL,
          lng REAL NOT NULL
        );`,
        [],
        () => resolve(), // Success callback
        (_, error) => reject(error) // Error callback
      );
    });
  });
}
