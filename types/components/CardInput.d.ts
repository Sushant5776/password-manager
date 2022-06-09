import { ComponentPropsWithoutRef } from 'react'

export interface CardInputProps extends ComponentPropsWithoutRef {
  inputValue: string
  type: 'text' | 'password'
  displayText: string
}
