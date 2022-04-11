import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

// ---
import { loadFonts } from "./plugins/webfontloader";
loadFonts();

// ---
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: () => import("./App.vue"),
      name: "home",
      path: "/",
    },
  ],
});

// ---

import { createStore } from "vuex";

const store = createStore<{
  count: number;
}>({
  state() {
    return { count: 1 };
  },
  mutations: {
    add(state, amount) {
      state.count += amount;
    },
  },
});

// ---

createApp(App).use(router).use(store).use(vuetify).mount("#app");
