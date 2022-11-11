import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    onSetUser (state, action) {
      state.user = action.payload
    }
  }
})

export const { onSetUser } = userSlice.actions
