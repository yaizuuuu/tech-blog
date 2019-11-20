<template>
  <v-form>
    <v-text-field
      v-model="userNameComputed"
      label="Username"
      name="user-name"
      prepend-icon="person"
      type="text"
    />
    <v-text-field
      v-if="isSignUp"
      label="Email"
      name="email"
      prepend-icon="mail"
      type="email"
    />
    <v-text-field
      v-model="passwordComputed"
      label="Password"
      name="password"
      prepend-icon="lock"
      type="password"
    />
  </v-form>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

interface signingInUser {
  userName: string
  password: string
  email?: string
}

const defaultUser: signingInUser = {
  userName: '',
  password: ''
}

@Component
export default class SignInForm extends Vue {
  @Prop({ default: defaultUser })
  user!: signingInUser

  updatedUser: signingInUser = defaultUser

  /* eslint no-console: 'off' */
  get isSignUp (): boolean {
    console.log(this.user)
    return this.user.hasOwnProperty('email')
  }

  get userNameComputed () {
    return this.user.userName
  }

  set userNameComputed (value: string) {
    this.updateUser({
      ...this.updatedUser,
      userName: value
    })
  }

  get passwordComputed () {
    return this.user.password
  }

  set passwordComputed (value: string) {
    this.updateUser({
      ...this.updatedUser,
      password: value
    })
  }

  @Emit('update:user')
  updateUser (value: signingInUser): void {
    this.updatedUser = value
  }
}
</script>
