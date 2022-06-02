import { ActionCreatorWithPayload, PayloadAction } from '@reduxjs/toolkit'
import { RootDispatch } from 'lib/stateManager'

export interface InputProps {
  id: string
  type: string
  text: string
  value: string
  dispatch: RootDispatch
  action: ActionCreatorWithPayload<string, string>
}
