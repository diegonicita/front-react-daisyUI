import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null
  },
  reducers: {
    onSetUser (state, action) {
      state.user = action.payload
    },
    onSetToken (state, action) {
      state.token = action.payload
    }
  }
})

export const { onSetUser, onSetToken } = userSlice.actions
