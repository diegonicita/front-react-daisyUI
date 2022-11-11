import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message: '(Test Redux)'
  },
  reducers: {
    onSetMessage (state, action) {
      state.message = action.payload
    }
  }
})

export const { onSetMessage } = messageSlice.actions
