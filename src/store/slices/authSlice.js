import { createSlice } from "@reduxjs/toolkit";
import { profile } from "../../../data.json"

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: profile,
        token: localStorage.getItem('token'),
        isAuthenticated: false,
        loading: false
    },
    reducers: {
        setCredentials: (state, action) => {
            const { user, token } = action.payload
            state.user = user
            state.token = token
            state.isAuthenticated = true
            localStorage.setItem('token', token)
        },
        logout: (state) => {
            state.user = null
            state.token = null
            state.isAuthenticated = false
            localStorage.removeItem('token')
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})


export const authAction = authSlice.actions;

export default authSlice;