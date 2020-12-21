import VueRouter from 'vue-router'
import Home from "@/pages/Home";
import MovieDetails from "@/pages/MovieDetails";
import CreateMovie from "@/pages/CreateMovie";
import EditMovie from "@/pages/EditMovie";

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/movie/new',
            component: CreateMovie,
        },
        {
            path: '/movie/:id/edit',
            component: EditMovie,
        },
        {
            path: '/movie/:id',
            component: MovieDetails,
        },
    ]
});