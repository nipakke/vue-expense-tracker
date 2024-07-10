import { createApp } from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "./assets/style.css";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import GisgutyView from "@/views/Gisgutya.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/gisgutya",
      name: "gisgutya",
      component: GisgutyView,
      children: [
        {
          
        }
      ]
    }
  ],
});

const app = createApp(App);

app.use(router);
app.use(Toast);
app.mount("#app");
