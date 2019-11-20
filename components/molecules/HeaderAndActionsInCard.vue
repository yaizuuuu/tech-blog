<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>
        <slot name="headerText" />
      </v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-card-text>
      <slot name="cardBody" />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class HeaderAndActionsInCard extends Vue {}
</script>
