import { openDB } from "idb";

const initdb = async () =>
  openDB("tbte", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("tbte")) {
        console.log("tbte database already exists");
        return;
      }
      db.createObjectStore("tbte", { keyPath: "id", autoIncrement: true });
      console.log("tbte database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("Update Database");

  const textDb = await openDB("tbte", 1);

  const tx = textDb.transaction("tbte", "readwrite");

  const store = tx.objectStore("tbte");

  const request = store.put({ content: content });

  const result = await request;
  console.log("Text saved to database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GETALL From database");

  const textDb = await openDB("tbte", 1);

  const tx = textDb.transaction("tbte", "readonly");

  const store = tx.objectStore("tbte");

  const request = store.getAll();

  const result = await request;
  console.log("result: ", result);
};

initdb();
