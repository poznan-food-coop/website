import Index from '@/views/Index.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
]

const router = createRouter({
    history: createWebHistory(process.env.NODE_ENV === "production" ? "/website/" : "/"),
    routes
})

export default router