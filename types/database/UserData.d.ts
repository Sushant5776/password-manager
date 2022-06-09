import { Timestamp } from 'firebase/firestore'

export interface UserData {
  docId: string
  title: string
  identity: string
  value: string
  timestamp: string
}
