import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    contents: [
      {
        id: 1,
        title: "Lorem ipsum",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        id: 2,
        title: "dolor sit amet",
        content:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
  reducers: {
    // logic function, semua aksi bisa ke sini
    // name action.payload sudah ada dari sana
    // payload-nya adalah sebuah object
    // action.payload bebas mau tipe apa, action.payload berasal yang akan dikirim ke
    // function login
    addPost: (state, action) => {
      state.contents = [...state.contents, action.payload];
    },
    // payload-nya adalah sebuah number / integer
    deletePost: (state, action) => {
      const newPosts = state.contents.filter(
        (post) => action.payload !== post.id
      );
      state.contents = newPosts;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
