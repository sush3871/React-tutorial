import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,        // user माहिती
  isLoggedIn: false, // लॉगिन आहे का नाही
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload  // user info store
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.user = null
      state.isLoggedIn = false
    },
    signup: (state, action) => {
      state.user = action.payload  // signup वर नवीन user store
      state.isLoggedIn = true
    },
  },
})

export const { login, logout, signup } = authSlice.actions
export default authSlice.reducer
