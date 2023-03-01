import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    role: "",
    isLoading: false,
    isLoading: false,
    error: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
})

export default authSlice.reducer;

