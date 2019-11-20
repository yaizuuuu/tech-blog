<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <SignUpFormCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SignUpFormCard from '../../../components/organisms/SignUpFormCard.vue'

@Component({
  layout: 'simple',
  components: { SignUpFormCard }
})
export default class SignUp extends Vue {
}
</script>
