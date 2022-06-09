import { ComponentPropsWithoutRef } from 'react'

export interface CardProps extends ComponentPropsWithoutRef {
  title: string
  docId: string
  identity: string
  user_id: string
  value: string
}
