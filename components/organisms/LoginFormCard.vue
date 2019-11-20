<template>
  <HeaderAndActionsInCard>
    <template v-slot:headerText>
      Login form
    </template>

    <template v-slot:cardBody>
      <LoginForm :user.sync="userComputed" />
    </template>

    <template v-slot:actions>
      <v-btn color="primary" @click="signIn">
        Login
      </v-btn>
    </template>
  </HeaderAndActionsInCard>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Auth } from 'aws-amplify'
import { UserInterface, User } from '@/domains/User'
import HeaderAndActionsInCard from '@/components/molecules/HeaderAndActionsInCard'
import LoginForm from '@/components/molecules/LoginForm'

@Component({
  components: {
    HeaderAndActionsInCard,
    LoginForm
  }
})
export default class LoginFormCard extends Vue {
  user: UserInterface = {
    userName: '',
    password: ''
  }

  get userComputed () {
    return this.user
  }

  set userComputed (value: UserInterface) {
    this.user = value
  }

  /* eslint no-console: 'off' */

  // TODO: newはDIで行う
  async signIn () {
    const user = new User(this.user)

    await user.signIn(Auth)
      .then((success) => {
        console.log(success)
      })
      .catch((fail) => {
        console.log(fail)
      })

    this.user.password = ''
  }
}
</script>
