
import { configureStore } from "@reduxjs/toolkit"
import { countReducer } from "./slices/counterSlice"
import { userReducer } from "./slices/userSlice"
const store = configureStore({
    reducer: {
        count: countReducer,
        users: userReducer
    }
})
export default store