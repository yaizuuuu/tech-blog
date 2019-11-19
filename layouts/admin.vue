<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            link
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>管理画面</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <Nuxt />
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; Yaizuuuu Tech Blog 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

interface MenuItem {
  text: string
  icon: string
  to: string
}

@Component
export default class Admin extends Vue {
  drawer?: boolean = false
  item: number = 1

  items: MenuItem[] = [
    { text: '投稿', icon: 'library_books', to: '' },
    { text: 'タグ', icon: 'label', to: '' },
    { text: 'ユーザ', icon: 'person', to: '' }
  ]
}
</script>
