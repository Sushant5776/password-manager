import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    show: () => ({ show: true }),
    hide: () => ({ show: false }),
  },
})

export const { show, hide } = formSlice.actions
export default formSlice.reducer
