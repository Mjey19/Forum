import { createSlice } from "@reduxjs/toolkit";
interface PostState {
  likedPost: string[];
}

interface InitialState {
  posts: PostState;
}

const initialState: InitialState = {
  posts: { likedPost: [] },
};
const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    toogleLikePost: (state, action) => {
      const postId = action.payload;
      if (!state.posts.likedPost.includes(postId)) {
        state.posts.likedPost = [...state.posts.likedPost, postId];
      } else {
        state.posts.likedPost = state.posts.likedPost.filter(
          (post) => post !== postId
        );
      }
    },
  },
});
export const { toogleLikePost } = likeSlice.actions;

export default likeSlice.reducer;
