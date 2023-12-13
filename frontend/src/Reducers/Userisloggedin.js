import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { isloggedin: false };

export const userSlice = createSlice({
    name: "userisloggedinstate",
    initialState: { value: initialStateValue },
    reducers: {
        isloggedinred: (state, action) => {
            state.value = action.payload;
        },


    },
});

export const { isloggedinred } = userSlice.actions;

export default userSlice.reducer;