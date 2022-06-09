import { Dispatch, SetStateAction } from 'react'

export interface EditPopupProps {
  title: string
  identity: string
  value: string
  docId: string
  user_id: string
  setShow: Dispatch<SetStateAction<boolean>>
}
