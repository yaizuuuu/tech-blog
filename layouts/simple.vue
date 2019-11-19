<template>
  <v-app>
    <v-content>
      <Nuxt />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AdminSignIn extends Vue {}
</script>
