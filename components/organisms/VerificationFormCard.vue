<template>
  <HeaderAndActionsInCard>
    <template v-slot:headerText>
      Verification form
    </template>

    <template v-slot:cardBody>
      <AuthForm :user.sync="userComputed" />
    </template>

    <template v-slot:actions>
      <v-btn color="primary" @click="confirmSignUp">
        Confirm
      </v-btn>
    </template>
  </HeaderAndActionsInCard>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Auth } from 'aws-amplify'
import { VerificationUserInterface, User } from '@/domains/User'
import HeaderAndActionsInCard from '@/components/molecules/HeaderAndActionsInCard'
import AuthForm from '@/components/molecules/AuthForm'

@Component({
  components: {
    HeaderAndActionsInCard,
    AuthForm
  }
})
export default class SignUpFormCard extends Vue {
  user: VerificationUserInterface = {
    userName: '',
    verificationCode: ''
  }

  get userComputed () {
    return this.user
  }

  set userComputed (value: VerificationUserInterface) {
    this.user = value
  }

  /* eslint no-console: 'off' */

  // TODO: インスタンス化はDIで行う
  async confirmSignUp () {
    const user = new User(this.user)

    await user.confirmSignUp(Auth)
      .then((success) => {
        console.log(success)
        this.$router.push('/')
      })
      .catch((fail) => {
        console.log(fail)
      })
  }
}
</script>
