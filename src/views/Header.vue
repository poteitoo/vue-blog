<template>
  <v-app-bar app>
    <v-app-bar-nav-icon
      @click.stop="doesSidebarOpen ? sideBarClose() : sideBarOpen()"
    />
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UiLayoutInfoModule } from "@/store/uiLayoutInfo";

@Component
export default class Header extends Vue {
  get doesSidebarOpen(): boolean {
    return UiLayoutInfoModule.doesSidebarOpen;
  }
  private sideBarOpen(): void {
    UiLayoutInfoModule.SET_OPEN_SIDEBAR();
  }
  private sideBarClose(): void {
    UiLayoutInfoModule.SET_CLOSE_SIDEBAR();
  }
}
</script>
