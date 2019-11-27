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
  verificationCode?: string | number
}

export interface AuthUserInterface {
  userName: string
  password: string
  attributes: {
    email: string
  }
}

export interface VerificationUserInterface {
  userName: string
  verificationCode: string | number
}

export class User implements UserInterface {
  recordType: RecordType.USER = RecordType.USER

  constructor (user: UserInterface) {
    Object.assign(this, user)
  }

  async signIn (auth: AuthClass) {
    return auth.signIn(this.userName, this.password)
  }

  async signUp (auth: AuthClass) {
    return auth.signUp({
      username: this.userName,
      password: this.password,
      attributes: {
        email: this.email
      }
    })
  }

  async confirmSignUp (auth: AuthClass) {
    return auth.confirmSignUp(this.userName, this.verificationCode)
  }
}

export class Users {
  users?: User[] = []
}
