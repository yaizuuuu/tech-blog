<template>
  <HeaderAndActionsInCard>
    <template v-slot:headerText>
      Sign in form
    </template>

    <template v-slot:cardBody>
      <AuthForm :user.sync="userComputed" />
    </template>

    <template v-slot:actions>
      <v-btn color="primary" @click="signIn">
        Sign in
      </v-btn>
    </template>
  </HeaderAndActionsInCard>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Auth } from 'aws-amplify'
import { UserInterface, User } from '@/domains/User'
import HeaderAndActionsInCard from '@/components/molecules/HeaderAndActionsInCard'
import AuthForm from '@/components/molecules/AuthForm'

@Component({
  components: {
    HeaderAndActionsInCard,
    AuthForm
  }
})
export default class SignInFormCard extends Vue {
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

  // TODO: インスタンス化はDIで行う
  async signIn () {
    const user = new User(this.user)

    await user.signIn(Auth)
      .then((success) => {
        console.log(success)
        this.$router.push('/')
      })
      .catch((fail) => {
        console.log(fail)
      })

    this.user.password = ''
  }
}
</script>
