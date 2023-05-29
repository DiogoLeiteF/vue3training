import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'
import HomePageVue from './pages/HomePage.vue';
import AboutPageVue from './pages/AboutPage.vue';
import ArticlePage from './pages/ArticlePage.vue'

const routes = [
    {
        path: "/",
        component: HomePageVue,
        name: 'home'
    },
    {
        path: '/about',
        component: AboutPageVue,
        name: 'about'
    },
    {
        path:'/articles/:id',
        name: 'articles',
        component: ArticlePage,
    }
];


const router = createRouter({
    history: createWebHashHistory(),
    routes,

})

const app = createApp(App);
app.use(router);

app.mount('#app')
