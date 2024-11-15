import { createRouter, createWebHistory } from "vue-router";

import { HomeView, SignupView, LoginView } from "../view";

const routes = [
    { path: "/", component: HomeView },
    { path: "/register", component: SignupView },
    { path: "/login", component: LoginView },
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes,
});
