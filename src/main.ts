import { createApp } from "vue";
import App from "./App.vue";
import homeVue from "../src/components/main/home.vue";
import productVue from "../src/components/main/product.vue";
import superSale from "../src/components/product/super-sale.vue";
import "./assets/style.css";

import {
  createRouter,
  createWebHashHistory,
} from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: homeVue },
    { path: "/product", component: productVue },
    { path: "/product/Super_sale", component: superSale },
  ],
});
createApp(App).use(router).mount("#app");
