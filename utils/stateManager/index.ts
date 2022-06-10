import { configureStore } from '@reduxjs/toolkit'
import formReducer from './formState'
import signInFormReducer from './signInFormState'
import editPopupReducer from './editPopupState'

export const store = configureStore({
  reducer: {
    form: formReducer,
    signInForm: signInFormReducer,
    editPopup: editPopupReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
