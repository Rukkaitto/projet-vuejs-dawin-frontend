import VueRouter from 'vue-router'
import Home from "@/pages/Home";

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
        },
    ]
});