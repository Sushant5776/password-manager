import { ActionCreatorWithPayload, PayloadAction } from '@reduxjs/toolkit'
import { RootDispatch } from 'utils/stateManager'

export interface InputProps {
  id: string
  type: string
  text: string
  value: string
  dispatch: RootDispatch
  action: ActionCreatorWithPayload<string, string>
}
