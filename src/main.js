import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import HomePage from './components/HomePage.vue';
import BlogPage from './components/BlogPageComponents/BlogPage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/post/:title',   
        name: 'post',
        component: BlogPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});

createApp(App).use(router).mount('#app')
