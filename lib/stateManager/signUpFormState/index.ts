import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { signUpFormState } from 'interfaces/StoreStates/signUpForm'

const initialState: signUpFormState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const signUpFormSlice = createSlice({
  name: 'signUpForm',
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => ({
      ...state,
      firstName: action.payload,
    }),
    setLastName: (state, action: PayloadAction<string>) => ({
      ...state,
      lastName: action.payload,
    }),
    setEmail: (state, action: PayloadAction<string>) => ({
      ...state,
      email: action.payload,
    }),
    setPassword: (state, action: PayloadAction<string>) => ({
      ...state,
      password: action.payload,
    }),
    setConfirmPassword: (state, action: PayloadAction<string>) => ({
      ...state,
      confirmPassword: action.payload,
    }),
    resetSignUpForm: () => initialState,
  },
})

export const {
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setConfirmPassword,
  resetSignUpForm,
} = signUpFormSlice.actions
export default signUpFormSlice.reducer
