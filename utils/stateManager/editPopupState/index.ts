import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  hideOverflow: false,
  scrollTo: 0,
}

export const editPopupSlice = createSlice({
  name: 'editPopupState',
  initialState,
  reducers: {
    hideContent: (_state, action: PayloadAction<number>) => ({
      hideOverflow: true,
      scrollTo: action.payload,
    }),
    showContent: () => initialState,
  },
})

export const { hideContent, showContent } = editPopupSlice.actions
export default editPopupSlice.reducer
