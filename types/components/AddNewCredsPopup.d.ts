import { Dispatch, SetStateAction } from 'react'

export interface AddNewCredsPopupProps {
  setNewCredsPopupState: Dispatch<SetStateAction<boolean>>
  user_id: string
}
