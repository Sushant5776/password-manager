import { configureStore } from '@reduxjs/toolkit'
import formReducer from './formState'
import signUpFormReducer from './signUpFormState'
import signInFormReducer from './signInFormState'

export const store = configureStore({
  reducer: {
    form: formReducer,
    signUpForm: signUpFormReducer,
    signInForm: signInFormReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
