import { ref, push, get, set, remove } from "firebase/database";
import firebaseObjects from "../firebase.js";

// Initialize Realtime Database
const db = firebaseObjects.database;

const ComicsService = {
  // Create a new comic entry
  createComic: async (publisher, comicData) => {
    try {
      await push(ref(db, `comics/${publisher}`), comicData);
      return true;
    } catch (error) {
      console.error("Error creating comic:", error);
      return false;
    }
  },

  // Read all comics for a specific publisher
  getAllComics: async (publisher) => {
    try {
      const snapshot = await get(ref(db, `comics/${publisher}`));
      return snapshot.val();
    } catch (error) {
      console.error("Error getting comics:", error);
      return null;
    }
  },

  // Read a specific comic by its ID for a specific publisher
  getComicById: async (publisher, comicId) => {
    try {
      const snapshot = await get(ref(db, `comics/${publisher}/${comicId}`));
      return snapshot.val();
    } catch (error) {
      console.error("Error getting comic by ID:", error);
      return null;
    }
  },

  // Update a comic entry by its ID for a specific publisher
  updateComic: async (publisher, comicId, newData) => {
    try {
      await set(ref(db, `comics/${publisher}/${comicId}`), newData);
      return true;
    } catch (error) {
      console.error("Error updating comic:", error);
      return false;
    }
  },

  // Delete a comic entry by its ID for a specific publisher
  deleteComic: async (publisher, comicId) => {
    try {
      await remove(ref(db, `comics/${publisher}/${comicId}`));
      return true;
    } catch (error) {
      console.error("Error deleting comic:", error);
      return false;
    }
  },
};

export default ComicsService;
