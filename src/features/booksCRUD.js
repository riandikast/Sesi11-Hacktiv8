import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: JSON.parse(localStorage.getItem("booklist")) || [],
    value: "",
  },
  reducers: {
    addBooks: (state, action) => {
      state.books = [...state.books, action.payload];
      localStorage.setItem("booklist", JSON.stringify(state.books));
    },

    deleteBooks: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload.id);
      localStorage.setItem("booklist", JSON.stringify(state.books));
    },

    updateBooks: (state, action) => {
      state.books.map((book) => {
        if (book.id === action.payload.id) {
          book.title = action.payload.title;
          book.author = action.payload.author;
        }
      });
      localStorage.setItem("booklist", JSON.stringify(state.books));
    },
  },
});

export const { addBooks, deleteBooks, updateBooks } = bookSlice.actions;
export default bookSlice.reducer;
