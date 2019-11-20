<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <LoginFormCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import LoginFormCard from '@/components/organisms/LoginFormCard'

@Component({
  layout: 'simple',
  components: { LoginFormCard }
})
export default class Password extends Vue {
}
</script>
