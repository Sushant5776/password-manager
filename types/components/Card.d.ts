import { ComponentPropsWithoutRef } from 'react'

export interface CardProps extends ComponentPropsWithoutRef {
  title: string
  id: string
  pass_key: string
}
