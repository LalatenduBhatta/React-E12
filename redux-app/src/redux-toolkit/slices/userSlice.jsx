import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
    "/users/get",
    async () => {
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await response.json()
        return data
    }
)

const userSlice = createSlice({
    name: "users",
    initialState: {
        isLoading: true,
        users: [],
        isError: false,
        errorMsg: ""
    },
    reducers: {
        //actions
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state, action) => {
            console.log("pending")
            state.isLoading = true
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            console.log("fulfilled")
            state.isLoading = false
            state.users = action.payload
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            console.log("rejected")
            state.isLoading = false
            state.isError = true
            state.errorMsg = action?.error?.message
        })
    }
})

export const userReducer = userSlice.reducer