<template>
  <v-navigation-drawer permanent app>
    <v-list-item link :to="{ name: 'Top' }" style="color: black">
      <v-list-item-content>
        <v-list-item-title class="title"> ISEF.jp </v-list-item-title>
        <v-list-item-subtitle> NSSが運営しています </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        link
        :to="{ name: item.componentName }"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

interface ItemInterface {
  title: string;
  componentName: string;
}

@Component
export default class Header extends Vue {
  private items: ItemInterface[] = [
    { title: "ISEFとは", componentName: "About" },
    { title: "体験記", componentName: "ExperienceNonte" },
    { title: "ISEFのルール", componentName: "Rules" },
    { title: "賞の種類", componentName: "Awards" },
    { title: "受賞情報", componentName: "Winners" },
  ];
}
</script>
