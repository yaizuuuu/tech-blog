<template>
  <v-form>
    <v-text-field
      v-if="userNameComputed !== undefined"
      v-model="userNameComputed"
      label="Username"
      name="username"
      prepend-icon="person"
      type="text"
    />
    <v-text-field
      v-if="emailComputed !== undefined"
      v-model="emailComputed"
      label="Email"
      name="email"
      prepend-icon="mail"
      type="email"
    />
    <v-text-field
      v-if="passwordComputed !== undefined"
      v-model="passwordComputed"
      label="Password"
      name="password"
      prepend-icon="lock"
      type="password"
    />
    <v-text-field
      v-if="verificationCodeComputed !== undefined"
      v-model="verificationCodeComputed"
      label="Verification code"
      name="verificationCode"
      prepend-icon="lock"
      type="text"
    />
  </v-form>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

interface AuthUser {
  userName?: string
  password?: string
  email?: string
  verificationCode?: string | number
}

@Component
export default class AuthForm extends Vue {
  @Prop() user: AuthUser

  updatedUser: AuthUser

  get userNameComputed () {
    return this.user.userName
  }

  set userNameComputed (value: string) {
    this.updateUser({
      ...this.user,
      userName: value
    })
  }

  get passwordComputed () {
    return this.user.password
  }

  set passwordComputed (value: string) {
    this.updateUser({
      ...this.user,
      password: value
    })
  }

  get emailComputed () {
    return this.user.email
  }

  set emailComputed (value: string) {
    this.updateUser({
      ...this.user,
      email: value
    })
  }

  get verificationCodeComputed () {
    return this.user.verificationCode
  }

  set verificationCodeComputed (value: string | number) {
    this.updateUser({
      ...this.user,
      verificationCode: value
    })
  }

  @Emit('update:user')
  updateUser (value: AuthUser): void {
    this.updatedUser = value
  }
}
</script>
