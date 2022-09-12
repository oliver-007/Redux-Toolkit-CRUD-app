import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    book: [
      {
        id: new Date().getTime().toString(),
        title: "Book 1",
        author: "Author 1",
      },
    ],
  },
  reducers: {
    addBook: (state, action) => {
      state.book.push(action.payload);
    },
    showBook: (state) => {
      return state;
    },
    deleteBook: (state, action) => {
      state.book = state.book.filter((item) => item.id !== action.payload);
    },
    editBook: (state, action) => {
      const isBookExist = state.book.filter(
        (item) => item.id === action.payload.id
      );
      if (isBookExist) {
        isBookExist[0].title = action.payload.title;
        isBookExist[0].author = action.payload.author;
      }
    },
  },
});

export const { addBook, showBook, deleteBook, editBook } = bookSlice.actions;

export default bookSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const API_URL =
//   "https://my-json-server.typicode.com/dmitrijt9/book-api-mock/db";

// const fetchBooks = createAsyncThunk(
//   "book/fetchBooks",
//   async (id = null, { rejectWithValue }) => {
//     try {
//       const res = await axios.get(API_URL);
//       return res.data;
//     } catch (error) {
//       return rejectWithValue("Data couldn't fetch.");
//     }
//   }
// );

// const bookSlice = createSlice({
//   name: "book",
//   initialState: {
//     book: [],
//     status: null,
//     error: null,
//   },
//   reducers: {
//     addBook: (state, action) => {
//       state.book.push(action.payload);
//     },
//     showBook: (state) => {
//       return state;
//     },
//     deleteBook: (state, action) => {
//       state.book = state.book.filter((item) => item.id !== action.payload);
//     },
//     editBook: (state, action) => {
//       const isBookExist = state.book.filter(
//         (item) => item.id === action.payload.id
//       );
//       if (isBookExist) {
//         isBookExist[0].title = action.payload.title;
//         isBookExist[0].author = action.payload.author;
//       }
//     },
//   },
//   extraReducers: {
//     [fetchBooks.pending]: (state) => {
//       state.status = "pending";
//     },
//     [fetchBooks.fulfilled]: (state, action) => {
//       state.status = "fulfilled";
//       state.book = action.payload;
//       state.error = null;
//     },
//     [fetchBooks.rejected]: (state, action) => {
//       state.status = "rejected";
//       state.error = action.payload;
//       state.book = [];
//     },
//   },
// });

// export const { addBook, showBook, deleteBook, editBook } = bookSlice.actions;

// export { fetchBooks };

// export default bookSlice.reducer;
