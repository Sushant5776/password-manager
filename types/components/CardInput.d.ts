import { ComponentPropsWithoutRef } from 'react'

export interface CardInputProps extends ComponentPropsWithoutRef {
  inputValue: string
  type: string
  displayText: string
}
