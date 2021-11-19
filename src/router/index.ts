import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/chats",
    name: "chats",
    component: () => import("../views/Chats.vue"),
  },
  {
    path: "/create_chat",
    name: "create_chat",
    component: () => import("../views/CreateChat.vue"),
  },
  {
    path: "/chat/:id",
    name: "chat",
    component: () => import("../views/Chat.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
