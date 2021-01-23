<template>
  <v-navigation-drawer app v-model="doesSidebarOpen" floating>
    <v-list-item>
      <v-list-item-title class="title"> Application </v-list-item-title>
      <v-btn icon>
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>
    <v-divider />
    <v-list nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
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
import { UiLayoutInfoModule } from "@/store/uiLayoutInfo";

interface ItemInterface {
  title: string;
  icon: string;
  componentName: string;
}

@Component
export default class Sidebar extends Vue {
  get doesSidebarOpen(): boolean {
    return UiLayoutInfoModule.doesSidebarOpen;
  }
  set doesSidebarOpen(barStatus: boolean) {
    barStatus ? this.sideBarOpen() : this.sideBarClose();
  }
  private sideBarOpen(): void {
    UiLayoutInfoModule.SET_OPEN_SIDEBAR();
  }
  private sideBarClose(): void {
    UiLayoutInfoModule.SET_CLOSE_SIDEBAR();
  }

  private items: ItemInterface[] = [
    { title: "ISEFとは", icon: "mdi-web", componentName: "about" },
    { title: "体験記", icon: "mdi-web", componentName: "experience-note" },
    { title: "ISEFのルール", icon: "mdi-web", componentName: "rules" },
    { title: "賞の種類", icon: "mdi-web", componentName: "awards" },
    { title: "受賞情報", icon: "mdi-web", componentName: "winners" },
    { title: "テスト", icon: "mdi-web", componentName: "test" },
  ];
}
</script>
