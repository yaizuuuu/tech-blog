<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <SignInFormCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SignInFormCard from '@/components/organisms/SignInFormCard'

@Component({
  layout: 'simple',
  components: { SignInFormCard }
})
export default class SignIn extends Vue {
}
</script>
