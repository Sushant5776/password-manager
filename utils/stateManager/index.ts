import { configureStore } from '@reduxjs/toolkit'
import formReducer from './formState'
import signInFormReducer from './signInFormState'

export const store = configureStore({
  reducer: {
    form: formReducer,
    signInForm: signInFormReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
