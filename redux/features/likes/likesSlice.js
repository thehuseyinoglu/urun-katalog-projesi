import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likes: [],
}

export const likesSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
        likeProduct: (state, action) => {
            state.likes.push(action.payload)
        },
        unLikeProduct: (state, action) => {
            state.likes = state.likes.filter(i => i !== action.payload)
        },
        deleteLikes: (state) => {
            state.likes = []
        }
    }
})

export const { likeProduct, unLikeProduct, deleteLikes } = likesSlice.actions
export default likesSlice.reducer