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
  userName: string,
  password: string
}

const defaultUser: signingInUser = {
  userName: '',
  password: ''
}

@Component
export default class LoginForm extends Vue {
  @Prop({ default: defaultUser })
  user!: signingInUser

  updatedUser: signingInUser = defaultUser

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
