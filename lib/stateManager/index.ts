import { configureStore } from '@reduxjs/toolkit'
import formReducer from './formState'
import signUpFormReducer from './signUpFormState'

export const store = configureStore({
  reducer: { form: formReducer, signUpForm: signUpFormReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
