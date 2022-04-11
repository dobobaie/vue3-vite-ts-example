import { createApp } from "vue";

import "./plugins/webfontloader";

import vuetify from "./plugins/vuetify";
import pinia from "./plugins/pinia";
import router from "./router";
import App from "./App.vue";

createApp(App).use(router).use(pinia).use(vuetify).mount("#app");
