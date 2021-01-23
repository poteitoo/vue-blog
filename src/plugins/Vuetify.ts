import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import * as mdijs from "@mdi/js";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg",
    values: {
      product: mdijs.mdiAbacus,
      leftArrow: mdijs.mdiChevronLeft,
      support: "mdi-lifebuoy",
      steam: "mdi-steam-box",
      pc: "mdi-desktop-classic",
      xbox: "mdi-xbox",
      playstation: "mdi-playstation",
      switch: "mdi-nintendo-switch",
    },
  },
});
