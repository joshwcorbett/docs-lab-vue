import { createApp } from "vue";
import App from "~/App.vue";
//Vue Router
import index from "./router";

import { createPinia } from "pinia";
import { registerStore } from "./store";

import "~/styles/tailwind.css";

const app = createApp(App);

app.use(createPinia());
registerStore();

app.use(index);

app.mount("#app");
