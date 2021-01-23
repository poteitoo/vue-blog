import {
  Mutation,
  VuexModule,
  getModule,
  Module,
} from "vuex-module-decorators";
import store from "@/store";

export interface IUiLayoutInfoState {
  doesSidebarOpen: boolean;
}

@Module({ dynamic: true, store, name: "uiLayoutInfo", namespaced: true })
class UiLayoutInfo extends VuexModule implements IUiLayoutInfoState {
  doesSidebarOpen = false;

  @Mutation
  public SET_OPEN_SIDEBAR() {
    this.doesSidebarOpen = true;
    console.log(this.doesSidebarOpen);
  }

  @Mutation
  public SET_CLOSE_SIDEBAR() {
    this.doesSidebarOpen = false;
  }
}

export const UiLayoutInfoModule = getModule(UiLayoutInfo);
