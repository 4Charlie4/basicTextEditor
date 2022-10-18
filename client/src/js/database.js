import { openDB } from 'idb';

const initdb = async () =>
  openDB('tbte', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('tbte')) {
        console.log('tbte database already exists');
        return;
      }
      db.createObjectStore('tbte', { keyPath: 'id', autoIncrement: true });
      console.log('tbte database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('putDb not implemented');

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
