import Vue from "vue";
import Vuex from "vuex";
import { IUiLayoutInfoState } from "./uiLayoutInfo";

Vue.use(Vuex);

export interface State {
  uiLayoutInfo: IUiLayoutInfoState;
}

export default new Vuex.Store<State>({});
