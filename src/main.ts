import { createApp } from "vue";
import App from "./App.vue";
import homeVue from "./components/main/home.vue";
import productVue from "./components/main/product.vue";
import superSale from "./components/product/super-sale.vue";
import "./assets/style.css";

import { createRouter, createWebHistory } from "vue-router";
import { store } from "./store";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: homeVue },
    { path: "/product", component: productVue },
    { path: "/product/Super_sale", component: superSale },
  ],
});
createApp(App).use(store).use(router).mount("#app");
