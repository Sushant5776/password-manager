import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SignInFormState } from 'interfaces/StoreStates/signInForm'

const initialState: SignInFormState = {
  username: '',
  password: '',
}

const signInFormSlice = createSlice({
  name: 'signInForm',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => ({
      ...state,
      username: action.payload,
    }),
    setPassword: (state, action: PayloadAction<string>) => ({
      ...state,
      password: action.payload,
    }),
    resetSignInForm: () => initialState,
  },
})

export const { setUsername, setPassword, resetSignInForm } =
  signInFormSlice.actions
export default signInFormSlice.reducer
