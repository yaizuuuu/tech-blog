import RecordType from '@/enum/RecordType'
import { AuthClass } from 'aws-amplify'

export interface UserInterface {
  recordType?: RecordType.USER
  userName?: string
  password?: string
  email?: string
  description?: string
  createdTimestamp?: number
  updatedTimestamp?: number
}

export class User implements UserInterface {
  recordType: RecordType.USER = RecordType.USER

  constructor (user: UserInterface) {
    Object.assign(this, user)
  }

  async signIn (auth: AuthClass) {
    return auth.signIn(this.userName, this.password)
  }
}

export class Users {
  users?: User[] = []
}
