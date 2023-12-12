import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { idoftheloginpost: null };

export const userSlice = createSlice({
    name: "userid",
    initialState: { value: initialStateValue },
    reducers: {
        usercredentials: (state, action) => {
            state.value = action.payload;
        },


    },
});

export const { usercredentials } = userSlice.actions;

export default userSlice.reducer;