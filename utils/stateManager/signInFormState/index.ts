import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SignInFormState } from 'types/StoreStates/signInForm'

const initialState: SignInFormState = {
  username: '',
}

const signInFormSlice = createSlice({
  name: 'signInForm',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => ({
      ...state,
      username: action.payload,
    }),
    resetSignInForm: () => initialState,
  },
})

export const { setUsername, resetSignInForm } = signInFormSlice.actions
export default signInFormSlice.reducer
