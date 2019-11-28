<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <VerificationFormCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import VerificationFormCard from '@/components/organisms/VerificationFormCard'

@Component({
  layout: 'simple',
  components: { VerificationFormCard }
})
export default class SignUpConfirm extends Vue {
}
</script>
